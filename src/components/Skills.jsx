import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Shield, 
  Swords, 
  Database, 
  Wrench, 
  Sparkles, 
  Flame 
} from "lucide-react";

const skillCategories = [
  {
    id: "backend",
    index: "01",
    title: "BACKEND CITADEL",
    sigil: Swords,
    subtitle: "High-throughput server architectures, RESTful APIs, and secure microservices.",
    skills: [
      { name: "Java (Core & Advanced)", level: 95 },
      { name: "Spring Boot", level: 92 },
      { name: "Spring Security & JWT", level: 88 },
      { name: "Hibernate / JPA", level: 90 },
      { name: "RESTful Web Services", level: 95 },
      { name: "Microservices Architecture", level: 82 },
      { name: "Node.js & Express", level: 78 },
    ],
  },
  {
    id: "frontend",
    index: "02",
    title: "FRONTEND REALM",
    sigil: Shield,
    subtitle: "Fluid cinematic UI, responsive interfaces, component-driven design systems.",
    skills: [
      { name: "React.js", level: 94 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 & Modern CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 88 },
      { name: "Responsive UI/UX Design", level: 96 },
      { name: "Redux Toolkit & State Management", level: 84 },
    ],
  },
  {
    id: "database",
    index: "03",
    title: "DATABASE ARCHITECTURE",
    sigil: Database,
    subtitle: "ACID-compliant storage, relational models, indexing, and document stores.",
    skills: [
      { name: "MySQL", level: 92 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Supabase", level: 86 },
      { name: "Database Schema Design & Normalization", level: 90 },
    ],
  },
  {
    id: "devops",
    index: "04",
    title: "DEVOPS & VALYRIAN TOOLS",
    sigil: Wrench,
    subtitle: "Version control, automated deployments, testing, and cloud infrastructure.",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Postman API Client", level: 92 },
      { name: "AWS (EC2 / S3)", level: 78 },
      { name: "Vercel & Render Deployment", level: 90 },
      { name: "VS Code & System Debugging", level: 96 },
    ],
  },
];

// Oru single A4 Sheet Card component (Scroll-la slow & smooth-ah stack aagum)
function StackingSkillCard({ category, index, total, scrollYProgress }) {
  // Prathi card-kum broad scroll window - vegama odama slow-ah reveal aagum
  const cardStart = (index / total) * 0.85;

  // Sheet mela vandhu vilugum bodhu pinnaadi irukura sheet slow-ah scale down aagi dark aagum
  const scale = useTransform(
    scrollYProgress,
    [cardStart, 1],
    [1, 1 - (total - 1 - index) * 0.035]
  );

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, cardStart - 0.18), cardStart],
    [0.15, 1]
  );

  const Icon = category.sigil;

  return (
    <div className="sheet-stack-wrapper" style={{ top: `calc(13vh + ${index * 32}px)` }}>
      <motion.div 
        className="a4-sheet-card"
        style={{
          scale,
          opacity,
        }}
        initial={{ y: 90, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, amount: 0.15 }}
      >
        {/* Valyrian Sheet Header */}
        <div className="sheet-top-bar">
          <div className="sheet-crest">
            <Icon size={20} className="sigil-glyph" />
            <div>
              <span className="sheet-index">PARCHMENT {category.index} / {`0${total}`}</span>
              <h3 className="sheet-title">{category.title}</h3>
            </div>
          </div>
          <div className="sheet-seal">
            <Flame size={14} className="seal-flame" />
            <span>FORGED SKILL</span>
          </div>
        </div>

        <p className="sheet-subtitle">{category.subtitle}</p>

        <div className="sheet-divider-line" />

        {/* Skill Meters inside the Sheet */}
        <div className="sheet-skills-grid">
          {category.skills.map((skill) => (
            <div key={skill.name} className="sheet-skill-item">
              <div className="sheet-skill-label">
                <span className="skill-name">
                  <Sparkles size={12} className="sparkle-icon" />
                  {skill.name}
                </span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="sheet-meter-track">
                <motion.div
                  className="sheet-meter-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: false }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="skills" ref={containerRef} className="skills-stack-chamber">
      {/* Title Header */}
      <div className="stack-header-realm">
        <span className="realm-subtitle">MY SKILLS</span>
        <h2 className="realm-title">ROYAL ARSENAL</h2>
        <div className="valyrian-divider-compact">◆ ⚔ ◆</div>
        <p className="realm-intro">
          Scroll steadily to unveil the forged grimoires — each realm stacking smoothly over the citadel.
        </p>
      </div>

      {/* Stacking Sheets Container */}
      <div className="sheets-deck-container">
        {skillCategories.map((category, index) => (
          <StackingSkillCard
            key={category.id}
            category={category}
            index={index}
            total={skillCategories.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}