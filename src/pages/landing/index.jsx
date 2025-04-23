import AboutSection from "./AboutSection";
import CommitmentSection from "./CommitmentSection";
import HeroSection from "./HeroSection";

const Landing = () => {
  return (
    <>
      <HeroSection />
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-white">
        <AboutSection />
        <CommitmentSection />
      </div>
    </>
  );
};

export default Landing;
