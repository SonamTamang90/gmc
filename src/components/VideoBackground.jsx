import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const VideoBackground = ({ isPlaying, onClose }) => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);

  const containerVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const onAnimationComplete = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    if (videoRef.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  const handleClose = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  const handleProgressClick = (e) => {
    e.stopPropagation();
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    if (videoRef.current) {
      const newTime = (percentage / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const toggleSubtitles = (e) => {
    e.stopPropagation();
    setSubtitlesEnabled(!subtitlesEnabled);
    const tracks = videoRef.current?.textTracks;
    if (tracks?.[0]) {
      tracks[0].mode = subtitlesEnabled ? "hidden" : "showing";
    }
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          onAnimationComplete={onAnimationComplete}
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[#1a1a1a]"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-6xl px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              className="aspect-video w-full rounded-lg object-cover"
              playsInline
              onClick={handleVideoClick}
            >
              <source src="/videos/video-1.mp4" type="video/mp4" />
              <track
                kind="subtitles"
                src="/subtitles/video-1.vtt"
                srcLang="en"
                label="English"
                default
              />
            </video>

            {/* Controls */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-6 right-6 z-[60] flex items-center gap-4"
                >
                  {/* Subtitle Toggle */}
                  <button
                    onClick={toggleSubtitles}
                    className={`rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 ${
                      subtitlesEnabled ? "text-white" : "text-white/50"
                    }`}
                  >
                    CC
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                  >
                    <IoClose size={24} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            <div
              className="absolute right-0 -bottom-8 left-0 z-[55] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative h-8 w-full cursor-pointer"
                onClick={handleProgressClick}
              >
                <div className="absolute top-1/2 h-[2px] w-full -translate-y-1/2 overflow-hidden rounded-full">
                  {/* Background track */}
                  <div className="absolute inset-0 h-full w-full bg-white/20" />
                  {/* Progress fill */}
                  <div
                    className="absolute inset-0 h-full bg-white"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoBackground;
