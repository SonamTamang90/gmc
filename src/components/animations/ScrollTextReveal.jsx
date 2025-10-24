import gsap from "gsap";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const ScrollTextReveal = ({
  children,
  className,
  startColor = "#9CA3AF",
  endColor = "#000000",
  staggerAmount = 0.2,
}) => {
  const textRef = useRef(null);

  useGSAP(() => {
    if (!textRef.current) return;
    const element = textRef.current;

    const originalHtml = element.innerHTML;

    const words = originalHtml.split(/\s+/);

    const newHtml = words
      .map(
        (word) =>
          `<span style="display:inline-block; color:${startColor};">${word}</span>`,
      )
      .join(" ");

    element.innerHTML = newHtml;

    const wordSpans = element.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    wordSpans.forEach((word, index) => {
      tl.to(
        word,
        {
          color: endColor,
          duration: 0.5,
          ease: "power1.inOut",
        },
        index * staggerAmount,
      );
    });

    return () => {
      element.innerHTML = originalHtml;
    };
  }, [startColor, endColor, staggerAmount, children]);

  return (
    <h2 ref={textRef} className={className}>
      {children}
    </h2>
  );
};

export default ScrollTextReveal;

ScrollTextReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  startColor: PropTypes.string,
  endColor: PropTypes.string,
  staggerAmount: PropTypes.number,
};
