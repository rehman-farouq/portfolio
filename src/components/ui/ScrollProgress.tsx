"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollProgress = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  const [show, setShow] = useState(false);

  // Only re-renders when the boolean flips, not on every scroll tick.
  useEffect(() => scrollY.on("change", (v) => setShow((p) => (v > 400) !== p ? v > 400 : p)), [scrollY]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      />
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 24, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
