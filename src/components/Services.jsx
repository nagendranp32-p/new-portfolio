import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/portfolioData";

export default function Services() {
  return (
    <section id="services" className="full-realm-section guilds-realm">
      <div className="realm-container">
        <motion.div
          className="realm-header center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="realm-subtitle">CHAPTER VI</span>
          <h2 className="realm-title">SERVICES & CAPABILITIES</h2>
          <p className="realm-intro">End-to-end software solutions tailored for client and enterprise needs.</p>
          <div className="valyrian-divider-compact">◆ ⚔ ◆</div>
        </motion.div>

        <div className="guilds-grid">
          {services.map((srv, idx) => (
            <motion.div
              className="guild-card"
              key={srv.code}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <span className="guild-code">{srv.code}</span>
              <h3 className="guild-title">{srv.title}</h3>
              <span className="guild-sub">{srv.subtitle}</span>
              <p className="guild-desc">{srv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}