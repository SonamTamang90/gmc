import { HiOutlineArrowDown, HiOutlinePlay } from "react-icons/hi2";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Container from "../ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";

const HeroSection = ({ scrollYProgress }) => {
  // Create transform values based on scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [1, 0.5, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  // This will hide the entire hero section when scrolled near the bottom
  const heroVisibility = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8],
    ["visible", "visible", "hidden"],
  );

  return (
    <motion.section
      className="fixed inset-0 h-screen w-full overflow-x-hidden"
      style={{
        opacity: heroOpacity,
        visibility: heroVisibility,
      }}
    >
      <div className="to-primary/70 absolute inset-0 z-10 size-full bg-linear-to-b from-transparent to-130%" />
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 size-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="relative z-20 flex h-full items-end px-11 pb-11"
        style={{ y: textY }}
      >
        <div className="w-full">
          <h1 className="mb-3 text-3xl font-bold tracking-widest uppercase">
            Gelephu Mindfullness City
          </h1>
          <p className="max-w-lg">
            Innovative urban development project that integrates economic growth
            with mindfulness, holistic living, and sustainability.
          </p>
          <div className="mt-5 flex w-full items-center gap-3 border-t border-white/20 pt-3">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <HiOutlineArrowDown />
            </motion.div>
            <span>Scroll down to learn more</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const ContentSection = () => {
  return (
    <div
      className="relative z-30 w-full rounded-t-2xl bg-white"
      style={{ marginTop: "100vh" }}
    >
      {/* About Section */}
      <section className="w-full py-20">
        <Container>
          <div className="text-dark-600 mb-11">
            <h2 className="mb-8 max-w-2xl text-2xl">
              Bhutan’s commitment to sustainable development, rich cultural
              heritage, and strong governance, positions the City as a global
              leader in mindful and sustainable urban growth envisioned by His
              Majesty King Jigme Sigye Wangchuck.
            </h2>
            <blockquote className="max-w-lg">
              <BiSolidQuoteLeft size={28} className="text-primary/10 mb-3" />
              <p>
                Gelephu will become a gateway connecting Bhutan to the world and
                the future. The road we have chosen is a gateway to the world –
                to markets, capital, new ideas, knowledge, and technology
                towards our future, and to chart our destiny.
              </p>
            </blockquote>
          </div>
          <div className="flex h-[60vh] items-center justify-center rounded-2xl bg-[url(/images/about.jpg)] bg-cover bg-center">
            <Button className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20">
              <HiOutlinePlay size={36} className="text-white" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="text-dark-600">
            <h2 className="mb-11 max-w-lg text-lg">
              <span className="font-bold">Economic Growth,</span>{" "}
              <span className="font-bold">Strong Governance,</span> and{" "}
              <span className="font-bold">Spirituality Converge</span> to set a
              new global standard for sustainable and harmonious urban
              development.
            </h2>
            <div className="">
              <div className="flex items-start gap-20 border-y border-zinc-400/40 py-6">
                <div className="flex items-start gap-16">
                  <p className="text-lg text-zinc-400">01</p>
                  <div>
                    <h3 className="mb-6 text-xl font-semibold">
                      Economic Growth
                    </h3>
                    <p className="max-w-sm text-zinc-600">
                      Aker is a vertically integrated operating platform that
                      invests in communities bridging urban living with the
                      outdoors. We empower high-performing teams to deliver
                      lasting value for residents and the broader community.
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    src="/images/engage-1.png"
                    alt=""
                    className="aspect-square rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="flex items-start gap-20 border-b border-zinc-400/40 py-6">
                <div className="flex items-start gap-16">
                  <p className="text-lg text-zinc-400">02</p>
                  <div>
                    <h3 className="mb-6 text-xl font-semibold">
                      Advanced Infrastructure
                    </h3>
                    <p className="max-w-sm text-zinc-600">
                      Aker is a vertically integrated operating platform that
                      invests in communities bridging urban living with the
                      outdoors. We empower high-performing teams to deliver
                      lasting value for residents and the broader community.
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    src="/images/engage-2.png"
                    alt=""
                    className="aspect-square rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="flex items-start gap-20 border-b border-zinc-400/40 py-6">
                <div className="flex items-start gap-16">
                  <p className="text-lg text-zinc-400">03</p>
                  <div>
                    <h3 className="mb-6 text-xl font-semibold">
                      Strong Governance
                    </h3>
                    <p className="max-w-sm text-zinc-600">
                      Aker is a vertically integrated operating platform that
                      invests in communities bridging urban living with the
                      outdoors. We empower high-performing teams to deliver
                      lasting value for residents and the broader community.
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    src="/images/engage-3.png"
                    alt=""
                    className="aspect-square rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary pb-20"></section>
    </div>
  );
};

const Home = () => {
  // Track scroll progress for the entire page
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);

  return (
    <div>
      <HeroSection scrollYProgress={scrollYProgress} />
      <ContentSection />
    </div>
  );
};

export default Home;
