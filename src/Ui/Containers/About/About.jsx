import profileImage from "../../../assets/Images/pipi.png";
import { CgGym } from "react-icons/cg";
import { AiFillSpotify } from "react-icons/ai";
import { PiGameControllerDuotone } from "react-icons/pi";
import { BsCalendar2Month } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure this import is correct
import { useEffect } from "react";

const love = [
  { name: "Gaming", logo: PiGameControllerDuotone, isIcon: true },
  { name: "Workout", logo: CgGym, isIcon: true },
  { name: "Music", logo: AiFillSpotify, isIcon: true },
  { name: "24 AGUSTUS", logo: BsCalendar2Month, isIcon: true },
];

export default function About(props) {
  const id = props.id;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="p-4 mt-24 mb-24 relative">
      <div
        className="mt-28 text-center group font-semibold text-3xl"
        id={id}
      >
       <span className="cursor-pointer group-hover:text-purple-500"> About Me </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 lg:space-x-8">
        <div className="mx-3 relative text-center">
          <img
            data-aos="flip-left"
            className="w-32 h-32 md:w-52 md:h-52 lg:w-54 lg:h-54 rounded-full mb-4"
            src={profileImage}
            alt="Profile"
          />
          {love.map((fav, index) => {
            const positionClass = index % 2 === 0 ? "left-14" : "right-14";
            const verticalClass = index < 2 ? "top-1/4" : "top-2/3";

            return (
              <div
                key={index}
                className={`absolute group ${positionClass} ${verticalClass} transform ${
                  index % 2 === 0 ? "-translate-x-28" : "translate-x-28"
                } mt-4`}
              >
                <section className="flex cursor-pointer group-hover:shadow-md group-hover:shadow-purple-500 items-center p-2 md:p-1 bg-gray-900 rounded-full animate-float">
                  {fav.isIcon  ? (
                    <fav.logo className="w-3 h-3 group-hover:text-purple-500 text-gray-400 md:w-6 md:h-6 mx-1" />
                  ) : (
                    <img
                      className="w-3 h-3 md:w-6 md:h-6 mx-1"
                      src={fav.logo}
                      alt={fav.name}
                    />
                  )}
                  <span className="text-xs md:text-sm group-hover:text-purple-500 text-white font-semibold mr-2 md:mr-4">
                    {fav.name}
                  </span>
                </section>
              </div>
            );
          })}
        </div>
        <div className="mt-5 lg:mt-0 px-5 py-2 mx-3 lg:mx-0 lg:w-1/2 xl:w-1/3 flex justify-center bg-gray-900 rounded-2xl">
          <article className="font-normal text-center text-white">
            Saya siswa SMK Negeri 1 Ciomas dan seorang front-end developer yang
            bersemangat mengembangkan aplikasi menggunakan FrameWork React.JS.
            Selain coding, saya juga aktif di YouTube, berbagi tentang coding,
            vlog, dan game.
          </article>
        </div>
      </div>
    </main>
  );
}
