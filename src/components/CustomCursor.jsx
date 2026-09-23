import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    let animationFrameId;
    const followPointer = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(followPointer);
    };

    window.addEventListener("mousemove", handleMove);
    animationFrameId = requestAnimationFrame(followPointer);

    const interactiveSelectors = "button, a, .project-card, .skill-card, .service-card, input, textarea";
    const addActive = () => setActive(true);
    const removeActive = () => setActive(false);

    const elements = document.querySelectorAll(interactiveSelectors);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationFrameId);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addActive);
        el.removeEventListener("mouseleave", removeActive);
      });
    };
  }, [position.x, position.y]);

  return (
    <>
      <div
        className={`custom-cursor ${active ? "cursor-active" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${active ? "ring-active" : ""}`}
        style={{ left: `${trailing.x}px`, top: `${trailing.y}px` }}
      />
    </>
  );
}