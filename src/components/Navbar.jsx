import React, { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";

export default function Navbar({ onDracarysShake, activeHouse, setActiveHouse }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className={`navbar navbar-constant ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <button className="logo-crest" onClick={() => scrollToSection("home")}>
          <span className="sigil-glow">NP</span>
        </button>

        <nav className="desktop-nav">
          <button className="nav-link" onClick={() => scrollToSection("about")}>Lore</button>
          <button className="nav-link" onClick={() => scrollToSection("skills")}>Arsenal</button>
          <button className="nav-link" onClick={() => scrollToSection("projects")}>Conquests</button>
          <button className="nav-link" onClick={() => scrollToSection("experience")}>Chronicles</button>
          <button className="nav-link" onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        {/* Tactical Interactive Action Group */}
        <div className="nav-actions">
          {/* House Theme Morphers */}
          <div className="house-switch-group">
            <button
              className={`house-btn targaryen ${activeHouse === "targaryen" ? "active" : ""}`}
              onClick={() => setActiveHouse("targaryen")}
              title="House Targaryen (Fire & Blood)"
            >
              🐉
            </button>
            <button
              className={`house-btn stark ${activeHouse === "stark" ? "active" : ""}`}
              onClick={() => setActiveHouse("stark")}
              title="House Stark (Winter Frost)"
            >
              🐺
            </button>
            <button
              className={`house-btn lannister ${activeHouse === "lannister" ? "active" : ""}`}
              onClick={() => setActiveHouse("lannister")}
              title="House Lannister (Golden Roar)"
            >
              🦁
            </button>
          </div>

          {/* Screen Shake Dracarys Fury Button */}
          <button className="dracarys-trigger-btn" onClick={onDracarysShake} title="Shake the Citadel">
            <Flame size={14} className="flame-quake-icon" />
            <span>DRACARYS</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`citadel-mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button onClick={() => scrollToSection("about")}>Lore</button>
        <button onClick={() => scrollToSection("skills")}>Arsenal</button>
        <button onClick={() => scrollToSection("projects")}>Conquests</button>
        <button onClick={() => scrollToSection("experience")}>Chronicles</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </header>
  );
}