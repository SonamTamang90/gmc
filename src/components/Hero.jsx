import { HiOutlinePlay } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="hero h-screen bg-cover bg-center py-20">
      <div className="container px-8">
        <div className="mb-11">
          <h1 className="font-satoshi space-y-4 lg:text-9xl text-white/90 -tracking-tight mb-6">
            <span className="block">Gelephu</span>
            <span className="block">Mindfulness</span>
            <span className="block">City</span>
          </h1>
          <p className="text-white text-xl max-w-xl">
            GMC, positioned at Asia's crossroads, aims to be a vital hub
            connecting South Asia, Southeast Asia, and China.
          </p>
        </div>

        <button className="play-btn cursor-pointer bg-white rounded-full px-8 py-3 flex items-center gap-3 justify-center">
          <HiOutlinePlay size={24} />
          <span>Watch Video</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
