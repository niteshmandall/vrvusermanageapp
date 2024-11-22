import React from "react";
import { Link } from "react-router-dom";
import "./UserManageMent.css";

function UserManageMent() {
  return (
    <div className="usermanage">
      <div className="header">
        {/* Header Left */}
        <div className="headerleft">
          <p>User Management</p>
          <div className="link">
            <Link to="/">Home</Link>
            <Link to="/dashboard">User Management</Link>
            <Link to="/roles">Role Management</Link>
            <Link to="/permissions">Permissions</Link>
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
    </div>
  );
}

export default UserManageMent;
