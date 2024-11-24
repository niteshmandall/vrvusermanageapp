import React, { useState, useEffect } from "react";
import "./Permission.css";
import Pagination from "./Pagination"; // Import the Pagination component

function Permission({ roles, saveUserDetails, onSave }) {
  const [updatedRoles, setUpdatedRoles] = useState(roles); // Use local state for updated roles
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items per page

  // Update local state when roles prop changes
  useEffect(() => {
    setUpdatedRoles(roles);
  }, [roles]);

  const handleRoleNameChange = (index, newName) => {
    const newRoles = [...updatedRoles];
    newRoles[index].designation = newName; // Update the designation
    setUpdatedRoles(newRoles); // Update the state
    saveUserDetails(index, newRoles[index]); // Save the updated role
  };

  const handlePermissionChange = (roleIndex, permission) => {
    const newRoles = [...updatedRoles];
    newRoles[roleIndex].permissions[permission] =
      !newRoles[roleIndex].permissions[permission]; // Toggle permission
    setUpdatedRoles(newRoles); // Update the state
    saveUserDetails(roleIndex, newRoles[roleIndex]); // Save the updated role
  };

  const saveRoles = () => {
    // Call the onSave function passed from the parent to save the roles
    onSave(updatedRoles); // Pass updated roles to the parent
    console.log("Roles saved:", updatedRoles);
    alert("Roles saved successfully!"); // Placeholder for actual save logic
  };

  // Pagination logic: Calculate the current roles to display
  const indexOfLastRole = currentPage * itemsPerPage;
  const indexOfFirstRole = indexOfLastRole - itemsPerPage;
  const currentRoles = updatedRoles.slice(indexOfFirstRole, indexOfLastRole);

  return (
    <div className="permission-box">
      <div className="permission-container">
        <table className="permission-table">
          <thead>
            <tr>
              <th>Designation</th>
              {/* read only */}
              <th>Read</th>
              {/* update the details */}
              <th>Write</th>
              {/* delete row the details */}
              <th>Delete</th>
              {/* add the row */}
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {currentRoles.map((role, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={role.designation}
                    onChange={(e) =>
                      handleRoleNameChange(index, e.target.value)
                    }
                    placeholder="Enter designation"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={role.permissions.read}
                    onChange={() => handlePermissionChange(index, "read")}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={role.permissions.write}
                    onChange={() => handlePermissionChange(index, "write")}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={role.permissions.delete}
                    onChange={() => handlePermissionChange(index, "delete")}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={role.permissions.add}
                    onChange={() => handlePermissionChange(index, "add")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button onClick={saveRoles} className="save-role-btn">
            Save
          </button>
        </div>
        <Pagination
          totalItems={updatedRoles.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage} // Handle page change
        />
      </div>
    </div>
  );
}

export default Permission;
