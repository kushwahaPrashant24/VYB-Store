"use client";
import React, { useState } from "react";

function ResponsiveTabs() {
  const [activeTab, setActiveTab] = useState("");

  const tabs = ["Travel", "Digital", "Brand", "Merch"];

  return (
    <div className="flex justify-center items-center">
      {/* Outer Container */}
      <div
        className="w-full max-w-[328px] h-auto p-4 gap-9 rounded-tl-2xl opacity-100 bg-gray-900 flex flex-col sm:flex-row justify-around items-center sm:max-w-full"
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex items-center justify-center h-8 sm:h-16 px-2 sm:px-4 py-1 gap-2 text-white font-bold rounded-lg cursor-pointer ${
              activeTab === tab ? "bg-green-500" : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveTabs;
