import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">

      {/* Cartoon SVG */}
      <div className="mb-8">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="110" cy="160" rx="45" ry="20" fill="#f0f0f0" stroke="#111" strokeWidth="2.5"/>
          {/* Legs */}
          <line x1="90" y1="175" x2="80" y2="200" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
          <line x1="130" y1="175" x2="140" y2="200" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
          {/* Feet */}
          <ellipse cx="78" cy="202" rx="10" ry="5" fill="#111"/>
          <ellipse cx="142" cy="202" rx="10" ry="5" fill="#111"/>
          {/* Torso */}
          <rect x="80" y="130" width="60" height="45" rx="14" fill="white" stroke="#111" strokeWidth="2.5"/>
          {/* Arms */}
          <line x1="80" y1="140" x2="52" y2="158" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
          <line x1="140" y1="140" x2="168" y2="158" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
          {/* Hands holding tools */}
          <circle cx="50" cy="161" r="7" fill="white" stroke="#111" strokeWidth="2.5"/>
          <line x1="44" y1="161" x2="38" y2="170" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="170" cy="161" r="7" fill="white" stroke="#111" strokeWidth="2.5"/>
          <line x1="176" y1="161" x2="182" y2="170" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
          {/* Neck */}
          <rect x="103" y="110" width="14" height="22" rx="7" fill="white" stroke="#111" strokeWidth="2"/>
          {/* Head */}
          <circle cx="110" cy="95" r="35" fill="white" stroke="#111" strokeWidth="2.5"/>
          {/* Eyes */}
          <circle cx="99" cy="90" r="5" fill="#111"/>
          <circle cx="121" cy="90" r="5" fill="#111"/>
          {/* Eye shine */}
          <circle cx="101" cy="88" r="2" fill="white"/>
          <circle cx="123" cy="88" r="2" fill="white"/>
          {/* Smile */}
          <path d="M99 104 Q110 114 121 104" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          {/* Hair */}
          <path d="M78 85 Q80 60 110 62 Q140 60 142 85" fill="#111" stroke="#111" strokeWidth="1"/>
          {/* Hard hat */}
          <ellipse cx="110" cy="68" rx="38" ry="10" fill="#111"/>
          <rect x="82" y="58" width="56" height="14" rx="5" fill="#111"/>
          {/* Hat brim highlight */}
          <ellipse cx="110" cy="68" rx="38" ry="4" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="4 3"/>
          {/* Wrench in hand */}
          <rect x="175" y="165" width="5" height="18" rx="2" fill="#555" transform="rotate(20 175 165)"/>
          <rect x="33" y="165" width="5" height="18" rx="2" fill="#555" transform="rotate(-20 33 165)"/>
          {/* Stars around head */}
          <text x="148" y="72" fontSize="14" fill="#111">✦</text>
          <text x="58" y="72" fontSize="14" fill="#111">✦</text>
          <text x="108" y="42" fontSize="12" fill="#111">✦</text>
        </svg>
      </div>

      {/* Text */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-3">Coming Soon</h1>
      <p className="text-gray-500 text-base sm:text-lg mb-2 max-w-sm">
        We're working hard to build this page!
      </p>
      <p className="text-gray-400 text-sm mb-8 max-w-xs">
        Our team is putting finishing touches. Check back soon. 🛠️
      </p>

      {/* Animated dots */}
      <div className="flex gap-2 mb-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-black rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Back to home */}
      <Link
        to="/"
        className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all text-sm sm:text-base"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default ComingSoon;