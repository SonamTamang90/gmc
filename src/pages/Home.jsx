import { HiOutlineArrowRight, HiOutlinePlayCircle } from "react-icons/hi2";
import ShinyText from "../components/animations/ShinyText";
import CircularText from "../components/animations/CircularText";
import TiltedCard from "../components/animations/TiltedCard";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import HorizontalInfiniteScroll from "../components/animations/InfiniteScroll";

const logos = [
  {
    logo: "https://gmc.bt/wp-content/uploads/2024/06/logo-mqdc.png",
    alt: "Company 1",
  },
  {
    logo: "https://gmc.bt/wp-content/uploads/2024/06/ERM_consultancy_logo.jpg",
    alt: "Company 2",
  },
  {
    logo: "https://gmc.bt/wp-content/uploads/2024/06/NACO.png",
  },
  // ... more logos
];

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[url(/images/hero-bg.jpg)] bg-cover bg-center flex items-center">
      <div className="absolute inset-0 w-full h-full back bg-linear-to-bl from-transparent to-black to-90%" />
      <div className="absolute top-48 pl-24 z-40">
        <div className="text-white mb-8">
          <h1 className="mb-1">Special Administrative Region in Bhutan</h1>
          <p className="font-satoshi text-3xl uppercase tracking-wider mb-3">
            Gelephu Mindfulness City
          </p>
          <p className="max-w-md text-gray-300">
            Bhutan's commitment to sustainable development, rich cultural
            heritage, and strong governace, positions the City as global leader
            in mindful and sustainable urban growth.
          </p>
        </div>
        <button className="text-white font-semibold border border-white py-2 px-6 rounded-full flex items-center gap-2">
          <HiOutlinePlayCircle size={24} />
          <ShinyText
            text="Take a Visual Intro"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </button>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="pb-24">
      <div className="grid grid-cols-2">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="/images/about.webp"
            alt="about"
            className="h-full object-cover"
          />
          <div className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <CircularText
              text="MINDFUL*GROWTH*SUSTAINABLE*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>

          <div className="absolute inset-0 w-full h-full bg-linear-to-bl from-transparent to-black/40 to-150%" />

          <img src="/images/cloud.avif" className="absolute -bottom-2 w-full" />
        </div>
        <div className="pt-20 pl-24">
          <p className="uppercase font-semibold">About GMC</p>
          <h2 className="font-satoshi text-2xl mb-6 text-[#141c25]">
            Mindful & Sustainable Urban Growth.
          </h2>
          <div className="max-w-md text-zinc-600 mb-11">
            <p className="mb-6">
              Gelephu Mindfulness City (GMC) is a Special Administrative Region
              in Bhutan, envisioned by His Majesty King Jigme.It is an
              innovative urban development project that integrates economic
              growth with mindfulness, holistic living, and sustainability.
            </p>
            <p>
              GMC’s strategic position at the crossroads of major economic
              regions, including South Asia, ASEAN, and China, combined with
              Bhutan’s commitment to sustainable development, rich cultural
              heritage, and strong governance, positions the City as a global
              leader in <span>mindful and sustainable urban growth.</span>
            </p>
          </div>
          <button className="flex items-center gap-2 border border-yellow-800 py-3 px-6 rounded-full">
            <span>Discover full stories</span>
            <HiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

