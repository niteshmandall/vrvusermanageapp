import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignUp from "./component/LoginSignUp";
import Navbar from "./component/Navbar";
import UserManageMent from "./component/UserManageMent";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<LoginSignUp />} />

          {/* Authenticated Routes */}
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                <UserManageMent />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
