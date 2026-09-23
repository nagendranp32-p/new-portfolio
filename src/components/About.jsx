import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const fadeLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  const userPhoto = null; // Replace with image path if available (e.g. "/images/nagendran.jpg")

  return (
    <section id="about" className="full-realm-section lore-realm">
      <div className="realm-container">
        <motion.div
          className="realm-header center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="realm-subtitle">CHAPTER I</span>
          <h2 className="realm-title">THE BACKGROUND LORE</h2>
          <div className="valyrian-divider-compact">◆ ⚔ ◆</div>
        </motion.div>

        <div className="lore-grid">
          <motion.div
            className="portrait-citadel"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="portrait-frame">
              {userPhoto ? (
                <img src={userPhoto} alt="Nagendran P" className="portrait-real-img" />
              ) : (
                <>
                  <div className="portrait-backdrop" />
                  <div className="sigil-watermark">
                    <span className="sigil-burn">{personalInfo.sigil}</span>
                  </div>
                </>
              )}
              <div className="frame-torch-glow" />
            </div>
          </motion.div>

          <motion.div
            className="lore-parchment"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="parchment-heading">ENGINEERED FOR SCALE, DRIVEN BY PURPOSE</h3>
            <div className="gold-ruler" />

            {personalInfo.bio.map((para, idx) => (
              <p key={idx} className="parchment-text">
                {para}
              </p>
            ))}

            <div className="realm-stat-matrix">
              {personalInfo.stats.map((stat, idx) => (
                <motion.div
                  className="stat-bastion"
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, x: 6 }}
                >
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}