import React, { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import IntroGate from "./components/IntroGate";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Embers from "./components/Embers";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import InteractiveConsole from "./components/InteractiveConsole";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AudioController from "./components/AudioController";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [activeHouse, setActiveHouse] = useState("targaryen");
  const { scrollYProgress } = useScroll();

  const handlePortalIgnite = () => {
    setIsPlayingMusic(true);
    setHasEntered(true);
  };

  const triggerDracarysShake = () => {
    if (isShaking) return;
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 900);
  };

  return (
    <div className={`grand-realm theme-${activeHouse} ${isShaking ? "screen-quake-active" : ""}`}>
      <AudioController
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
      />

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <IntroGate key="gate" onIgnite={handlePortalIgnite} />
        ) : (
          <>
            {/* 1. Top Scroll Progress Blade - எப்போதுமே உச்சியில் இருக்கும் */}
            <motion.div
              className="scroll-progress-blade"
              style={{ scaleX: scrollYProgress }}
            />

            {/* 2. NAVBAR - Motion Div-க்கு வெளியே வைப்பதால் 100% ஒரே இடத்தில் Fixed-ஆ நிற்கும் */}
            <Navbar 
              onDracarysShake={triggerDracarysShake}
              activeHouse={activeHouse}
              setActiveHouse={setActiveHouse}
            />

            <Embers house={activeHouse} />
            <CustomCursor />

            {/* 3. Main Content Wrapper */}
            <motion.div
              key="portfolio-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <main>
                <Hero onDracarysShake={triggerDracarysShake} />
                <About />
                <Skills />
                <InteractiveConsole onDracarys={triggerDracarysShake} />
                <Projects />
                <Experience />
                <Education />
                <Services />
                <Contact />
              </main>
              
              <Footer />
            </motion.div>

            {/* 4. Scroll To Top Arrow */}
            <ScrollToTop />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}