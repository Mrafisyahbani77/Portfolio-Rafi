import React from "react";
import Rafi from "../../assets/Images/logo.png";
import Rea from "../../assets/Images/Rea.png";

const technologies = [
  { name: "NextJS", logo: "nextjs-logo-url" },
  { name: "Tailwind CSS", logo: "tailwind-logo-url" },
  { name: "ReactJS", logo: Rea },
  { name: "JavaScript", logo: "javascript-logo-url" },
  { name: "GraphQL", logo: "graphql-logo-url" },
  { name: "Figma", logo: "figma-logo-url" },
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
        <div className="flex items-center justify-center bg-yellow-300 shadow-lg px-2 py-1 rounded">
          <img className="w-10 h-10 mx-1" src={Rafi} alt="R" />
          <span className="text-lg font-semibold">afi Syahbani</span>
        </div>
      </section>
      <div className="mt-2 font-medium">
        <span className="font-serif">A</span> Front End Developer |
      </div>
      <div className="flex mt-5 space-x-4">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded shadow-lg hover:bg-yellow-600">
          Resume
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded shadow-lg hover:bg-yellow-600">
          Hire Me
        </button>
      </div>
      <div className="flex flex-col items-center mt-10">
        <img
          className="rounded-full shadow-lg w-40 h-40"
          src=""
          alt="Profile"
        />
        <div className="flex flex-wrap justify-center mt-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center m-2 p-2 bg-white shadow-lg rounded-full"
            >
              <img className="w-8 h-8 mx-2" src={tech.logo} alt={tech.name} />
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
