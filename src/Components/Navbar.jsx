import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setAboutOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLink = ({ isActive }) =>
    isActive
      ? "text-white font-bold border-b-2 border-white pb-0.5"
      : "text-gray-300 hover:text-white transition-colors duration-200 font-medium";

  return (
    <nav className="bg-purple-600 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-base sm:text-xl font-extrabold text-white tracking-widest uppercase flex items-center gap-2">
           <span className="hidden xs:inline">Swarna Kamal Yoga</span>
          <span className="xs:hidden">SKY</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
          <li><NavLink to="/" className={navLink}>Home</NavLink></li>

          {/* About Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium"
            >
              About Us
              <span className={`text-xs inline-block transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {aboutOpen && (
              <ul className="absolute top-10 left-0 bg-white text-black rounded-xl shadow-2xl py-2 w-48 list-none z-50 border border-gray-200">
                {[
                  { to: "/testimonials", label: " Testimonials" },
                  { to: "/blog",         label: " Blog" },
                  { to: "/gallery",      label: " Gallery" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} onClick={() => setAboutOpen(false)}
                      className="block px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-gray-100 transition-all">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><NavLink to="/courses"  className={navLink}>Courses</NavLink></li>
          <li><NavLink to="/contact"  className={navLink}>Contact</NavLink></li>
          <li>
            <NavLink to="/apply"
              className="bg-white text-black px-4 lg:px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-all text-sm lg:text-base">
              Apply Now
            </NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-5 flex flex-col gap-4">
          <NavLink to="/" className={navLink} onClick={() => setMenuOpen(false)}>Home</NavLink>

          <div>
            <p className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">About Us</p>
            <div className="pl-4 flex flex-col gap-3 border-l border-gray-700">
              {[
                { to: "/testimonials", label: " Testimonials" },
                { to: "/blog",         label: " Blog" },
                { to: "/gallery",      label: " Gallery" },
              ].map((item) => (
                <Link key={item.to} to={item.to}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/courses"  className={navLink} onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/contact"  className={navLink} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/apply"
            className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-center hover:bg-gray-200 transition-all"
            onClick={() => setMenuOpen(false)}>
            Apply Now
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;