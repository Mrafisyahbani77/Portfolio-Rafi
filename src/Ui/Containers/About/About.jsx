import profileImage from "../../../assets/Images/pipi.png";
import bbl from "../../../assets/Images/bbl.png";
import { AiFillSpotify } from "react-icons/ai";
import { PiGameControllerDuotone } from "react-icons/pi";
import { BsCalendar2Month } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure this import is correct
import { useEffect } from "react";

const love = [
  { name: "Gaming", logo: PiGameControllerDuotone, isIcon: true },
  { name: "Workout", logo: bbl, isIcon: false },
  { name: "Music", logo: AiFillSpotify, isIcon: true },
  { name: "24 AGUSTUS", logo: BsCalendar2Month, isIcon: true },
];

export default function About(props) {
  const id = props.id;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      // disable : "phone",
      easing: "ease-out-cubic",
    });
  });

  return (
    <main className="p-4 mt-24 mb-24 relative">
      <div
        className="mt-28 text-center text-yellow-600 font-semibold text-3xl"
        id={id}
      >
        About Me
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 lg:space-x-8">
        <div className="mx-3 relative text-center">
          <img
            data-aos="flip-left"
            className="w-32 h-32 md:w-52 md:h-52 lg:w-54 lg:h-54 rounded-full mb-4" // Increased size and added margin bottom
            src={profileImage}
            alt="Profile"
          />
          {love.map((fav, index) => {
            const positionClass = index % 2 === 0 ? "left-14" : "right-14"; // Adjusted spacing
            const verticalClass = index < 2 ? "top-1/4" : "top-2/3";

            return (
              <div
                key={index}
                className={`absolute ${positionClass} ${verticalClass} transform ${
                  index % 2 === 0 ? "-translate-x-28" : "translate-x-28"
                } mt-4`}
              >
                <section className="flex items-center p-2 md:p-1 bg-slate-200 shadow-lg rounded-full animate-float">
                  {fav.isIcon ? (
                    <fav.logo className="w-3 h-3 text-black md:w-6 md:h-6 mx-1" />
                  ) : (
                    <img
                      className="w-3 h-3 md:w-6 md:h-6 mx-1"
                      src={fav.logo}
                      alt={fav.name}
                    />
                  )}
                  <span className="text-xs md:text-sm text-black font-semibold mr-2 md:mr-4">
                    {fav.name}
                  </span>
                </section>
              </div>
            );
          })}
        </div>
        <div className="mt-5 lg:mt-0 px-5  py-2 mx-3 lg:mx-0 lg:w-1/2 xl:w-1/3 flex justify-center bg-slate-300 rounded-2xl">
          <article className="font-normal text-black">
            Saya adalah seorang front-end developer yang sangat tertarik dan
            bersemangat dalam mengembangkan aplikasi menggunakan JavaScript,
            terutama dalam framework React.js. Selain itu, saya juga aktif
            sebagai content creator di platform YouTube, di mana saya tidak
            hanya berbagi tentang coding, tetapi juga membuat vlog dan konten
            seputar game. Saya percaya bahwa kombinasi antara keterampilan
            teknis dalam coding dan kemampuan untuk berbagi pengalaman dalam
            berbagai topik dapat menginspirasi dan memberi nilai tambah bagi
            komunitas yang saya dukung serta memperluas wawasan saya dalam
            berbagai aspek konten digital.
          </article>
        </div>
      </div>
    </main>
  );
}
