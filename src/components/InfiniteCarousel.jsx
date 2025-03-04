import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Divider from "../ui/Divider";

const PartnersCarousel = () => {
  // References to our carousel rows
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  // References to our animations
  const firstRowAnimation = useRef(null);
  const secondRowAnimation = useRef(null);

  // Sample partner data (replace with your actual partners)
  const partners = [
    {
      id: 1,
      name: "Project Management",
      description: "innovative quality property development",
      logo: "/images/partner-1.png",
    },
    {
      id: 2,
      name: "Architects and Urbanists",
      description: "Urban Design, Landscape, Architecture and Struture",
      logo: "/images/partner-2.png",
    },
    {
      id: 3,
      name: "Infrastructure Engineering",
      description: "Mobility, water, energy and digital infrastructure",
      logo: "/images/partner-3.png",
    },
    {
      id: 4,
      name: "Strategic Economics",
      description: "Economics and land-use planning",
      logo: "/images/partner-4.png",
    },
    {
      id: 5,
      name: "Airspace Specialist",
      description: "Airport feasibility study and planning",
      logo: "/images/partner-5.jpg",
    },
    {
      id: 6,
      name: "Ecologoy Consultant",
      description: "Wildlife and ecologoical preservation",
      logo: "/images/partner-6.png",
    },
    {
      id: 7,
      name: "Hydrology Consultant",
      description: "Water ecosystems require balanced management.",
      logo: "/images/partner-7.png",
    },
    {
      id: 8,
      name: "Strategy & Communication",
      description: "Public strategy guides effective communications.",
      logo: "/images/partner-8.jpg",
    },
  ];

  // Function to handle mouse enter (hover)
  const handleMouseEnter = (animation) => {
    if (animation.current) {
      animation.current.pause();
    }
  };

  // Function to handle mouse leave
  const handleMouseLeave = (animation) => {
    if (animation.current) {
      animation.current.play();
    }
  };

  useEffect(() => {
    // Set up first row animation (left to right)
    // We need to create a seamless loop by duplicating content
    const firstRowItems = Array.from(firstRowRef.current.children);
    const totalFirstRowWidth =
      firstRowItems.reduce((width, item) => width + item.offsetWidth, 0) / 2;

    // Create the first animation (left to right)
    firstRowAnimation.current = gsap.to(firstRowRef.current, {
      x: -totalFirstRowWidth,
      repeat: -1,
      duration: 25,
      ease: "linear",
      onRepeat: () => {
        gsap.set(firstRowRef.current, { x: 0 });
      },
    });

    // Set up second row animation (right to left)
    const secondRowItems = Array.from(secondRowRef.current.children);
    const totalSecondRowWidth =
      secondRowItems.reduce((width, item) => width + item.offsetWidth, 0) / 2;

    // Start the second row from the negative position (already moved left)
    gsap.set(secondRowRef.current, { x: -totalSecondRowWidth });

    // Create the second animation (right to left)
    secondRowAnimation.current = gsap.to(secondRowRef.current, {
      x: 0,
      repeat: -1,
      duration: 25,
      ease: "linear",
      onRepeat: () => {
        gsap.set(secondRowRef.current, { x: -totalSecondRowWidth });
      },
    });

    // Clean up animations when component unmounts
    return () => {
      if (firstRowAnimation.current) firstRowAnimation.current.kill();
      if (secondRowAnimation.current) secondRowAnimation.current.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* First row - moving from left to right */}
      <div className="relative overflow-hidden">
        <Divider backgroundColor="bg-black/10" />
        <div ref={firstRowRef} className="flex w-fit py-5">
          {/* First set of partners */}
          {partners.slice(0, 4).map((partner) => (
            <div
              key={partner.id}
              className="mx-4 w-64 flex-shrink-0 rounded-lg bg-white p-6 ring ring-black/10 transition-transform hover:scale-105"
              onMouseEnter={() => handleMouseEnter(firstRowAnimation)}
              onMouseLeave={() => handleMouseLeave(firstRowAnimation)}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="mb-4 h-10 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="mb-2 font-semibold">{partner.name}</h3>
                <p className="text-zinc-600">{partner.description}</p>
              </div>
            </div>
          ))}

          {/* Clone of first set for infinite scrolling */}
          {partners.slice(0, 4).map((partner) => (
            <div
              key={`clone-${partner.id}`}
              className="mx-4 w-64 flex-shrink-0 rounded-lg p-6 ring-1 ring-black/10 transition-transform hover:scale-105"
              onMouseEnter={() => handleMouseEnter(firstRowAnimation)}
              onMouseLeave={() => handleMouseLeave(firstRowAnimation)}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="mb-4 h-10 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="mb-2 font-semibold">{partner.name}</h3>
                <p className="text-zinc-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider backgroundColor="bg-black/10" />

      {/* Second row - moving from right to left */}
      <div className="relative overflow-hidden">
        <div ref={secondRowRef} className="flex w-fit py-6">
          {/* Second set of partners */}
          {partners.slice(0, 4).map((partner) => (
            <div
              key={partner.id}
              className="mx-4 w-64 flex-shrink-0 rounded-lg p-6 ring ring-black/10 transition-transform hover:scale-105"
              onMouseEnter={() => handleMouseEnter(firstRowAnimation)}
              onMouseLeave={() => handleMouseLeave(firstRowAnimation)}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="mb-4 h-10 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="mb-2 font-semibold">{partner.name}</h3>
                <p className="text-zinc-600">{partner.description}</p>
              </div>
            </div>
          ))}

          {/* Clone of second set for infinite scrolling */}
          {partners.slice(4, 8).map((partner) => (
            <div
              key={`clone-${partner.id}`}
              className="mx-4 w-64 flex-shrink-0 rounded-lg p-5 ring-1 ring-black/10 transition-transform hover:scale-105"
              onMouseEnter={() => handleMouseEnter(secondRowAnimation)}
              onMouseLeave={() => handleMouseLeave(secondRowAnimation)}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="mb-4 h-10 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="mb-2 font-semibold">{partner.name}</h3>
                <p className="text-zinc-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
