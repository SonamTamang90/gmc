import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Container from "../../components/layouts/Container";

const commitments = [
  {
    title: "Holistic Development",
    description:
      "Bhutan's Special Administrative Region balances economic growth with Gross National Happiness principles, prioritizing holistic wellbeing over mere GDP.",
    image: "/images/holistic_approach.JPG",
  },
  {
    title: "Distinctive Approach",
    description:
      "Gelephu's Special Administrative Region showcases Bhutan's Gross National Happiness approach, balancing economic growth with human wellbeing and environmental sustainability.",
    image: "/images/photo-2.JPG",
  },
  {
    title: "A New Global Modal",
    description:
      "Bhutan's Special Administrative Region models sustainable development globally, balancing prosperity with wellbeing while offering hope amid conflict and environmental decline.",
    image: "/images/photo-4.JPG",
  },
];

const CommitmentSection = () => {
  const commitmentSectionRef = useRef(null);
  const lineRef = useRef(null);
  const labelRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(lineRef.current, {
      width: "100%",
      duration: 1.2,
      ease: "power2.out",
    });

    tl.from(labelRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });
  });

  return (
    <section className="relative pb-24" ref={commitmentSectionRef}>
      <Container>
        <div className="mt-5 h-px w-0 bg-black/10" ref={lineRef} />
        <span ref={labelRef} className="mt-1 mb-5 inline-block text-zinc-400">
          GMC’s core commitment
        </span>
        <h2 className="mb-5 text-3xl">What we stand for</h2>

        {/* Lists of commitment's */}
        <div className="mt-18">
          <div className="my-5 h-px bg-black/10" />
          <ul className="flex flex-col space-y-6 divide-y divide-black/10">
            {commitments.map((commitment, index) => (
              <li
                key={commitment.title}
                className="flex flex-col items-center gap-8 pb-6 md:flex-row md:items-start md:gap-16"
              >
                <div className="flex w-full flex-col md:w-auto md:flex-row md:gap-16">
                  <p className="mb-2 text-lg text-zinc-400 md:mb-0">{`0${index + 1}`}</p>
                  <div className="max-w-full space-y-4 md:max-w-xs md:space-y-5">
                    <h3 className="text-xl font-semibold md:text-xl">
                      {commitment.title}
                    </h3>
                    <p className="dark:text-dark-600 text-gray-700">
                      {commitment.description}
                    </p>
                  </div>
                </div>

                <div className="h-[280px] w-full overflow-hidden rounded-lg md:w-[450px]">
                  <img
                    src={commitment.image}
                    alt="Holistic Development in Bhutan"
                    className="aspect-2/4 size-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default CommitmentSection;
