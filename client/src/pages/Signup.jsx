import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
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
        className="bg-black/20 border-white/20 border p-8 sm:p-10 rounded-xl shadow-lg 
        w-full max-w-[650px] flex flex-col gap-6 items-center"
      >
        {/* Logo */}
        <img src="/logo.png" alt="App Logo" className="w-16 h-16 mb-1" />

        {/* App Name */}
        <h1 className="text-white text-2xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-gray-300 text-sm text-center -mt-3">
          Join Daily Streaks and start building habits!
        </p>

        {/* First & Last Name */}
        <div className="flex gap-3 w-full">
          <motion.input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
            className="p-3 rounded-lg outline-none border border-gray-200 
            text-white w-full text-base"
          />

          <motion.input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
            className="p-3 rounded-lg outline-none border border-gray-200 
            text-white w-full text-base"
          />
        </div>

        {/* Email */}
        <motion.input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
          className="p-3 rounded-lg outline-none border border-gray-200 
          text-white w-full text-base"
        />

        {/* Phone */}
        <motion.input
          type="number"
          placeholder="Phone Number"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
          className="p-3 rounded-lg outline-none border border-gray-200 
          text-white w-full text-base"
        />

        {/* Password */}
        <motion.input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
          className="p-3 rounded-lg outline-none border border-gray-200 
          text-white w-full text-base"
        />

        {/* Sign Up Button */}
        <motion.button
          onClick={handleChange}
          whileTap={{ scale: 0.95 }}
          className="bg-[#817af5] text-white p-3 rounded-lg tracking-wider 
          font-semibold text-lg w-full cursor-pointer hover:bg-[#6C63FF]"
        >
          Sign Up
        </motion.button>

        {/* OR Divider */}
        <div className="flex items-center w-full my-2">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="px-3 text-gray-400 text-sm">or sign up with</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 border border-white/20 p-3 rounded-full cursor-pointer"
          >
            <FaGoogle className="text-white text-2xl" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 border border-white/20 p-3 rounded-full cursor-pointer"
          >
            <FaGithub className="text-white text-2xl" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 border border-white/20 p-3 rounded-full cursor-pointer"
          >
            <FaFacebook className="text-white text-2xl" />
          </motion.div>
        </div>

        {/* Login Redirect */}
        <p className="text-gray-400 text-sm mt-2">
          Already have an account?{" "}
          <Link to="/" className="text-[#6C63FF] cursor-pointer font-semibold">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
