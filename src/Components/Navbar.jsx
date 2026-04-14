import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [imgError,  setImgError]  = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setAboutOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = ({ isActive }) =>
    isActive
      ? "text-white font-bold border-b-2 border-white pb-0.5 drop-shadow-lg"
      : "text-white hover:text-white/70 transition-colors duration-200 font-medium drop-shadow-lg";

  return (
    <>
      <style>{`
        @keyframes spinLogo {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .logo-spin {
          animation: spinLogo 8s linear infinite;
        }
      `}</style>

      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "shadow-2xl" : ""}`}
      >
        {/* ── Background Image Layer ── */}
        <div
          className="absolute inset-0 w-full h-100"
          style={{
            backgroundImage: `url('Nav.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
          }}
        />

       

        {/* ── Navbar Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 sm:py-5">

            {/* ── Logo + Brand ── */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4">

              {/* Rotating Logo */}
              <div
                className="logo-spin shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white/50"
                style={{ boxShadow: "0 0 16px rgba(255,255,255,0.25)" }}
              >
                {!imgError ? (
                  <img
                    src="/Start.png"
                    alt="SKY Logo"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback — emoji inside white circle */
                  <div className="w-full h-full bg-white flex items-center justify-center text-3xl">
                    🪷
                  </div>
                )}
              </div>

              {/* Brand Text */}
              <div>
                <p className="text-white font-extrabold text-base sm:text-xl leading-tight tracking-wide drop-shadow-lg">
                  Swarna Kamal Yoga
                </p>
                <p className="text-white/70 text-xs tracking-[0.25em] uppercase mt-0.5">
                  Yoga Alliance Certified
                </p>
              </div>
            </Link>

            {/* ── Desktop Links ── */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
              <li><NavLink to="/" className={navLink}>Home</NavLink></li>

              {/* About Dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 text-white hover:text-white/70 transition-colors font-medium drop-shadow-lg"
                >
                  About Us
                  <span className={`text-xs inline-block transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>

                {aboutOpen && (
                  <ul className="absolute top-12 left-0 bg-white text-black rounded-xl shadow-2xl py-2 w-48 list-none z-50 border border-gray-200">
                    {[
                      { to: "/testimonials", label: "🌟 Testimonials" },
                      { to: "/blog",         label: "📝 Blog" },
                      { to: "/gallery",      label: "🖼️ Gallery" },
                    ].map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={() => setAboutOpen(false)}
                          className="block px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-gray-100 transition-all"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><NavLink to="/courses" className={navLink}>Courses</NavLink></li>
              <li><NavLink to="/contact" className={navLink}>Contact</NavLink></li>

              <li>
                <NavLink
                  to="/apply"
                  className="bg-white text-black px-5 lg:px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all text-sm lg:text-base shadow-lg"
                >
                  Apply Now
                </NavLink>
              </li>
            </ul>

            {/* ── Hamburger ── */}
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
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="relative z-10 md:hidden bg-black/90 border-t border-white/20 px-4 py-5 flex flex-col gap-4">
            <NavLink to="/" className={navLink} onClick={() => setMenuOpen(false)}>Home</NavLink>

            <div>
              <p className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">About Us</p>
              <div className="pl-4 flex flex-col gap-3 border-l border-white/30">
                {[
                  { to: "/testimonials", label: "🌟 Testimonials" },
                  { to: "/blog",         label: "📝 Blog" },
                  { to: "/gallery",      label: "🖼️ Gallery" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/courses" className={navLink} onClick={() => setMenuOpen(false)}>Courses</NavLink>
            <NavLink to="/contact" className={navLink} onClick={() => setMenuOpen(false)}>Contact</NavLink>

            <NavLink
              to="/apply"
              className="bg-white text-black px-5 py-3 rounded-full font-bold text-center hover:bg-gray-200 transition-all shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;