import Porto1 from "../../../assets/Images/Por1.png"
import Porto2 from "../../../assets/Images/Por2.png"
import Porto3 from "../../../assets/Images/Por3.png"
import Porto4 from "../../../assets/Images/por4.png"

const projects = [
  {
    title: "Al-Quran",
    workedOn: ["Website"],
    technologies: [  "Tailwind CSS", "ReactJS"],
    link: "https://website-al-quran.vercel.app/", // Replace with actual link
    image: Porto1, // Replace with actual image link or import
    bgColor: "bg-blue-900 text-white"
  },
  {
    title: "Movie List",
    workedOn: ["Website"],
    technologies: ["ReactJs", "Tailwind CSS"],
    link: "https://movierafi.pages.dev/", // Replace with actual link
    image: Porto4, // Replace with actual image link or import
    bgColor: "bg-yellow-500 text-white"
  },
  {
    title: "Pokemon",
    workedOn: ["Website"],
    technologies: ["Tailwind CSS", "ReactJS"],
    link: "https://pokemon-chi-ten.vercel.app/", // Replace with actual link
    image: Porto2, // Replace with actual image link or import
    bgColor: "bg-red-900 text-white"
  },
  {
    title: "Naruto AllCharacter",
    workedOn: ["Website"],
    technologies: ["Ts", "Tailwind CSS", "Remix"],
    link: "https://naruto-all-characters.vercel.app/", // Replace with actual link
    image: Porto3, // Replace with actual image link or import
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
                    <span key={tech} className="bg-gray-200 hover:shadow-md cursor-pointer hover:shadow-purple-500 hover:text-yellow-500 hover:bg-black rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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


