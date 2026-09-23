import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioController({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.volume = 0.5;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Audio play issue:", error);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-controller-nexus">
      <audio ref={audioRef} loop preload="auto">
        {/* Local public file */}
        <source src="/got-theme.mp3" type="audio/mpeg" />
      </audio>

      <button
        className={`audio-toggle-btn ${isPlaying ? "sound-active" : ""}`}
        onClick={toggleSound}
        aria-label="Toggle Citadel Theme Music"
        title={isPlaying ? "Mute Theme Music" : "Play Theme Music"}
      >
        <div className="equalizer-bars">
          <span className={`bar bar-1 ${isPlaying ? "animating" : ""}`} />
          <span className={`bar bar-2 ${isPlaying ? "animating" : ""}`} />
          <span className={`bar bar-3 ${isPlaying ? "animating" : ""}`} />
        </div>

        {isPlaying ? (
          <Volume2 size={16} className="audio-icon" />
        ) : (
          <VolumeX size={16} className="audio-icon muted" />
        )}
      </button>
    </div>
  );
}