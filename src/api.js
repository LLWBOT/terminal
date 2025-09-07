const API_URL = "https://your-ngrok-url"; // replace with backend URL

export async function signup(username, email, password) {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function addProject(userId, repoUrl) {
  const res = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, repoUrl })
  });
  return res.json();
}

export async function getProjects(userId) {
  const res = await fetch(`${API_URL}/projects/${userId}`);
  return res.json();
}

export async function runCommand(projectId, command) {
  const res = await fetch(`${API_URL}/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectId, command })
  });
  return res.json();
}

export async function stopProject(projectId) {
  const res = await fetch(`${API_URL}/stop`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectId })
  });
  return res.json();
}
