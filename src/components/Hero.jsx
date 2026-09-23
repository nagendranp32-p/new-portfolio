import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram, Mail, Flame } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-realm">
      {/* 100% Reliable Cloud Video Stream (Coverr CDN) */}
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video"
          poster="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2200&q=90"
        >
          {/* Stable Fire & Sparks MP4 Direct Link */}
          <source
            src="https://cdn.coverr.co/videos/coverr-fire-in-the-fireplace-5332/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <aside className="hero-sigil-rail">
        <div className="rail-line" />
        <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
        <a href={`mailto:${personalInfo.email}`}><Mail size={18} /></a>
        <div className="rail-line" />
      </aside>

      <div className="hero-center-stage">
        <motion.div
          className="hero-proclamation"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="dragon-badge">
            <Flame size={14} className="flame-icon" />
            <span>FULL STACK ENGINEER & SYSTEM DESIGNER</span>
          </div>

          <h1 className="hero-name">
            NAGENDRAN <span className="valyrian-letter">P</span>
          </h1>

          <div className="valyrian-divider">
            <div className="divider-blade" />
            <div className="divider-crest pulse-crest">⚔</div>
            <div className="divider-blade right" />
          </div>

          <h2 className="hero-title">{personalInfo.title}</h2>

          <p className="hero-scroll-text">
            Mastering backend citadels with Spring Boot & crafting responsive,
            cinematic realms across the modern web.
          </p>

          <div className="hero-cta-chamber">
            <motion.button
              className="gold-button large dragon-glow-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("projects")}
            >
              EXPLORE FORGED WORK
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              className="outline-button large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("skills")}
            >
              INSPECT ARSENAL
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator-blade">
        <span>DESCEND INTO THE CITADEL</span>
        <div className="scroll-laser" />
      </div>
    </section>
  );
}