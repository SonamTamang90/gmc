import AboutSection from "./AboutSection";
import CommitmentSection from "./CommitmentSection";
import CoreIndustriesSection from "./CoreIndustriesSection";
import EnablersSection from "./EnablersSection";
import HeroSection from "./HeroSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <div className="relative overflow-x-hidden rounded-tl-2xl rounded-tr-2xl bg-white">
        <AboutSection />
        <CommitmentSection />
        <EnablersSection />
        <CoreIndustriesSection />
      </div>
    </div>
  );
};

export default Landing;
