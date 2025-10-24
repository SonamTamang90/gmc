import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const EnablersSection = () => {
  const enablerItemOne = useRef();
  const enablerItemTwo = useRef();

  useGSAP(() => {
    gsap.from(enablerItemOne.current, {
      y: -50,
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: enablerItemOne.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        markers: false,
        once: true,
      },
    });

    gsap.from(enablerItemTwo.current, {
      y: -100,
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: enablerItemTwo.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        markers: false,
        once: true,
      },
    });
  }, []);

  return (
    <section className="relative h-[70vh] overflow-hidden bg-[url(/images/photo-6.JPG)] bg-cover bg-no-repeat py-11">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10" />
      <div className="relative w-full px-8">
        <div className="mb-2 h-px w-full bg-zinc-400/50" />
        <span className="mb-6 inline-block text-white/90">
          Innovation Drivers
        </span>
        <h2 className="mb-8 text-3xl text-white md:mb-16">Enablers</h2>
        <div className="flex w-md flex-col space-y-8">
          <div ref={enablerItemOne} className="rounded-md bg-black/60 p-4">
            <h2 className="mb-2 text-2xl text-white">Governance</h2>
            <p className="text-white/70">
              GMC has autonomous executive, legislative, and judiciary systems
              that blends robust policies that build trust and accountability
              with mindful incentives designed to empower each residents and
              businesses to reach their fullest potential.
            </p>
          </div>
          <div ref={enablerItemTwo} className="rounded-md bg-black/60 p-4">
            <h2 className="mb-2 text-2xl text-white">Infrastructure</h2>
            <p className="text-white/70">
              Gelephu Mindfulness City is built on a foundation of world-class
              infrastructure, seamlessly integrating state-of-the-art technology
              with sustainable practices. With an international airport,
              advanced rail networks, and cutting-edge digital connectivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnablersSection;
