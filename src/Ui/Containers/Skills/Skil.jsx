import React from "react";
import { SiNextdotjs, SiPostman } from "react-icons/si";
import Tailwind from "../../../assets/Images/tailwind.png";  
import Html from "../../../assets/Images/html.png";  
import Rea from "../../../assets/Images/Rea.png";  
import Css from "../../../assets/Images/css.png";  
import Js from "../../../assets/Images/javascript.png";  

const skills = {
  designTools: [
    { name: "Adobe XD", icon: "path-to-icon" },
    { name: "Figma", icon: "path-to-icon" },
  ],
  technologies: [
    { name: "HTML5", icon:  <img src={Html} alt="Html" className="w-6 h-6" /> },
    { name: "CSS3", icon:  <img src={Css} alt="CSS" className="w-6 h-6" /> },
    { name: "JavaScript", icon:  <img src={Js} alt="Javascript" className="w-6 h-6" /> },
    { name: "ReactJS", icon:  <img src={Rea} alt="React" className="w-6 h-6" /> },
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
    <div id={id} className="min-h-screen text-black flex flex-col items-center py-10">
      <h1 className="text-4xl text-yellow-600 font-bold mb-14">Skills</h1>

      <section className="mb-10 w-4/5 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl text-center text-yellow-600 font-semibold mb-4">Design Tools I Use</h2>
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
        <h2 className="text-2xl text-yellow-600 font-semibold text-center mb-4">Technologies I Use</h2>
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
        <h2 className="text-2xl text-yellow-600 text-center font-semibold mb-4">
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
