import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <div className="relative rounded-tl-2xl rounded-tr-2xl bg-white">
        <AboutSection />
      </div>
    </div>
  );
};

export default Landing;
