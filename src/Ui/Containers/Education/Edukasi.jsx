import {useEffect} from "react";
import { BsCalendar } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Education(props) {
  const id = props.id;

  const educationData = [
    {
      duration: "2011 - 2012",
      degree: "Paud Al-Ikhlas",
      location:
        "Perum bukit asri, Pagelaran, Kec. Ciomas, Kabupaten Bogor, Jawa Barat",
      type: "Graduation",
      typeIcon: FaGraduationCap,
      mapsLink: "https://maps.app.goo.gl/3DZhwm56oNxVsrLk8",
    },
    {
      duration: "2013 - 2018",
      degree: "MI.Nasyatul Islamiyah",
      location:
        "Jl. Perum Bukit Asri Kp. Laladon, Pagelaran, Kec. Ciomas, Kabupaten Bogor, Jawa Barat",
      type: "Graduation",
      typeIcon: FaGraduationCap,
      mapsLink: "https://maps.app.goo.gl/PLiqtmHDvKP3aB3P9",
    },
    {
      duration: "2019 - 2021",
      degree: "Smp Informatika Bina Generasi",
      location:
        "Perum bukit asri, Pagelaran, Kec. Ciomas, Kabupaten Bogor, Jawa Barat",
      type: "Graduation",
      typeIcon: FaGraduationCap,
      mapsLink: "https://maps.app.goo.gl/CP5AY5TxEjtA6JWP6",
    },
    {
      duration: "2022 - 2025",
      degree: "SMK Negri 1 Ciomas",
      location:
        "Perum bukit asri, Pagelaran, Kec. Ciomas, Kabupaten Bogor, Jawa Barat",
      type: "Graduation",
      typeIcon: FaGraduationCap,
      mapsLink: "https://maps.app.goo.gl/CP5AY5TxEjtA6JWP6",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <section id={id} className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold hover:text-purple-500 cursor-pointer text-center mb-8">
          Education
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 border p-6 rounded-xl shadow-md"
              data-aos="fade-up"
            >
              <div className="flex rounded-md py-1 bg-black items-center px-4 max-w-[50%] md:max-w-[33%] mb-4">
                <BsCalendar className="text-yellow-500 mr-2" />
                <span className="text-yellow-500 text-sm font-medium">
                  {edu.duration}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <edu.typeIcon className="bg-yellow-100 p-1 rounded-full mr-2 text-yellow-600" />
                <span className="bg-yellow-100 text-black font-medium px-2 py-1 rounded">
                  {edu.type}
                </span>
              </div>
              <h4 className="text-xl mb-5 text-white font-semibold">{edu.degree}</h4>
              <div className="flex items-center group">
                <a
                  href={edu.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 py-1 px-2 group-hover:bg-slate-800 text-xs flex items-center rounded-3xl bg-gray-500"
                >
                  <FaMapMarkedAlt className="mr-1 text-black group-hover:text-yellow-500" /> <span className="group-hover:text-yellow-500">View Location</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
