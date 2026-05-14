import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 px-6 md:px-10 py-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">Manny Owoloye</h1>
          <p className="text-slate-400 text-sm">DevOps Engineer</p>
        </div>

        <div className="hidden md:flex gap-6 text-lg items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              className="hover:text-cyan-400 transition"
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-2xl text-cyan-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-5 flex flex-col gap-4 text-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              className="hover:text-cyan-400 transition"
              to={link.path}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;