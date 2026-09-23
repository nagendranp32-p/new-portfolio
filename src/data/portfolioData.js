export const personalInfo = {
  name: "NAGENDRAN P",
  title: "FULL STACK DEVELOPER & SOFTWARE ENGINEER",
  email: "nagendra.p.pro@gmail.com",
  location: "Tamil Nadu, India",
  sigil: "NP",
  motto: "FIRE AND CODE — BUILDING ROBUST DIGITAL SYSTEMS",
  bio: [
    "I am a passionate Full Stack Software Engineer focused on building high-performance, scalable web applications with clean architecture and modern user experiences.",
    "Specializing in the Java, Spring Boot, and React ecosystems, I bridge robust backend systems with responsive, interactive frontend interfaces.",
    "From designing normalized database schemas to deploying production-ready cloud architectures, I deliver reliable, business-focused digital solutions."
  ],
  stats: [
    { value: "12+", label: "PROJECTS COMPLETED" },
    { value: "18+", label: "CORE TECHNOLOGIES" },
    { value: "100%", label: "CODE RELIABILITY" },
    { value: "250+", label: "COMMITS & SOLVED PROBLEMS" }
  ]
};

export const skillsCategories = [
  {
    category: "BACKEND DEVELOPMENT",
    sigil: "⚔",
    accent: "crimson",
    description: "High-throughput server architectures, RESTful APIs, and secure microservices.",
    skills: [
      { name: "Java (Core & Advanced)", level: "95%" },
      { name: "Spring Boot", level: "92%" },
      { name: "Spring Security & JWT", level: "88%" },
      { name: "Hibernate / JPA", level: "90%" },
      { name: "RESTful Web Services", level: "95%" },
      { name: "Microservices", level: "82%" },
      { name: "Node.js & Express", level: "78%" }
    ]
  },
  {
    category: "FRONTEND ENGINEERING",
    sigil: "◇",
    accent: "gold",
    description: "Component-driven design systems, dynamic state management, and fluid animations.",
    skills: [
      { name: "React.js", level: "94%" },
      { name: "JavaScript (ES6+)", level: "92%" },
      { name: "HTML5 & Modern CSS3", level: "95%" },
      { name: "Tailwind CSS", level: "90%" },
      { name: "Framer Motion", level: "88%" },
      { name: "Responsive UI/UX Design", level: "96%" },
      { name: "Redux Toolkit & Zustand", level: "84%" }
    ]
  },
  {
    category: "DATABASE ARCHITECTURE",
    sigil: "◈",
    accent: "ruby",
    description: "ACID-compliant storage, relational models, indexing, and document stores.",
    skills: [
      { name: "MySQL", level: "92%" },
      { name: "PostgreSQL", level: "85%" },
      { name: "MongoDB", level: "88%" },
      { name: "Supabase", level: "86%" },
      { name: "Database Normalization", level: "90%" },
      { name: "Query Optimization", level: "82%" }
    ]
  },
  {
    category: "DEVOPS & TOOLS",
    sigil: "✦",
    accent: "ember",
    description: "Version control, automated deployments, testing, and cloud infrastructure.",
    skills: [
      { name: "Git & GitHub", level: "95%" },
      { name: "Postman API Client", level: "92%" },
      { name: "AWS (EC2 / S3)", level: "78%" },
      { name: "Vercel & Render Deployment", level: "90%" },
      { name: "Linux CLI & Bash", level: "85%" },
      { name: "Docker Basics", level: "75%" }
    ]
  }
];

export const projects = [
  {
    id: "college-erp",
    title: "College ERP Management System",
    subtitle: "Enterprise Management Platform",
    description: "A comprehensive institutional management system built using Spring Boot and MySQL, featuring role-based authentication, student record indexing, and administrative dashboards.",
    tags: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    github: "https://github.com/",
    live: "#"
  },
  {
    id: "lifestream-bank",
    title: "Blood Bank Management System",
    subtitle: "Healthcare Logistics Platform",
    description: "A full-stack blood donation and request management network featuring real-time inventory tracking, secure endpoints, and donor matchmaking workflows.",
    tags: ["React", "Spring Boot", "MySQL", "REST API"],
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    github: "https://github.com/",
    live: "#"
  },
  {
    id: "voice-automata",
    title: "Tamil Voice-Enabled Task System",
    subtitle: "Voice Recognition Application",
    description: "An automated task scheduling and alarm system engineered to process Tamil voice commands and execute database-backed system actions.",
    tags: ["Speech NLP", "Spring Boot", "MySQL", "WebSockets"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    github: "https://github.com/",
    live: "#"
  },
  {
    id: "iron-scroll",
    title: "Cinematic Developer Portfolio",
    subtitle: "Interactive Web Experience",
    description: "A dark-themed developer portfolio crafted with Framer Motion, custom scroll animations, dynamic particle effects, and responsive design systems.",
    tags: ["React", "Framer Motion", "CSS Architecture", "Vite"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    github: "https://github.com/",
    live: "#"
  }
];

export const experiences = [
  {
    period: "2024 — PRESENT",
    role: "Full Stack Developer",
    organization: "Freelance & Projects",
    focus: "Enterprise Web Applications",
    description: "Designing and developing modern web platforms for clients. Building Spring Boot REST APIs, optimizing relational databases, and crafting intuitive React interfaces."
  },
  {
    period: "2023 — 2024",
    role: "Technical Intern & Instructor",
    organization: "Elysium Academy",
    focus: "Backend Engineering & Training",
    description: "Trained students in Java and full-stack web concepts while assisting in backend API development and database integration."
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer Intern",
    organization: "PanTech Solutions",
    focus: "UI Architecture & Responsive Design",
    description: "Implemented responsive web pages, optimized component performance, and integrated client-side state management."
  }
];

export const services = [
  {
    code: "01",
    title: "Full Stack Development",
    subtitle: "End-to-End Solutions",
    description: "Complete web application engineering from database architecture to responsive, modern client-side interfaces."
  },
  {
    code: "02",
    title: "Backend & REST APIs",
    subtitle: "Java & Spring Boot Core",
    description: "Scalable backend services, JWT authentication, and secure API endpoints built for production stability."
  },
  {
    code: "03",
    title: "Frontend Development",
    subtitle: "React & Modern UI",
    description: "Fast, interactive, and mobile-first user interfaces built with React, Tailwind CSS, and smooth animations."
  },
  {
    code: "04",
    title: "Database Integration",
    subtitle: "SQL & NoSQL Solutions",
    description: "Database design, schema normalization, query optimization, and secure integration with MySQL and MongoDB."
  }
];