import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManageMent from "./component/UserManageMent";
import LoginSignUp from "./component/LoginSignUp";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignUp />} />
          <Route path="/dashboard" element={<Navbar />} />
        </Routes>
        <UserManageMent />
      </div>
    </Router>
  );
}

export default App;
