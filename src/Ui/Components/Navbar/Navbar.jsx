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
    <nav className="bg-gradient-to-r from-yellow-300 to-yellow-600 px-4 py-5 items-center">
      {/* Menu untuk tampilan desktop */}
      <ul className="hidden md:flex justify-center items-center space-x-5 text-lg font-mono">
        <li className="hover:text-gray-900 text-gray-100">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-gray-900 text-gray-100">
          <a href="#skils">Skills</a>
        </li>
        <li className="hover:text-gray-900 text-gray-100">
          <a href="#Edukasi">Education</a>
        </li>
        <li className="hover:text-gray-900 text-gray-100">
          <a href="#serti">Certificates</a>
        </li>
        <li className="hover:text-gray-900 text-gray-100">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-gray-900 text-gray-100">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Tombol Dark Mode di luar list untuk tetap terlihat */}
      <button
        className="px-2 py-2 bg-black text-white rounded-full float-right "
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <div className="flex">
        <div className="md:hidden flex justify-center items-center">
          <img
            className="cursor-pointer w-8 h-8"
            src={menuOpen ? Clos : Burger}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {/* Menu items untuk tampilan responsif */}
          <div
            className={`menuItems ${
              menuOpen ? "block" : "hidden"
            } absolute top-16 right-4 left-4 md:top-auto md:right-auto md:relative flex flex-col bg-gradient-to-b from-yellow-300 to-slate-500 rounded-md p-4 shadow-md`}
          >
            <a
              href="#about"
              className="block py-2 text-center text-gray-200 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#skill"
              className="block py-2 text-center text-gray-200 hover:text-gray-900"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="block py-2 text-center text-gray-200 hover:text-gray-900"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block py-2 text-center text-gray-200 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
