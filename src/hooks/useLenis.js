import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook to initialize Lenis smooth scrolling
 * @param {Object} options - Lenis configuration options
 * @returns {Lenis} Lenis instance
 */
export const useLenis = (options = {}) => {
  useEffect(() => {
    // Initialize Lenis with custom options
    const lenis = new Lenis({
      duration: 1.2, // Duration of scroll animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true,
      direction: 'vertical', // Can be 'vertical' or 'horizontal'
      gestureDirection: 'vertical',
      smoothTouch: false, // Disable smooth scroll on touch devices (optional)
      touchMultiplier: 2,
      infinite: false,
      ...options,
    });

    // Animation loop for smooth scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, [options]);
};
