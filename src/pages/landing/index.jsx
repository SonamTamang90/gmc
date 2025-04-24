import AboutSection from "./AboutSection";
import CommitmentSection from "./CommitmentSection";
import HeroSection from "./HeroSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <div className="relative rounded-tl-2xl rounded-tr-2xl bg-white">
        <AboutSection />
        <CommitmentSection />
      </div>
    </div>
  );
};

export default Landing;
