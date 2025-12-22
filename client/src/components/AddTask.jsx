import React from "react";
import { motion } from "framer-motion";

const AddTask = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Click outside closes modal
    >
      <motion.div
        className="bg-gray-900/95 backdrop-blur-md rounded-xl p-6 w-[90%] max-w-md shadow-lg border border-white/30 relative"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-lg font-bold hover:text-amber-400 cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4 text-white">Add Your Goal</h2>

        <label className="block mb-2 text-sm font-medium text-white">Your Goal</label>
        <input
          type="text"
          placeholder="Enter your goal"
          className="w-full p-2 mb-4 border border-white/30 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <label className="block mb-2 text-sm font-medium text-white">Duration</label>
        <input
          type="date"
          className="w-full p-2 mb-4 border border-white/30 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <label className="block mb-2 text-sm font-medium text-white">Alert Time</label>
        <input
          type="time"
          className="w-full p-2 mb-4 border border-white/30 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <button className="w-full bg-amber-400 text-white py-2 rounded-md hover:bg-amber-500 transition-colors">
          Add
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AddTask;
