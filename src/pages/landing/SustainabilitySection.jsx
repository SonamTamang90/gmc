import { useRef } from "react";
import AnimatedLeafIcon from "../../components/icons/AnimatedLeafIcon";
import AnimatedHydroIcon from "../../components/icons/AnimatedHydroIcon";
import AnimatedEnergyIcon from "../../components/icons/AnimatedEnergyIcon";

const features = [
  {
    icon: "leaf",
    title: "Green area",
    description:
      "Sitting between the Royal Manas National Park and Phibsoo Wildlife Sanctuary, the city is designed to integrate with nature, not disrupt it.",
    position: "left",
  },
  {
    icon: "hydro",
    title: "Hydropower",
    description:
      "GMC will develop hydropower plants that will provide clean and renewable energy for both GMC and neighbouring India.",
    position: "right",
  },
  {
    icon: "energy",
    title: "Renewable energy",
    description:
      "The city will be powered by renewable energy sources, including hydropower, solar, and geothermal energy.",
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
    <section className="relative bg-black py-12 sm:py-16 md:py-20 lg:pt-11 lg:pb-32">
      <div className="w-full px-4 sm:px-6">
        {/* Header */}
        <div ref={lineRef} className="h-px w-full bg-white/20" />
        <h5
          ref={subTitleRef}
          className="mt-1 mb-4 inline-block text-sm text-white/80 sm:mb-5 sm:text-base"
        >
          Environmental Excellence
        </h5>
        <h2 className="mb-12 max-w-2xl text-2xl text-white sm:text-3xl md:mb-16 lg:mb-24">
          Leading the world in sustainable development
        </h2>
      </div>

      {/* Desktop: Full Width Map with Absolute Positioned Descriptions */}
      <div className="relative mx-auto hidden h-[700px] w-full max-w-[1800px] md:block">
        {/* 3D Map - Full Coverage */}
        <div className="absolute inset-0">
          <img
            src="/images/gmc-final.png"
            alt="GMC Sustainability Map"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Overlay Descriptions */}
        <div className="absolute inset-0 px-6 md:px-12 lg:px-16">
          {/* Left Side Features - Green Area */}
          <div className="absolute top-1/4 left-6 max-w-[280px] md:left-12 md:max-w-xs lg:left-16 lg:max-w-sm">
            {features
              .filter((f) => f.position === "left")
              .slice(0, 1)
              .map((feature, index) => (
                <div key={index} className="text-white">
                  <div className="mb-3 flex items-center gap-2 md:gap-3">
                    {getIconComponent(
                      feature.icon,
                      "h-6 w-6 flex-shrink-0 md:h-7 md:w-7",
                    )}
                    <h3 className="text-base leading-tight font-semibold md:text-lg lg:text-xl">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-white/70 md:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Right Side Features - Hydropower */}
          <div className="absolute top-[10%] right-6 max-w-[280px] md:right-12 md:max-w-xs lg:right-16 lg:max-w-sm">
            {features
              .filter((f) => f.position === "right")
              .map((feature, index) => (
                <div key={index} className="text-white">
                  <div className="mb-3 flex items-center gap-2 md:gap-3">
                    {getIconComponent(
                      feature.icon,
                      "h-6 w-6 flex-shrink-0 md:h-7 md:w-7",
                    )}
                    <h3 className="text-base leading-tight font-semibold md:text-lg lg:text-xl">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-white/70 md:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Bottom Left Feature - Renewable Energy */}
          <div className="absolute bottom-3 left-6 max-w-[280px] md:left-12 md:max-w-xs lg:left-16 lg:max-w-sm">
            {features
              .filter((f) => f.position === "left")
              .slice(1)
              .map((feature, index) => (
                <div key={index} className="text-white">
                  <div className="mb-3 flex items-center gap-2 md:gap-3">
                    {getIconComponent(
                      feature.icon,
                      "h-6 w-6 flex-shrink-0 md:h-7 md:w-7",
                    )}
                    <h3 className="text-base leading-tight font-semibold md:text-lg lg:text-xl">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-white/70 md:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
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
            <div key={index} className="text-white">
              <div className="mb-3 flex items-center gap-3">
                {getIconComponent(feature.icon, "h-7 w-7 flex-shrink-0")}
                <h3 className="text-lg leading-tight font-semibold sm:text-xl">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
