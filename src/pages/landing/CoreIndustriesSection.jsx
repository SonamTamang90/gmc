import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const industries = [
  {
    name: "Agri Tech & Forestry",
    desc: "GMC provides an opportunity to scale up the export-oriented Bhutan brand agri-food sector with the majority of the local workforce currently employed in the agriculture sector. The rise of laminated timber as an alternative construction material is also an opportunity for GMC to become a manufacturing, testing, expertise, and export hub.",
  },
  {
    name: "Finance",
    desc: "GMC offers a gateway to the fastest growing economies in South Asia and South-East Asia through wealth management services to family offices and high net worth individuals.",
  },
  {
    name: "Health & Wellness",
    desc: "GMC offers a gateway to the fastest growing economies in South Asia and South-East Asia through wealth management services to family offices and high net worth individuals.",
  },
  {
    name: "Airport Economy",
    desc: "GMC offers a gateway to the fastest growing economies in South Asia and South-East Asia through wealth management services to family offices and high net worth individuals.",
  },
  {
    name: "Education & Knowledge",
    desc: "GMC offers a gateway to the fastest growing economies in South Asia and South-East Asia through wealth management services to family offices and high net worth individuals.",
  },
  {
    name: "Green Energy & Tech Industry",
    desc: "GMC offers a gateway to the fastest growing economies in South Asia and South-East Asia through wealth management services to family offices and high net worth individuals.",
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
    const cardWidth = 500; // Width of each card
    const cardGap = 24; // Gap between cards

    // Calculate the width to scroll based on the number of cards and their widths
    // Include an extra padding at the end to ensure last card is fully visible
    const totalWidth = cards.length * (cardWidth + cardGap);

    // Calculate how much should be visible initially (2 full cards + 25% of third)
    const initialVisibleWidth = 2 * cardWidth + cardGap + cardWidth * 0.25;

    // Calculate the total amount to scroll - add extra to ensure last card is fully visible
    // Adjusted to make sure the last card is fully visible
    const totalScrollDistance = totalWidth - initialVisibleWidth + 100; // Added 100px buffer

    // Create the horizontal scroll animation
    gsap.to(scrollerRef.current, {
      x: -totalScrollDistance,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 0%",
        end: `+=${totalScrollDistance + window.innerHeight}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onToggle: (self) => {
          // Add a subtle animation for the header when scrolling begins
          if (self.isActive) {
            gsap.to(headerRef.current, { y: -20, opacity: 0.8, duration: 0.4 });
          } else {
            gsap.to(headerRef.current, { y: 0, opacity: 1, duration: 0.4 });
          }
        },
      },
    });

    // Add a checker to make sure scrolling reaches the end properly
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // When we reach the end, ensure the last card is fully visible
        if (self.progress > 0.95) {
          gsap.set(scrollerRef.current, { x: -totalScrollDistance });
        }
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-300 overflow-hidden py-16">
      <div className="w-full px-6">
        <div ref={headerRef}>
          <div className="mb-2 h-px w-full bg-zinc-400/40" />
          <span className="mb-6 inline-block text-zinc-400">
            Primary Economic Sectors
          </span>
          <h2 className="mb-8 max-w-md text-3xl text-black md:mb-16">
            Essential sectors powering economic growth.
          </h2>
        </div>

        <div className="relative">
          <div ref={scrollerRef} className="flex gap-6 pr-24 pl-0">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="industry-card w-[500px] flex-shrink-0 rounded-lg border border-zinc-100 bg-white p-8 shadow-md"
              >
                <div className="mb-6 border-b border-zinc-100 pb-8">
                  <span className="mb-2 block text-sm text-zinc-400">{`0${index + 1}`}</span>
                  <h3 className="mb-3 text-2xl font-medium">{industry.name}</h3>
                </div>
                <p className="leading-relaxed text-zinc-600">{industry.desc}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 flex items-center justify-start gap-4">
            <div className="h-1 w-24 rounded-full bg-black"></div>
            <span className="text-sm text-zinc-600">
              Scroll to explore all sectors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustriesSection;
