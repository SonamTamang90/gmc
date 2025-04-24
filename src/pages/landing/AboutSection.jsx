import { FaQuoteLeft } from "react-icons/fa";
import ScrollTextReveal from "../../components/animations/ScrollTextReveal";

const AboutSection = () => {
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
            <p className="mt-5 max-w-md text-justify text-sm text-zinc-600">
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
