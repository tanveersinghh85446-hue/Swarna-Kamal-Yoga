import { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2500),
      setTimeout(() => onFinish(), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-purple-600 transition-opacity duration-700 ${
        step === 3 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <img
        src="/Start.png"
        alt="Logo"
        className={`w-28 sm:w-36 mb-6 transition-all duration-700 ${
          step >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
        style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.4))" }}
      />

      {/* Title */}
      <h1
        className={`text-4xl sm:text-5xl font-bold text-white tracking-widest transition-all duration-700 ${
          step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        SKY
      </h1>

      {/* Subtitle */}
      <p
        className={`text-white/70 mt-2 text-sm tracking-widest transition-all duration-700 ${
          step >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        Swarna Kamal Yoga
      </p>

      {/* Loader */}
      <div className="mt-6 w-32 h-1 bg-white/30 rounded overflow-hidden">
        <div className="h-full bg-white animate-loader" />
      </div>

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