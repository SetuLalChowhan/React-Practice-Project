import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-3">
      <motion.button
        className="px-8 py-2 transition-all duration-200 hover:opacity-90 z-40 text-base text-white rounded-lg"
        onClick={() => setShow(!show)}
        layout
        initial={{ background: "linear-gradient(to right, black, black)" }}
        animate={{
          background: show
            ? "linear-gradient(to right, black, black)"
            : "linear-gradient(to right, black, red)",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Click Me
      </motion.button>

      <AnimatePresence mode="wait">
        {show ? (
          <motion.div
            key="black"
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            exit={{ rotate: 0, scale: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="w-[150px] h-[150px] bg-[#333]"
          />
        ) : (
          <motion.div
            key="red"
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            exit={{ rotate: 0, scale: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="w-[150px] h-[150px] bg-red-500"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
