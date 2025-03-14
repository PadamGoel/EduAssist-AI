import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./signin";
import SignUp from "./signup";
import LandingPage from "./landingPage/land.jsx"; // Ensure correct import

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
