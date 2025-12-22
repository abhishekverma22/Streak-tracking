import React from "react";
import { motion } from "framer-motion";
import StreakGrid from "./StreakGrid";

const goalsData = [
  {
    id: 1,
    title: "Morning Workout",
    month: 11,
    year: 2025,
    completedDays: [1, 3, 4, 5, 7, 10, 12, 15],
  },
  {
    id: 2,
    title: "Read 20 Pages",
    month: 11,
    year: 2025,
    completedDays: [2, 6, 9, 11, 14, 17, 20, 23, 26, 29],
  },
  {
    id: 3,
    title: "Drink 2L Water",
    month: 11,
    year: 2025,
    completedDays: [1, 2, 3, 4, 5, 8, 12, 15, 18, 22, 25, 28, 30],
  },
  {
    id: 4,
    title: "Drink 4L Water",
    month: 1,
    year: 2025,
    completedDays: [1, 2, 4, 5, 9, 13, 17, 18, 20, 22, 28, 31],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen text-white pt-4 pb-34 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto">
        {/* Main Title */}
        <h1
          className="
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          font-bold 
          text-center 
          pb-3 sm:pb-4 
          border-b 
          border-white/10 
          mb-10 sm:mb-12
        "
        >
          Your Streaks
        </h1>

        {/* Goals List */}
        <div className="space-y-10 sm:space-y-12">
          {goalsData.map((goal, index) => {
            const totalDays = new Date(goal.year, goal.month + 1, 0).getDate();
            const done = goal.completedDays.length;

            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="
                  rounded-2xl 
                  bg-linear-to-b from-white/5 to-transparent
                  backdrop-blur-md 
                  border border-white/10
                  p-5 sm:p-7 
                  shadow-lg
                  hover:shadow-md 
                  hover:shadow-purple-50/10
                  hover:bg-purple-600/10
                  hover:-translate-y-1
                  transition-all duration-500 ease-out
                  cursor-pointer
                "
              >
                {/* Title + Count */}
                <div className="text-center mb-5 sm:mb-7">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    {goal.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-400 mt-2">
                    {done} / {totalDays} days
                  </p>
                </div>

                {/* Streak Grid */}
                <div className="flex justify-center">
                  <StreakGrid
                    month={goal.month}
                    year={goal.year}
                    streaks={goal.completedDays}
                  />
                </div>

                {/* View History Button */}
                <div className="text-center mt-6">
                  <button
                    className="
                    text-xs sm:text-sm 
                    text-gray-400 
                    hover:text-white 
                    transition-colors duration-200
                  "
                  >
                    View all months →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
