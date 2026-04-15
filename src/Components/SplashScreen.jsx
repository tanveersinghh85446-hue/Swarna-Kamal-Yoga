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
      <div className="absolute w-125 h-125 bg-purple-400/30 blur-[120px] rounded-full"></div>

      {/* Logo */}
      <img
        src="/Start.png"
        alt="Logo"
        className={`w-40 sm:w-52 md:w-64 mb-8 transition-all duration-700 ${
          step >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
        style={{ filter: "drop-shadow(0 0 30px rgba(255,255,255,0.5))" }}
      />

      {/* Title */}
      <h1
        className={`text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-widest transition-all duration-700 ${
          step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        SKY
      </h1>

      {/* Subtitle */}
      <p
        className={`text-white/80 mt-4 text-lg md:text-xl tracking-widest transition-all duration-700 ${
          step >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        Swarna Kamal Yoga
      </p>

      {/* 🔥 Animated Loader */}
      <div className="mt-10 w-48 md:w-64 h-1.5 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full bg-white animate-loader" />
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