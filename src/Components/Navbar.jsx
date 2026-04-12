import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const navLink = ({ isActive }) =>
    isActive
      ? "text-white font-bold border-b-2 border-white pb-0.5"
      : "text-gray-300 hover:text-white transition-colors duration-200 font-medium";

  return (
    <nav className="bg-black sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold text-white tracking-widest uppercase"
        >
           Swarna Kamal Yoga
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <NavLink to="/" className={navLink}>
              Home
            </NavLink>
          </li>

          {/* About Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              About Us
              <span
                className={`text-xs inline-block transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            {aboutOpen && (
              <ul className="absolute top-10 left-0 bg-white text-black rounded-xl shadow-2xl py-2 w-48 list-none z-50 border border-gray-200">
                <li>
                  <Link
                    to="/testimonials"
                    onClick={() => setAboutOpen(false)}
                    className="block px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-gray-100 transition-all"
                  >
                     Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    onClick={() => setAboutOpen(false)}
                    className="block px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-gray-100 transition-all"
                  >
                     Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    onClick={() => setAboutOpen(false)}
                    className="block px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-gray-100 transition-all"
                  >
                     Gallery
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/courses" className={navLink}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apply"
              className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-all"
            >
              Apply Now
            </NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-5 flex flex-col gap-4">
          <NavLink
            to="/"
            className={navLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <div>
            <p className="text-white font-semibold mb-2">About Us</p>
            <div className="pl-4 flex flex-col gap-3">
              <Link
                to="/testimonials"
                className="text-gray-300 text-sm hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                 Testimonials
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 text-sm hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                 Blog
              </Link>
              <Link
                to="/gallery"
                className="text-gray-300 text-sm hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                 Gallery
              </Link>
            </div>
          </div>
          <NavLink
            to="/courses"
            className={navLink}
            onClick={() => setMenuOpen(false)}
          >
            Courses
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
            className="bg-white text-black px-5 py-2 rounded-full font-bold text-center hover:bg-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
