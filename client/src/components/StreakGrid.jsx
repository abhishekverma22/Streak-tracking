import React from "react";

const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const StreakGrid = ({ month, year, streaks = [] }) => {
  const daysInMonth = getDaysInMonth(month, year);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Month & Year - Left Aligned */}
      <h2 className="
        text-white font-semibold mb-5 
        text-left            /* ← Left aligned */
        text-sm              /* mobile */
        sm:text-base         /* tablet */
        md:text-lg           /* desktop */
      ">
        {new Date(year, month).toLocaleString("default", { month: "long" })} {year}
      </h2>

      {/* Grid - Still centered */}
      <div
        className="
          grid grid-cols-10 
          gap-1.5 sm:gap-2
          mx-auto
        "
        style={{ maxWidth: "520px" }}
      >
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const done = streaks.includes(day);

          return (
            <div
              key={day}
              className={`
                aspect-square rounded-sm border border-gray-800
                w-4 h-4
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                transition-all duration-200
                ${done
                  ? "bg-green-500 shadow-md shadow-green-500/30"
                  : "bg-gray-900 hover:bg-gray-800"
                }
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StreakGrid;