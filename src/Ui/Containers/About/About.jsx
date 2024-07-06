import profileImage from "../../../assets/Images/pipi.png";
import bbl from "../../../assets/Images/bbl.png";
import { AiFillSpotify } from "react-icons/ai";
import { PiGameControllerDuotone } from "react-icons/pi";
import { BsCalendar2Month } from "react-icons/bs";

const love = [
  { name: "Gaming", logo: PiGameControllerDuotone, isIcon: true },
  { name: "Workout", logo: bbl, isIcon: false },
  { name: "Music", logo: AiFillSpotify, isIcon: true },
  { name: "24 AGUSTUS", logo: BsCalendar2Month, isIcon: true }
];

export default function About(props) {
  const id = props.id;

  return (
    <main className="p-4 relative">
      <div className="mt-28 text-center text-yellow-600 font-semibold text-3xl" id={id}>
        About Me
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 lg:space-x-8">
        <div className="mr-6 relative text-center">
          <img
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mb-4" // Increased size and added margin bottom
            src={profileImage}
            alt="Profile"
          />
          {love.map((fav, index) => {
            const positionClass = index % 2 === 0 ? 'left-16' : 'right-14'; // Adjusted spacing
            const verticalClass = index < 2 ? 'top-1/4' : 'top-2/3';

            return (
              <div key={index} className={`absolute ${positionClass} ${verticalClass} transform ${index % 2 === 0 ? '-translate-x-24' : 'translate-x-24'} mt-4`}>
                <section className="flex items-center p-2 bg-slate-200 shadow-lg rounded-full animate-float">
                  {fav.isIcon ? (
                    <fav.logo className="w-4 h-4 md:w-6 md:h-6 mx-1 cursor-pointer text-slate-500" />
                  ) : (
                    <img
                      className="w-4 h-4 md:w-6 md:h-6 mx-1 cursor-pointer"
                      src={fav.logo}
                      alt={fav.name}
                    />
                  )}
                  <span className="text-xs md:text-sm text-black font-medium mr-2 md:mr-4">
                    {fav.name}
                  </span>
                </section>
              </div>
            );
          })}
        </div>
        <div className="mt-5 lg:mt-0 px-3 py-2 mx-3 lg:mx-0 lg:w-1/2 xl:w-1/3 flex justify-center bg-slate-300 rounded-2xl">
          <article className="font-normal text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quibusdam incidunt omnis voluptatem sed delectus esse maxime pariatur officia. Voluptate, cupiditate. Molestias architecto ea nesciunt, iusto deleniti unde omnis tenetur.
          </article>
        </div>
      </div>
    </main>
  );
}
