import { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollIndicator = ({ text }) => {
  const indicatorRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Create a simple animation for the arrow
    const tl = gsap.timeline({
      repeat: -1, // Infinite repeat
      yoyo: true,
    });

    tl.to(arrowRef.current, {
      y: 8,
      duration: 1.2,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="mt-6 mb-10 flex flex-nowrap items-center gap-2"
      aria-label="Scroll to see more content"
    >
      <div className="border-brand flex h-10 w-6 items-start justify-center rounded-full border-2 p-1.5">
        <div ref={arrowRef} className="bg-brand h-2.5 w-1 rounded-full" />
      </div>
      <span className="mb-2 text-base text-red-600">{text}</span>
    </div>
  );
};

export default ScrollIndicator;
