import { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import PropTypes from "prop-types";

const jobsByDepartment = {
  Management: [
    {
      id: 1,
      name: "Chief Executive Officer",
      initials: "CEO",
      role: "Executive Director",
      experience: "McKinsey & Company, Goldman Sachs, Harvard Business School",
      education: "MBA, Harvard Business School; BA, Economics, Yale University",
      focus: "Strategic Leadership, Urban Development, Sustainable Growth",
      linkedin: "#",
      requirements: [
        "15+ years of executive leadership experience",
        "Proven track record in sustainable urban development",
        "Strong strategic planning and execution skills",
      ],
    },
    {
      id: 2,
      name: "Chief Operations Officer",
      initials: "COO",
      role: "Executive Director",
      experience: "Deloitte, PwC, Singapore Smart Nation Initiative",
      education:
        "MBA, INSEAD; BSc, Engineering, National University of Singapore",
      focus:
        "Operations Management, Process Optimization, Smart City Infrastructure",
      linkedin: "#",
      requirements: [
        "12+ years in operations management",
        "Experience with smart city projects",
        "Expertise in scaling operations",
      ],
    },
  ],
  Sustainability: [
    {
      id: 3,
      name: "Sustainability Director",
      initials: "SD",
      role: "Director",
      experience:
        "C40 Cities, World Resources Institute, UN Environment Programme",
      education:
        "PhD, Environmental Science, MIT; MSc, Sustainability, Cambridge",
      focus: "Climate Action, Circular Economy, Green Infrastructure",
      linkedin: "#",
      requirements: [
        "10+ years in sustainability leadership",
        "Deep understanding of climate science",
        "Experience with international sustainability frameworks",
      ],
    },
    {
      id: 4,
      name: "Senior Sustainability Architect",
      initials: "SA",
      role: "Senior Architect",
      experience: "BIG (Bjarke Ingels Group), Foster + Partners",
      education: "M.Arch, Sustainable Design, ETH Zurich; B.Arch, TU Delft",
      focus: "Green Building Design, Passive Systems, Net-Zero Architecture",
      linkedin: "#",
      requirements: [
        "8+ years in sustainable architecture",
        "LEED AP or equivalent certification",
        "Portfolio of completed green building projects",
      ],
    },
  ],
  "Green Energy": [
    {
      id: 5,
      name: "Renewable Energy Director",
      initials: "RE",
      role: "Director",
      experience: "Tesla Energy, Ørsted, International Renewable Energy Agency",
      education:
        "PhD, Renewable Energy Systems, Stanford; BSc, Electrical Engineering, MIT",
      focus: "Solar & Wind Energy, Energy Storage, Grid Integration",
      linkedin: "#",
      requirements: [
        "10+ years in renewable energy sector",
        "Experience with large-scale energy projects",
        "Strong technical and business acumen",
      ],
    },
    {
      id: 6,
      name: "Energy Systems Engineer",
      initials: "ES",
      role: "Senior Engineer",
      experience: "Siemens Energy, GE Renewable Energy",
      education:
        "MSc, Energy Engineering, Technical University of Denmark; BSc, Mechanical Engineering",
      focus: "Energy Systems Design, Power Distribution, Smart Grids",
      linkedin: "#",
      requirements: [
        "6+ years in energy systems engineering",
        "Experience with renewable integration",
        "Knowledge of smart grid technologies",
      ],
    },
  ],
  Technology: [
    {
      id: 7,
      name: "Chief Technology Officer",
      initials: "CTO",
      role: "Executive Director",
      experience: "Google X, Microsoft Smart Cities, IBM Watson",
      education: "PhD, Computer Science, Carnegie Mellon; BS, MIT",
      focus:
        "AI & Machine Learning, IoT Infrastructure, Digital Transformation",
      linkedin: "#",
      requirements: [
        "15+ years in technology leadership",
        "Experience with smart city platforms",
        "Expertise in AI/ML and IoT",
      ],
    },
    {
      id: 8,
      name: "Smart City Platform Lead",
      initials: "SP",
      role: "Technical Lead",
      experience: "Cisco Smart Cities, Amazon Web Services, Alibaba Cloud",
      education: "MS, Computer Engineering, Stanford; BS, Software Engineering",
      focus: "IoT Platforms, Data Analytics, Cloud Infrastructure",
      linkedin: "#",
      requirements: [
        "8+ years in platform development",
        "Experience with IoT and cloud technologies",
        "Strong system architecture skills",
      ],
    },
  ],
  Education: [
    {
      id: 9,
      name: "Education Programs Director",
      initials: "EP",
      role: "Director",
      experience: "UNESCO, Teach For All, Khan Academy",
      education:
        "EdD, Harvard Graduate School of Education; MA, Education Policy, Columbia",
      focus:
        "Curriculum Development, Educational Innovation, Community Learning",
      linkedin: "#",
      requirements: [
        "10+ years in education leadership",
        "Experience with innovative learning models",
        "Strong community engagement skills",
      ],
    },
  ],
};

const VacancyItem = ({
  vacancy,
  isExpanded,
  onToggle,
  isFirst,
  departmentColor,
}) => {
  return (
    <div className={`border-b border-gray-200 ${isFirst ? "pb-6" : "py-6"}`}>
      <div
        className="flex cursor-pointer items-start justify-between gap-4"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${departmentColor} text-white`}
          >
            <span className="text-sm font-medium">{vacancy.initials}</span>
          </div>
          <div>
            <h3 className="text-base font-normal text-gray-900">
              {vacancy.name}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-right text-sm text-gray-500 italic">
            {vacancy.role}
          </span>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-6 grid grid-cols-1 gap-6 pl-16 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-900">
                Experience
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {vacancy.experience}
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-900">
                Education
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {vacancy.education}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-900">Focus</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {vacancy.focus}
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium text-gray-900">
                Requirements
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {vacancy.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={vacancy.linkedin}
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              <span>Apply Now</span>
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

VacancyItem.propTypes = {
  vacancy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    focus: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  isFirst: PropTypes.bool,
  departmentColor: PropTypes.string.isRequired,
};

const DepartmentSection = ({ departmentName, vacancies }) => {
  const [expandedId, setExpandedId] = useState(null);

  // Assign colors based on department
  const getDepartmentColor = (dept) => {
    const colorMap = {
      Management: "bg-gray-900",
      Sustainability: "bg-green-700",
      "Green Energy": "bg-emerald-600",
      Technology: "bg-teal-700",
      Education: "bg-amber-700",
    };
    return colorMap[dept] || "bg-gray-800";
  };

  const departmentColor = getDepartmentColor(departmentName);

  return (
    <section className="mb-12">
      <div className="mb-6 h-px w-full bg-zinc-400/40" />
      <div className="flex items-start gap-8 pt-6 md:gap-16">
        <h2 className="w-40 flex-shrink-0 text-xl font-normal text-gray-900 md:w-48">
          {departmentName}
        </h2>
        <div className="flex-1">
          {vacancies.map((vacancy, index) => (
            <VacancyItem
              key={vacancy.id}
              vacancy={vacancy}
              isExpanded={expandedId === vacancy.id}
              onToggle={() =>
                setExpandedId(expandedId === vacancy.id ? null : vacancy.id)
              }
              isFirst={index === 0}
              departmentColor={departmentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

DepartmentSection.propTypes = {
  departmentName: PropTypes.string.isRequired,
  vacancies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      initials: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const Careers = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="sticky top-0 left-0 flex h-screen items-end justify-center overflow-hidden pb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/bg-one.png"
            alt="Careers"
            className="h-full w-full object-cover"
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
        </div>

        {/* Content - Positioned above scroll indicator */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-8">
          <h1 className="max-w-4xl text-center text-[40px] font-light tracking-tight text-white">
            Build the Future with GMC
          </h1>

          {/* Scroll Indicator */}
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-white/70 transition-opacity hover:opacity-100"
          >
            <span className="text-sm tracking-widest uppercase">
              Explore Opportunities
            </span>
            <HiChevronDoubleDown size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative overflow-x-hidden rounded-tl-2xl rounded-tr-2xl bg-white">
        <div className="container mx-auto max-w-7xl px-8 pt-12 pb-32 md:pt-16 md:pb-40">
          {/* Careers Content Section */}
          <div className="mb-2 h-px w-full bg-zinc-400/40" />

          {/* Intro Text */}
          <div className="mt-6 mb-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-20 lg:gap-32">
              {/* Left Column - Heading */}
              <div className="md:col-span-2">
                <h2 className="text-5xl leading-tight font-light tracking-tight text-gray-900 md:text-6xl lg:text-4xl">
                  Join Our Team
                </h2>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 md:col-span-3 md:max-w-xl">
                <p className="text-base leading-relaxed text-gray-900 md:text-lg">
                  Be part of building Bhutan&apos;s most ambitious urban
                  development project. We&apos;re looking for passionate
                  professionals who share our vision of mindful innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Culture Image Section */}
          <div className="mb-16 md:mb-20">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/bg-two.png"
                alt="GMC Team Culture"
                className="h-[400px] w-full object-cover md:h-[500px]"
              />
            </div>
          </div>

          {/* Departments and Vacancies */}
          {Object.entries(jobsByDepartment).map(
            ([departmentName, vacancies]) => (
              <DepartmentSection
                key={departmentName}
                departmentName={departmentName}
                vacancies={vacancies}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
