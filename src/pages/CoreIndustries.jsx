import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CoreIndustriesSection = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const progressRef = useRef(null);
  const [activeBackgroundImage, setActiveBackgroundImage] = useState(
    "/images/airport.jpg",
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
          setActiveBackgroundImage(cardContent[currentCardIndex].image);
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
      description:
        "With the construction for Gelephu International Airport already underway, there is an immediate opportunity to plan for an aviation and logistics hub that will serve the South Asian region, which has seen increasingly high numbers of outbound tourists after COVID-19.",
      image: "/images/airport.jpg",
    },
    {
      title: "Agriculture & Forestry ",
      description:
        "GMC provides an opportunity to scale up the export-oriented Bhutan brand agri-food sector with the majority of the local workforce currently employed in the agriculture sector. The rise of laminated timber as an alternative construction material is also an opportunity for GMC to become a manufacturing, testing, expertise, and export hub.",
      image: "/images/mountain-hazelnuts.jpg",
    },
    {
      title: "Finance",
      description:
        "GMC offers a gateway to the fastest growing economies in South Asia and South-East Asia through wealth management services to family offices and high net worth individuals.",
      image: "/images/slide-1.webp",
    },
    {
      title: "Health & Wellness",
      description:
        "Bhutan's untouched environment along with GMC's core focus on mindfulness will help create a centre of physical and mental well-being through the establishment of world-class health and wellness centers, making GMC a leader in medical tourism, integrative medicine, and R&D.",
      image: "/images/airport.jpg",
    },
  ];

  return (
    <>
      {/* Horizontal scroll section */}
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden"
        style={{
          backgroundImage: `url("${activeBackgroundImage}")`, // Use the active background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)", // Smoother eased transition
        }}
      >
        <div
          className="absolute inset-0 bg-linear-to-b from-black/70 to-black/80 backdrop-blur-sm"
          style={{ transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
        {/* Progress indicator at the top */}
        <div className="absolute top-0 left-0 z-50 h-1 w-full bg-black/10">
          <div
            ref={progressRef}
            className="h-px bg-white"
            style={{ width: "0%" }}
          ></div>
        </div>
        {/* Small stars effect could be added with absolutely positioned divs */}

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
                  <p></p>
                  <p>{card.description}</p>
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
