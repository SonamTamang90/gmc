import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

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
    date: "August 15, 2025",
    category: "Green Energy",
    image: "/images/photo-1.JPG",
  },
  {
    id: 3,
    title: "International Education Hub Opens Doors",
    date: "August 15, 2025",
    category: "Education",
    image: "/images/photo-5.JPG",
  },
];

const NewsSection = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="relative w-full px-4 sm:px-6">
        {/* Header - Following FAQ and CoreIndustries pattern */}
        <div className="mb-2 h-px w-full bg-zinc-400/40" />
        <span className="mb-4 sm:mb-6 inline-block text-sm sm:text-base text-zinc-400">Latest Updates</span>
        <h2 className="mb-6 sm:mb-8 max-w-md text-2xl sm:text-3xl font-medium text-black">
          News & Announcements
        </h2>

        {/* News Grid */}
        <div className="grid gap-6 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

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
        once: false,
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

export default NewsSection;
