import React from "react";

export default function Embers() {
  const embers = Array.from({ length: 25 });

  return (
    <div className="embers-container" aria-hidden="true">
      {embers.map((_, i) => (
        <span
          key={i}
          className="ember-spark"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`
          }}
        />
      ))}
    </div>
  );
}