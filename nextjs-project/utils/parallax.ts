interface ParallaxElement {
  element: HTMLElement;
  speedFactor: number;
  // initialTop: number; // Removed as it's no longer used
}

const parallaxElements: ParallaxElement[] = [];
let isListening = false;
let ticking = false;

const updateParallax = () => {
  if (!parallaxElements.length) {
    // No need to remove listener here, as it's managed by unregister
    ticking = false;
    return;
  }

  parallaxElements.forEach(item => {
    if (item.element) {
      // Refined calculation:
      const newTransform = window.scrollY * (item.speedFactor - 1);
      item.element.style.transform = `translateY(${newTransform}px)`;
    }
  });
  ticking = false;
};

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateParallax();
      ticking = true; // Set ticking to true after updateParallax finishes one cycle
    });
    ticking = true; // Set to true to prevent multiple animation frame requests for the same scroll event
  }
};

export const registerParallaxElement = (element: HTMLElement, speedFactor: number) => {
  if (!element) return;

  const existingElement = parallaxElements.find(item => item.element === element);
  if (existingElement) {
    existingElement.speedFactor = speedFactor;
    // Update initial position if already registered and speedFactor changes
    if (isListening) { // only if listener is active
        window.requestAnimationFrame(updateParallax);
    }
    return;
  }

  parallaxElements.push({
    element,
    speedFactor,
    // initialTop: element.offsetTop, // Removed
  });

  if (!isListening && parallaxElements.length > 0) {
    window.addEventListener('scroll', handleScroll);
    isListening = true;
    // Call updateParallax via rAF to set initial positions correctly,
    // especially if the page loads scrolled or elements are registered dynamically.
    window.requestAnimationFrame(updateParallax);
  } else if (isListening && parallaxElements.length > 0) {
    // If already listening and a new element is added, update its position.
    window.requestAnimationFrame(updateParallax);
  }
};

export const unregisterParallaxElement = (element: HTMLElement) => {
  if (!element) return;

  const index = parallaxElements.findIndex(item => item.element === element);
  if (index > -1) {
    // Reset transform before removing
    parallaxElements[index].element.style.transform = '';
    parallaxElements.splice(index, 1);
  }

  if (parallaxElements.length === 0 && isListening) {
    window.removeEventListener('scroll', handleScroll);
    isListening = false;
    ticking = false; // Reset ticking state
  }
};

export const clearAllParallaxElements = () => {
  parallaxElements.forEach(item => {
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

// This function's utility is diminished with the registration model,
// but kept for now as per previous instructions.
// It might need a re-evaluation of its purpose.
export const applyParallax = (element: HTMLElement, speedFactor: number) => {
  registerParallaxElement(element, speedFactor);
  // Note: This doesn't return a way to unregister if used standalone.
  // The component calling this would need to manage unregistration manually.
};
