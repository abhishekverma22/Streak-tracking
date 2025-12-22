import { FaHome, FaTasks, FaUser, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingNav = ({ active, setActive }) => {
  const navItems = [
    { id: 1, title: "Home", icon: <FaHome className="text-xl" /> },
    { id: 2, title: "New Tasks", icon: <FaTasks className="text-xl" /> },
    { id: 3, title: "Profile", icon: <FaUser className="text-xl" /> },
    {
      id: 4,
      title: "Logout",
      icon: <FaSignOutAlt className="text-xl" />,
    },
  ];

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[500px] flex justify-around
      bg-black/30 backdrop-blur-md rounded-full p-3 shadow-lg z-50 border border-amber-50/20"
    >
      {navItems.map((item) => (
        <motion.div
          key={item.id}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActive(item.id)}
          layout
          className="flex flex-col items-center text-white py-2 rounded-full w-20 cursor-pointer relative"
        >
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
  );
};

export default FloatingNav;
