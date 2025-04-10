import { HiChevronDoubleDown } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../ui/Container";
import Divider from "../ui/Divider";
import { useRef } from "react";
import CoreIndustriesSection from "./CoreIndustries";
import PartnersCarousel from "../components/InfiniteCarousel";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const arrowDownIconRef = useRef(null);
  const heroTextRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.to(arrowDownIconRef.current, {
      y: 10,
      repeat: -1,
      duration: 1.2,
      ease: "sine.inOut",
      yoyo: true,
    });

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
  });

  return (
    <section className="fixed top-0 left-0 h-screen w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 size-full object-cover"
      >
        <source src="./images/hero.mp4" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />

      <Container className="relative flex size-full items-end pb-11">
        <div className="w-full text-white">
          <h1
            className="mb-5 text-3xl font-extrabold tracking-wider uppercase"
            ref={heroTextRef}
          >
            Gelephu Mindfulness City
          </h1>
          <p className="max-w-md" ref={paragraphRef}>
            An innovative urban development project that integrates economic
            growth with mindfulness, holistic living, and sustainability. 
          </p>
          <Divider backgroundColor="bg-white/60 my-5" />
          <div className="flex items-center gap-3">
            <HiChevronDoubleDown size={20} ref={arrowDownIconRef} />
            <p>Scroll down to learn more</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

const AboutSection = () => {
  const aboutSectionRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutIntroRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        aboutTitleRef.current,
        {
          color: "#9f9fa9",
        },
        {
          color: "#000000",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 0.5,
          },
        },
      );

      gsap.fromTo(
        aboutIntroRef.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.6,
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 0.5,
          },
        },
      );
    },
    { scope: aboutSectionRef },
  );

  return (
    <section className="py-24" ref={aboutSectionRef}>
      <Container>
        <h2 className="mb-11 max-w-3xl text-2xl" ref={aboutTitleRef}>
          Bhutan&apos;s commitment to sustainable development, rich cultural
          heritage, and strong governance, positions the City as a global leader
          in mindful and sustainable urban growth envisioned by His Majesty King
          Jigme Singye Wangchuck.
        </h2>
        <blockquote>
          <FaQuoteLeft size={28} className="text-zinc-400/20" />
          <p ref={aboutIntroRef} className="mt-5 max-w-sm text-zinc-600">
            Gelephu will become a gateway connecting Bhutan to the world and the
            future. The road we have chosen is a gateway to the world – to
            markets, capital, new ideas, knowledge, and technology towards our
            future, and to chart our destiny.
          </p>
        </blockquote>
      </Container>
    </section>
  );
};

const CommitmentSection = () => {
  const commitmentSectionRef = useRef(null);
  const dividerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      dividerRef.current,
      {
        width: "36px",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 0.5,
          toggleActions: "play none none none",
        },
      },
    );
  });

  return (
    <section className="pb-24" ref={commitmentSectionRef}>
      <Container>
        <div className="my-5 h-px bg-black/20" ref={dividerRef} />
        <h2 className="mb-5 text-2xl">Bhutan Commitment&apos;s</h2>

        {/* Lists of commitment's */}
        <div className="mt-18">
          <Divider backgroundColor="bg-black/10 my-5" />
          {/* Commitment One */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
            <div className="flex w-full flex-col md:w-auto md:flex-row md:gap-11">
              <p className="mb-2 text-lg text-zinc-400 md:mb-0">01</p>
              <div className="max-w-full space-y-4 md:max-w-xs md:space-y-5">
                <h3 className="text-xl font-semibold md:text-xl">
                  Holistic Development
                </h3>
                <p className="dark:text-dark-600 text-gray-700">
                  Bhutan&apos;s Special Administrative Region balances economic
                  growth with Gross National Happiness principles, prioritizing
                  holistic wellbeing over mere GDP.
                </p>
              </div>
            </div>

            <div className="h-auto w-full overflow-hidden rounded-lg md:h-[250px] md:w-[400px]">
              <img
                src="/images/engage-1.png"
                alt="Holistic Development in Bhutan"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          {/* Commitment One */}
          <Divider backgroundColor="bg-black/10 my-5" />
          {/* Commitment Two */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
            <div className="flex w-full flex-col md:w-auto md:flex-row md:gap-11">
              <p className="mb-2 text-lg text-zinc-400 md:mb-0">02</p>
              <div className="max-w-full space-y-4 md:max-w-xs md:space-y-5">
                <h3 className="text-xl font-semibold md:text-xl">
                  Distinctive Approach
                </h3>
                <p className="dark:text-dark-600 text-gray-700">
                  Gelephu&apos;s Special Administrative Region showcases
                  Bhutan&apos;s Gross National Happiness approach, balancing
                  economic growth with human wellbeing and environmental
                  sustainability.
                </p>
              </div>
            </div>

            <div className="h-auto w-full overflow-hidden rounded-lg md:h-[250px] md:w-[400px]">
              <img
                src="/images/engage-2.png"
                alt="Holistic Development in Bhutan"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          {/* Commitment Two */}
          <Divider backgroundColor="bg-black/10 my-5" />
          {/* Commitment Three */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
            <div className="flex w-full flex-col md:w-auto md:flex-row md:gap-11">
              <p className="mb-2 text-lg text-zinc-400 md:mb-0">03</p>
              <div className="max-w-full space-y-4 md:max-w-xs md:space-y-5">
                <h3 className="text-xl font-semibold md:text-xl">
                  A New Global Modal
                </h3>
                <p className="dark:text-dark-600 text-gray-700">
                  Bhutan&apos;s Special Administrative Region models sustainable
                  development globally, balancing prosperity with wellbeing
                  while offering hope amid conflict and environmental decline.
                </p>
              </div>
            </div>

            <div className="h-auto w-full overflow-hidden rounded-lg md:h-[250px] md:w-[400px]">
              <img
                src="/images/engage-3.png"
                alt="Holistic Development in Bhutan"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          {/* Commitment Three */}
        </div>
      </Container>
    </section>
  );
};

const PartnersSection = () => {
  return (
    <section className="pt-16 pb-11">
      <Container>
        <Divider backgroundColor="bg-black/10 mb-2" />
        <p className="mb-5 text-xs text-zinc-600">City Development Expertise</p>
        <h2 className="mb-18 max-w-3xl text-4xl">Our Partner&apos;s</h2>
        <div>
          <PartnersCarousel />
        </div>
      </Container>
    </section>
  );
};

const Landing = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <Header />
      <HeroSection />
      <div className="relative mt-[100vh] h-full rounded-tl-2xl rounded-tr-2xl bg-white">
        <AboutSection />
        <CommitmentSection />
        <CoreIndustriesSection />
        <PartnersSection />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
