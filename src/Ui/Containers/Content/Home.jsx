import Rafi from "../../../assets/Images/logo.png";
import Rea from "../../../assets/Images/Rea.png";
import Profile from "../../../assets/Images/Rafi.png";
import { GoDownload } from "react-icons/go";
import Javascript from "../../../assets/Images/javascript.png";
import Tailwindcss from "../../../assets/Images/tailwind.png";
import { SiNextdotjs } from "react-icons/si";
import Particle from "../../Components/Particle";

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


  return (
    <>
      {" "}
      <Particle className="absolute inset-0 -z-10 "/>
      <div className=" flex md:flex-row flex-col items-center mt-10 px-4">
        <section
          id={id}
          className="flex flex-col md:items-center md:justify-start text-center md:text-left p-6"
        >
          <div className="mb-10 text-xl md:text-4xl font-semibold">
            Hello! I'm Muhammad Rafi Syahbani
          </div>
          <div className="md:mr-auto">
            <h2 className=" font-semibold">
              <span className="font-serif">A</span> Front End Developer |
            </h2>
            <button className="bg-yellow-500 mt-2 md:flex absolute inline-flex px-4 py-2 rounded shadow-lg hover:bg-yellow-600">
              <GoDownload className="mt-1 mr-1" />
              Download CV
            </button>
          </div>
        </section>
        <div className="relative md:ml-44 mt-7 flex flex-col items-center">
          <img
            className="w-60 h-60 md:w-[100%] md:h-96" // Responsive size
            src={Profile}
            alt="Profile"
          />
          {technologies.map((tech, index) => {
            const isLeft = index < 2; // First two on the left
            const position = isLeft
              ? "left-0 md:-left-25"
              : "right-0 md:-right-25"; // Adjust position for responsiveness
            return (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute animate-float flex items-center md:px-2 p-1 bg-gradient-to-l from-slate-200 to-slate-300 shadow-lg rounded-full ${position}`}
                style={{
                  top: `${index * 20 + 20}%`,
                  transform: isLeft ? "translateX(-100%)" : "translateX(100%)",
                }}
              >
                {tech.isIcon ? (
                  <tech.logo className="w-6 md:py-1 md:px-1 h-6 text-black md:w-8 md:h-8 mx-1 cursor-pointer" />
                ) : (
                  <img
                    className="w-6 h-6 md:w-7 md:h-8 mx-1 cursor-pointer"
                    src={tech.logo}
                    alt={tech.name}
                  />
                )}
                <span className="text-xs md:text-sm text-black font-medium mr-2 md:mr-4">
                  {tech.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
