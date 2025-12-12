import React from "react";
import { motion } from "framer-motion";

const UserInfo = ({ onClose }) => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    joinDate: "2023-01-15",
    stats: {
      totalAdded: 120,
      totalCompleted: 95,
      totalSkipped: 10,
      consistency: 80,
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Mobile Close Button */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 text-white text-4xl font-light hover:text-amber-400 sm:hidden"
      >
        x
      </button>

      <motion.div
        className="bg-gray-900/95 backdrop-blur-xl text-white w-full h-screen sm:w-[90%] sm:max-w-3xl sm:h-auto sm:rounded-2xl 
                   max-h-screen sm:max-h-[95vh] overflow-auto p-6 relative"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Desktop Close Button */}
        <button
          onClick={onClose}
          className="hidden sm:block absolute top-6 right-6 text-white text-4xl font-light hover:text-amber-400 z-10"
        >
          ×
        </button>

        <div className="flex flex-col gap-8">
          {/* Avatar + Name */}

          <motion.div className="text-center" variants={item}>
            <div
              className="
      w-10 h-10 sm:w-20 sm:h-20
      mx-auto rounded-full bg-amber-400 
      flex items-center justify-center 
      text-white text-3xl sm:text-5xl font-bold shadow-2xl
    "
            >
              {user.firstName[0]}
            </div>

            <h2
              className="
      mt-4 
      text-2xl sm:text-4xl 
      font-bold
    "
            >
              {user.firstName} {user.lastName}
            </h2>
          </motion.div>

          {/* Personal Details */}
          <motion.div
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4"
            variants={item}
          >
            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">
              Personal Details
            </h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5 text-base"
              variants={container}
            >
              {[
                { label: "First Name", value: user.firstName },
                { label: "Last Name", value: user.lastName },
                { label: "Email", value: user.email },
                { label: "Phone", value: user.phone },
                {
                  label: "Join Date",
                  value: new Date(user.joinDate).toLocaleDateString(),
                },
              ].map((field, i) => (
                <motion.div key={i} variants={item}>
                  <span className="font-sm text-gray-300">
                    {field.label}:
                  </span>{" "}
                  <span className="text-white">{field.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="mt-5 w-full bg-amber-400 text-gray-900 py-3.5 rounded-xl font-bold text-lg hover:bg-amber-500 transition"
              variants={item}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Edit Personal Details
            </motion.button>
          </motion.div>

          {/* Stats – 2×2 on mobile, 1×4 on desktop */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-5"
            variants={container}
          >
            {[
              { value: user.stats.totalAdded, label: "Tasks Added" },
              { value: user.stats.totalCompleted, label: "Tasks Completed" },
              { value: user.stats.totalSkipped, label: "Tasks Skipped" },
              { value: `${user.stats.consistency}%`, label: "Consistency" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                variants={item}
                whileHover={{ scale: 1.06, y: -4 }}
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-amber-400">
                  {stat.value}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserInfo;
