import { HiChevronDoubleDown } from "react-icons/hi2";
import Container from "../../components/layouts/Container";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  const heroTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const lineRef = useRef(null);
  const arrowDownIconRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(heroTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    tl.from(
      paragraphRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7",
    );

    tl.to(lineRef.current, {
      width: "100%",
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.to(arrowDownIconRef.current, {
      y: 10,
      repeat: -1,
      duration: 1.2,
      ease: "sine.inOut",
      yoyo: true,
    });
  });

  return (
    <section className="sticky inset-0 h-[550px] w-screen md:h-screen">
      {/* Hero video */}
      <div className="absolute top-0 left-0 size-full">
        <video autoPlay muted loop className="size-full object-cover">
          <source src="./hero.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Background opacity */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/25 to-black/75" />

      <Container className="relative z-20 flex size-full items-end pb-11">
        <div className="w-full">
          <h1
            className="mb-5 text-2xl font-extrabold tracking-wider text-white uppercase md:text-4xl"
            ref={heroTextRef}
          >
            Gelephu Mindfulness City
          </h1>
          <p
            className="max-w-lg text-base tracking-wide text-white/85 md:text-lg"
            ref={paragraphRef}
          >
            An innovative urban development project that integrates economic
            growth with mindfulness, holistic living, and sustainability. 
          </p>
          <div className="my-5 h-px w-0 bg-white/60" ref={lineRef} />
          <div className="flex items-center gap-3 text-white">
            <HiChevronDoubleDown size={20} ref={arrowDownIconRef} />
            <p>Scroll down to learn more</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
