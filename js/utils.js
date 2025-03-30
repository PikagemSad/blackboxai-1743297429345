/**
 * Utility functions for the application
 */

// Debounce function to limit how often a function can be called
function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// Throttle function to limit function execution rate
function throttle(func, limit = 100) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Smooth scroll to element
function smoothScroll(selector, offset = 0) {
  const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop - offset
    });
  }
}

// Check if element is in viewport
function isInViewport(el, threshold = 0.5) {
  const rect = el.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(
    rect.bottom < 0 || 
    rect.top - viewHeight >= 0 ||
    rect.right < 0 ||
    rect.left - window.innerWidth >= 0
  ) && (
    rect.top + (rect.height * threshold) <= viewHeight &&
    rect.bottom - (rect.height * threshold) >= 0
  );
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Make functions available globally
window.utils = {
  debounce,
  throttle,
  smoothScroll,
  isInViewport,
  formatNumber
};