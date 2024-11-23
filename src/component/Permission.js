import React, { useState } from "react";
import "./Permission.css";

function Permission() {
  const [roles, setRoles] = useState([
    {
      name: "Manager",
      permissions: { read: false, write: false, delete: false },
    },
    {
      name: "Staff",
      permissions: { read: false, write: false, delete: false },
    },
    {
      name: "LeadTeam",
      permissions: { read: false, write: false, delete: false },
    },
  ]);

  const handlePermissionChange = (roleIndex, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role, index) =>
        index === roleIndex
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [permission]: !role.permissions[permission],
              },
            }
          : role
      )
    );
  };

  const handleRoleNameChange = (index, value) => {
    const updatedRoles = [...roles];
    updatedRoles[index].name = value;
    setRoles(updatedRoles);
  };

  const saveRoles = () => {
    // Logic to save roles (e.g., send to backend or update state)
    console.log("Roles saved:", roles);
    alert("Roles saved successfully!"); // Placeholder for actual save logic
  };

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
            {roles.map((role, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={role.name}
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
        <div className="button-container">
          <button onClick={saveRoles} className="save-role-btn">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Permission;
