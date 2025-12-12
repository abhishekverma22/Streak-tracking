import React from "react";
import FloatingNav from "../components/FloatingNav";
import UserInfo from "../components/UserInfo";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen min-w-screen bg-linear-to-br from-[#08050F] via-[#1C1033] to-[#150D2A]
relative overflow-hidden flex flex-col items-center px-6 pt-6"
    >
      {/* Cracked Glass Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cracked.png')`,
        }}
      ></div>
      <FloatingNav />
    </div>
  );
};

export default Dashboard;
