import React, { useEffect, useState } from "react";
import { getProjects, stopProject } from "../api";
import Terminal from "../components/Terminal";

function Projects({ user }) {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      const res = await getProjects(user._id);
      setProjects(res);
    }
    fetchProjects();
  }, [user]);

  return (
    <div className="container">
      <h1>Your Projects</h1>
      <p>Manage all your previous terminal sessions and repositories here.</p>

      {projects.map((proj) => (
        <div key={proj._id} className="card">
          <h3>{proj.repoUrl}</h3>
          <p>Status: {proj.status}</p>
          <button onClick={() => setSelected(proj._id)}>Open</button>
          <button onClick={async () => { await stopProject(proj._id); }}>Stop</button>
        </div>
      ))}

      {selected && <Terminal projectId={selected} />}
    </div>
  );
}

export default Projects;
