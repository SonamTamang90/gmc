import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollWithNumberIndicators = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      number: "01",
      title: "LOSS OF PERFORMANCE BUDGET DUE TO USING CSS TRANSFORMS",
    },
    {
      number: "02",
      title: "INACCESSIBILITY FROM NO PAGE SEARCH SUPPORT AND NATIVE SCROLLBAR",
    },
    {
      number: "03",
      title: "NON-NEGLIGIBLE IMPACT OF CODE SIZE (12.1KB GZIPPED)",
    },
    {
      number: "04",
      title: "COMPLEX IMPLEMENTATION WITH EDGE CASES",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !horizontalRef.current) return;

    // Get the width of the horizontal content
    const horizontalWidth = horizontalRef.current.scrollWidth;
    const sectionWidth = window.innerWidth;
    const totalSections = sections.length;

    // Create a horizontal scroll animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${horizontalWidth - window.innerWidth}`,
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      snap: {
        snapTo: 1 / (totalSections - 1),
        duration: { min: 0.2, max: 0.3 },
        delay: 0.1,
      },
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Update horizontal scroll position
        gsap.set(horizontalRef.current, {
          x: -self.progress * (horizontalWidth - window.innerWidth),
        });

        // Update progress bar
        gsap.set(progressBarRef.current, {
          width: `${self.progress * 100}%`,
        });

        // Calculate which section is currently active
        const currentSection = Math.min(
          Math.floor(self.progress * totalSections),
          totalSections - 1,
        );
        setActiveSection(currentSection);
      },
    });

    // Clean up
    return () => {
      scrollTrigger.kill();
    };
  }, [sections.length]);

  // Function to handle indicator click
  const handleIndicatorClick = (index) => {
    const totalSections = sections.length;
    const progress = index / (totalSections - 1);

    // Calculate the scroll position
    const horizontalWidth = horizontalRef.current.scrollWidth;
    const scrollTo = progress * (horizontalWidth - window.innerWidth);

    // Calculate the document scroll position
    const sectionTop = sectionRef.current.offsetTop;
    const scrollPosition = sectionTop + scrollTo;

    // Scroll to the position
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top indicators */}
      <div className="fixed top-0 left-0 z-50 flex w-full flex-col">
        {/* Progress bar */}
        <div className="h-1 w-full bg-black/10">
          <div
            ref={progressBarRef}
            className="h-full bg-pink-300"
            style={{ width: "0%" }}
          />
        </div>

        {/* Numbered indicators */}
        <div className="flex justify-center bg-black/80 py-3">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`mx-4 text-xl font-bold transition-colors duration-300 ${
                activeSection === index
                  ? "text-pink-300"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {section.number}
            </button>
          ))}
        </div>
      </div>

      {/* Previous section */}
      <section className="flex h-screen items-center justify-center bg-gray-900">
        <h2 className="text-4xl font-bold text-white">Scroll Down</h2>
      </section>

      {/* Horizontal scroll section */}
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden bg-black"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(50, 0, 30, 0.3), black)",
        }}
      >
        {/* Stars background effect */}
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-pink-200"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        <div
          ref={horizontalRef}
          className="absolute top-0 left-0 z-10 flex h-full flex-nowrap"
          style={{ width: "fit-content" }}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex h-screen w-screen flex-shrink-0 items-center justify-center px-6"
            >
              <div className="w-full max-w-lg border border-white/20 bg-black/40 p-10 backdrop-blur-sm">
                <h2 className="mb-6 text-8xl font-bold text-pink-300">
                  {section.number}
                </h2>
                <p className="text-3xl leading-tight font-bold text-white uppercase">
                  {section.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next section */}
      <section className="flex h-screen items-center justify-center bg-gray-900">
        <h2 className="text-4xl font-bold text-white">Next Section</h2>
      </section>
    </>
  );
};

export default HorizontalScrollWithNumberIndicators;
