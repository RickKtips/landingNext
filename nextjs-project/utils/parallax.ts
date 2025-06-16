interface ParallaxElement {
  element: HTMLElement;
  initialSpeedFactor: number; // This will be used as the "strengthFactor"
  isIntersecting: boolean;
  intersectionRatio: number;
  observer: IntersectionObserver | null;
}

const parallaxElements: ParallaxElement[] = [];
let isListening = false;
let ticking = false;

const updateParallax = () => {
  if (!parallaxElements.length) {
    if (isListening) {
        window.removeEventListener('scroll', handleScroll);
        isListening = false;
    }
    ticking = false;
    return;
  }

  parallaxElements.forEach(item => {
    // Ensure element is still in DOM using item.element.isConnected
    if (item.element && item.element.isConnected) {
      const elementRect = item.element.getBoundingClientRect();
      const elementCenterY = elementRect.top + elementRect.height / 2;
      const viewportCenterY = window.innerHeight / 2;

      const distanceToViewportCenter = elementCenterY - viewportCenterY;

      // 'item.initialSpeedFactor' is used here as the 'strengthFactor'
      // A negative strengthFactor will make the element move in the opposite direction
      // of its position relative to the viewport center.
      // e.g. if element is below center (positive distanceToViewportCenter)
      // and strengthFactor is negative, it will move up (negative translateY)
      const translateY = distanceToViewportCenter * item.initialSpeedFactor;

      item.element.style.transform = `translateY(${translateY}px)`;
    }
  });
  ticking = false;
};

const handleScroll = () => {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(() => {
      updateParallax();
    });
  }
};

const observerOptions: IntersectionObserverInit = {
  threshold: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.1, 0.25, 0.5, 0.75, 1.0],
};

// IntersectionObserver is kept for now, though its direct impact on speedFactor is removed.
// It might be used later for other effects (e.g. fade in/out, or re-introducing speed variation).
const observerCallback: IntersectionObserverCallback = (entries) => {
  let needsUpdate = false; // Flag to see if any observed element changed state significantly
  entries.forEach(entry => {
    const targetElement = entry.target as HTMLElement;
    const parallaxItem = parallaxElements.find(item => item.element === targetElement);
    if (parallaxItem) {
      // Update properties, even if not immediately used for speed factor, they are stateful.
      if (parallaxItem.isIntersecting !== entry.isIntersecting || parallaxItem.intersectionRatio !== entry.intersectionRatio) {
        needsUpdate = true;
      }
      parallaxItem.isIntersecting = entry.isIntersecting;
      parallaxItem.intersectionRatio = entry.intersectionRatio;
    }
  });

  // If any observed element changed its intersection state and we are actively listening/ticking,
  // it might be good to request a fresh parallax update.
  // This is less critical now that intersectionRatio doesn't directly change speedFactor,
  // but can be useful if elements appear/disappear and their initial position based on new logic needs recalculation.
  if (needsUpdate && isListening && !ticking) {
     ticking = true;
     window.requestAnimationFrame(updateParallax);
  }
};

export const registerParallaxElement = (element: HTMLElement, speedFactor: number) => { // speedFactor is initialSpeedFactor
  if (!element) return;

  let existingElement = parallaxElements.find(item => item.element === element);
  if (existingElement) {
    existingElement.initialSpeedFactor = speedFactor; // Update strengthFactor
    if (!existingElement.observer) {
        const newObserver = new IntersectionObserver(observerCallback, observerOptions);
        newObserver.observe(element);
        existingElement.observer = newObserver;
    } else {
        existingElement.observer.observe(element);
    }
    if (isListening) {
        window.requestAnimationFrame(updateParallax); // Recalculate position with new factor
    }
    return;
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(element);

  parallaxElements.push({
    element,
    initialSpeedFactor: speedFactor, // Storing the strengthFactor
    isIntersecting: false,
    intersectionRatio: 0,
    observer,
  });

  if (!isListening && parallaxElements.length > 0) {
    window.addEventListener('scroll', handleScroll);
    isListening = true;
    window.requestAnimationFrame(updateParallax); // Initial position calculation
  } else if (isListening && parallaxElements.length > 0) {
    // If already listening (e.g. dynamic registration), calculate position for new element
    window.requestAnimationFrame(updateParallax);
  }
};

export const unregisterParallaxElement = (element: HTMLElement) => {
  if (!element) return;

  const index = parallaxElements.findIndex(item => item.element === element);
  if (index > -1) {
    const item = parallaxElements[index];
    if (item.observer) {
      item.observer.unobserve(item.element);
      item.observer.disconnect();
    }
    item.element.style.transform = ''; // Reset transform on unregister
    parallaxElements.splice(index, 1);
  }

  if (parallaxElements.length === 0 && isListening) {
    window.removeEventListener('scroll', handleScroll);
    isListening = false;
    ticking = false;
  }
};

export const clearAllParallaxElements = () => {
  parallaxElements.forEach(item => {
    if (item.observer) {
      item.observer.unobserve(item.element);
      item.observer.disconnect();
    }
    if (item.element && item.element.isConnected) {
      item.element.style.transform = ''; // Reset transform
    }
  });
  parallaxElements.length = 0;
  if (isListening) {
    window.removeEventListener('scroll', handleScroll);
    isListening = false;
    ticking = false;
  }
};

// applyParallax remains a shorthand for registerParallaxElement
export const applyParallax = (element: HTMLElement, speedFactor: number) => {
  registerParallaxElement(element, speedFactor);
};
