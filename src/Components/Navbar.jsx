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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-black-xl border-b border-white/10">
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
          <NavLink to="/" className={navLink}>Home</NavLink>

          {/* About with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/about" className={navLink}>
              About
              <span className="ml-1 text-xs"> + </span>
            </NavLink>

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

          <NavLink to="/courses" className={navLink}>Courses</NavLink>
          <NavLink to="/contact" className={navLink}>Contact</NavLink>

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
          className="md:hidden text-white text-2xl z-60"
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* ✅ Dark Overlay — menu ke peeche */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ✅ Mobile Menu — Left se Right slide */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 bg-black/95 backdrop-blur-xl border-r border-white/10
          transform transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Side Panel Header */}
        <div className="h-16 flex items-center px-5 border-b border-white/10">
          <span className="text-white font-semibold text-base tracking-wide">
            Menu
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-1 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          {/* Mobile About Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="flex items-center justify-between px-4 py-3 text-white hover:text-amber-300 hover:bg-white/5 rounded-xl transition duration-200 font-medium"
            >
              About
              <span
                className={`text-xl transition-transform duration-300 ${
                  mobileAboutOpen ? "rotate-90" : ""
                }`}
              >
                 + 
              </span>
            </button>

            {/* Sub-links */}
            <div
              className={`flex flex-col overflow-hidden transition-all duration-300 pl-4 ${
                mobileAboutOpen ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"
              }`}
            >
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm transition duration-200 ${
                    isActive
                      ? "text-amber-400"
                      : "text-white/80 hover:text-amber-300 hover:bg-white/5"
                  }`
                }
                onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
              >
                Team
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm transition duration-200 ${
                    isActive
                      ? "text-amber-400"
                      : "text-white/80 hover:text-amber-300 hover:bg-white/5"
                  }`
                }
                onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm transition duration-200 ${
                    isActive
                      ? "text-amber-400"
                      : "text-white/80 hover:text-amber-300 hover:bg-white/5"
                  }`
                }
                onClick={() => { setMenuOpen(false); setMobileAboutOpen(false); }}
              >
                Blog
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl transition duration-200 font-medium ${
                isActive
                  ? "text-amber-400 bg-white/5"
                  : "text-white hover:text-amber-300 hover:bg-white/5"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          {/* CTA Button */}
          <div className="mt-4 px-4">
            <NavLink
              to="/apply"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-amber-500 text-white px-6 py-2.5 rounded-full font-semibold shadow hover:bg-amber-600 transition duration-300"
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;