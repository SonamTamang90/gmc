import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HiChevronDoubleDown } from "react-icons/hi";
import PropTypes from "prop-types";

const newsArticles = [
  {
    id: 1,
    title: "GMC Launches Sustainable Agriculture Initiative",
    date: "August 15, 2025",
    category: "Sustainability",
    image: "/images/photo-2.JPG",
  },
  {
    id: 2,
    title: "New Green Energy Partnership Announced",
    date: "August 12, 2025",
    category: "Green Energy",
    image: "/images/photo-1.JPG",
  },
  {
    id: 3,
    title: "International Education Hub Opens Doors",
    date: "August 10, 2025",
    category: "Education",
    image: "/images/photo-5.JPG",
  },
  {
    id: 4,
    title: "Smart City Infrastructure Project Launch",
    date: "August 8, 2025",
    category: "Technology",
    image: "/images/photo-3.JPG",
  },
  {
    id: 5,
    title: "Community Wellness Program Expansion",
    date: "August 5, 2025",
    category: "Sustainability",
    image: "/images/photo-4.JPG",
  },
  {
    id: 6,
    title: "Renewable Energy Milestone Achieved",
    date: "August 1, 2025",
    category: "Green Energy",
    image: "/images/photo-6.JPG",
  },
];

const NewsCard = ({ article }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        end: "top 65%",
        toggleActions: "play none none reset",
        once: true,
      },
    });
  }, []);

  return (
    <article ref={cardRef} className="group cursor-pointer">
      {/* Image */}
      <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl bg-zinc-100">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Content */}
      <div className="mt-4 sm:mt-6">
        <div className="mb-3 sm:mb-4 flex items-center gap-2 text-sm flex-wrap">
          <span className="text-zinc-500 text-xs sm:text-sm">{article.date}</span>
          <span className="text-zinc-500">•</span>
          <span className="uppercase text-[10px] sm:text-xs font-medium bg-zinc-100 text-zinc-700 px-2 py-1 rounded">
            {article.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-medium text-black inline decoration-transparent group-hover:decoration-black underline underline-offset-4 decoration-1 transition-[text-decoration-color] duration-500 ease-out">
          {article.title}
        </h3>
      </div>
    </article>
  );
};

NewsCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const News = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Sustainability", "Green Energy", "Education", "Technology"];

  const filteredNews = activeTab === "All"
    ? newsArticles
    : newsArticles.filter(article => article.category === activeTab);

  return (
    <div>
      {/* Hero Section */}
      <div className="sticky top-0 left-0 flex h-screen items-end justify-center overflow-hidden pb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/bg-one.png"
            alt="News"
            className="h-full w-full object-cover"
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
        </div>

        {/* Content - Positioned above scroll indicator */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-8">
          <h1 className="max-w-4xl text-center text-[40px] font-light tracking-tight text-white">
            Latest News & Updates
          </h1>

          {/* Scroll Indicator */}
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-white/70 transition-opacity hover:opacity-100"
          >
            <span className="text-sm tracking-widest uppercase">
              Explore News
            </span>
            <HiChevronDoubleDown size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative overflow-x-hidden rounded-tl-2xl rounded-tr-2xl bg-white">
        <div className="container mx-auto max-w-7xl px-8 pt-12 md:pt-16 pb-24">
          {/* News Content Section */}
          <div className="mb-2 h-px w-full bg-zinc-400/40" />

          {/* Tabs Navigation */}
          <div className="mb-12 mt-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === category
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No news articles found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
