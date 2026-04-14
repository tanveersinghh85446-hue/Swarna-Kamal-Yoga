import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = ({ isActive }) =>
    isActive
      ? "text-white font-bold border-b-2 border-white"
      : "text-white hover:text-gray-300";

  return (
    <nav className="bg-black/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/Start.png" alt="logo" className="w-10 h-10 rounded-full" />
        <span className="text-white font-bold text-lg">
          Swarna Kamal Yoga
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li><NavLink to="/" className={navLink}>Home</NavLink></li>
        <li><NavLink to="/about" className={navLink}>About</NavLink></li>
        <li><NavLink to="/courses" className={navLink}>Courses</NavLink></li>
        <li><NavLink to="/blog" className={navLink}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={navLink}>Contact</NavLink></li>
      </ul>

      {/* Button */}
      <NavLink
        to="/apply"
        className="hidden md:block bg-white text-black px-4 py-2 rounded-full font-semibold"
      >
        Apply
      </NavLink>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 md:hidden">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink
            to="/apply"
            className="bg-white text-black px-4 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Apply
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;