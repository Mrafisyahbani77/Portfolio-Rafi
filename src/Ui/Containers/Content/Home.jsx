import React from "react";
import { GoDownload } from "react-icons/go";
import Particle from "../../Components/Particle";
import Profile from "../../../assets/Images/Rafi.png";
import Rea from "../../../assets/Images/Rea.png";
import Javascript from "../../../assets/Images/javascript.png";
import Tailwindcss from "../../../assets/Images/tailwind.png";
import { SiNextdotjs } from "react-icons/si";
import Cv from "../../../assets/Certificate/Cv.pdf";

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
    a.href = Cv;
    a.download = "cv.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <Particle className="absolute inset-0 -z-10 " />
      <div className="flex md:flex-row flex-col items-center mt-20 px-4">
        <section
          id={id}
          className="flex flex-col md:items-center md:justify-start text-center md:text-left p-6"
        >
          <div className="mb-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-purple-400 text-lg md:text-md lg:text-4xl typing-container inline-block animate-typing font-bold">
            Hello! I'm Muhammad Rafi Syahbani
          </div>
          <div className="md:mr-auto">
            <h2 className="font-semibold text-transparent bg-clip-text bg-gradient-to-l from-purple-500 via-purple-400 to-yellow-500 text-xs md:tetx-md space-x-2">
              <span className="font-serif text-yellow-500">A</span> Front End Developer | Junior
              Web Developer
            </h2>
            <span className="group">
              <button
                className="bg-gray-900 mt-2 md:flex inline-flex px-4 py-2 rounded shadow-lg"
                onClick={handleDownloadCV}
              >
                <GoDownload className="mr-1 text-white group-hover:text-yellow-500" />
                <h1 className="group-hover:text-yellow-500 text-xs md:text-sm text-white">
                  Download CV
                </h1>
              </button>
            </span>
          </div>
        </section>
        <div className="relative md:ml-44 mt-7 flex flex-col items-center">
          <img
            className="w-60 h-60 lg:mr-20 md:w-[100%] md:h-96  lg:aspect-[4/3] md:aspect-[3/2] sm:w-[100%] sm:aspect-square"
            src={Profile}
            alt="Profile"
          />
          {technologies.map((tech, index) => {
            const isLeft = index < 2;
            const position = isLeft
              ? "left-0 md:-left-25 lg:-left-20"
              : "right-0 md:-right-25 lg:-right-25";
            return (
              <div key={index} className="group">
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute animate-float transition duration-300 ease-in-out group-hover:shadow-md group-hover:shadow-purple-500 flex items-center md:px-2 p-1 bg-gray-900 rounded-full ${position}`}
                  style={{
                    top: `${index * 20 + 20}%`,
                    transform: isLeft
                      ? "translateX(-100%)"
                      : "translateX(100%)",
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
                  <span className="text-xs transition duration-300 ease-in-out group-hover:text-purple-500 md:text-sm text-white font-medium mr-2 md:mr-4">
                    {tech.name}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
