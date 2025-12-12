import React from "react";
import { motion } from "framer-motion";

const AddTask = ({ onClose }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 50, opacity: 0, scale: 0.95 },
  };

  const fieldVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="bg-white/20 backdrop-blur-md rounded-xl p-6 w-[90%] max-w-md shadow-lg border border-white/30 relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-lg font-bold hover:text-amber-400 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &times;
        </motion.button>

        <motion.h2
          className="text-xl font-semibold mb-4 text-white"
          variants={fieldVariants}
          custom={0}
        >
          Add Your Goal
        </motion.h2>

        <motion.div variants={fieldVariants} custom={1}>
          <label className="block mb-2 text-sm font-medium text-white">
            Your Goal
          </label>
          <input
            type="text"
            placeholder="Enter your goal here"
            className="w-full p-2 mb-4 border border-white/30 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </motion.div>

        <motion.div variants={fieldVariants} custom={2}>
          <label className="block mb-2 text-sm font-medium text-white">
            Duration
          </label>
          <input
            type="date"
            className="w-full p-2 mb-4 border border-white/30 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </motion.div>

        <motion.div variants={fieldVariants} custom={3}>
          <label className="block mb-2 text-sm font-medium text-white">
            Alert Time
          </label>
          <input
            type="time"
            className="w-full p-2 mb-4 border border-white/30 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </motion.div>

        <motion.button
          className="w-full bg-amber-400 text-white py-2 rounded-md hover:bg-amber-500 transition-colors"
          variants={fieldVariants}
          custom={4}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AddTask;
