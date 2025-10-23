import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const industries = [
  {
    name: "Agri Tech & Forestry",
    desc: "GMC provides an opportunity to scale up the export-oriented Bhutan brand agri-food sector with the majority of the local workforce currently employed in the agriculture sector.",
    image: "/images/photo-2.JPG",
  },
  {
    name: "Finance",
    desc: "GMC provides an opportunity to scale up the export-oriented Bhutan brand agri-food sector with the majority of the local workforce currently employed in the agriculture sector.",
    image: "/images/photo-3.JPG",
  },
  {
    name: "Health & Wellness",
    desc: "GMC provides an opportunity to scale up the export-oriented Bhutan brand agri-food sector with the majority of the local workforce currently employed in the agriculture sector.",
    image: "/images/photo-4.JPG",
  },
  {
    name: "Airport Economy",
    desc: "GMC provides an opportunity to scale up the export-oriented Bhutan brand agri-food sector with the majority of the local workforce currently employed in the agriculture sector.",
    image: "/images/photo-5.JPG",
  },
  {
    name: "Education & Knowledge",
    desc: "GMC provides an opportunity to scale up the export-oriented Bhutan brand agri-food sector with the majority of the local workforce currently employed in the agriculture sector.",
    image: "/images/photo-6.JPG",
  },
  {
    name: "Green Energy & Tech Industry",
    desc: "GMC provides an opportunity to scale up the export-oriented Bhutan brand agri-food sector with the majority of the local workforce currently employed in the agriculture sector.",
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
    const calculateScrollDistance = () => {
      const cards = gsap.utils.toArray(".industry-card");
      if (!cards.length) return 0;

      const firstCard = cards[0];
      const cardWidth = firstCard.offsetWidth;
      const cardGap = 24;
      const totalWidth = cards.length * (cardWidth + cardGap);
      const viewportWidth = window.innerWidth;
      const totalScrollDistance = totalWidth - viewportWidth + cardGap + 100;

      return totalScrollDistance;
    };

    const totalScrollDistance = calculateScrollDistance();

    gsap.to(scrollerRef.current, {
      x: -totalScrollDistance,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScrollDistance + window.innerHeight}`,
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

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.progress > 0.95) {
          gsap.set(scrollerRef.current, { x: -totalScrollDistance });
        }
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden py-8 sm:py-12 md:py-16">
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
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="industry-card w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] flex-shrink-0 rounded-lg border border-zinc-100 bg-white p-4 sm:p-6 md:p-8 shadow-md"
              >
                <div className="mb-4 border-b border-zinc-100 pb-4 sm:mb-6 sm:pb-6 md:pb-8">
                  <h3 className="mb-2 text-lg font-medium sm:mb-3 sm:text-xl">{industry.name}</h3>
                  <img
                    src={industry.image}
                    className="aspect-[16/10] rounded-md object-cover"
                  />
                </div>
                <p className="text-sm leading-relaxed text-zinc-600 sm:text-base text-justify">
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
