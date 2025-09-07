import React, { useState } from "react";
import Terminal from "../components/Terminal";
import { addProject } from "../api";

function Dashboard({ user }) {
  const [repoUrl, setRepoUrl] = useState("");
  const [project, setProject] = useState(null);

  const handleStart = async () => {
    const res = await addProject(user._id, repoUrl);
    setProject(res);
  };

  return (
    <div className="container">
      <h1>Welcome, {user.username} 👋</h1>
      <p>Start by linking a GitHub repository and open your terminal session.</p>
      <img
        src="https://images.unsplash.com/photo-1581091012184-5c52b4f71d8c"
        alt="Dashboard Illustration"
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      {!project ? (
        <div className="card">
          <h3>Add GitHub Repository</h3>
          <input
            type="text"
            placeholder="GitHub Repo URL"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            style={{ width: "80%", padding: "8px" }}
          />
          <button onClick={handleStart}>Start Terminal</button>
        </div>
      ) : (
        <Terminal projectId={project._id} />
      )}
    </div>
  );
}

export default Dashboard;
