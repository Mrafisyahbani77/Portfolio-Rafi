import React, { useEffect, useRef } from "react";
import { SiNextdotjs } from "react-icons/si";
import Tailwind from "../../../assets/Images/tailwind.png";
import Html from "../../../assets/Images/html.png";
import Rea from "../../../assets/Images/Rea.png";
import Css from "../../../assets/Images/css.png";
import Js from "../../../assets/Images/javascript.png";

const skills = {
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
};

export default function Skil(props) {
  const id = props.id;
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          } else {
            entry.target.classList.remove("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div id={id} className="mb-20 mt-8 flex flex-col items-center py-10">
      <h1 className="text-4xl hover:text-purple-500 cursor-pointer font-bold mb-14">
        Skills
      </h1>
      <section ref={skillsRef} className="w-4/5 md:w-2/3 lg:w-1/2">
        <div className="flex group flex-wrap text-white cursor-pointer justify-center gap-4">
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
