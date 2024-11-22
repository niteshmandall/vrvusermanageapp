import React from "react";
import "./RoleManagement.css";

function RoleManagement() {
  return (
    <div className="role-management-container">
      <div className="role-management">
        <table className="role-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Permission (R, W, D)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Manager</td>
              <td>
                <div className="permissions">
                  <span className="read">R</span>
                  <span className="write">W</span>
                  <span className="delete">D</span>
                </div>
              </td>
              <td>
                <button className="action-btn edit-btn">Edit</button>
                <button className="action-btn delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Team Lead</td>
              <td>
                <div className="permissions">
                  <span className="read">R</span>
                  <span className="write">W</span>
                  <span className="delete disabled">D</span>
                </div>
              </td>
              <td>
                <button className="action-btn edit-btn">Edit</button>
                <button className="action-btn delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoleManagement;
