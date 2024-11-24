import React, { useState, useEffect } from "react";
import Pagination from "./Pagination"; // Import the Pagination component
import "./Permission.css";

function Permission({ roles, saveUserDetails, onSave }) {
  const [updatedRoles, setUpdatedRoles] = useState(roles);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Update local state when roles prop changes
  useEffect(() => {
    setUpdatedRoles(roles);
  }, [roles]);

  const handleRoleNameChange = (index, newName) => {
    const newRoles = [...updatedRoles];
    newRoles[index].designation = newName;
    setUpdatedRoles(newRoles);
  };

  const handlePermissionChange = (roleIndex, permission) => {
    const newRoles = [...updatedRoles];
    newRoles[roleIndex].permissions[permission] =
      !newRoles[roleIndex].permissions[permission];
    setUpdatedRoles(newRoles);
  };

  const saveRoles = () => {
    onSave(updatedRoles);
  };

  // Calculate the current roles to display
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
              <th>Read</th>
              <th>Write</th>
              <th>Delete</th>
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
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="button-container"
          style={{ justifyContent: "flex-end" }}
        >
          <button onClick={saveRoles} className="save-role-btn">
            Save
          </button>
        </div>
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

export default Permission;
