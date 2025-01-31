import React from "react";
import { motion } from "framer-motion";

const RotatingText = () => {
  const words = ["COMMITTED", "RESULTS-DRIVEN", "INNOVATIVE"];

  return (
    <div className="">
      <div className="relative w-[800px] h-[200px] perspective">
        <motion.div
          className="absolute  text-black leading-10 text-[62px] font-bold  cube"
          animate={{
            rotateX: [0, 360], // Continuous smooth rotation
          }}
          transition={{
            duration: 4, // Faster rotation duration
            repeat: Infinity, // Infinite repeat
            ease: "linear", // Smooth and continuous rotation
            repeatType: "loop", // Ensures seamless loop
          }}
        >
          {words.map((word, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center cube-face face-${index}`}
              style={{
                transform: `rotateX(${index * -90}deg) translateZ(40px)`, // Adjust Z distance for word visibility
              }}
            >
              {word}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tailwind CSS Styles */}
      <style jsx>{`
        .perspective {
          perspective: 600px;
        }
        .cube {
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .cube-face {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default RotatingText;
