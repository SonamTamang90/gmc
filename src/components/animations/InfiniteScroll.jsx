import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const InfiniteScrollText = ({
  text = "Sample Scrolling Text • ",
  duration = 20,
  className = "",
  reverse = false,
}) => {
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (textRef.current) {
      // Get the width of a single text instance
      const width = textRef.current.offsetWidth;
      setTextWidth(width);

      // Animate with precise width
      controls
        .start({
          x: reverse ? [-width] : [0],
          transition: {
            duration: 0,
            ease: "linear",
          },
        })
        .then(() => {
          controls.start({
            x: reverse ? [0, -width] : [-width, 0],
            transition: {
              duration,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          });
        });
    }
  }, [textRef, reverse, duration, controls]);

  // Create enough copies to ensure smooth looping
  const copies = 3;
  const textArray = Array(copies).fill(text);

  return (
    <div className="w-full overflow-hidden py-4">
      <motion.div className="flex whitespace-nowrap" animate={controls}>
        {textArray.map((text, index) => (
          <span
            key={index}
            ref={index === 0 ? textRef : null}
            className={`inline-block flex-none ${className}`}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;
