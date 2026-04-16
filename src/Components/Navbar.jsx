import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 ${
      isActive
        ? "text-amber-400 font-semibold"
        : "text-white hover:text-amber-300"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Start.png"
            alt="logo"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="text-white font-semibold text-lg tracking-wide">
            Swarna Kamal Yoga
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLink}>
            About
          </NavLink>
          <NavLink to="/courses" className={navLink}>
            Courses
          </NavLink>
          <NavLink to="/blog" className={navLink}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={navLink}>
            Contact
          </NavLink>

          {/* CTA */}
          <NavLink
            to="/apply"
            className="ml-4 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105"
          >
            Apply Now
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-white transition ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-100 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl flex flex-col items-center gap-6 py-6 border-t border-white/10">
          <NavLink
            to="/"
            className={navLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={navLink}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            className={navLink}
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/blog"
            className={navLink}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={navLink}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/apply"
            onClick={() => setMenuOpen(false)}
            className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-amber-600 transition"
          >
            Apply Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
