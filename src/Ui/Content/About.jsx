import React from "react";
import Rafi from "../../assets/Images/logo.png";

export default function About(props) {
  const id = props.id;

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <section id={id} className="flex flex-col items-center md:flex-row text-center p-5">
        <div className="mb-1 font-semibold mx-1">Hello! I'm Muhammad</div>
        <div className="flex items-center justify-center bg-yellow-300 shadow-lg px-2 py-1 rounded">
          <img className="w-10 h-10 mx-1" src={Rafi} alt="R" />
          <span className="text-lg font-semibold">afi Syahbani</span>
        </div>
      </section>
      <div className="font-serif">A Front End Developer |</div>
    </div>
  );
}
