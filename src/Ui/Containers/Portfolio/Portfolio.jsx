import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Porto1 from "../../../assets/Images/Por1.png";
import Porto2 from "../../../assets/Images/Por2.png";
import Porto3 from "../../../assets/Images/Por3.png";
import Porto4 from "../../../assets/Images/por4.png";
import Porto5 from "../../../assets/Images/Por5.png";
import Porto6 from "../../../assets/Images/pkl.png";

const projects = [
  {
    title: "Al-Quran",
    workedOn: ["Website"],
    technologies: ["Tailwind CSS", "ReactJS"],
    link: "https://website-al-quran.vercel.app/",
    image: Porto1,
    bgColor: "bg-green-600 text-white",
  },
  {
    title: "Sistem Pengajuan Pkl",
    workedOn: ["Website"],
    technologies: ["Tailwind CSS", "ReactJS", "Laravel"],
    link: "https://pklpplgskanic.pplgsmkn1ciomas.my.id/",
    image: Porto6,
    bgColor: "bg-blue-600 text-white",
  },
  {
    title: "Movie List",
    workedOn: ["Website"],
    technologies: ["ReactJs", "Tailwind CSS"],
    link: "https://movierafi.pages.dev/",
    image: Porto4,
    bgColor: "bg-yellow-500 text-white",
  },
  {
    title: "Pokemon",
    workedOn: ["Website"],
    technologies: ["Tailwind CSS", "ReactJS"],
    link: "https://pokemon-chi-ten.vercel.app/",
    image: Porto2,
    bgColor: "bg-red-900 text-white",
  },
  {
    title: "Naruto AllCharacter",
    workedOn: ["Website"],
    technologies: ["Ts", "Tailwind CSS", "Remix"],
    link: "https://naruto-all-characters.vercel.app/",
    image: Porto3,
    bgColor: "bg-purple-900 text-white",
  },
  {
    title: "Snake Game",
    workedOn: ["Website"],
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://snake-game-rho-three.vercel.app/",
    image: Porto5,
    bgColor: "bg-pink-600 text-white",
  },
];

export default function Portfolio(props) {
  const id = props.id;

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
    });

    // Refresh AOS pada update komponen
    AOS.refresh();
  }, []);

  return (
    <main id={id} className="container mx-auto p-4">
       <h1 className="text-4xl font-semibold transition duration-300 ease-in-out hover:text-purple-500 cursor-pointer text-center mb-20">
        Project
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden ${project.bgColor}`}
            data-aos={index % 2 === 0 ? "flip-down" : "flip-up"} 
          >
            <img
              className="w-full md:w-1/3 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4">Worked on: {project.workedOn.join(", ")}</p>
                <p className="mb-4">Technologies I have used:</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 transition duration-300 ease-in-out hover:shadow-md cursor-pointer hover:shadow-purple-500 hover:text-yellow-500 hover:bg-black rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                className="bg-gray-800 transition duration-300 ease-in-out hover:bg-gray-900 text-white font-bold py-2 px-4 hover:text-yellow-400 rounded"
              >
                Go to {project.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
