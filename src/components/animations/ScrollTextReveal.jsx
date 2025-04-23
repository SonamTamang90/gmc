import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollTextReveal = ({
  children,
  className = "",
  startColor = "#9CA3AF", // Tailwind gray-400
  endColor = "#000000", // Black
  staggerAmount = 0.2,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    // Store the original HTML content
    const originalHtml = element.innerHTML;

    // Split text by words, preserving any HTML tags
    const words = originalHtml.split(/\s+/);

    // Create new HTML with spans around each word
    const newHtml = words
      .map(
        (word) =>
          `<span style="display:inline-block; color:${startColor};">${word}</span>`,
      )
      .join(" "); // Join with space to maintain proper spacing

    // Set the new HTML
    element.innerHTML = newHtml;

    // Get all the word spans
    const wordSpans = element.querySelectorAll("span");

    // Create a GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        // markers: true, // Uncomment for debugging
      },
    });

    // Animate each word
    wordSpans.forEach((word, index) => {
      tl.to(
        word,
        {
          color: endColor,
          duration: 0.5,
          ease: "power1.inOut",
        },
        index * staggerAmount,
      );
    });

    // Clean up
    return () => {
      if (ScrollTrigger.getAll().length) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
      tl.kill();

      // Restore original content on unmount to prevent memory leaks
      element.innerHTML = originalHtml;
    };
  }, [startColor, endColor, staggerAmount, children]);

  return (
    <h2 ref={textRef} className={className}>
      {children}
    </h2>
  );
};

export default ScrollTextReveal;
