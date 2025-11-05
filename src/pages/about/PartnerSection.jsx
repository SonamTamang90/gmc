const PartnerSection = () => {
  const partners = [
    {
      id: 1,
      logo: "/partner-one.svg",
    },
    {
      id: 2,
      logo: "/partner-two.svg",
    },
    {
      id: 3,
      logo: "/partner-three.svg",
    },
    {
      id: 4,
      logo: "/partner-four.svg",
    },
    {
      id: 5,
      logo: "/partner-five.svg",
    },
    {
      id: 6,
      logo: "/partner-six.svg",
    },
  ];

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="pb-12 md:pb-16">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="mb-2 h-px w-full bg-zinc-400/40" />

        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-20 lg:gap-32">
            {/* Left Column - Heading */}
            <div className="md:col-span-2">
              <h2 className="text-5xl leading-tight font-light tracking-tight text-gray-900 md:text-6xl lg:text-4xl">
                Our Partners
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="md:col-span-3 md:max-w-xl">
              <p className="text-base leading-relaxed text-gray-500 md:text-lg lg:text-base">
                Collaborating with global leaders and organizations who share
                our vision for mindful development and sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Infinite Horizontal Scroll Container */}
        <div className="relative overflow-hidden">
          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent md:w-48" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent md:w-48" />

          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="group mx-4 flex-shrink-0"
              >
                <div className="flex h-32 w-48 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:border-gray-300 hover:shadow-md">
                  <img
                    src={partner.logo}
                    alt={`Partner ${partner.id}`}
                    className="h-12 w-auto object-contain opacity-70 invert grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
