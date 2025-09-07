import React from "react";

function Profile({ user }) {
  return (
    <div className="container">
      <h1>Profile</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Profile Avatar"
        width="120"
        style={{ borderRadius: "50%", marginBottom: "20px" }}
      />
      <div className="card">
        <p><b>Username:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
