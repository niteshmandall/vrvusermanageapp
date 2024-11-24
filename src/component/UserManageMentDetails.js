import React, { useState, useEffect } from "react";
import Pagination from "./Pagination"; // Import the Pagination component
import "./UserManagementDetails.css";

function UserManagementDetails({ users }) {
  const [userStatuses, setUserStatuses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Load saved statuses from local storage or initialize them from users
  useEffect(() => {
    const savedStatuses =
      JSON.parse(localStorage.getItem("userStatuses")) || {};
    const initialStatuses = users.map(
      (user) => savedStatuses[user.id] || user.status || "Active"
    );
    setUserStatuses(initialStatuses);
  }, [users]);

  const handleStatusChange = (index, event) => {
    const newStatus = event.target.value;

    // Update the state for this user
    setUserStatuses((prevStatuses) => {
      const updatedStatuses = [...prevStatuses];
      updatedStatuses[index] = newStatus;

      // Save updated statuses in local storage
      const savedStatuses =
        JSON.parse(localStorage.getItem("userStatuses")) || {};
      savedStatuses[users[index].id] = newStatus; // Persist status by user ID
      localStorage.setItem("userStatuses", JSON.stringify(savedStatuses));

      return updatedStatuses;
    });
  };

  // Calculate the current users to display
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
            {currentUsers.map((user, index) => (
              <tr key={user.id || index}>
                <td>{indexOfFirstUser + index + 1}</td>
                <td>
                  <div className="profile-info">
                    <div className="profile-details">
                      <p>Name: {user.name || "N/A"}</p>
                      <p>Email: {user.email || "N/A"}</p>
                      <p>Number: {user.contactNo || "N/A"}</p>
                    </div>
                  </div>
                </td>
                <td>{user.designation || "N/A"}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>Add</button>
                </td>
                <td>
                  <select
                    value={userStatuses[index]}
                    onChange={(e) => handleStatusChange(index, e)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="button-container"
          style={{ justifyContent: "flex-end" }}
        >
          <Pagination
            totalItems={users.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default UserManagementDetails;
