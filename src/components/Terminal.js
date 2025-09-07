import React, { useState } from "react";
import { runCommand } from "../api";

function Terminal({ projectId }) {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const handleRun = async (e) => {
    e.preventDefault();
    const res = await runCommand(projectId, input);
    setHistory([...history, `$ ${input}`, res.output]);
    setInput("");
  };

  return (
    <div className="card">
      <div className="terminal">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
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
    </div>
  );
}

export default Terminal;
