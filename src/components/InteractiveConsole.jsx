import React, { useState } from "react";
import { Terminal, Flame, Shield, HelpCircle } from "lucide-react";

export default function InteractiveConsole({ onDracarys }) {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([
    { type: "sys", text: "VALYRIAN CLI ENGINE v2.6 // TYPE 'help' FOR COMMANDS" }
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === "help") {
      response = "COMMANDS: 'dracarys', 'skills', 'stack', 'contact', 'whoami', 'clear'";
    } else if (cmd === "dracarys") {
      response = "🔥 DRAGON FLAME UNLEASHED! INITIATING GROUND SHOCK...";
      onDracarys();
    } else if (cmd === "skills" || cmd === "stack") {
      response = "ARMORY: Java 21, Spring Boot 3.x, React, MySQL, MongoDB, Docker, AWS, Framer Motion.";
    } else if (cmd === "whoami") {
      response = "Nagendran P // Full Stack Systems Architect & Engineer.";
    } else if (cmd === "contact") {
      response = "RAVEN ADDRESS: nagendra.p.pro@gmail.com // Tamil Nadu, India";
    } else if (cmd === "clear") {
      setLogs([]);
      setInput("");
      return;
    } else {
      response = `UNKNOWN COMMAND: '${cmd}'. TYPE 'help' FOR AVAILABLE COMMANDS.`;
    }

    setLogs((prev) => [...prev, { type: "user", text: `> ${input}` }, { type: "res", text: response }]);
    setInput("");
  };

  return (
    <section className="full-realm-section console-realm">
      <div className="realm-container">
        <div className="terminal-bastion">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot gold" />
              <span className="dot green" />
            </div>
            <div className="terminal-title">
              <Terminal size={14} /> VALYRIAN_COMMAND_PROMPT.sh
            </div>
          </div>

          <div className="terminal-body">
            {logs.map((log, idx) => (
              <div key={idx} className={`terminal-log-line ${log.type}`}>
                {log.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="terminal-input-bar">
            <span className="prompt-label">citadel@nagendran:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Try typing 'dracarys' or 'help'..."
              className="terminal-input"
            />
            <button type="submit" className="terminal-submit-btn">EXECUTE</button>
          </form>
        </div>
      </div>
    </section>
  );
}