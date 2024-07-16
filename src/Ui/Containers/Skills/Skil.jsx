import React from "react";
import { SiNextdotjs, SiPostman } from "react-icons/si";
import Tailwind from "../../../assets/Images/tailwind.png";
import Html from "../../../assets/Images/html.png";
import Rea from "../../../assets/Images/Rea.png";
import Css from "../../../assets/Images/css.png";
import Js from "../../../assets/Images/javascript.png";
import Vscode from "../../../assets/Images/vscode.png";

const skills = {
  // designTools: [
  //   { name: "Adobe XD", icon: "path-to-icon" },
  //   { name: "Figma", icon: "path-to-icon" },
  // ],
  technologies: [
    { name: "HTML5", icon: <img src={Html} alt="Html" className="w-6 h-6" /> },
    { name: "CSS3", icon: <img src={Css} alt="CSS" className="w-6 h-6" /> },
    {
      name: "JavaScript",
      icon: <img src={Js} alt="Javascript" className="w-6 h-6" />,
    },
    {
      name: "ReactJS",
      icon: <img src={Rea} alt="React" className="w-6 h-6" />,
    },
    { name: "NextJS", icon: <SiNextdotjs /> },
    {
      name: "Tailwind CSS",
      icon: <img src={Tailwind} alt="Tailwind CSS" className="w-6 h-6" />,
    },
  ],
  // tools: [
  //   {
  //     name: "Visual Studio Code",
  //     icon: <img src={Vscode} alt="Tailwind CSS" className="w-9 h-5" />,
  //   },
  //   { name: "Github", icon: "path-to-icon" },
  //   { name: "Notion", icon: "path-to-icon" },
  //   { name: "Postman", icon: <SiPostman /> },
  // ],
};

export default function Skil(props) {
  const id = props.id;

  return (
    <div
      id={id}
      className="mb-20 mt-8 flex flex-col items-center py-10"
    >
      <h1 className="text-4xl hover:text-purple-500 cursor-pointer font-bold mb-14">Skills</h1>
      <section className="w-4/5 md:w-2/3 lg:w-1/2 ">
        <div className="flex group flex-wrap  text-white cursor-pointer justify-center gap-4">
          {skills.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex group-hover:shadow-md group-hover:shadow-purple-500 items-center space-x-2 p-2 bg-gray-900 rounded"
            >
              {tech.icon}
              <span className="group-hover:text-purple-500">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
