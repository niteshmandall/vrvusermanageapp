import React, { useState } from "react";
import Pagination from "./Pagination"; // Import the Pagination component
import "./RoleManagement.css";

function RoleManagement({ roles, saveUserDetails, onSave }) {
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [updatedRoles, setUpdatedRoles] = useState(roles);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleRoleChange = (index, newName) => {
    const newRoles = [...updatedRoles];
    newRoles[index].name = newName;
    setUpdatedRoles(newRoles);
  };

  const handleEmailChange = (index, newEmail) => {
    const newRoles = [...updatedRoles];
    newRoles[index].email = newEmail;
    setUpdatedRoles(newRoles);
  };

  const handleContactChange = (index, newContact) => {
    const newRoles = [...updatedRoles];
    newRoles[index].contactNo = newContact;
    setUpdatedRoles(newRoles);
  };

  const handleSave = () => {
    setIsSaving(true);
    onSave(updatedRoles);
    setSaveMessage("Roles saved successfully!");
    setIsSaving(false);
  };

  // Calculate the current roles to display
  const indexOfLastRole = currentPage * itemsPerPage;
  const indexOfFirstRole = indexOfLastRole - itemsPerPage;
  const currentRoles = updatedRoles.slice(indexOfFirstRole, indexOfLastRole);

  return (
    <div className="role-management-container">
      <div className="role-management">
        <table className="role-table">
          <thead>
            <tr>
              {/* that action will go to usermanagementdetails file */}
              <th>Name</th>
              <th>Profile (Email, Contact No)</th>
              <th>Designation</th>
              <th>Permission (R, W, D, A)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRoles.map((role, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={role.name}
                    onChange={(e) => handleRoleChange(index, e.target.value)}
                    placeholder="Enter role name"
                  />
                </td>
                <td>
                  <div>
                    <input
                      type="email"
                      value={role.email || ""}
                      onChange={(e) => handleEmailChange(index, e.target.value)}
                      placeholder="Enter email"
                    />
                    <input
                      type="text"
                      value={role.contactNo || ""}
                      onChange={(e) =>
                        handleContactChange(index, e.target.value)
                      }
                      placeholder="Enter contact number"
                    />
                  </div>
                </td>
                <td>{role.designation || "N/A"}</td>
                <td>
                  <div className="permissions">
                    <span className="read">
                      {role.permissions.read ? "R" : "-"}
                    </span>
                    <span className="write">
                      {role.permissions.write ? "W" : "-"}
                    </span>
                    <span className="delete">
                      {role.permissions.delete ? "D" : "-"}
                    </span>
                    <span className="add">
                      {role.permissions.add ? "A" : "-"}
                    </span>
                  </div>
                </td>
                <td>
                  <button className="action-btn edit-btn">Edit</button>
                  <button className="action-btn delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="button-container"
          style={{ justifyContent: "flex-end" }}
        >
          <button
            className="save-role-btn"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
        {saveMessage && <p className="save-message">{saveMessage}</p>}
        <Pagination
          totalItems={updatedRoles.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default RoleManagement;
