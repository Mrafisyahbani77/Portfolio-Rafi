import React, { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import Particle from "../../Components/Particle";
import Profile from "../../../assets/Images/Rafi.png";
import Rea from "../../../assets/Images/Rea.png";
import Javascript from "../../../assets/Images/javascript.png";
import Tailwindcss from "../../../assets/Images/tailwind.png";
import { SiNextdotjs } from "react-icons/si";
import Cv from "../../../assets/Certificate/Cv.pdf"; // Adjust path if necessary


const technologies = [
  { name: "ReactJS", logo: Rea, url: "https://reactjs.org", isIcon: false },
  {
    name: "NextJS",
    logo: SiNextdotjs,
    url: "https://nextjs.org",
    isIcon: true,
  },
  {
    name: "Tailwind CSS",
    logo: Tailwindcss,
    url: "https://tailwindcss.com",
    isIcon: false,
  },
  {
    name: "JavaScript",
    logo: Javascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    isIcon: false,
  },
];

export default function Home(props) {
  const id = props.id;

  const handleDownloadCV = () => {
    const a = document.createElement("a");
    a.href = Cv; // Set the href to the CV file path
    a.download = "cv.pdf"; // Specify the file name for download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const darkModeClass = () => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    };
    darkModeClass();
  }, [darkMode]);

  return (
    <>
      <Particle className="absolute inset-0 -z-10 " />
      <div className="flex md:flex-row flex-col items-center mt-20 px-4">
        <section
          id={id}
          className="flex flex-col md:items-center md:justify-start text-center md:text-left p-6"
        >
          <div className="mb-10 text-xl md:text-md lg:text-4xl typing-container inline-block animate-typing font-semibold">
            Hello! I'm Muhammad Rafi Syahbani
          </div>
          <div className="md:mr-auto">
            <h2 className="font-semibold space-x-2">
              <span className="font-serif">A</span> Front End Developer |
              Junior Web Developer
            </h2>
            <span className="group">
              <button
                className="bg-gray-900 mt-2 md:flex inline-flex px-4 py-2 rounded shadow-lg"
                onClick={handleDownloadCV}
              >
                <GoDownload className="mt-1 mr-1 text-white group-hover:text-yellow-500" />
                <h1 className="group-hover:text-yellow-500 text-white">
                  Download CV
                </h1>
              </button>
            </span>
          </div>
        </section>
        <div className="relative group md:ml-44 mt-7 flex flex-col items-center">
          <img
            className="w-60 h-60 md:w-[100%] md:h-96" // Responsive size
            src={Profile}
            alt="Profile"
          />
          {technologies.map((tech, index) => {
            const isLeft = index < 2; // First two on the left
            const position = isLeft
              ? "left-0 md:-left-25"
              : "right-0 md:-right-25"; // Adjust position for responsiveness
            return (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute animate-float group-hover:shadow-md group-hover:shadow-purple-500 flex items-center md:px-2 p-1 bg-gray-900 rounded-full ${position}`}
                style={{
                  top: `${index * 20 + 20}%`,
                  transform: isLeft ? "translateX(-100%)" : "translateX(100%)",
                }}
              >
                {tech.isIcon ? (
                  <tech.logo className="w-6 md:py-1 md:px-1 h-6 text-gray-600 md:w-8 md:h-8 mx-1 cursor-pointer" />
                ) : (
                  <img
                    className="w-6 h-6 md:w-7 md:h-8 mx-1 cursor-pointer"
                    src={tech.logo}
                    alt={tech.name}
                  />
                )}
                <span className="text-xs group-hover:text-purple-500 md:text-sm text-white font-medium mr-2 md:mr-4">
                  {tech.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
