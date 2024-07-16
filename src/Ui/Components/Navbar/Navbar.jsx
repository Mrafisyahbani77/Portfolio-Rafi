import React, { useState, useEffect } from "react";
import Clos from "../../../assets/Images/ttp.png";
import Burger from "../../../assets/Images/bgr.png";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-gray-900 fixed w-full px-4 py-5 flex justify-between items-center z-50 top-0">
      {/* Container for centering */}
      <div className="flex items-center justify-center flex-grow">
        {/* Menu untuk tampilan desktop */}
        <ul className="hidden md:flex space-x-5 text-lg font-mono">
          <li className="hover:text-gray-500 text-gray-100">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-500 text-gray-100">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-500 text-gray-100">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-gray-500 text-gray-100">
            <a href="#edukasi">Education</a>
          </li>
          <li className="hover:text-gray-500 text-gray-100">
            <a href="#certificate">Certificate</a>
          </li>
          <li className="hover:text-gray-500 text-gray-100">
            <a href="#project">Project</a>
          </li>
          <li className="hover:text-gray-500 text-gray-100">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Tombol Dark Mode */}
      <div className="flex items-center">
        <button
          className="px-2 py-2 bg-black text-white rounded-full md:ml-auto"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Tombol Menu untuk tampilan responsif */}
        <div className="md:hidden flex items-center ml-4">
          <img
            className="cursor-pointer w-8 h-8"
            src={menuOpen ? Clos : Burger}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Menu items untuk tampilan responsif */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 right-4 left-4 md:top-auto md:right-auto md:relative flex flex-col bg-gradient-to-b from-yellow-300 to-slate-500 rounded-md p-4 shadow-md z-50`}
      >
        <a
          href="#home"
          className="block py-2 text-center text-gray-200 hover:text-gray-500"
        >
          Home
        </a>
        <a
          href="#about"
          className="block py-2 text-center text-gray-200 hover:text-gray-500"
        >
          About
        </a>
        <a
          href="#skills"
          className="block py-2 text-center text-gray-200 hover:text-gray-500"
        >
          Skills
        </a>
        <a
          href="#education"
          className="block py-2 text-center text-gray-200 hover:text-gray-500"
        >
          Education
        </a>
        <a
          href="#certificate"
          className="block py-2 text-center text-gray-200 hover:text-gray-500"
        >
          Certificate
        </a>
        <a
          href="#project"
          className="block py-2 text-center text-gray-200 hover:text-gray-500"
        >
          Project
        </a>
        <a
          href="#contact"
          className="block py-2 text-center text-gray-200 hover:text-gray-500"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
