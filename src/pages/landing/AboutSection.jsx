import { FaQuoteLeft } from "react-icons/fa";
import ScrollTextReveal from "../../components/animations/ScrollTextReveal";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import Container from "../../components/layouts/Container";

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
            className="mt-5 max-w-md text-justify text-base text-zinc-600"
            ref={aboutIntroRef}
          >
            Gelephu will become a gateway connecting Bhutan to the world and the
            future. The road we have chosen is a gateway to the world – to
            markets, capital, new ideas, knowledge, and technology towards our
            future, and to chart our destiny.
          </p>
          <p className="mt-4 text-sm">
            - His Majesty King Jigme Singye Wangchuck
          </p>
        </blockquote>
      </Container>
    </section>
  );
};

export default AboutSection;
