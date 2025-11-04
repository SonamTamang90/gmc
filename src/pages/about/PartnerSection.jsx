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

  const photos = [
    {
      id: 1,
      src: "/images/partner-photo-one.png",
      alt: "Partner collaboration",
    },
    {
      id: 2,
      src: "/images/partner-photo-two.png",
      alt: "Partnership event",
    },
  ];

  return (
    <section className="pb-12 md:pb-16">
      <div className="container mx-auto max-w-7xl px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-2 h-px w-full bg-zinc-400/40" />
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column - Photos */}
          <div className="space-y-6">
            {photos.map((photo) => (
              <div key={photo.id} className="overflow-hidden rounded-lg">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Divider Line */}
          <div className="relative">
            <div className="absolute top-0 left-0 hidden h-full w-px bg-zinc-400/40 md:-ml-8 md:block" />

            {/* Right Column - Partner Logos */}
            <div className="grid grid-cols-2 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="group flex items-center justify-center"
                >
                  {/* Logo Container */}
                  <div className="flex h-24 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 p-6 transition-all duration-300 group-hover:bg-gray-800">
                    <img
                      src={partner.logo}
                      alt={`Partner ${partner.id}`}
                      className="max-h-full max-w-full object-contain brightness-0 invert transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
