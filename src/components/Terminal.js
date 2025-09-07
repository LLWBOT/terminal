import React, { useState } from "react";
import { runCommand } from "../api";
import { motion } from "framer-motion";
import "./Terminal.css"; // add blinking cursor css

function Terminal({ projectId }) {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [typingOutput, setTypingOutput] = useState("");

  const typeText = (text) => {
    setTypingOutput("");
    let i = 0;
    const interval = setInterval(() => {
      setTypingOutput((prev) => prev + text[i]);
      i++;
      if (i === text.length) clearInterval(interval);
    }, 30); // typing speed
  };

  const handleRun = async (e) => {
    e.preventDefault();
    setHistory((prev) => [...prev, `$ ${input}`]);

    const res = await runCommand(projectId, input);

    typeText(res.output || "Command executed");
    setInput("");
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="terminal">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {/* animated typing effect with blinking cursor */}
        {typingOutput && (
          <div>
            {typingOutput}
            <span className="cursor">█</span>
          </div>
        )}
      </div>
      <form onSubmit={handleRun}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command..."
          style={{ width: "80%", padding: "8px" }}
        />
        <button type="submit">Run</button>
      </form>
    </motion.div>
  );
}

export default Terminal;
