import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Send, 
  LoaderCircle, 
  Sparkles, 
  Feather, 
  Check, 
  Copy, 
  ShieldAlert 
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

// Royal mission / Quest presets
const questPresets = [
  "Forge Full Stack Application",
  "Backend Architecture & REST APIs",
  "High-Performance Database Citadel",
  "Recruitment / Hire for Guild"
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copied, setCopied] = useState(false);

  // Live Parchment Mirror States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Forge Full Stack Application",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectPreset = (preset) => {
    setFormData((prev) => ({ ...prev, subject: preset }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendRaven = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ 
        type: "error", 
        message: "The Raven refuses to fly with an empty parchment. Please fulfill all scrolls." 
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "The Raven has taken wing into the Citadel skies. Your missive has been delivered successfully!"
      });

      setFormData({
        name: "",
        email: "",
        subject: "Forge Full Stack Application",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "The Raven encountered a blizzard. Please direct your parchment to nagendra.p.pro@gmail.com."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="full-realm-section rookery-realm">
      <div className="realm-container">
        
        {/* Header */}
        <motion.div
          className="realm-header center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="realm-subtitle">CHAPTER VII • THE ROOKERY</span>
          <h2 className="realm-title">DISPATCH A RAVEN</h2>
          <p className="realm-intro">
            Seal your scroll with valyrian intent — direct communication into Nagendran's citadel chamber.
          </p>
          <div className="valyrian-divider-compact">◆ ⚔ ◆</div>
        </motion.div>

        {/* 2-Column Innovative Layout: Form + Live Parchment Mirror */}
        <div className="innovative-rookery-grid">
          
          {/* Column 1: Valyrian Form Sanctum */}
          <motion.div 
            className="rookery-input-bastion"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Quest Preset Selectors */}
            <div className="quest-presets-container">
              <span className="preset-label">
                <Feather size={12} className="feather-icon" />
                SELECT MISSIVE OBJECTIVE
              </span>
              <div className="preset-tags-row">
                {questPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    className={`quest-preset-pill ${formData.subject === preset ? "selected" : ""}`}
                    onClick={() => handleSelectPreset(preset)}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Form */}
            <form className="rookery-interactive-form" onSubmit={handleSendRaven}>
              <div className="form-double-row">
                <div className="valyrian-field-chamber">
                  <label htmlFor="raven-name">LORD / LADY NAME</label>
                  <input
                    id="raven-name"
                    name="name"
                    type="text"
                    placeholder="E.g. Lord Stark"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="valyrian-field-chamber">
                  <label htmlFor="raven-email">COURIER RAVEN ADDRESS (EMAIL)</label>
                  <input
                    id="raven-email"
                    name="email"
                    type="email"
                    placeholder="your.sigil@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="valyrian-field-chamber">
                <label htmlFor="raven-subject">PARCHMENT SUBJECT</label>
                <input
                  id="raven-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="valyrian-field-chamber">
                <label htmlFor="raven-message">THE ROYAL MISSIVE</label>
                <textarea
                  id="raven-message"
                  name="message"
                  rows={5}
                  placeholder="Inscribe the details of your conquest, contract, or architecture proposal..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Submit Button with Wax Seal Effect */}
              <motion.button
                className="gold-button large full-width dragon-glow-btn dispatch-action-btn"
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <span>DISPATCHING RAVEN THROUGH THE SKIES</span>
                    <LoaderCircle className="spin" size={16} />
                  </>
                ) : (
                  <>
                    <Feather size={16} className="dispatch-feather" />
                    <span>SEAL WITH WAX & DISPATCH RAVEN</span>
                    <Send size={15} />
                  </>
                )}
              </motion.button>

              {/* Status Banner */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    className={`rookery-status-banner ${status.type}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {status.type === "success" ? <Sparkles size={16} /> : <ShieldAlert size={16} />}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Column 2: Live Digital Parchment Scroll & Citadel Embassy */}
          <motion.div 
            className="rookery-mirror-bastion"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Live Visual Scroll */}
            <div className="valyrian-parchment-scroll">
              <div className="scroll-watermark-crest">⚔</div>
              
              <div className="scroll-header-band">
                <div>
                  <span className="scroll-origin-label">SANCTUM RECIPIENT</span>
                  <h4 className="scroll-master-name">NAGENDRAN P</h4>
                </div>
                <div className="wax-seal-stamp">
                  <span className="wax-sigil">NP</span>
                </div>
              </div>

              <div className="scroll-rule-divider" />

              {/* Dynamic Live Text Preview */}
              <div className="scroll-body-mirror">
                <div className="scroll-meta-line">
                  <strong>DISPATCH FROM: </strong>
                  <span>{formData.name || "A Noble Envoy"}</span>
                </div>

                <div className="scroll-meta-line">
                  <strong>RETURN ADDRESS: </strong>
                  <span>{formData.email || "Pending parchment inscription..."}</span>
                </div>

                <div className="scroll-meta-line">
                  <strong>SUBJECT: </strong>
                  <span className="scroll-subject-glow">{formData.subject}</span>
                </div>

                <div className="scroll-parchment-text">
                  "{formData.message || "As the quill moves across your parchment, the royal ink shall mirror your words here in real-time..."}"
                </div>
              </div>

              <div className="scroll-footer-band">
                <span className="citadel-date-stamp">
                  CHRONICLE TIMESTAMP: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </span>
                <span className="scroll-secure-tag">SEAL GUARANTEED</span>
              </div>
            </div>

            {/* Quick Courier Contact Card & Social Links */}
            <div className="citadel-embassy-compact">
              <div className="quick-courier-row">
                <div className="courier-meta">
                  <span className="courier-label">DIRECT CITADEL COURIER</span>
                  <span className="courier-address">{personalInfo.email}</span>
                </div>
                
                <button
                  type="button"
                  className="quick-copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy Email Address"
                >
                  {copied ? <Check size={14} className="copied-check" /> : <Copy size={14} />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>

              <div className="embassy-bottom-info">
                <div className="citadel-geo">
                  <MapPin size={14} className="geo-icon" />
                  <span>Tamil Nadu, India • Citadel Realm</span>
                </div>

                <div className="embassy-social-cluster">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub Citadel">
                    <Github size={17} />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" title="LinkedIn Fortress">
                    <Linkedin size={17} />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer" title="Instagram Chamber">
                    <Instagram size={17} />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}