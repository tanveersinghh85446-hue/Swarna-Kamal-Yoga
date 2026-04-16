import { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 600),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => setStep(3), 2600),
      setTimeout(() => onFinish(), 3600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-linear-to-br from-purple-700 via-purple-600 to-black transition-opacity duration-700 ${
        step === 3 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 🔥 Background Glow */}
      <div className="absolute w-125 h-125 bg-white blur-[120px] rounded-full"></div>

      {/* Title */}
      <svg viewBox="0 0 800 200" className="w-full max-w-5xl mx-auto">
        <path id="curve" d="M 100 150 Q 400 20 700 150" fill="transparent" />

        <text
          className={`fill-white font-extrabold transition-all duration-700 ${
            step >= 2 ? "opacity-100" : "opacity-0"
          }`}
          fontSize="60"
          letterSpacing="8"
        >
          <textPath href="#curve" startOffset="70%" textAnchor="middle">
            SWARNA KAMAL YOGA
          </textPath>
        </text>
      </svg>

      {/* Logo */}
      <img
        src="/Start.png"
        alt="Logo"
        className={`w-60 sm:w-52 md:w-64 mb-8 transition-all duration-700 ${
          step >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
        style={{ filter: "drop-shadow(0 0 30px rgba(255,255,255,0.5))" }}
      />

      {/* 🔥 Animated Loader */}
      <div className="mt-10 w-48 md:w-64 h-1.5 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full animate-loader" />
      </div>

      {/* Optional tagline */}
      <p className="text-white/50 text-sm mt-4 tracking-wide">
        Transform Your Mind • Body • Soul
      </p>

      {/* Animations */}
      <style>{`
        @keyframes loader {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loader {
          animation: loader 3s linear forwards;
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;
