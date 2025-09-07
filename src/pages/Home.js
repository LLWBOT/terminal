import React, { useState } from "react";
import { signup, login } from "../api";

function Home({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const res = await login(form.email, form.password);
      if (res.success) setUser(res.user);
    } else {
      const res = await signup(form.username, form.email, form.password);
      if (res.success) setUser(res.user);
    }
  };

  return (
    <div className="container">
      <h1 style={{ color: "#00e676", textAlign: "center" }}>Welcome to LLW Lite Terminal</h1>
      <p style={{ textAlign: "center" }}>
        A futuristic cloud terminal where you can run commands directly on your GitHub repositories.
      </p>

      {/* Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        alt="Terminal illustration"
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      {/* Features */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
        <div className="card" style={{ flex: 1 }}>
          <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" width="50" />
          <h3>Run Node.js Commands</h3>
          <p>Execute npm install, npm start, and other Node.js commands directly in the cloud.</p>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python" width="50" />
          <h3>Install Python Packages</h3>
          <p>Use pkg install python and pip to install dependencies in real time.</p>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="50" />
          <h3>GitHub Integration</h3>
          <p>Link your repositories and run commands inside them directly from your browser.</p>
        </div>
      </div>

      {/* Auth Card */}
      <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <a href="#" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
