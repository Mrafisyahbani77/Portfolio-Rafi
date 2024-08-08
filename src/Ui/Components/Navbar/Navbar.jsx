import React, { useState, useEffect } from "react";
import Clos from "../../../assets/Images/ttp.png";
import Burger from "../../../assets/Images/bgr.png";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
     if (darkMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-gray-900 fixed w-full px-4 py-5 flex justify-between items-center z-50 top-0">
      <div className="flex items-center md:hidden">
        <img
          className="cursor-pointer w-8 h-8"
          src={menuOpen ? Clos : Burger}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div className="flex items-center justify-center flex-grow">
        <ul className="hidden md:flex space-x-5 text-lg font-mono">
          <li className="hover:text-yellow-500 hover:bg-gray-800 rounded-md px-2 py-1 text-gray-100">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-500 hover:bg-gray-800 rounded-md px-2 py-1 text-gray-100">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-500 hover:bg-gray-800 rounded-md px-2 py-1 text-gray-100">
            <a href="#skils">Skills</a>
          </li>
          <li className="hover:text-yellow-500 hover:bg-gray-800 rounded-md px-2 py-1 text-gray-100">
            <a href="#Edukasi">Education</a>
          </li>
          <li className="hover:text-yellow-500 hover:bg-gray-800 rounded-md px-2 py-1 text-gray-100">
            <a href="#serti">Certificate</a>
          </li>
          <li className="hover:text-yellow-500 hover:bg-gray-800 rounded-md px-2 py-1 text-gray-100">
            <a href="#project">Project</a>
          </li>
          <li className="hover:text-yellow-500 hover:bg-gray-800 rounded-md px-2 py-1 text-gray-100">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center ml-auto">
        <button
          className="px-2 py-2 bg-black text-white rounded-full ml-4"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto md:relative flex flex-col bg-gray-900 rounded-md p-4 shadow-md z-50`}
      >
        <a
          href="#home"
          className="block py-2 text-center text-gray-200 hover:bg-gray-700 rounded-md"
        >
          Home
        </a>
        <a
          href="#about"
          className="block py-2 text-center text-gray-200 hover:bg-gray-700 rounded-md"
        >
          About
        </a>
        <a
          href="#skils"
          className="block py-2 text-center text-gray-200 hover:bg-gray-700 rounded-md"
        >
          Skills
        </a>
        <a
          href="#Edukasi"
          className="block py-2 text-center text-gray-200 hover:bg-gray-700 rounded-md"
        >
          Education
        </a>
        <a
          href="#serti"
          className="block py-2 text-center text-gray-200 hover:bg-gray-700 rounded-md"
        >
          Certificate
        </a>
        <a
          href="#project"
          className="block py-2 text-center text-gray-200 hover:bg-gray-700 rounded-md"
        >
          Project
        </a>
        <a
          href="#contact"
          className="block py-2 text-center text-gray-200 hover:bg-gray-700 rounded-md"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
