import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, useRef } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";

const ANIMATION_CONFIG = {
  heroText: {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  },

  paragraph: {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: -0.7,
  },

  arrowDown: {
    y: 10,
    repeat: -1,
    duration: 1.2,
    ease: "sine.inOut",
    yoyo: true,
  },

  line: {
    width: "0%",
    duration: 1.2,
    ease: "sine.inOut",
  },
};

const HeroSection = () => {
  const heroTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const arrowDownIconRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(heroTextRef.current, ANIMATION_CONFIG.heroText);
    tl.from(paragraphRef.current, ANIMATION_CONFIG.paragraph);
    tl.from(arrowDownIconRef.current, ANIMATION_CONFIG.arrowDown);
    tl.from(lineRef.current, ANIMATION_CONFIG.line);
  }, []);

  return (
    <section className="sticky top-0 left-0 h-[550px] md:h-screen">
      <div className="absolute inset-0 size-full">
        <video muted autoPlay loop className="size-full object-cover">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      <div className="relative size-full px-6 pb-11">
        <div className="flex h-full flex-col justify-end">
          <h1
            ref={heroTextRef}
            className="mb-2 text-2xl tracking-wide text-white uppercase md:text-3xl"
          >
            Gelephu Mindfulness City
          </h1>
          <p ref={paragraphRef} className="max-w-md text-white/90">
            An innovative urban development project that integrates economic
            growth with mindfulness, holistic living, and sustainability in
            Kingdom of Bhutan.
          </p>
          <div ref={lineRef} className="my-6 h-px w-full bg-white/15" />
          <div className="flex items-center gap-2 text-white">
            <HiChevronDoubleDown size={20} ref={arrowDownIconRef} />
            <p>Scroll down to learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
