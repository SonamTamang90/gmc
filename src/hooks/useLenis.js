import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to initialize Lenis smooth scrolling
 * @param {Object} options - Lenis configuration options
 * @returns {Lenis} Lenis instance
 */
export const useLenis = (options = {}) => {
  useEffect(() => {
    // Clear all existing ScrollTriggers on mount
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

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

    // Integrate Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Tell ScrollTrigger to use Lenis's scroll
    gsap.ticker.lagSmoothing(0);

    // Animation loop for smooth scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Multi-stage refresh to handle all loading scenarios
    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    // Stage 1: Immediate refresh
    const immediateTimer = setTimeout(refreshScrollTrigger, 50);

    // Stage 2: After initial paint
    const earlyTimer = setTimeout(refreshScrollTrigger, 200);

    // Stage 3: After images likely loaded
    const lateTimer = setTimeout(refreshScrollTrigger, 500);

    // Stage 4: On window load (after all resources)
    window.addEventListener('load', refreshScrollTrigger);

    // Stage 5: Listen for image loads
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    const totalImages = images.length;

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        ScrollTrigger.refresh();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', onImageLoad);
        img.addEventListener('error', onImageLoad); // Count errors too
      }
    });

    if (loadedCount === totalImages) {
      ScrollTrigger.refresh();
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('load', refreshScrollTrigger);
      clearTimeout(immediateTimer);
      clearTimeout(earlyTimer);
      clearTimeout(lateTimer);
      images.forEach((img) => {
        img.removeEventListener('load', onImageLoad);
        img.removeEventListener('error', onImageLoad);
      });
      lenis.destroy();
    };
  }, [options]);
};
