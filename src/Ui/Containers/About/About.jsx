import Profile from "../../../assets/Images/logo.png";
import bbl from "../../../assets/Images/bbl.png";

const love = [
  { name: "Gaming", logo: bbl },
  { name: "workout", logo: "" },
  { name: "Song", logo: "" },
];

export default function About(props) {
  const id = props.id;

  return (
    <main>
      <div className="mt-28 text-center text-yellow-600 font-semibold text-3xl" id={id}>
        About Me
      </div>
      <div className="flex mx-3 mt-12 space-x-2">
        <img
          className="w-10 h-15 md:w-15 md:h-15 " // Responsive size
          src={Profile}
          alt="Profile"
        />
        <span className="font-semibold mt-1 text-yellow-600 text-2xl">
          I Love
        </span>
      </div>
      {love.map((fav, index) => (
        <div key={index} className="ml-12 md:inline-block flex mt-2">
          <section className="flex items-center p-2 bg-slate-200 shadow-lg rounded-full ">
            <img
              className="w-6 text-slate-500 h-6 md:w-8 md:h-8 mx-1 cursor-pointer"
              src={fav.logo}
              alt={fav.name}
            />
            <span className="text-xs md:text-sm text-black font-medium mr-2 md:mr-4">
              {fav.name}
            </span>
          </section>
        </div>
      ))}
      <div className="mt-5">
        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quibusdam incidunt omnis voluptatem sed delectus esse maxime pariatur officia. Voluptate, cupiditate. Molestias architecto ea nesciunt, iusto deleniti unde omnis tenetur.</article>
      </div>
    </main>
  );
}
