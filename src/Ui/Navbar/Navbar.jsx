import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mt-3">
      <div className="justify-center">
        <ul className="text-md flex space-x-5 text-center justify-center">
          <li className="hover:text-gray-950 text-gray-600">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-950 text-gray-600">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-950 text-gray-600">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-950 text-gray-600">
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
