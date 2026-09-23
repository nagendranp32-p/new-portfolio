import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, Flame, Activity } from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="full-realm-section chronicles-realm">
      <div className="realm-container">
        {/* Header */}
        <motion.div
          className="realm-header center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="realm-subtitle">CHAPTER IV • CHRONICLES OF CONQUEST</span>
          <h2 className="realm-title">CAREER TIMELINE</h2>
          <p className="realm-intro">
            Professional milestones, engineering internships, and battle-tested industry contributions.
          </p>
          <div className="valyrian-divider-compact">◆ ⚔ ◆</div>
        </motion.div>

        {/* Central Illuminated Spine */}
        <div className="chronicle-spine-grand">
          {experiences.map((exp, index) => (
            <motion.div
              className={`chronicle-epoch-node ${index % 2 === 0 ? "left-epoch" : "right-epoch"}`}
              key={exp.period || index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.18, ease: "easeOut" }}
            >
              {/* Timeline Center Node Orb with Shockwave Ring */}
              <div className="epoch-spine-pin">
                <motion.div 
                  className="heartbeat-spine-orb"
                  whileHover={{ 
                    scale: [1, 1.35, 1.1, 1.45, 1.2],
                    transition: { duration: 0.65, ease: "easeInOut" }
                  }}
                >
                  <span className="orb-center-flame">⚔</span>
                </motion.div>
                <div className="spine-pulse-ripple" />
              </div>

              {/* Heartbeat "Lub-Dub" Interactive Parchment Box */}
              <motion.div
                className="chronicle-parchment-box heartbeat-interactive-card"
                whileHover={{
                  // "Lub-Dub" Double Pulse Heartbeat Physics:
                  // 1 -> 1.03 (Lub) -> 0.99 (pause) -> 1.05 (Dub) -> 1.02 (rest)
                  scale: [1, 1.03, 0.99, 1.05, 1.02],
                  y: -6,
                  transition: {
                    duration: 0.7,
                    times: [0, 0.25, 0.45, 0.75, 1],
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Heartbeat EKG Pulse Indicator on Top */}
                <div className="card-top-pulse-bar">
                  <div className="pulse-tag">
                    <Activity size={12} className="heartbeat-icon" />
                    <span>LUB-DUB PULSE DETECTED</span>
                  </div>
                  <span className="epoch-index-mark">0{index + 1} // CAMPAIGN</span>
                </div>

                {/* Period & Role */}
                <div className="chronicle-title-group">
                  <span className="chronicle-focus">
                    <Calendar size={12} />
                    {exp.period} • {exp.focus || "ENGINEERING"}
                  </span>
                  <h3 className="chronicle-role">{exp.role}</h3>
                  <h4 className="chronicle-org">
                    <Building2 size={13} className="org-icon" />
                    {exp.organization}
                  </h4>
                </div>

                <div className="chronicle-card-rule" />

                {/* Description */}
                <p className="chronicle-narrative">{exp.description}</p>

                {/* Key Pillars / Skills Tag if available */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="chronicle-highlights-list">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>
                        <Flame size={11} className="highlight-flame" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bottom EKG Pulse Ray Beam */}
                <div className="ekg-laser-wave" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}