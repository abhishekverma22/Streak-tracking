import React, { useState } from "react";
import { FaHome, FaTasks, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AddTask from "./AddTask";
import UserInfo from "./UserInfo";

const navItems = [
  { id: 1, title: "Home", icon: <FaHome className="text-xl" /> },
  { id: 2, title: "New Tasks", icon: <FaTasks className="text-xl" /> },
  { id: 3, title: "Profile", icon: <FaUser className="text-xl" /> },
];

const FloatingNav = () => {
  const [active, setActive] = useState(1);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleClick = (id) => {
    setActive(id);

    // Reset all modals
    setShowAddTask(false);
    setShowUserInfo(false);

    if (id === 2) {
      setShowAddTask(true);
    }
    if (id === 3) {
      setShowUserInfo(true);
    }
  };

  return (
    <>
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[500px] flex justify-around
        bg-black/30 backdrop-blur-md rounded-full p-3 shadow-lg z-50 border border-amber-50/20"
      >
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(item.id)}
            layout
            className="flex flex-col items-center text-white py-2 rounded-full w-20 cursor-pointer relative"
          >
            {/* Animated background */}
            {active === item.id && (
              <motion.div
                layoutId="active-bg"
                className="absolute inset-0 bg-white/20 rounded-full border border-amber-50/20"
                transition={{ type: "spring", stiffness: 200, damping: 60 }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center">
              {item.icon}
              <span className="text-xs mt-1">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showAddTask && (
          <AddTask
            onClose={() => {
              setShowAddTask(false);
              setActive(1);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showUserInfo && (
          <UserInfo
            onClose={() => {
              setShowUserInfo(false);
              setActive(1);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
