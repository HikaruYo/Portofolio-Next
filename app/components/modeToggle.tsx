'use client'

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

export default function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className="relative w-6 h-6 cursor-pointer"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <FaSun
        className={`absolute w-6 h-6 transition-opacity duration-700 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
      />
      <FaMoon
        className={`absolute w-6 h-6 transition-opacity duration-700 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
