import {
  HiOutlinePause,
  HiOutlinePlay,
  HiArrowDownRight,
} from "react-icons/hi2";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { useRef, useState } from "react";
import Swiper from "swiper";
import SwiperSlider from "../components/SwiperSlider";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen bg-[url(/images/hero-bg.jpg)] bg-cover bg-center pt-46">
      <div className="absolute inset-0 size-full bg-linear-to-bl from-transparent to-black/90 to-90%" />

      <Container>
        <div className="relative flex flex-col items-start gap-11">
          {/* Hero content */}
          <div className="text-white">
            <p className="mb-2 text-xs uppercase">
              Mindful & Sustainable Urban Growth
            </p>
            <h1 className="font-bebas mb-6 text-3xl tracking-widest md:text-5xl">
              Gelephu Mindfulness City
            </h1>
            <p className="max-w-md text-gray-300">
              Special Administrative Region in Bhutan, envisioned by Our His
              Majesty King Jigme Singye Wangchuck. It is an innovative urban
              development project that integrates economic growth with
              mindfulness, holistic living, and sustainability.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            variant="outline"
            size="medium"
            className="flex items-center gap-2 px-4"
            text="Join us for a tour"
          />
        </div>
      </Container>
    </section>
  );
};

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* video intro */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          ref={videoRef}
          className="h-full w-full object-cover"
        >
          <source src="/videos/video-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute bottom-11 left-11 z-50 text-white lg:left-24">
        <h2 className="font-bebas mb-6 max-w-2xl text-2xl font-semibold tracking-wider md:text-4xl">
          New Global Leader in mindful and sustainable urban growth.
        </h2>
        <p className="max-w-xl pr-8 md:pr-0">
          GMC builds on Bhutan’s reputation for stability and peace, creating a
          secure and transparent environment for businesses and residents alike.
          As a Vajrayana Kingdom, Bhutan offers a profound spiritual heritage
          that guides GMC’s vision of mindful living in the 21st century.
        </p>
        <Button
          icon={
            isPlaying ? (
              <HiOutlinePause size={24} />
            ) : (
              <HiOutlinePlay size={24} />
            )
          }
          onClick={togglePlayPause}
          size="medium"
          variant="outline"
          className="mt-5 flex w-10 items-center justify-center rounded-full border border-white"
        />
      </div>
      <div className="to-primary absolute inset-0 bg-gradient-to-b from-transparent to-140%" />
    </section>
  );
};

const AboutBlock = () => {
  return (
    <section className="from-primary/90 relative h-[60vh] bg-linear-to-b from-85% to-[#e7e7e7] py-28">
      <Container>
        <h2 className="font-bebas text-4xl tracking-widest text-white">
          Bhutan’s commitment to sustainable development, rich cultural
          heritage, and strong governance, positions the City as a global leader
          in mindful and sustainable urban growth.
        </h2>
        <Button
          text="Learn more"
          variant="outline"
          size="medium"
          className="mt-11 bg-zinc-100 px-8 text-zinc-900"
        />
      </Container>
      <div className="absolute right-0 -bottom-4 left-0 overflow-hidden">
        <motion.img
          src="/images/cloud.png"
          alt="cloud"
          className="w-full object-cover text-transparent"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section className="lg:py-24">
      <Container>
        {/* <h2 className="mx-auto max-w-5xl text-center text-3xl">
          Bhutan’s commitment to sustainable development, rich cultural
          heritage, and strong governance, positions the City as a global leader
          in mindful and sustainable urban growth.
        </h2> */}

        <div className="mb-24">
          <h3 className="font-bebas text-4xl tracking-widest">
            GMC Core Industries
          </h3>
          <p className="mt-5 max-w-lg text-base text-zinc-600">
            GMC has autonomous executive, legislative, and judiciary systems
            that blends robust.
          </p>
        </div>
      </Container>
      <SwiperSlider />
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <VideoIntro />
      <AboutBlock />
      <Vision />
    </>
  );
};

export default Home;
