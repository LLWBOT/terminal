import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav style={{ background: "#111", padding: "10px" }}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h2 style={{ color: "#00e676" }}>LLW Lite Terminal</h2>
        <div>
          <Link to="/dashboard" style={{ marginRight: 15 }}>
            Dashboard
          </Link>
          <Link to="/projects" style={{ marginRight: 15 }}>
            Projects
          </Link>
          <Link to="/profile" style={{ marginRight: 15 }}>
            Profile
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
