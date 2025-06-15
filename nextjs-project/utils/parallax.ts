interface ParallaxElement {
  element: HTMLElement;
  initialSpeedFactor: number;
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
    if (item.element) {
      let speedFactorToUse;
      // Check if element is less than 5% visible (including completely hidden)
      if (item.intersectionRatio < 0.05) {
        // Apply accelerated factor for exiting transition or when hidden
        speedFactorToUse = 1 + (item.initialSpeedFactor - 1) * 1.5; // Changed multiplier from 2 to 1.5
        speedFactorToUse = Math.max(-1, Math.min(3, speedFactorToUse)); // Clamp
      } else { // Element is 5% or more visible
        speedFactorToUse = item.initialSpeedFactor;
      }

      const newTransform = window.scrollY * (speedFactorToUse - 1);
      item.element.style.transform = `translateY(${newTransform}px)`;
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

const observerCallback: IntersectionObserverCallback = (entries) => {
  let needsUpdate = false;
  entries.forEach(entry => {
    const targetElement = entry.target as HTMLElement;
    const parallaxItem = parallaxElements.find(item => item.element === targetElement);
    if (parallaxItem) {
      if (parallaxItem.isIntersecting !== entry.isIntersecting || parallaxItem.intersectionRatio !== entry.intersectionRatio) {
        needsUpdate = true;
      }
      parallaxItem.isIntersecting = entry.isIntersecting;
      parallaxItem.intersectionRatio = entry.intersectionRatio;
    }
  });

  if (needsUpdate && isListening && !ticking) {
     ticking = true;
     window.requestAnimationFrame(updateParallax);
  }
};

export const registerParallaxElement = (element: HTMLElement, speedFactor: number) => {
  if (!element) return;

  let existingElement = parallaxElements.find(item => item.element === element);
  if (existingElement) {
    existingElement.initialSpeedFactor = speedFactor;
    if (!existingElement.observer) {
        const newObserver = new IntersectionObserver(observerCallback, observerOptions);
        newObserver.observe(element);
        existingElement.observer = newObserver;
    } else {
        existingElement.observer.observe(element);
    }
    if (isListening) {
        window.requestAnimationFrame(updateParallax);
    }
    return;
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(element);

  parallaxElements.push({
    element,
    initialSpeedFactor: speedFactor,
    isIntersecting: false,
    intersectionRatio: 0,
    observer,
  });

  if (!isListening && parallaxElements.length > 0) {
    window.addEventListener('scroll', handleScroll);
    isListening = true;
    window.requestAnimationFrame(updateParallax);
  } else if (isListening && parallaxElements.length > 0) {
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
    item.element.style.transform = '';
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
    if (item.element) {
      item.element.style.transform = '';
    }
  });
  parallaxElements.length = 0;
  if (isListening) {
    window.removeEventListener('scroll', handleScroll);
    isListening = false;
    ticking = false;
  }
};

export const applyParallax = (element: HTMLElement, speedFactor: number) => {
  registerParallaxElement(element, speedFactor);
};
