import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Thinley Choden",
      role: "SENIOR ARCHITECT",
      image: "/images/team-one.png",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Erik Pedersen",
      role: "PROJECT MANAGER",
      image: "/images/team-two.png",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Susmita Rai",
      role: "CREATIVE DIRECTOR",
      image: "/images/team-three.png",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Anna Larsen",
      role: "DESIGN LEAD",
      image: "/images/team-four.png",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Yonten Jamtsho",
      role: "SUSTAINABILITY DIRECTOR",
      image: "/images/team-seven.png",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Mark Nguguen",
      role: "OPERATIONS MANAGER",
      image: "/images/team-six.png",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-2 h-px w-full bg-zinc-400/40" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-20 lg:gap-32">
            {/* Left Column - Heading */}
            <div className="md:col-span-2">
              <h2 className="text-5xl leading-tight font-light tracking-tight text-gray-900 md:text-6xl lg:text-4xl">
                Meet Our Team
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="md:col-span-3 md:max-w-xl">
              <p className="text-base leading-relaxed text-gray-500 md:text-lg lg:text-base">
                Passionate professionals dedicated to bringing His
                Majesty&apos;s vision to life through innovative design and
                mindful development.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Role and Social Icons */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest text-gray-500">
                    {member.role}
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={member.social.instagram}
                      className="text-gray-400 transition-colors hover:text-gray-900"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={16} />
                    </a>
                    <a
                      href={member.social.facebook}
                      className="text-gray-400 transition-colors hover:text-gray-900"
                      aria-label="Facebook"
                    >
                      <FaFacebookF size={16} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 transition-colors hover:text-gray-900"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-light tracking-tight text-gray-900 md:text-3xl">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
