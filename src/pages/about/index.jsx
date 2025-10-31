import { HiChevronDoubleDown } from "react-icons/hi";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="sticky top-0 left-0 flex h-screen items-end justify-center overflow-hidden pb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/gelephu-airport.jpg"
            alt="Gelephu Airport"
            className="h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content - Positioned above scroll indicator */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-8">
          <h1 className="max-w-4xl text-center text-[40px] font-light tracking-tight text-white">
            Building Bhutan's Future: A Vision for Mindful Innovation
          </h1>

          {/* Scroll Indicator */}
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-white/70 transition-opacity hover:opacity-100"
          >
            <span className="text-sm tracking-widest uppercase">
              Discover Our Story
            </span>
            <HiChevronDoubleDown size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative overflow-x-hidden rounded-tl-2xl rounded-tr-2xl bg-white">
        <div className="container mx-auto max-w-7xl px-8 py-24 md:py-32">
          {/* About GMC Section - Two Column Layout */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-20 lg:gap-32">
            {/* Left Column - Heading (40%) */}
            <div className="md:col-span-2">
              <h2 className="sticky top-24 text-5xl leading-tight font-light tracking-tight text-gray-900 md:text-6xl lg:text-4xl">
                A Vision for Mindfulness and Prosperity
              </h2>
            </div>

            {/* Right Column - Content (60%) */}
            <div className="space-y-6 md:col-span-3 md:max-w-xl">
              {/* Intro paragraph - larger, darker */}
              <p className="text-base leading-relaxed text-gray-900 md:text-lg">
                Gelephu Mindfulness City (GMC) is His Majesty The King&apos;s
                vision to create a place where mindfulness meets prosperity. In
                a world facing growing challenges, GMC offers a new approach to
                development—one that blends Bhutan&apos;s rich spiritual
                heritage and respect for nature with cutting-edge innovation and
                economic opportunity.
              </p>

              {/* Remaining paragraphs - smaller, lighter */}
              <p className="text-sm leading-relaxed text-gray-500 md:text-base lg:text-sm">
                GMC also serves as His Majesty&apos;s local vision to act as a
                catalyst of change for Bhutan&apos;s administrative reform and
                economic advancement under the concept of &quot;One Country, Two
                Systems&quot;.
              </p>

              <p className="text-sm leading-relaxed text-gray-500 md:text-base lg:text-sm">
                Located in Bhutan&apos;s southern plains bordering the State of
                Assam in India and spanning over 2,600 km², or 5% of Bhutan, GMC
                was established by Royal Charter in December 2024 as a highly
                autonomous Special Administrative Region (SAR).
              </p>

              <p className="text-sm leading-relaxed text-gray-500 md:text-base lg:text-sm">
                Through this Royal mandate, GMC is accorded full executive and
                legislative powers, with an independent judiciary, to govern the
                SAR separate from the Royal Government of Bhutan. Under the
                direct guidance of His Majesty, GMC will be run by global and
                local talents to build an advanced economy by adopting and
                adapting the best governing policies and business practices from
                around the world.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-16 md:mt-24">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/photo-7.png"
                alt="Gelephu Mindfulness City"
                className="h-[400px] w-full object-cover md:h-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
