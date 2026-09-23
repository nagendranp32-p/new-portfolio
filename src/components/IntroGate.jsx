import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";

const bootLogs = [
  "DECRYPTING CITADEL ARCHIVES...",
  "FORGING VALYRIAN RUNES & LOGIC...",
  "CONNECTING MICROSERVICE KINGDOMS...",
  "CALIBRATING ASTRAL GYROSCOPE...",
  "REALM UNLOCKED • ENTERING CITADEL...",
];

export default function IntroGate({ onIgnite }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onIgnite();
          }, 600);
          return 100;
        }
        // Realistic dynamic loading ticks
        const jump = Math.floor(Math.random() * 8) + 3;
        const nextVal = Math.min(100, prev + jump);

        // Update narrative log as progress increases
        if (nextVal < 25) setLogIndex(0);
        else if (nextVal < 50) setLogIndex(1);
        else if (nextVal < 75) setLogIndex(2);
        else if (nextVal < 95) setLogIndex(3);
        else setLogIndex(4);

        return nextVal;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [onIgnite]);

  return (
    <div className="citadel-loader-screen">
      {/* Subtle Background Ambience */}
      <div className="loader-ambient-glow" />

      <div className="loader-center-bastion">
        {/* 1. Concentric Valyrian Gyroscope (Game of Thrones Astrolabe) */}
        <div className="astrolabe-mechanism">
          {/* Outer Ring */}
          <motion.div
            className="astrolabe-ring outer"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <div className="ring-sigil-dot dot-north" />
            <div className="ring-sigil-dot dot-south" />
          </motion.div>

          {/* Middle Ring */}
          <motion.div
            className="astrolabe-ring middle"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="ring-rune-notch notch-1">◆</div>
            <div className="ring-rune-notch notch-2">◆</div>
          </motion.div>

          {/* Inner Ring */}
          <motion.div
            className="astrolabe-ring inner"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Brand Sigil Core */}
          <div className="astrolabe-core-crest">
            <span className="core-sigil">NP</span>
          </div>
        </div>

        {/* 2. Loading Narrative Proclamation */}
        <div className="loader-proclamation-box">
          <span className="loader-eyebrow">
            <Sparkles size={11} className="eyebrow-sparkle" />
            NAGENDRAN P • CITADEL GATEWAY
          </span>

          {/* Real-time boot log message */}
          <motion.p
            key={logIndex}
            className="loader-status-text"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {bootLogs[logIndex]}
          </motion.p>

          {/* Percentage & Bar */}
          <div className="loader-progress-chamber">
            <div className="progress-info-row">
              <span className="forging-label">SYSTEM INITIALIZATION</span>
              <span className="percentage-number">{progress}%</span>
            </div>

            <div className="royal-progress-track">
              <motion.div
                className="royal-progress-fill"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
              <div
                className="progress-glow-lead"
                style={{ left: `${progress}%` }}
              />
            </div>
          </div>

          {/* Security Seal */}
          <div className="loader-footer-seal">
            <ShieldCheck size={13} className="seal-icon" />
            <span>ENCRYPTED FULL STACK SANCTUM</span>
          </div>
        </div>
      </div>
    </div>
  );
}