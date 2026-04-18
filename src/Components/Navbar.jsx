import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const timeoutRef = useRef(null);

  const navLink = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 ${
      isActive
        ? "text-amber-400 font-semibold"
        : "text-white hover:text-amber-300"
    }`;

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setAboutOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setAboutOpen(false), 150);
  };

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

          {/* About with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/about" className={navLink}>
              About
              <span className="ml-1 text-xs">▾</span>
            </NavLink>

            {/* Dropdown Menu */}
            {aboutOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/team"
                  onClick={() => setAboutOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-white hover:text-amber-300 hover:bg-white/5 transition duration-200 text-sm"
                >
                   Team
                </NavLink>
                <div className="border-t border-white/10" />
                <NavLink
                  to="/gallery"
                  onClick={() => setAboutOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-white hover:text-amber-300 hover:bg-white/5 transition duration-200 text-sm"
                >
                   Gallery
                </NavLink>
                <div className="border-t border-white/10" />
                <NavLink
                  to="/blog"
                  onClick={() => setAboutOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-white hover:text-amber-300 hover:bg-white/5 transition duration-200 text-sm"
                >
                   Blog
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/courses" className={navLink}>
            Courses
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

        {/* Mobile Hamburger Button */}
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
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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

          {/* Mobile About Accordion */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="text-white hover:text-amber-300 transition duration-300 font-medium flex items-center gap-1"
            >
              About
              <span
                className={`text-xs transition-transform duration-300 ${
                  mobileAboutOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {/* Mobile Sub-links */}
            <div
              className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${
                mobileAboutOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <NavLink
                to="/team"
                className={navLink}
                onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
              >
                 Team
              </NavLink>
              <NavLink
                to="/gallery"
                className={navLink}
                onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
              >
                 Gallery
              </NavLink>
              <NavLink
                to="/blog"
                className={navLink}
                onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
              >
                 Blog
              </NavLink>
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