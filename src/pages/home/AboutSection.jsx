import { FaQuoteLeft } from "react-icons/fa";
import ScrollTextReveal from "../../components/animations/ScrollTextReveal";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
        once: true,
      },
    });
  }, []);

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
              className="mt-5 max-w-lg text-justify text-sm text-zinc-600"
            >
              The purpose of establishing this SAR is to create a vibrant
              economic hub by providing a conducive business environment and
              compelling incentives. It will be a Mindfulness City, encompassing
              conscious and sustainable businesses, inspired by Buddhist
              spiritual heritage, and distinguished by the uniqueness of the
              Bhutanese identity.
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
