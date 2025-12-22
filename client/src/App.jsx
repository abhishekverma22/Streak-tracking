import React from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUP";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
