'use client'

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

export default function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount, check localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedMode === "dark" || (!savedMode && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // When toggle is clicked
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className="relative w-6 h-6 cursor-pointer"
      onClick={toggleDarkMode}
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