const EngageSection = () => {
  return (
    <section className="pb-24">
      <div className="text-center max-w-7xl mx-auto px-20 mb-20">
        <h2 className="text-4xl">
          Gelephu Mindfulness City is built on a foundation of world-class
          infrastructure, seamlessly integrating state-of-the-art technology
          with sustainable practices.
        </h2>
      </div>
      <div className="px-24">
        <div className="grid grid-cols-3 gap-11">
          <TiltedCard
            imageSrc="https://gmc.bt/wp-content/uploads/2024/06/Strong-Governance-1024x717.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="400px"
            imageHeight="400px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            overlayContent={
              <div className="px-8 text-white">
                <h3 className="text-xl mb-2 font-semibold">
                  Strong Governance
                </h3>
                <p>
                  Bhutan offers a profound spiritual heritage that guides GMC’s
                  vision of mindful living in the 21st century.
                </p>
              </div>
            }
            displayOverlayContent={true}
          />
          <TiltedCard
            imageSrc="https://gmc.bt/wp-content/uploads/2024/06/Robust-Infrastructure--1024x717.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="400px"
            imageHeight="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            overlayContent={
              <div className="px-8 text-white">
                <h3 className="text-xl mb-2 font-semibold">
                  Robust Infrastructure
                </h3>
                <p>
                  Bhutan offers a profound spiritual heritage that guides GMC’s
                  vision of mindful living in the 21st century.
                </p>
              </div>
            }
            displayOverlayContent={true}
          />
          <TiltedCard
            imageSrc="https://gmc.bt/wp-content/uploads/2024/06/Advanced-Industries-1024x717.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="400px"
            imageHeight="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            overlayContent={
              <div className="px-8 text-white">
                <h3 className="text-xl mb-2 font-semibold">
                  Advanced Industries
                </h3>
                <p>
                  Bhutan offers a profound spiritual heritage that guides GMC’s
                  vision of mindful living in the 21st century.
                </p>
              </div>
            }
            displayOverlayContent={true}
          />
          {/* <div className="relative h-[400px] border border-white/10 rounded-2xl overflow-hidden">
            <img
              src="https://gmc.bt/wp-content/uploads/2024/06/Robust-Infrastructure--1024x717.jpg"
              className="aspect-square object-cover size-full"
            />
            <div className="absolute bottom-8 z-40 px-8">
              <h3 className="text-lg tracking-wider font-semibold uppercase text-white">
                Robust Infrastructure
              </h3>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 from-[2%] ring-1 ring-gray-950/10 ring-inset" />
          </div> */}
          {/* <div className="relative h-[400px] border border-white/10 rounded-2xl overflow-hidden">
            <img
              src="https://gmc.bt/wp-content/uploads/2024/06/Advanced-Industries-1024x717.jpg"
              className="aspect-square object-cover size-full"
            />
            <div className="absolute bottom-8 z-40 px-8">
              <h3 className="text-lg tracking-wider font-semibold uppercase text-white">
                Advanced Industries
              </h3>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 from-[2%] ring-1 ring-gray-950/10 ring-inset" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section className="relative bg-[url(/images/bg.jpg)] bg-cover bg-center pt-20 pb-24">
      <div className="absolute inset-0 w-full h-full bg-black/55" />
      <div className="relative max-w-7xl mx-auto lg:px-24">
        <div className="text-white mb-11">
          <h2 className="text-3xl font-semibold uppercase mb-3">
            Our Core Industries
          </h2>
          <p className="max-w-lg text-gray-200">
            GMC has autonomous executive, legislative, and judiciary systems
            that blends robust policies that build trust and accountability with
            mindful incentives designed to empower each residents and businesses
            to reach their fullest potential.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white/90 p-6">
            <div className="border mb-5 rounded-xl border-dashed w-11 h-11 rounded-full flex items-center justify-center">
              <HiOutlineAcademicCap size={32} />
            </div>
            <h3 className="text-base uppercase mb-3 font-semibold">
              Education & Knowledge
            </h3>
            <p className="text-zinc-600">
              This cluster powers a dynamic hub of talent, innovation, and R&D,
              driving economic growth across GMC and beyond.
            </p>
          </div>
          <div className="bg-white/90 p-6">
            <div className="border mb-5 rounded-xl border-dashed w-11 h-11 rounded-full flex items-center justify-center">
              <HiOutlineAcademicCap size={32} />
            </div>
            <h3 className="text-base uppercase mb-3 font-semibold">
              Agri Tech & Forestry
            </h3>
            <p className="text-zinc-600">
              This cluster powers a dynamic hub of talent, innovation, and R&D,
              driving economic growth across GMC and beyond.
            </p>
          </div>
          <div className="bg-white/90 p-6">
            <div className="border mb-5 rounded-xl border-dashed w-11 h-11 rounded-full flex items-center justify-center">
              <HiOutlineAcademicCap size={32} />
            </div>
            <h3 className="text-base uppercase mb-3 font-semibold">
              Agri Tech & Forestry
            </h3>
            <p className="text-zinc-600">
              This cluster powers a dynamic hub of talent, innovation, and R&D,
              driving economic growth across GMC and beyond.
            </p>
          </div>
          <div className="bg-white/90 p-6">
            <div className="border mb-5 rounded-xl border-dashed w-11 h-11 rounded-full flex items-center justify-center">
              <HiOutlineAcademicCap size={32} />
            </div>
            <h3 className="text-base uppercase mb-3 font-semibold">
              Agri Tech & Forestry
            </h3>
            <p className="text-zinc-600">
              This cluster powers a dynamic hub of talent, innovation, and R&D,
              driving economic growth across GMC and beyond.
            </p>
          </div>
          <div className="bg-white/90 p-6">
            <div className="border mb-5 rounded-xl border-dashed w-11 h-11 rounded-full flex items-center justify-center">
              <HiOutlineAcademicCap size={32} />
            </div>
            <h3 className="text-base uppercase mb-3 font-semibold">
              Agri Tech & Forestry
            </h3>
            <p className="text-zinc-600">
              This cluster powers a dynamic hub of talent, innovation, and R&D,
              driving economic growth across GMC and beyond.
            </p>
          </div>
          <div className="bg-white/90 p-6">
            <div className="border mb-5 rounded-xl border-dashed w-11 h-11 rounded-full flex items-center justify-center">
              <HiOutlineAcademicCap size={32} />
            </div>
            <h3 className="text-base uppercase mb-3 font-semibold">
              Agri Tech & Forestry
            </h3>
            <p className="text-zinc-600">
              This cluster powers a dynamic hub of talent, innovation, and R&D,
              driving economic growth across GMC and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto lg:px-24">
        <div className="">
          <h2 className="text-3xl uppercase font-semibold mb-3">
            Our partners
          </h2>
          <p className="max-w-sm text-zinc-600">
            We collaborate with world-leading urban development experts to shape
            tomorrow's cities
          </p>
        </div>
        <HorizontalInfiniteScroll
          items={logos}
          itemWidth={200}
          height="12rem"
          autoplay={true}
          autoplaySpeed={0.5}
          pauseOnHover={true}
        />
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EngageSection />
      <FeatureSection />
      <Partners />
    </>
  );
};

export default Home;
