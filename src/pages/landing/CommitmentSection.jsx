import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const commitments = [
  {
    title: "Holistic Development",
    desc: "Bhutan's Special Administrative Region balances economic growth with Gross National Happiness principles, prioritizing holistic wellbeing over mere GDP.",
    image: "/images/photo-2.JPG",
  },
  {
    title: "Distinctive Approach",
    desc: "Gelephu's Special Administrative Region showcases Bhutan's Gross National Happiness approach, balancing economic growth with human wellbeing and environmental sustainability.",
    image: "/images/photo-5.JPG",
  },
  {
    title: "A New Global Model",
    desc: "Bhutan's Special Administrative Region models sustainable development globally, balancing prosperity with wellbeing while offering hope amid conflict and environmental decline.",
    image: "/images/photo-4.JPG",
  },
];

const CommitmentSection = () => {
  const subTitleRef = useRef(null);
  const lineRef = useRef(null);
  const commitmentRefs = useRef([]);
  const descRefs = useRef([]);
  const imageRefs = useRef([]);

  commitmentRefs.current = [];
  descRefs.current = [];
  imageRefs.current = [];

  gsap.registerPlugin(ScrollTrigger);

  const addToCommitmentRefs = (el) => {
    if (el && !commitmentRefs.current.includes(el)) {
      commitmentRefs.current.push(el);
    }
  };

  const addToDescRefs = (el) => {
    if (el && !descRefs.current.includes(el)) {
      descRefs.current.push(el);
    }
  };

  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(subTitleRef.current, {
      y: -10,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: subTitleRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reset",
        markers: false,
        once: false,
      },
    });

    gsap.from(lineRef.current, {
      width: "0",
      opacity: 0,
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reset",
        markers: false,
        once: false,
      },
    });

    commitmentRefs.current.forEach((item, index) => {
      gsap.set(descRefs.current[index], {
        opacity: 0,
        y: 30,
      });

      gsap.set(imageRefs.current[index], {
        width: "75%",
        transformOrigin: "center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          markers: false,
          once: true,
        },
      });

      tl.to(descRefs.current[index], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }).to(
        imageRefs.current[index],
        {
          width: "100%",
          duration: 1,
          ease: "power2.inOut",
        },
        "<",
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="pb-20 md:pb-24">
      <div className="w-full px-6">
        <div ref={lineRef} className="h-px w-full bg-zinc-400/40" />
        <h5 ref={subTitleRef} className="mt-1 mb-5 inline-block text-zinc-400">
          GMC&apos;s core commitment
        </h5>
        <h2 className="mb-8 text-3xl md:mb-16">What we stand for</h2>

        <ul className="flex flex-col divide-y divide-zinc-400/40 border-t border-zinc-400/40">
          {commitments.map((commitment, index) => (
            <li
              key={index}
              ref={addToCommitmentRefs}
              className="flex flex-col space-y-0 py-4 md:flex-row md:space-y-6 md:space-x-32"
            >
              <div className="mb-4 flex items-start md:mb-0 md:gap-x-16">
                <span className="hidden text-xl text-zinc-400 md:block">{`0${index + 1}`}</span>
                <div>
                  <h3 className="mb-4 text-xl md:mb-8 md:text-2xl">
                    {commitment.title}
                  </h3>
                  <p ref={addToDescRefs} className="max-w-xs text-zinc-600">
                    {commitment.desc}
                  </p>
                </div>
              </div>
              <div className="mb-6 h-auto w-full overflow-hidden rounded-md md:mb-0 md:h-[280px] md:w-[450px]">
                <img
                  ref={addToImageRefs}
                  src={commitment.image}
                  className="w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CommitmentSection;
