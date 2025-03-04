import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Divider from "../ui/Divider";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CoreIndustriesSection = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const progressRef = useRef(null);
  const [activeBackgroundImage, setActiveBackgroundImage] = useState(
    "/images/industry-1.png",
  );

  useEffect(() => {
    // Make sure refs are available
    if (!sectionRef.current || !horizontalRef.current || !progressRef.current)
      return;

    // Get the width of the horizontal content
    const horizontalWidth = horizontalRef.current.scrollWidth;
    const cardWidth = horizontalWidth / cardContent.length;

    // Create a horizontal scroll animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${horizontalWidth - window.innerWidth}`,
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Update horizontal scroll position
        gsap.set(horizontalRef.current, {
          x: -self.progress * (horizontalWidth - window.innerWidth),
        });

        // Update progress bar width based on scroll progress
        gsap.set(progressRef.current, {
          width: `${self.progress * 100}%`,
        });

        // Calculate which card is halfway to the middle of the viewport
        const totalProgress =
          self.progress * (horizontalWidth - window.innerWidth);
        const currentCardIndex = Math.floor(
          (totalProgress + window.innerWidth * 0.25) / cardWidth,
        );

        // Make sure the index is within bounds
        if (currentCardIndex >= 0 && currentCardIndex < cardContent.length) {
          setActiveBackgroundImage(
            cardContent[currentCardIndex].backgroundImage,
          );
        }
      },
    });

    // Update on resize
    const handleResize = () => {
      scrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      scrollTrigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Content for the cards (similar to your reference image)
  const cardContent = [
    {
      title: "Airport Economy",
      subTitle: "Regional Aviation Hub",
      description:
        "Construction of Gelephu International Airport creates opportunity for South Asian aviation and logistics center serving post-COVID tourism growth.",
      image: "/images/airport.png",
      backgroundImage: "/images/industry-1.png",
    },
    {
      title: "Agriculture & Forestry",
      subTitle: "Forestry Development",
      description:
        "GMC can leverage agricultural workforce for export-oriented food products while developing laminated timber manufacturing and expertise hub.",
      image: "/images/agriculture.png",
      backgroundImage: "/images/industry-2.png",
    },
    {
      title: "Finance",
      subTitle: "Financial Gateway Hub",
      description:
        "GMC provides wealth management services to elite clients, connecting them to rapidly growing Asian economies through specialized financial services.",
      image: "/images/finance.png",
      backgroundImage: "/images/industry-3.png",
    },
    {
      title: "Health & Wellness",
      subTitle: "Wellness Destination",
      description:
        "Bhutan's pristine environment and GMC's mindfulness focus will establish premier health centers, positioning GMC as a medical tourism and integrative medicine hub.",
      image: "/images/health.png",
      backgroundImage: "/images/industry-4.png",
    },
    {
      title: "Education & Knowlegde",
      subTitle: "Knowledge Foundation",
      description:
        "GMC's Education cluster serves as the cornerstone of the city's knowledge economy, supporting and driving growth across all seven core development clusters.",
      image: "/images/education.png",
      backgroundImage: "/images/industry-5.png",
    },
    {
      title: "Green Tech Industries",
      subTitle: "Digital Industry",
      description:
        "GMC offers cheap renewable energy and proximity to India's massive ICT market, enabling niche development in green IT and crypto-mining sectors.",
      image: "/images/green.png",
      backgroundImage: "/images/industry-6.png",
    },
    {
      title: "Spirituality",
      subTitle: "Buddhist Hub",
      description:
        "GMC will become a Vajrayana Buddhist center with royal-backed spiritual projects strategically driving regional tourism development strategy and cultural preservation.",
      image: "/images/spiritual.png",
      backgroundImage: "/images/industry-7.png",
    },
  ];

  return (
    <>
      {/* Horizontal scroll section */}
      <section ref={sectionRef} className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-linear-to-b from-black/70 to-black/80 backdrop-blur-sm"
          style={{ transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />

        <div className="absolute top-0 left-0 h-full w-full">
          <img
            src={activeBackgroundImage}
            className="block h-full w-full object-cover"
          />
        </div>

        {/* Progress indicator at the top */}
        <div className="absolute top-0 left-0 z-50 h-1 w-full bg-black/10">
          <div
            ref={progressRef}
            className="h-px bg-white"
            style={{ width: "0%" }}
          ></div>
        </div>
        {/* Small stars effect could be added with absolutely positioned divs */}

        <div className="relative mx-auto max-w-7xl px-6 pt-3 text-white">
          <Divider backgroundColor="bg-white/40 my-5" />
          <h2 className="mb-5 text-2xl">Core Industries</h2>
          <p className="max-w-xs">
            GMC ensures that every facet of life and business thrives in harmony
            with nature.
          </p>
        </div>

        <div
          ref={horizontalRef}
          className="absolute top-0 left-0 flex h-full flex-nowrap"
          style={{ width: "fit-content" }}
        >
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="flex h-screen w-screen flex-shrink-0 items-center justify-center px-4"
            >
              <div className="w-full max-w-sm border border-white/20">
                <img src={card.image} className="aspect-square object-cover" />
                <div className="bg-white p-3 text-zinc-600">
                  <h2 className="mb-5 text-2xl font-semibold uppercase">
                    {card.title}
                  </h2>
                  <p className="mb-4">{card.description}</p>
                  <p>{card.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoreIndustriesSection;
