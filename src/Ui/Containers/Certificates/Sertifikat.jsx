import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Smk from "../../../assets/Images/smk.png";
import Dcd from "../../../assets/Images/coding.jpeg";
import Logic from "../../../assets/Certificate/Logic.pdf";
import Data from "../../../assets/Certificate/data.pdf";
import Grow from "../../../assets/Certificate/pengembangan.pdf";
import Cdng from "../../../assets/Certificate/Smkcoding.pdf";
import Rapot from "../../../assets/Certificate/Rapor.pdf";

const Sertifik = [
  {
    id: 1,
    platform: "Dicoding",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    icon: Dcd,
    file: Logic,
  },
  {
    id: 2,
    platform: "Smk Coding",
    title: "Pelatihan Progressive Web App Nuxt Js SMKCoding by Alkademi 2023",
    icon: Smk,
    file: Cdng,
    rapot: Rapot,
    Choice: "Rapot SmkCoding",
  },
  {
    id: 3,
    platform: "Dicoding",
    title: "Belajar Dasar Visualisasi Data",
    icon: Dcd,
    file: Data,
  },
  {
    id: 4,
    platform: "Dicoding",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    icon: Dcd,
    file: Grow,
  },
];

export default function Sertifikat(props) {
  const id = props.id;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleViewCertificate = (file) => {
    window.open(file, "_blank");
  };

  return (
    <div id={id} className="min-h-screen p-4 sm:p-8">
      <h1 className="text-4xl font-semibold transition duration-300 ease-in-out hover:text-purple-500 cursor-pointer text-center mb-8">
        Sertifikat
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Sertifik.map((cert) => (
          <div
            key={cert.id}
            className="border width bg-gray-900 rounded-lg shadow-md p-4 m-2 items-center"
            data-aos="fade-up"
          >
            <span className="flex w-fit px-2 space-x-1 py-2 bg-black rounded-full">
              <img
                src={cert.icon}
                alt={`Ikon ${cert.platform}`}
                className="w-7 h-7 md:w-10 md:h-10 bg-white rounded-full"
              />
              <h3 className="text-base md:mt-2 font-semibold text-yellow-600">
                {cert.platform}
              </h3>
            </span>

            <p className="mt-4 font-bold text-white text-center mb-4">
              {cert.title}
            </p>
            <span className="group">
              <button
                className="border hover:text-yellow-500 text-black bg-gray-500 border-gray-500 rounded-full px-4 py-2 hover:bg-gray-900"
                onClick={() => handleViewCertificate(cert.file)}
              >
                Lihat
              </button>
            </span>
            {cert.rapot && cert.Choice && (
              <button
                className="ml-2 hover:text-yellow-500 text-black bg-gray-500 border border-gray-500 rounded-full px-4 py-2 hover:bg-gray-900"
                onClick={() => handleViewCertificate(cert.rapot)}
              >
                {cert.Choice}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
