

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = [
  "Hello, I'm Setulal Chowhan — a Passionate Web Developer",
  "Building Innovative Digital Experiences with Modern Technologies",
  "Not Just Code — Crafting Seamless User Experiences",
  "Committed to Continuous Learning and Creative Problem Solving",
  "Let's Build the Future, One Line of Code at a Time",
];

const TextCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (i) => {
    const relativeIndex = (i - index + texts.length) % texts.length;

    if (relativeIndex === 0) return "middle";
    if (relativeIndex === 1) return "top"; // Changed from "bottom" to "top"
    if (relativeIndex === texts.length - 1) return "bottom"; // Changed from "top" to "bottom"
    return "hidden";
  };

  const variants = {
    top: {
      y: -80,
      opacity: 0.7,
      scale: 0.9,
      zIndex: 2,
      filter: "blur(0.5px)",
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    middle: {
      y: 0,
      opacity: 1,
      scale: 1,
      zIndex: 3,
      filter: "blur(0px)",
    },
    bottom: {
      y: 80,
      opacity: 0.7,
      scale: 0.9,
      zIndex: 2,
      filter: "blur(0.5px)",
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    hidden: {
      y: 0,
      opacity: 0,
      scale: 0.7,
      zIndex: 1,
      filter: "blur(1px)",
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative h-[300px] w-full max-w-5xl flex items-center justify-center overflow-hidden">
        {texts.map((text, i) => (
          <motion.p
            key={i}
            className={`absolute text-center px-4 font-medium ${
              getPosition(i) === "middle"
                ? "text-white  text-2xl md:text-3xl"
                : "text-gray-400 text-[24px]"
            }`}
            variants={variants}
            initial="hidden"
            animate={getPosition(i)}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
