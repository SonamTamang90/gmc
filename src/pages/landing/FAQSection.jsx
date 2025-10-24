import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PropTypes from "prop-types";

const faqs = [
  {
    question: "What industries is GMC focusing on?",
    answer:
      "GMC is focusing on six core industries: Agri Tech & Forestry, Finance, Health & Wellness, Airport Economy, Education & Knowledge, and Green Energy & Tech Industry. These sectors have been strategically selected to drive economic growth while aligning with Bhutan's sustainable development goals.",
  },
  {
    question: "How does GMC promote sustainability?",
    answer:
      "GMC promotes sustainability by incorporating Bhutan's Gross National Happiness principles into its economic development model. This approach balances economic growth with environmental conservation, cultural preservation, and social well-being. All development projects must meet strict sustainability criteria, including renewable energy usage, waste reduction, and ecological footprint minimization.",
  },
  {
    question: "What investment opportunities are available in GMC?",
    answer:
      "GMC offers various investment opportunities across its six core industries. Investors can participate in sustainable agriculture projects, green energy initiatives, educational institutions, healthcare facilities, financial services, and airport-related businesses. The Special Administrative Region provides favorable investment conditions, including special tax incentives and streamlined regulatory processes.",
  },
  {
    question: "How does GMC support local businesses?",
    answer:
      "GMC supports local businesses through capacity building programs, access to financing, technical assistance, and market linkages. The initiative aims to empower local entrepreneurs to participate in and benefit from the economic opportunities created. GMC also facilitates partnerships between local and international businesses to promote knowledge transfer and sustainable development.",
  },
  {
    question: "What makes GMC different from other development initiatives?",
    answer:
      "GMC stands apart through its holistic approach that balances economic development with Bhutan's Gross National Happiness principles. Unlike conventional development models focused solely on GDP growth, GMC prioritizes human wellbeing, cultural preservation, environmental sustainability, and good governance, creating a unique development paradigm that could serve as a global model.",
  },
  {
    question: "How can I get involved with GMC?",
    answer:
      "Individuals and organizations can get involved with GMC through various channels including investment opportunities, partnership initiatives, employment, volunteer programs, and educational exchanges. Visit our contact page or reach out to our partnership office for specific information on how to engage with GMC based on your interests and capabilities.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#151515] py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(/images/eternal-knot.svg)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />
      <div className="w-full px-6 relative z-10">
        <div className="mb-2 h-px w-full bg-zinc-600" />
        <span className="mb-6 inline-block text-zinc-400">Common Questions</span>
        <h2 className="mb-12 max-w-md text-3xl font-medium text-white">
          Frequently Asked Questions
        </h2>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, isActive, onClick }) => {
  const contentRef = useRef(null);

  useGSAP(() => {
    if (isActive) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power1.in",
      });
    }
  }, [isActive]);

  return (
    <div className="border-b border-zinc-700 py-5">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={onClick}
        aria-expanded={isActive}
      >
        <h3 className="pr-8 text-lg font-medium text-white">{question}</h3>
        <span
          className={`transform transition-transform duration-300 text-zinc-400 rounded-full border border-zinc-700 p-2 flex items-center justify-center ${isActive ? "rotate-45" : "rotate-0"}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0V16M0 8H16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </button>

      <div
        ref={contentRef}
        className="h-0 overflow-hidden opacity-0"
        aria-hidden={!isActive}
      >
        <p className="max-w-2xl pt-4 pb-2 text-justify text-zinc-300">
          {answer}
        </p>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FAQSection;
