import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserManageMent.css";
import UserManageMentDetails from "./UserManageMentDetails";
import RoleManagement from "./RoleManagement";
import Permission from "./Permission";
import LoginSignUp from "./LoginSignUp";

function UserManageMent() {
  const [activeComponent, setActiveComponent] = useState("userdetails");
  const [currentLinkName, setCurrentLinkName] = useState("User Management");

  const renderComponent = () => {
    switch (activeComponent) {
      case "/":
        return <LoginSignUp />;
      case "userdetails":
        return <UserManageMentDetails />;
      case "roles":
        return <RoleManagement />;
      case "permissions":
        return <Permission />;
      default:
        return null;
    }
  };

  return (
    <div className="usermanage">
      <div className="header">
        {/* Header Left */}
        <div className="headerleft">
          <p>{currentLinkName}</p>
          <div className="link">
            <Link
              to="/"
              onClick={() => {
                setActiveComponent("/");
                setCurrentLinkName("Home");
              }}
            >
              Home
            </Link>
            <Link
              to="#"
              onClick={() => {
                setActiveComponent("userdetails");
                setCurrentLinkName("User Management");
              }}
            >
              User Management
            </Link>
            <Link
              to="#"
              onClick={() => {
                setActiveComponent("roles");
                setCurrentLinkName("Role Management");
              }}
            >
              Role Management
            </Link>
            <Link
              to="#"
              onClick={() => {
                setActiveComponent("permissions");
                setCurrentLinkName("Permissions");
              }}
            >
              Permissions
            </Link>
          </div>
        </div>
        {/* Header Right */}
        <div className="headerright">
          <div className="search">
            <input type="search" placeholder="Search User" required />
            <button className="search-btn">
              <img src="/search.png" alt="Search" className="search-icon" />
            </button>
          </div>
          <div className="addbtn">
            <button className="btn">Add Users</button>
          </div>
        </div>
      </div>

      {/* Render Active Component Below */}
      <div className="nested-content">{renderComponent()}</div>
    </div>
  );
}

export default UserManageMent;
