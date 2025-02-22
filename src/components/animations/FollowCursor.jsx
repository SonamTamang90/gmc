import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlinePlay } from "react-icons/hi2";

const FollowCursor = ({ onPlayClick, isVideoPlaying }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shouldShowCursor, setShouldShowCursor] = useState(true);

  useEffect(() => {
    if (isVideoPlaying) {
      setShouldShowCursor(false);
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkScroll = () => {
      setShouldShowCursor(window.scrollY < 100);
    };

    checkScroll();
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", checkScroll);
    };
  }, [isVideoPlaying]);

  const variants = {
    visible: {
      opacity: 1,
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      scale: 0.8,
    },
  };

  if (isVideoPlaying) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {shouldShowCursor && (
        <motion.div
          variants={variants}
          animate="visible"
          initial="hidden"
          exit="hidden"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            opacity: { duration: 0.2 },
          }}
          onClick={(e) => {
            e.stopPropagation();
            onPlayClick();
          }}
          className="fixed z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
        >
          <HiOutlinePlay size={24} className="text-white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FollowCursor;
