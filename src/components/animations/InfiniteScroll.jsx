import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export default function HorizontalInfiniteScroll({
  // ----- Layout Props -----
  height = "auto", // Height of the outer wrapper
  maxWidth = "100%", // Max-width of the outer wrapper
  // ----- Items Prop -----
  items = [], // Array of items with { logo: string, alt: string }
  // ----- Autoplay Props -----
  autoplay = true, // Whether it should automatically scroll
  autoplaySpeed = 0.5, // Speed (pixels/frame approx.)
  pauseOnHover = true, // Pause autoplay on hover
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const totalWidth = container.scrollWidth;
    const wrapFn = gsap.utils.wrap(-totalWidth, totalWidth);

    // Create the scroll/drag observer
    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        target.style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        target.style.cursor = "grab";
      },
      onChange: ({ deltaX, isDragging }) => {
        const distance = isDragging ? deltaX * 2 : deltaX * 5;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            x: `+=${distance}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    // Autoplay animation
    let rafId;
    if (autoplay) {
      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            x: `-=${autoplaySpeed}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => (rafId = requestAnimationFrame(tick));

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [items, autoplay, autoplaySpeed, pauseOnHover]);

  // Create rows of 4 items
  const rows = [];
  for (let i = 0; i < items.length; i += 4) {
    rows.push(items.slice(i, i + 4));
  }

  return (
    <div
      className="relative overflow-hidden overscroll-none"
      ref={wrapperRef}
      style={{ height, maxWidth }}
    >
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Container */}
      <div className="flex cursor-grab py-6" ref={containerRef}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-6 mx-6">
            {row.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 bg-gray-800/50 rounded-lg select-none w-48 h-48"
              >
                <img
                  src={item.logo}
                  alt={item.alt || `Company logo ${rowIndex * 4 + i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
