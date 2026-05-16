import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaTools,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },

    {
      name: "About",
      path: "/about",
      icon: <FaUser />,
    },

    {
      name: "Projects",
      path: "/projects",
      icon: <FaCode />,
    },

    {
      name: "Skills",
      path: "/skills",
      icon: <FaTools />,
    },

    {
      name: "Resume",
      path: "/resume",
      icon: <FaFileAlt />,
    },

    {
      name: "Contact",
      path: "/contact",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#050816]/90 backdrop-blur-xl border-b border-purple-500/20">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link to="/" className="text-2xl font-extrabold tracking-wide">

          Manny{" "}

          <span className="text-purple-400">
            Owoloye
          </span>

        </Link>

        <div className="hidden lg:flex gap-3">

          {links.map((link) => {

            const active = location.pathname === link.path;

            return (

              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition duration-300 ${
                  active
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-purple-400"
                }`}
              >

                {link.icon}

                <span>
                  {link.name}
                </span>

              </Link>

            );
          })}

        </div>

        <button
          className="lg:hidden text-2xl text-purple-400"
          onClick={() => setOpen(!open)}
        >

          {open ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {open && (

        <div className="lg:hidden px-6 pb-6 flex flex-col gap-3">

          {links.map((link) => {

            const active = location.pathname === link.path;

            return (

              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  active
                    ? "bg-purple-600 text-white"
                    : "bg-white/5 text-slate-300 hover:text-purple-400"
                }`}
              >

                {link.icon}

                {link.name}

              </Link>

            );
          })}

        </div>

      )}

    </nav>
  );
}

export default Navbar;