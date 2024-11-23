import React from "react";
import "./Navbar.css"; // Importing the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>VRV Security</h1>
      </div>
      <div className="navbar-right">
        <div className="profile">
          {/* when user come to dashboard name their show according to auth */}
          <span>NameShow</span>
          <img
            src="https://via.placeholder.com/30" // Placeholder for profile image
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
