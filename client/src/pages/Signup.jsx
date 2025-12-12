import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!userData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }
    if (!userData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }
    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!userData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else if (userData.phone_number.length !== 10) {
      newErrors.phone_number = "Phone number must be 10 digits";
    }
    if (!userData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Remove error when user types
  };

  const onSubmit = async () => {
    if (!validate()) return;
    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        { ...userData },
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success("Account created successfully! Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      const msg =
        error.response?.data?.msg || "Signup failed. Try again later.";
      toast.error(msg);
    }
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
          {/* First Name */}
          <div className="w-full">
            <motion.input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
              className={`p-3 rounded-lg outline-none border ${
                errors.first_name ? "border-red-500" : "border-gray-200"
              } text-white w-full text-base`}
            />
            {errors.first_name && (
              <p className="text-red-400 text-sm mt-2">{errors.first_name}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="w-full">
            <motion.input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
              className={`p-3 rounded-lg outline-none border ${
                errors.last_name ? "border-red-500" : "border-gray-200"
              } text-white w-full text-base`}
            />
            {errors.last_name && (
              <p className="text-red-400 text-sm mt-2">{errors.last_name}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <motion.input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
          className={` p-3 rounded-lg outline-none border ${
            errors.email ? "border-red-500" : "border-gray-200"
          } text-white w-full text-base`}
        />
        {errors.email && (
          <p className="text-red-400 text-sm -mt-4">{errors.email}</p>
        )}

        {/* Phone */}
        <motion.input
          type="number"
          placeholder="Phone Number"
          name="phone_number"
          value={userData.phone_number}
          onChange={handleChange}
          whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
          className={`p-3 rounded-lg outline-none border ${
            errors.phone_number ? "border-red-500" : "border-gray-200"
          } text-white w-full text-base`}
        />
        {errors.phone_number && (
          <p className="text-red-400 text-sm -mt-4">{errors.phone_number}</p>
        )}

        {/* Password */}
        <motion.input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          whileFocus={{ scale: 1.03, borderColor: "#6C63FF" }}
          className={`p-3 rounded-lg outline-none border ${
            errors.password ? "border-red-500" : "border-gray-200"
          } text-white w-full text-base`}
        />
        {errors.password && (
          <p className="text-red-400 text-sm -mt-4">{errors.password}</p>
        )}

        {/* Sign Up Button */}
        <motion.button
          onClick={onSubmit}
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
