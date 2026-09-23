import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="citadel-footer">
      <motion.div
        className="footer-sigil-mark"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {personalInfo.sigil}
      </motion.div>
      <p className="footer-proclamation">
        Designed & Built by <span>{personalInfo.name}</span>
      </p>
      <small className="footer-rights">
        © 2026 • All Rights Reserved
      </small>
    </footer>
  );
}