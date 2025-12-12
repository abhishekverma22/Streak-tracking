import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    navigate("/dashboard");
  };
  return (
    <div
      className="min-h-screen min-w-screen bg-linear-to-br from-[#05040A] to-[#1A102A] 
 relative overflow-hidden flex justify-center items-center px-4"
    >
      {/* Cracked Glass Pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cracked.png')`,
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black/20 border-white/20 border p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-[600px] flex flex-col gap-6 items-center"
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="App Logo"
          className="w-14 h-14 sm:w-16 sm:h-16 mb-2"
        />

        {/* App Name */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center">
          Daily Streaks
        </h1>

        {/* Tagline */}
        <p className="text-gray-300 text-center text-xs sm:text-sm mb-2">
          Build habits, track streaks, stay consistent!
        </p>

        {/* ID */}
        <motion.input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={userData.email}
          onChange={handleLogin}
          whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
          className="p-3 rounded-lg outline-none border border-gray-200 text-white tracking-wider w-full text-sm sm:text-base"
        />

        {/* Password */}
        <motion.input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleLogin}
          whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
          className="p-3 rounded-lg outline-none border border-gray-200 text-white tracking-wider w-full text-sm sm:text-base"
        />

        {/* Forgot password */}
        <p className="text-[#817af5] text-xs sm:text-sm w-full text-right cursor-pointer hover:text-[#6C63FF]">
          Forgot password?
        </p>

        {/* Login Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-[#817af5] text-white p-3 rounded-lg tracking-wider font-semibold text-base sm:text-lg w-full cursor-pointer hover:bg-[#6C63FF]"
        >
          Sign In
        </motion.button>

        {/* Create Account */}
        <p className="text-gray-400 text-sm mt-2">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#6C63FF] font-semibold cursor-pointer"
          >
            Create New Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
