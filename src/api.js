// src/api.js

// Use env variable if available (for Netlify), otherwise fallback to your Koyeb backend URL
const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://yelling-basilisk-primellw-06ef64da.koyeb.app";

// -------- Authentication --------
export async function signup(username, email, password) {
  const res = await fetch(`${API_URL}/api/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

// -------- Projects --------
export async function addProject(userId, repoUrl) {
  const res = await fetch(`${API_URL}/api/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, repoUrl }),
  });
  return res.json();
}

export async function getProjects(userId) {
  const res = await fetch(`${API_URL}/api/projects/${userId}`);
  return res.json();
}

// -------- Terminal Commands --------
export async function runCommand(projectId, command) {
  const res = await fetch(`${API_URL}/api/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectId, command }),
  });
  return res.json();
}

export async function stopProject(projectId) {
  const res = await fetch(`${API_URL}/api/stop`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectId }),
  });
  return res.json();
}
