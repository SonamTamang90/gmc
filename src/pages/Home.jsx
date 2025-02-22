import CircularText from "../components/animations/CircularText";
import FollowCursor from "../components/animations/FollowCursor";
import InfiniteScrollText from "../components/animations/InfiniteScroll";
import Container from "../components/ui/Container";
import { BiSolidQuoteRight } from "react-icons/bi";
import VideoBackground from "../components/VideoBackground";
import { useState } from "react";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    console.log("Play button clicked");
    setIsVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
  };

  return (
    <section id="hero" className="relative h-screen">
      <div className="absolute inset-0 h-full w-full">
        <video autoPlay muted loop className="size-full object-cover">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="to-primary/60 absolute inset-0 bg-gradient-to-b from-transparent to-90%" />

      {/* Hero content */}
      <div className="absolute bottom-8 w-full">
        <Container>
          <div className="text-white">
            <h1 className="font-bebas mb-3 tracking-wider md:text-5xl">
              Gelephu Mindfulness City
            </h1>
            <p className="max-w-md">
              An innovative urban development project that integrates economic
              growth with mindfulness, holistic living, and sustainability.
            </p>
          </div>
          <div className="my-6 w-full border-t border-white/40" />
        </Container>
        <InfiniteScrollText
          text="Sustainable • Mindful • Spiritual • Nature • "
          duration={25}
          className="text-5xl font-thin text-white"
        />
      </div>
      <FollowCursor onPlayClick={handlePlayClick} />
      <VideoBackground isPlaying={isVideoPlaying} onClose={handleVideoClose} />
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="">
          <div className="mb-11">
            <h2 className="mb-6 max-w-xl text-3xl tracking-wider">
              Gelephu Mindfulness City is a Special Administrative Region in
              Bhutan, envisioned by His Majesty{" "}
              <span className="text-primary font-bold">
                King Jigme Singye Wangchuck.
              </span>
            </h2>
            <p className="max-w-sm">
              <span className="text-2xl">
                <BiSolidQuoteRight />
              </span>{" "}
              Gelephu will become a gateway connecting Bhutan to the world and
              the future. The road we have chosen is a gateway to the world – to
              markets, capital, new ideas, knowledge, and technology towards our
              future, and to chart our destiny.
            </p>
          </div>
          <div className="relative">
            <img src="/images/about.jpg" alt="about" />
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 transform">
              <CircularText
                text="MINDFUL*SUSTAINABLE*NATURE*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default Home;
