import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="full-realm-section citadel-academy-realm">
      <div className="realm-container">
        <motion.div
          className="realm-header center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="realm-subtitle">CHAPTER V</span>
          <h2 className="realm-title">ACADEMIC FOUNDATION</h2>
          <div className="valyrian-divider-compact">◆ ⚔ ◆</div>
        </motion.div>

        <motion.div
          className="academy-bastion"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -6, boxShadow: "0 15px 40px rgba(220, 38, 38, 0.25)" }}
        >
          <motion.div
            className="academy-sigil"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <GraduationCap size={48} className="gold-icon" />
          </motion.div>

          <div className="academy-details">
            <span className="academy-epoch">2022 — 2026</span>
            <h3 className="academy-degree">Bachelor of Engineering in CSE</h3>
            <h4 className="academy-institution">Bharath Niketan Engineering College</h4>
            <p className="academy-scope">
              Core Systems & Data Structures · Full Stack Architecture · Relational Databases
            </p>
          </div>

          <div className="academy-ribbon">
            <Award size={18} />
            <span>ACCREDITED DEGREE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}