import React from "react";
import "./UserManagementDetails.css";

function UserManagementDetails() {
  return (
    <div className="userdetails-container">
      <div className="userdetails">
        <table className="user-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Profile</th>
              <th>Designation</th>
              <th>Actions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="profile-info">
                  <img
                    src="profile-pic-url"
                    alt="Profile"
                    className="profile-pic"
                  />
                  <div className="profile-details">
                    <p>Name: John Doe</p>
                    <p>Email: john@example.com</p>
                    <p>Number: 1234567890</p>
                  </div>
                </div>
              </td>
              <td>Manager</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
                <button>Add</button>
              </td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagementDetails;
