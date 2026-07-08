import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "about" },
    { id: 2, link: "skills" },
    { id: 3, link: "projects" },
    { id: 4, link: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 text-white bg-slate-950 fixed z-50 border-b border-slate-800">
      <div>
  <h1 className="text-2xl font-bold cursor-pointer text-blue-400">
    &lt;Piyush /&gt;
  </h1>
</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-6 cursor-pointer capitalize font-medium text-slate-400 hover:text-white transition-all">
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-950 md:hidden">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;