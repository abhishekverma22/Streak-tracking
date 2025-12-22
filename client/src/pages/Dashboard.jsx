import React, { useState } from "react";
import FloatingNav from "../components/FloatingNav";
import AddTask from "../components/AddTask";
import UserInfo from "../components/UserInfo";
import Home from "../components/Home";

const Dashboard = () => {
  const [active, setActive] = useState(1); // 1=Home, 2=AddTask, 3=UserInfo

  return (
    <div
      className=" bg-linear-to-br from-[#08050F] via-[#1C1033] to-[#150D2A] 
      relative overflow-hidden flex flex-col items-center"
    >
      {/* Cracked Glass Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cracked.png')`,
        }}
      ></div>

      {/* Floating Nav */}
      <FloatingNav active={active} setActive={setActive} />

      {/* Content */}
      <div className="w-full max-w-4xl relative z-10">
        {/* Home always visible */}
        <Home />

        {/* Conditional modals */}
        {active === 2 && <AddTask onClose={() => setActive(1)} />}
        {active === 3 && <UserInfo onClose={() => setActive(1)} />}
      </div>
    </div>
  );
};

export default Dashboard;
