import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const slides = [
  {
    id: 1,
    title: "Mountainside Retreat",
    subtitle: "Take a PIQUE",
    image: "/images/slide-1.webp",
    stats: {
      beds: 1,
      baths: 1,
      area: "69.35m²",
    },
  },
  {
    id: 2,
    title: "Point Piquet",
    image: "/images/slide-2.jpg",
  },
  {
    id: 3,
    title: "Shorehouse",
    image: "/images/about.webp",
  },
];

const SwiperSlider = () => {
  const [progress, setProgress] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = () => {
    if (!swiper) return;
    const slideProgress = swiper.realIndex / (swiper.slides.length - 1);
    setProgress(slideProgress * 100);
  };

  const goToSlide = (direction) => {
    if (!swiper) return;
    if (direction === "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <div className="relative w-full bg-gray-100 px-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={3}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        className="pb-16"
        loop={true}
        speed={800}
        initialSlide={0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    {slide.subtitle && (
                      <div className="text-sm text-white/90">
                        {slide.subtitle}
                      </div>
                    )}
                    <div className="text-xl font-medium text-white">
                      {slide.title}
                    </div>
                    {slide.stats && (
                      <div className="mt-2 flex items-center gap-4 text-sm text-white/90">
                        <span>{slide.stats.beds} 🛏️</span>
                        <span>{slide.stats.baths} 🚿</span>
                        <span>{slide.stats.area}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute right-0 bottom-0 left-0 flex items-center justify-center gap-8 pb-4">
        <button
          onClick={() => goToSlide("prev")}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-700"
        >
          <HiOutlineChevronLeft />
        </button>

        <div className="relative h-0.5 w-16 bg-gray-300">
          <div
            className="absolute top-0 left-0 h-full bg-gray-900 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={() => goToSlide("next")}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-700"
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SwiperSlider;
