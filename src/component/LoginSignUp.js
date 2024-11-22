import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css";

function LoginSignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
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

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" required />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
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
