import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Sparkles, Lock, Flame } from "lucide-react";
import { projects } from "../data/portfolioData";

// Empty / Mystery placeholder cards
const emptyProjectPlaceholders = [
  {
    id: "empty-1",
    title: "Project Valyria",
    subtitle: "IN THE FORGE",
    description: "Next-generation distributed microservice architecture with event-driven streaming pipelines.",
    tags: ["Kafka", "Docker", "Kubernetes"],
    status: "UNDER DEVELOPMENT",
  },
  {
    id: "empty-2",
    title: "Citadel Vault",
    subtitle: "ARCHITECTING",
    description: "Real-time collaborative workspace with high-frequency WebSocket synchronizations.",
    tags: ["WebSockets", "Redis", "Spring Boot"],
    status: "COMMENCING SOON",
  },
  {
    id: "empty-3",
    title: "Shadow Realm AI",
    subtitle: "CLASSIFIED",
    description: "Autonomous agent pipeline powered by local LLMs and vector semantic embeddings.",
    tags: ["Python", "Ollama", "FastAPI"],
    status: "RESEARCH PHASE",
  },
  {
    id: "empty-4",
    title: "Iron Throne ERP",
    subtitle: "UPCOMING CONQUEST",
    description: "Enterprise resource citadel engineered for high-concurrency billing and role matrices.",
    tags: ["React", "PostgreSQL", "Tailwind"],
    status: "DESIGN PHASE",
  }
];

export default function Projects() {
  const targetRef = useRef(null);

  // Scroll tracking: Vertical scroll translates to Horizontal motion
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate total translation based on cards count (Projects + Empty cards)
  // Cards smooth-ah left side-ku move aagum
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-70%"]);

  return (
    <section ref={targetRef} id="projects" className="horizontal-projects-chamber">
      <div className="horizontal-sticky-wrapper">
        
        {/* Header with Navigation Sigil */}
        <div className="horizontal-header-container">
          <motion.div
            className="horizontal-header-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="realm-subtitle">CHAPTER III</span>
            <h2 className="realm-title">FEATURED PROJECTS & CONQUESTS</h2>
            <div className="valyrian-divider-compact">◆ ⚔ ◆</div>
          </motion.div>

          <div className="scroll-horizontal-hint">
            <span className="hint-pulse">✦ SCROLL VERTICALLY TO TRAVERSE HORIZONTALLY ✦</span>
            <div className="gold-track-line" />
          </div>
        </div>

        {/* Horizontal Card Rail */}
        <div className="horizontal-cards-viewport">
          <motion.div style={{ x }} className="horizontal-cards-track">
            
            {/* 1. Actual Projects */}
            {projects.map((project, idx) => (
              <motion.article
                className={`horizontal-conquest-card ${project.featured ? "royal-banner" : ""}`}
                key={project.id || idx}
                whileHover={{ y: -8, borderColor: "var(--gold-accent)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="conquest-visual">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="visual-shroud" />

                  <div className="conquest-action-links">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        onClick={(e) => project.live === "#" && e.preventDefault()}
                        aria-label="Live Demo"
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>

                  <div className="card-realm-tag">
                    <Flame size={12} className="card-flame" />
                    <span>FORGED REALM</span>
                  </div>
                </div>

                <div className="conquest-info">
                  <span className="conquest-subtitle">{project.subtitle || "PRODUCTION READY"}</span>
                  <h3 className="conquest-title">{project.title}</h3>
                  <p className="conquest-desc">{project.description}</p>

                  <div className="conquest-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-rune">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}

            {/* 2. Mystery Empty Placeholder Cards */}
            {emptyProjectPlaceholders.map((empty, idx) => (
              <motion.article
                className="horizontal-conquest-card empty-mystery-card"
                key={empty.id}
                whileHover={{ y: -8, borderColor: "var(--primary-glow)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="empty-card-visual">
                  <div className="empty-sigil-halo">
                    <Lock size={32} className="lock-glyph" />
                  </div>
                  <div className="empty-status-ribbon">
                    <Sparkles size={12} />
                    <span>{empty.status}</span>
                  </div>
                </div>

                <div className="conquest-info">
                  <span className="conquest-subtitle mystery-sub">{empty.subtitle}</span>
                  <h3 className="conquest-title">{empty.title}</h3>
                  <p className="conquest-desc">{empty.description}</p>

                  <div className="conquest-tags">
                    {empty.tags.map((tag) => (
                      <span key={tag} className="tag-rune mystery-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}

          </motion.div>
        </div>

      </div>
    </section>
  );
}