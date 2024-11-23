import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css";

function LoginSignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setError(""); // Clear error on toggle
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (isSignUp && !username) {
      setError("Username is required for sign up.");
      return;
    }

    // Simulate authentication (replace with actual API call)
    const isAuthenticated = true; // Replace with actual authentication logic
    if (isAuthenticated) {
      // Store the username and profileImage in localStorage
      localStorage.setItem("username", username);
      // Store a default profile image or the image uploaded by the user
      localStorage.setItem("profileImage", "https://via.placeholder.com/30");

      // Redirect to the dashboard page
      navigate("/dashboard");
    } else {
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="heading">
          <p>VRV SECURITY</p>
        </div>
        <div className="actionshow">
          <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        </div>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Error message display */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="auth-btn-container">
            <button type="submit" className="auth-btn">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
        <button className="toggle-btn" onClick={toggleAuthMode}>
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
      <div className="auth-background"></div>
    </div>
  );
}

export default LoginSignUp;
