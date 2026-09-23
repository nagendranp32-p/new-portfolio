import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 280);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-top-arrow-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.92 }}
          title="Ascend to Citadel Top"
          aria-label="Scroll to top"
        >
          <div className="arrow-halo-ring" />
          <ArrowUp size={20} className="arrow-icon-glow" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}