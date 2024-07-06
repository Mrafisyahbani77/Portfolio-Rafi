// src/components/Education.js
import React from "react";
import { BsCalendar } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Education(props) {
  const id = props.id;

  const educationData = [
    {
      duration: "2012 - 2016",
      degree: "Tk Al-Ikhlas",
      field:
        "Form a PAUD unit that organizes programs for children aged 4 to 6 years in a more structured manner.",
      location: "Bukit asri, Ciomas,",
      type: "Graduation",
      typeIcon: FaGraduationCap,
      mapsLink:
        "https://www.google.com/maps?q=Veer+Narmad+South+Gujarat+University,Surat,Gujarat,India",
    },
    {
      duration: "2020 - 2022",
      degree: "Master's Degree",
      field: "Master of Computer Applications",
      university: "Parul University",
      location: "Vadodara, Gujarat, India",
      type: "Post Graduation",
      typeIcon: FaGraduationCap,
      mapsLink:
        "https://www.google.com/maps?q=Parul+University,Vadodara,Gujarat,India",
    },
  ];

  return (
    <section id={id} className="py-8 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-yellow-600 text-center mb-8">
          Education
        </h2>
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-8 justify-center items-center">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-400 p-6 rounded-xl shadow-md w-full lg:w-1/2"
            >
              <div className="flex rounded bg-black items-center px-4 max-w-[60%] md:max-w-[35%] mb-4">
                <BsCalendar className="text-yellow-500 mr-2" />
                <span className="text-yellow-500 font-medium">
                  {edu.duration}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <edu.typeIcon className="bg-yellow-100 p-1 rounded-full mr-2 text-yellow-600" />
                <span className="bg-yellow-100 text-black font-medium px-2 py-1 rounded">
                  {edu.type}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <h4 className="text-xl mb-2 max-h-32 overflow-y-scroll whitespace-pre-wrap">
                {edu.field}
              </h4>
              <p className="mb-1">{edu.university}</p>
              <div className="flex items-center">
                <p className="text-xs">{edu.location}</p>
                <a
                  href={edu.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 py-1 px-2 text-xs flex items-center rounded-3xl bg-yellow-100"
                >
                  <FaMapMarkedAlt className="mr-1"/> View Location
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
