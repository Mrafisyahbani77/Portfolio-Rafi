import React from "react";
import { SiNextdotjs, SiPostman } from "react-icons/si";
import Tailwind from "../../../assets/Images/tailwind.png"; // Pastikan jalur gambar benar

const skills = {
  designTools: [
    { name: "Adobe XD", icon: "path-to-icon" },
    { name: "Figma", icon: "path-to-icon" },
  ],
  technologies: [
    { name: "HTML5", icon: "" },
    { name: "CSS3", icon: "" },
    { name: "JavaScript", icon: "" },
    { name: "ReactJS", icon: "" },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <img src={Tailwind} alt="Tailwind CSS" className="w-6 h-6" /> },
  ],
  tools: [
    { name: "Visual Studio Code", icon: "path-to-icon" },
    { name: "Github", icon: "path-to-icon" },
    { name: "Notion", icon: "path-to-icon" },
    { name: "Postman", icon: <SiPostman /> },
  ],
};

export default function Skil(props) {
  const id = props.id;

  return (
    <div id={id} className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl text-yellow-600 font-bold mb-6">Skills</h1>

      <section className="mb-10 w-4/5 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Design Tools I Use</h2>
        <div className="flex justify-center space-x-4">
          {skills.designTools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 bg-slate-400 rounded"
            >
              <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 w-4/5 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 bg-slate-200 rounded"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 w-4/5 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">
          Development & Productivity Tools I Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 bg-slate-400 rounded"
            >
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
