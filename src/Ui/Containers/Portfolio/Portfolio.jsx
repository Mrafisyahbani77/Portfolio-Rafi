import React from "react";

const projects = [
  {
    title: "CricTracker",
    workedOn: ["Website", "Admin Panel"],
    technologies: ["JavaScript", "Bootstrap", "SCSS", "ReactJS", "NextJS", "AMP", "Redux Toolkit", "Apollo GraphQL"],
    link: "#", // Replace with actual link
    image: "https://via.placeholder.com/300x200", // Replace with actual image link or import
    bgColor: "bg-blue-900 text-white"
  },
  {
    title: "SportsBuzz",
    workedOn: ["Website", "Admin Panel"],
    technologies: ["JavaScript", "Bootstrap", "SCSS", "ReactJS", "NextJS", "AMP", "Redux Toolkit", "Apollo GraphQL"],
    link: "#", // Replace with actual link
    image: "https://via.placeholder.com/300x200", // Replace with actual image link or import
    bgColor: "bg-red-900 text-white"
  },
  {
    title: "Epiko Market",
    workedOn: ["Website"],
    technologies: ["JavaScript", "Bootstrap", "SCSS", "ReactJS", "NextJS", "AMP", "Redux Toolkit", "Apollo GraphQL"],
    link: "#", // Replace with actual link
    image: "https://via.placeholder.com/300x200", // Replace with actual image link or import
    bgColor: "bg-purple-900 text-white"
  },
];

export default function Portfolio (props)  {
    const id = props.id


  return (
    <div id={id} className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div key={project.title} className={`flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden ${project.bgColor}`}>
            <img className="w-full md:w-1/3 object-cover" src={project.image} alt={project.title} />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4">Worked on: {project.workedOn.join(', ')}</p>
                <p className="mb-4">Technologies I have used:</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go to {project.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


