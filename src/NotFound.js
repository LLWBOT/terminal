import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound({ user }) {
  return (
    <motion.div
      className="container"
      style={{ textAlign: "center", paddingTop: "100px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        style={{ fontSize: "60px", color: "#ff1744" }}
        animate={{ textShadow: ["0 0 10px #ff1744", "0 0 20px #ff1744", "0 0 10px #ff1744"] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        404
      </motion.h1>

      <motion.h2
        style={{ color: "#00e676" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Oops! This link doesn’t exist
      </motion.h2>

      <p>The page you are looking for was not found.</p>
      <Link to={user ? "/dashboard" : "/"} style={{ color: "#00e676" }}>
        {user ? "Go to Dashboard" : "Go to Homepage"}
      </Link>
    </motion.div>
  );
}

export default NotFound;
