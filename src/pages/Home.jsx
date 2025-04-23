import { HiChevronDoubleDown } from "react-icons/hi2";
import Container from "../ui/Container";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { FaQuoteLeft } from "react-icons/fa";
import ScrollTextReveal from "../components/animations/ScrollTextReveal";

const commitments = [
  {
    title: "Holistic Development",
    description:
      "Bhutan's Special Administrative Region balances economic growth with Gross National Happiness principles, prioritizing holistic wellbeing over mere GDP.",
    image: "/images/holistic_approach.JPG",
  },
  {
    title: "Distinctive Approach",
    description:
      "Gelephu's Special Administrative Region showcases Bhutan's Gross National Happiness approach, balancing economic growth with human wellbeing and environmental sustainability.",
    image: "/images/photo-2.JPG",
  },
  {
    title: "A New Global Modal",
    description:
      "Bhutan's Special Administrative Region models sustainable development globally, balancing prosperity with wellbeing while offering hope amid conflict and environmental decline.",
    image: "/images/photo-4.JPG",
  },
];

const HeroSection = () => {
  const heroTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const arrowDownIconRef = useRef(null);
  const lineRef = useRef(null);
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
    <section className="sticky inset-0 h-[550px] md:h-screen">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/15 to-black/60" />
      <div className="absolute top-0 left-0 size-full">
        <video autoPlay muted loop className="size-full object-cover">
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <Container className="relative z-20 flex size-full items-end pb-11">
        <div className="w-full">
          <h1
            ref={heroTextRef}
            className="mb-5 text-2xl font-extrabold tracking-wider text-white uppercase md:text-4xl"
          >
            Gelephu Mindfulness City
          </h1>
          <p
            ref={paragraphRef}
            className="max-w-lg text-base tracking-wide text-white/85 md:text-lg"
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

const AboutSection = () => {
  const aboutIntroRef = useRef(null);
  const aboutSectionRef = useRef(null);
  useGSAP(
    () => {
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
    <section
      ref={aboutSectionRef}
      className="relative bg-white py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <ScrollTextReveal className="mb-11 max-w-3xl text-xl md:text-2xl">
          Bhutan&apos;s commitment to sustainable development, rich cultural
          heritage, and strong governance, positions the City as a global leader
          in mindful and sustainable urban growth envisioned by His Majesty King
          Jigme Singye Wangchuck.
        </ScrollTextReveal>
        <blockquote>
          <FaQuoteLeft size={28} className="text-zinc-400/75" />
          <p
            className="mt-5 mb-2 max-w-md text-justify text-base text-zinc-600"
            ref={aboutIntroRef}
          >
            Gelephu will become a gateway connecting Bhutan to the world and the
            future. The road we have chosen is a gateway to the world – to
            markets, capital, new ideas, knowledge, and technology towards our
            future, and to chart our destiny.
          </p>
          <p className="">
            - His Majesty King Jigme Singye Wangchuck <br /> King of Bhutan
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
    <section className="relative pb-24" ref={commitmentSectionRef}>
      <Container>
        <div className="my-5 h-px bg-black/10" ref={dividerRef} />
        <h2 className="mb-5 text-2xl">Bhutan Commitment&apos;s</h2>

        {/* Lists of commitment's */}
        <div className="mt-18">
          <div className="my-5 h-px bg-black/10" />
          <ul className="flex flex-col space-y-6 divide-y divide-black/10">
            {commitments.map((commitment, index) => (
              <div
                key={commitment.title}
                className="flex flex-col items-center gap-8 pb-6 md:flex-row md:items-start md:gap-16"
              >
                <div className="flex w-full flex-col md:w-auto md:flex-row md:gap-11">
                  <p className="mb-2 text-lg text-zinc-400 md:mb-0">{`0${index + 1}`}</p>
                  <div className="max-w-full space-y-4 md:max-w-xs md:space-y-5">
                    <h3 className="text-xl font-semibold md:text-xl">
                      {commitment.title}
                    </h3>
                    <p className="dark:text-dark-600 text-gray-700">
                      {commitment.description}
                    </p>
                  </div>
                </div>

                <div className="h-auto w-full overflow-hidden rounded-lg md:h-[250px] md:w-[400px]">
                  <img
                    src={commitment.image}
                    alt="Holistic Development in Bhutan"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="relative flex h-full flex-col overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-white">
        <AboutSection />
        <CommitmentSection />
      </div>
    </>
  );
};

export default Home;
