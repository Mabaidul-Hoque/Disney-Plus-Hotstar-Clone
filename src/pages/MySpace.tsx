// import React from "react";

import { useNavigate } from "react-router-dom";

const MySpace = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="pt-64 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-semibold tracking-widest">
          Login to Disney+ Hotstar
        </h1>
        <p>Start watching where you left off, personalise for kids and more</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-gradient-to-r from-blue-400 to-blue-600 px-10 py-3 rounded-md text-xl font-semibold hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default MySpace;
