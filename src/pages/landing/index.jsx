import AboutSection from "./AboutSection";
import CommitmentSection from "./CommitmentSection";
import CoreIndustriesSection from "./CoreIndustriesSection";
// import EnablersSection from "./EnablersSection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import NewsSection from "./NewsSection";
import SustainabilitySection from "./SustainabilitySection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <div className="relative overflow-x-hidden rounded-tl-2xl rounded-tr-2xl bg-white">
        <AboutSection />
        <CommitmentSection />
        <SustainabilitySection />
        {/* <EnablersSection /> */}
        <CoreIndustriesSection />
        <FAQSection />
        <NewsSection />
      </div>
    </div>
  );
};

export default Landing;
