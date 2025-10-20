import { useRef } from "react";
import AnimatedLeafIcon from "../../components/icons/AnimatedLeafIcon";
import AnimatedHydroIcon from "../../components/icons/AnimatedHydroIcon";
import AnimatedEnergyIcon from "../../components/icons/AnimatedEnergyIcon";
import { FadeIn } from "../../components/animations/FadeInStagger";

const features = [
  {
    icon: "leaf",
    title: "Green area",
    description:
      "Situated between Royal Manas National Park and Phibsoo Wildlife Sanctuary, the city integrates seamlessly with nature.",
    position: "left",
  },
  {
    icon: "hydro",
    title: "Hydropower",
    description:
      "Clean hydropower plants will provide sustainable renewable energy for both GMC and neighbouring India.",
    position: "right",
  },
  {
    icon: "energy",
    title: "Renewable energy",
    description:
      "The city operates on 100% renewable sources including hydropower, solar, and geothermal energy.",
    position: "left",
  },
];

const getIconComponent = (iconName, className) => {
  switch (iconName) {
    case "leaf":
      return <AnimatedLeafIcon className={className} />;
    case "hydro":
      return <AnimatedHydroIcon className={className} />;
    case "energy":
      return <AnimatedEnergyIcon className={className} />;
    default:
      return null;
  }
};

const SustainabilitySection = () => {
  const subTitleRef = useRef(null);
  const lineRef = useRef(null);

  return (
    <section className="relative bg-black py-8 sm:py-12 md:py-12 lg:py-12">
      <div className="w-full px-4 sm:px-6">
        {/* Header */}
        <div ref={lineRef} className="h-px w-full bg-white/20" />
        <h5
          ref={subTitleRef}
          className="mt-1 mb-3 inline-block text-sm text-white/80 sm:mb-4 sm:text-base"
        >
          Environmental Excellence
        </h5>
        <h2 className="mb-6 max-w-2xl text-2xl text-white sm:text-3xl md:mb-8 lg:mb-10">
          Leading the world in sustainable development
        </h2>
      </div>

      {/* Desktop: Features Above Map with Lines */}
      <div className="hidden w-full md:block">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          {/* Features Grid - 3 Columns Above Map */}
          <div className="relative z-20 mb-8 grid grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} className="relative text-white">
                <div className="rounded-lg border border-white/10 bg-black/50 p-4 backdrop-blur-sm lg:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    {getIconComponent(
                      feature.icon,
                      "h-7 w-7 flex-shrink-0 lg:h-8 lg:w-8",
                    )}
                    <h3 className="text-lg leading-tight font-semibold lg:text-xl">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70 lg:text-sm">
                    {feature.description}
                  </p>
                </div>
                {/* Pointer Line */}
                <div
                  className="absolute left-1/2 z-30 w-0.5 -translate-x-1/2 bg-gradient-to-b from-white/70 via-white/50 to-black"
                  style={{
                    height:
                      index === 0 ? "380px" : index === 1 ? "100px" : "380px",
                    top: "100%",
                  }}
                />
              </FadeIn>
            ))}
          </div>

          {/* 3D Map - Full Width */}
          <div className="relative z-10 w-full">
            <img
              src="/images/3D-map.png"
              alt="GMC Sustainability Map"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Stacked Layout */}
      <div className="block md:hidden">
        {/* Map Image */}
        <div className="relative mx-auto mb-8 h-[400px] w-full max-w-2xl px-4 sm:h-[500px] sm:px-6">
          <img
            src="/images/gmc-final.png"
            alt="GMC Sustainability Map"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Features Grid */}
        <div className="space-y-6 px-4 sm:space-y-8 sm:px-6">
          {features.map((feature, index) => (
            <FadeIn key={index} className="text-white">
              <div className="mb-3 flex items-center gap-3">
                {getIconComponent(feature.icon, "h-7 w-7 flex-shrink-0")}
                <h3 className="text-lg leading-tight font-semibold sm:text-xl">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
