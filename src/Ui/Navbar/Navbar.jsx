import { useState} from "react";
import Clos from "../../assets/Images/tutupicon.png"
import Burger from "../../assets/Images/burgericon.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mt-3 ">
      <div className="">
      <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? {Clos}
              : {Burger}
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className="text-lg font-mono flex space-x-5 text-center justify-center">
          <li className="hover:text-gray-950 text-gray-600">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-950 text-gray-600">
            <a href="#skill">About</a>
          </li>
          <li className="hover:text-gray-950 text-gray-600">
            <a href="#portfolio">About</a>
          </li>
          <li className="hover:text-gray-950 text-gray-600">
            <a href="#contact">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
