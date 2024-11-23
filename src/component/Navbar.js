import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/30"
  );

  // Fetch username and profile image from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedProfileImage = localStorage.getItem("profileImage");

    if (storedUsername) setUsername(storedUsername);
    if (storedProfileImage) setProfileImage(storedProfileImage);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update the profile image state
        localStorage.setItem("profileImage", reader.result); // Save the new profile image in localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageClick = () => {
    document.getElementById("file-input").click(); // Trigger hidden file input click
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>VRV Security</h1>
      </div>
      <div className="navbar-right">
        <div className="profile">
          {username ? (
            <>
              <span>{username}</span>
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
                onClick={handleProfileImageClick}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="file-input"
              />
            </>
          ) : (
            <span>Guest</span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
