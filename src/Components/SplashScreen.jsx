import { useEffect, useState } from "react";

// ── Yoga SVG Silhouettes ──────────────────────────────────
const yogaPoses = [
  // 1. Tree Pose (Vrksasana)
  `<svg viewBox="0 0 60 100" fill="white" opacity="10">
    <circle cx="30" cy="10" r="8"/>
    <line x1="30" y1="18" x2="30" y2="55" stroke="white" stroke-width="4" stroke-linecap="round"/>
    <line x1="30" y1="30" x2="10" y2="22" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="30" y1="30" x2="50" y2="22" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="30" y1="55" x2="30" y2="90" stroke="white" stroke-width="4" stroke-linecap="round"/>
    <line x1="30" y1="72" x2="18" y2="90" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  // 2. Warrior I
  `<svg viewBox="0 0 80 100" fill="none">
    <circle cx="40" cy="10" r="8" fill="white" opacity="10"/>
    <line x1="40" y1="18" x2="40" y2="55" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="40" y1="28" x2="15" y2="18" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="40" y1="28" x2="65" y2="18" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="40" y1="55" x2="20" y2="82" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="40" y1="55" x2="60" y2="75" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
  </svg>`,

  // 3. Triangle Pose
  `<svg viewBox="10 0 90 100" fill="none">
    <circle cx="45" cy="10" r="8" fill="white" opacity="10"/>
    <line x1="45" y1="18" x2="45" y2="48" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="45" y1="30" x2="68" y2="22" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="45" y1="48" x2="22" y2="35" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="45" y1="48" x2="20" y2="80" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="20" y1="80" x2="70" y2="80" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
  </svg>`,

  // 4. Seated Meditation
  `<svg viewBox="0 0 70 80" fill="none">
    <circle cx="35" cy="10" r="8" fill="white" opacity="10"/>
    <path d="M35 18 Q35 45 35 50" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <path d="M35 28 Q20 35 14 42" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <path d="M35 28 Q50 35 56 42" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <path d="M35 50 Q20 60 10 65" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <path d="M35 50 Q50 60 60 65" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <path d="M10 65 Q35 70 60 65" stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.18"/>
  </svg>`,

  // 5. Downward Dog
  `<svg viewBox="0 0 100 80" fill="none">
    <circle cx="75" cy="12" r="7" fill="white" opacity="10"/>
    <line x1="75" y1="19" x2="55" y2="40" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="55" y1="40" x2="30" y2="55" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="55" y1="40" x2="70" y2="60" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="30" y1="55" x2="20" y2="72" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="70" y1="60" x2="80" y2="72" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
  </svg>`,

  // 6. Dancer Pose
  `<svg viewBox="0 0 70 100" fill="none">
    <circle cx="35" cy="10" r="8" fill="white" opacity="10"/>
    <line x1="35" y1="18" x2="35" y2="55" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="35" y1="30" x2="15" y2="20" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="35" y1="30" x2="55" y2="22" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="35" y1="55" x2="35" y2="80" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <path d="M35 70 Q50 55 58 42" stroke="white" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.18"/>
  </svg>`,

  // 7. Cobra Pose
  `<svg viewBox="1 0 100 60" fill="none">
    <circle cx="80" cy="12" r="7" fill="white" opacity="10"/>
    <path d="M80 19 Q70 30 60 35" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="60" y1="35" x2="20" y2="38" stroke="white" stroke-width="5" stroke-linecap="round" opacity="0.18"/>
    <line x1="68" y1="25" x2="80" y2="32" stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.18"/>
    <line x1="68" y1="25" x2="55" y2="30" stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.18"/>
    <line x1="20" y1="38" x2="10" y2="50" stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.18"/>
    <line x1="30" y1="38" x2="25" y2="52" stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.18"/>
  </svg>`,

  // 8. Chair Pose
  `<svg viewBox="1 0 60 100" fill="none">
    <circle cx="30" cy="10" r="8" fill="white" opacity="0.18"/>
    <line x1="30" y1="18" x2="30" y2="52" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <line x1="30" y1="25" x2="10" y2="18" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <line x1="30" y1="25" x2="50" y2="18" stroke="white" stroke-width="3.5" stroke-linecap="round" opacity="0.18"/>
    <path d="M30 52 Q20 68 15 82" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
    <path d="M30 52 Q40 68 45 82" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.18"/>
  </svg>`,
];

// ── Pose positions scattered on screen ───────────────────
const posePositions = [
  { top: "5%",  left: "3%",   size: 55,  delay: "0s",    duration: "6s"  },
  { top: "5%",  left: "18%",  size: 50,  delay: "0.5s",  duration: "7s"  },
  { top: "3%",  right: "5%",  size: 60,  delay: "0.2s",  duration: "5s"  },
  { top: "3%",  right: "20%", size: 48,  delay: "0.8s",  duration: "8s"  },
  { top: "25%", left: "1%",   size: 58,  delay: "1s",    duration: "6.5s"},
  { top: "25%", right: "1%",  size: 55,  delay: "0.3s",  duration: "7.5s"},
  { top: "50%", left: "2%",   size: 52,  delay: "0.6s",  duration: "5.5s"},
  { top: "50%", right: "2%",  size: 56,  delay: "0.9s",  duration: "6s"  },
  { top: "70%", left: "4%",   size: 50,  delay: "0.4s",  duration: "7s"  },
  { top: "70%", right: "4%",  size: 54,  delay: "0.7s",  duration: "6.5s"},
  { top: "88%", left: "2%",   size: 48,  delay: "1.2s",  duration: "5s"  },
  { top: "88%", left: "16%",  size: 52,  delay: "0.1s",  duration: "8s"  },
  { top: "88%", right: "3%",  size: 50,  delay: "0.5s",  duration: "7s"  },
  { top: "88%", right: "17%", size: 46,  delay: "0.9s",  duration: "6s"  },
  { top: "15%", left: "10%",  size: 44,  delay: "1.5s",  duration: "9s"  },
  { top: "15%", right: "10%", size: 44,  delay: "0.3s",  duration: "8s"  },
  { top: "40%", left: "5%",   size: 50,  delay: "0.7s",  duration: "6s"  },
  { top: "40%", right: "5%",  size: 48,  delay: "1.1s",  duration: "7s"  },
  { top: "60%", left: "8%",   size: 52,  delay: "0.4s",  duration: "5.5s"},
  { top: "60%", right: "8%",  size: 54,  delay: "0.8s",  duration: "6.5s"},
];

function SplashScreen({ onFinish }) {
  const [step, setStep] = useState(0);
  const typed = ["S", "K", "Y"];

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 600),
      setTimeout(() => setStep(2), 1100),
      setTimeout(() => setStep(3), 1600),
      setTimeout(() => setStep(4), 2300),
      setTimeout(() => setStep(5), 3800),
      setTimeout(() => onFinish(), 4400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ${
        step === 5 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "linear-gradient(135deg, #7c3aed, #9333ea, #a855f7)" }}
    >

      {/* ── Background Glow ── */}
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-bgMove" />

      {/* ── Yoga Silhouettes ── */}
      {posePositions.map((pos, i) => {
        const pose = yogaPoses[i % yogaPoses.length];
        const style = {
          position: "absolute",
          top:      pos.top,
          left:     pos.left,
          right:    pos.right,
          width:    pos.size,
          height:   pos.size,
          animationDelay:    pos.delay,
          animationDuration: pos.duration,
        };
        return (
          <div
            key={i}
            className="animate-yogaFloat"
            style={style}
            dangerouslySetInnerHTML={{ __html: pose }}
          />
        );
      })}

      {/* ── Logo Image ── */}
      <div
        className={`relative z-10 mb-6 transition-all duration-700 ${
          step >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <img
          src="/Start.png"
          alt="Yoga Logo"
          className="w-32 sm:w-40 md:w-48 mx-auto animate-float animate-spin-slow"
          style={{ filter: "drop-shadow(0 0 40px rgba(255,255,255,0.6))" }}
        />
      </div>

      {/* ── SKY Typing ── */}
      <div className="relative z-10 flex items-center gap-2 mb-4">
        {typed.map((letter, i) => (
          <span
            key={i}
            className={`text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-widest transition-all duration-500 animate-glow ${
              step >= i + 1
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-75"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {letter}
          </span>
        ))}
        {/* Shine */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 animate-shine pointer-events-none" />
      </div>

      {/* ── Subtitle ── */}
      <div
        className={`relative z-10 text-center transition-all duration-700 ${
          step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-12 h-0.5 bg-white/40 mx-auto mb-3" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-white">
          <span className="text-base sm:text-lg font-semibold tracking-widest">
            <span className="font-extrabold">S</span>warna
          </span>
          <span className="hidden sm:block text-white/40 text-sm">•</span>
          <span className="text-base sm:text-lg font-semibold tracking-widest">
            <span className="font-extrabold">K</span>amal
          </span>
          <span className="hidden sm:block text-white/40 text-sm">•</span>
          <span className="text-base sm:text-lg font-semibold tracking-widest">
            <span className="font-extrabold">Y</span>oga
          </span>
        </div>
        <p className="text-white/50 text-xs uppercase tracking-[0.4em] mt-2">
          Transform • Heal • Grow
        </p>
      </div>

      {/* ── Loader Bar ── */}
      <div className="relative z-10 mt-8 w-40 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-white animate-loader rounded-full" />
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spinSlow 8s linear infinite; }

        @keyframes glow {
          0%,100% { text-shadow: 0 0 10px rgba(255,255,255,0.5); }
          50%     { text-shadow: 0 0 30px rgba(255,255,255,1); }
        }
        .animate-glow { animation: glow 1.5s infinite; }

        @keyframes shine {
          0%   { transform: translateX(-100%); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-shine { animation: shine 2s infinite; }

        @keyframes loader {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loader { animation: loader 4s linear forwards; }

        @keyframes bgMove {
          0%   { transform: translate(-20%, -20%); }
          50%  { transform: translate(20%, 20%); }
          100% { transform: translate(-20%, -20%); }
        }
        .animate-bgMove { animation: bgMove 10s infinite alternate ease-in-out; }

        @keyframes yogaFloat {
          0%   { transform: translateY(0px) scale(1);    opacity: 0.18; }
          25%  { transform: translateY(-12px) scale(1.04); opacity: 0.25; }
          50%  { transform: translateY(-6px) scale(1.02);  opacity: 0.20; }
          75%  { transform: translateY(-14px) scale(1.05); opacity: 0.28; }
          100% { transform: translateY(0px) scale(1);    opacity: 0.18; }
        }
        .animate-yogaFloat {
          animation: yogaFloat var(--dur, 6s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;