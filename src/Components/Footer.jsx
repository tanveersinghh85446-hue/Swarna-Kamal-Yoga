import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-widest mb-3">🪷 Swarna Kamal Yoga</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Yoga Alliance certified online yoga courses. Live on Zoom. Transform your mind, body & soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {["/","courses","about","contact","apply"].map((path, i) => (
                <li key={i}>
                  <Link to={`/${path === "/" ? "" : path}`}
                    className="hover:text-white transition-colors capitalize">
                    {path === "/" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-gray-300">Top Courses</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {[
                ["Pranayama & Meditation", "/courses/pranayama"],
                ["Weight Loss Coach",      "/courses/weight-loss"],
                ["Women's Wellness",       "/courses/womens-wellness"],
                ["Hatha Yoga TTC",         "/courses/hatha-yoga"],
                ["Yin Yoga TTC",           "/courses/yin-yoga"],
              ].map(([label, to], i) => (
                <li key={i}><Link to={to} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-gray-300">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>📧 info@swarnakamalyoga.com</li>
              <li>📱 +91 XXXXX XXXXX</li>
              <li>🌐 Live Classes on Zoom</li>
              <li>🕐 Mon–Sat • 6 AM – 8 PM IST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Swarna Kamal Yoga. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;