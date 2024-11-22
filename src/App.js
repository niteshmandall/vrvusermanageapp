import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManageMent from "./component/UserManageMent";
import LoginSignUp from "./component/LoginSignUp";
import Navbar from "./component/Navbar";
import UserManageMentDetails from "./component/UserManageMentDetails";
import RoleManagement from "./component/RoleManagement";
import Permission from "./component/Permission";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignUp />} />
          <Route path="/dashboard" element={<Navbar />} />
          <Route path="#" element={<UserManageMent />} />
          <Route path="/userdetails" element={<UserManageMentDetails />} />
          {/* Permissions */}
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permission" element={<Permission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
