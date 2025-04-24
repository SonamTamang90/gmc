import { FaQuoteLeft } from "react-icons/fa";
import ScrollTextReveal from "../../components/animations/ScrollTextReveal";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const quoteTextRef = useRef(null);

  useGSAP(() => {
    gsap.from(quoteTextRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: quoteTextRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reset",
        markers: false,
        once: false,
      },
    });
  });

  return (
    <section className="relative py-20 md:py-24">
      <div className="w-full px-6">
        <ScrollTextReveal className="mb-11 max-w-3xl text-xl md:text-2xl">
          Bhutan&apos;s commitment to sustainable development, rich cultural
          heritage, and strong governance, positions the City as a global leader
          in mindful and sustainable urban growth envisioned by His Majesty King
          Jigme Singye Wangchuck.
        </ScrollTextReveal>
        <figure className="max-w-xl">
          <blockquote>
            <FaQuoteLeft size={20} className="text-zinc-400/75" />
            <p
              ref={quoteTextRef}
              className="mt-5 max-w-md text-justify text-sm text-zinc-600"
            >
              Gelephu will become a gateway connecting Bhutan to the world and
              the future. The road we have chosen is a gateway to the world – to
              markets, capital, new ideas, knowledge, and technology towards our
              future, and to chart our destiny.
            </p>
          </blockquote>

          <figcaption className="mt-4 text-sm font-medium">
            <cite className="not-italic">
              — His Majesty King Jigme Singye Wangchuck
            </cite>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
