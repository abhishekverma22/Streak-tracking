import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUP";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup/> } />
      </Routes>
    </div>
  );
};

export default App;
