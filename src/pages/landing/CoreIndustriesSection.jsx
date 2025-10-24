import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const industries = [
  {
    name: "Agri Tech & Forestry",
    desc: "Export-oriented agri-food sector with sustainable farming and forestry innovation.",
    image: "/images/photo-2.JPG",
  },
  {
    name: "Finance",
    desc: "Robust financial ecosystem supporting economic growth and investments.",
    image: "/images/photo-3.JPG",
  },
  {
    name: "Health & Wellness",
    desc: "World-class health services leveraging natural resources and holistic practices.",
    image: "/images/photo-4.JPG",
  },
  {
    name: "Airport Economy",
    desc: "Integrated infrastructure boosting connectivity, trade, and tourism.",
    image: "/images/photo-5.JPG",
  },
  {
    name: "Education & Knowledge",
    desc: "Centers of excellence developing skilled workforce for the future.",
    image: "/images/photo-6.JPG",
  },
  {
    name: "Green Energy & Tech Industry",
    desc: "Renewable energy and technology for sustainable development.",
    image: "/images/photo-1.JPG",
  },
];

const CoreIndustriesSection = () => {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const headerRef = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".industry-card");
    if (!cards.length) return;

    const getMaxScroll = () => {
      const scrollerWidth = scrollerRef.current.scrollWidth;
      const containerPadding = window.innerWidth >= 640 ? 24 : 16; // sm:px-6 = 24, px-4 = 16
      const viewportWidth = window.innerWidth - containerPadding * 2;

      // Add extra padding to ensure last card is fully visible
      return scrollerWidth - viewportWidth + 96; // pr-24 = 96px
    };

    let scrollTween = gsap.to(scrollerRef.current, {
      x: () => -getMaxScroll(),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getMaxScroll() + window.innerHeight * 2}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(headerRef.current, { y: -20, opacity: 0.8, duration: 0.4 });
          } else {
            gsap.to(headerRef.current, { y: 0, opacity: 1, duration: 0.4 });
          }
        },
      },
    });

    return () => {
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden py-8 sm:py-12 md:py-16"
    >
      <div className="w-full px-4 sm:px-6">
        <div ref={headerRef} className="relative z-10">
          <div className="mb-2 h-px w-full bg-zinc-400/40" />
          <span className="mb-4 inline-block text-sm text-zinc-400 md:mb-6 md:text-base">
            Primary Economic Sectors
          </span>
          <h2 className="mb-6 max-w-md text-xl text-black sm:text-2xl md:mb-16 md:text-3xl">
            Essential sectors powering economic growth.
          </h2>
        </div>

        <div className="relative z-10">
          <div ref={scrollerRef} className="flex gap-6 pr-24 pl-0">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="industry-card group w-[300px] flex-shrink-0 cursor-pointer rounded-lg border border-zinc-100 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-xl sm:w-[400px] sm:p-6 md:w-[450px] md:p-6 lg:w-[440px]"
              >
                <div className="mb-4 border-b border-zinc-100 pb-4 sm:mb-6 sm:pb-6 md:pb-6">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={industry.image}
                      className="aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="relative mb-2 inline-block font-medium uppercase sm:mb-3 sm:text-sm">
                  {industry.name}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustriesSection;
