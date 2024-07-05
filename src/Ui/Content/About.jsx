import React from "react";
import Rafi from "../../assets/Images/logo.png";
import Rea from "../../assets/Images/Rea.png";
import Profile from "../../assets/Images/Rafi.png";
import { GoDownload } from "react-icons/go";
import Javascript from "../../assets/Images/javascript.png";
import Tailwindcss from "../../assets/Images/tailwind.png";

const technologies = [
  { name: "ReactJS", logo: Rea, url: "https://reactjs.org" },
  { name: "NextJS", logo: "nextjs-logo-url", url: "https://nextjs.org" },
  { name: "Tailwind CSS", logo: Tailwindcss, url: "https://tailwindcss.com" },
  { name: "JavaScript", logo: Javascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
];

export default function About(props) {
  const id = props.id;

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <section
        id={id}
        className="flex flex-col items-center md:flex-row text-center p-5"
      >
        <div className="mb-1 font-semibold mx-1">Hello! I'm Muhammad</div>
        <div className="flex items-center justify-center bg-gradient-to-r to-yellow-500 from-yellow-300 shadow-lg px-2 py-1 rounded-lg">
          <img className="w-10 h-10 pl-1 mx-1" src={Rafi} alt="R" />
          <span className="text-lg font-semibold">afi Syahbani</span>
        </div>
      </section>
      <div className="mt-2 font-medium">
        <span className="font-serif">A</span> Front End Developer |
      </div>
      <div className="flex mt-5 space-x-4">
        <button className="bg-yellow-500 flex text-white px-4 py-2 rounded shadow-lg hover:bg-yellow-600">
          <GoDownload className="mt-1 mr-1" />
          Resume
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded shadow-lg hover:bg-yellow-600">
          Hire Me
        </button>
      </div>
      <div className="relative mt-10 flex flex-col items-center ">
        <img
          className="w-60 h-60 md:w-96 md:h-96" // Responsive size
          src={Profile}
          alt="Profile"
        />
        {technologies.map((tech, index) => {
          const isLeft = index < 2; // First two on the left
          const position = isLeft
            ? "left-0 md:-left-20"
            : "right-0 md:-right-32"; // Adjust position for responsiveness
          return (
            <a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute animate-float flex items-center p-2 bg-white shadow-lg rounded-full ${position}`}
              style={{
                top: `${(index % 2) * 40 + 20}%`, // Adjust vertical position
                transform: isLeft ? "translateX(-100%)" : "translateX(100%)",
              }}
            >
              <img className="w-6 h-6 md:w-8 md:h-8 mx-1 cursor-pointer" src={tech.logo} alt={tech.name} />
              <span className="text-xs md:text-sm font-medium mr-2 md:mr-4">{tech.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
