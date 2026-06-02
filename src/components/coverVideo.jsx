import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const CoverVideo = () => {
  return (
    /* Main container is full screen height, styled black to fill the outer spacing */
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Video - Takes up 80% height on mobile (leaving 20% blank space) and full height on desktop */}
      <video
        className="absolute h-[80vh] sm:h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/Big tree growth BG.mp4"
      />

      {/* Simple Dull Overlay - Kept matching the video frame size boundaries */}
      <div className="absolute h-[80vh] sm:h-full w-full bg-black/50"></div>

      {/* Animated Text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center pt-[29vh] h-full text-white px-4 text-center"
      >
        {/* Original Font Pattern Kept Intact - Scaled cleanly via breakpoints */}
        <div className="flex justify-center gap-1 sm:gap-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest">
          {"GreenTail".split("").map((letter, index) => (
            <motion.h1 key={index} variants={item}>
              {letter}
            </motion.h1>
          ))}
        </div>

        <motion.h2
          variants={item}
          className="mt-6 text-sm sm:text-base md:text-lg tracking-wide"
        >
          Grown. Green. Grounded.
        </motion.h2>
      </motion.div>

      {/* Bottom Luxury Text */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 w-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between px-6 sm:px-10 text-white text-xs sm:text-sm tracking-widest uppercase z-10 text-center sm:text-left">
        <span>GROWTH COLLECTION</span>
        <span>PURE GREEN · EASY CARE</span>
      </div>

    </div>
  );
};

export default CoverVideo;