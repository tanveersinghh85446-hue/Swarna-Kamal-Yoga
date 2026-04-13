import { useEffect, useState } from "react";

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
      style={{
        background: "linear-gradient(135deg, #7c3aed, #9333ea, #a855f7)",
      }}
    >
      {/* 🔥 Animated Background Glow */}
      <div className="absolute w-125 h-125 bg-white/10 rounded-full blur-3xl animate-bgMove"></div>

      {/* 🔥 Logo Image */}
      <div
        className={`mb-6 transition-all duration-700 ${
          step >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <img
          src="/Start.png"
          alt="Yoga"
          className="w-32 sm:w-40 md:w-48 mx-auto animate-float animate-spin-slow"
          style={{
            filter: "drop-shadow(0 0 40px rgba(255,255,255,0.6))",
          }}
        />
      </div>

      {/* 🔥 SKY Typing + Shine */}
      <div className="flex items-center gap-2 mb-4 relative">
        {typed.map((letter, i) => (
          <span
            key={i}
            className={`text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-widest transition-all duration-500 ${
              step >= i + 1
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-75"
            } animate-glow`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {letter}
          </span>
        ))}

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 animate-shine"></div>
      </div>

      {/* 🔥 Subtitle */}
      <div
        className={`text-center transition-all duration-700 ${
          step >= 4
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
          <span className="text-base sm:text-lg md:text-xl font-semibold tracking-widest">
            Swarna
          </span>
          <span className="text-base sm:text-lg md:text-xl font-semibold tracking-widest">
            Kamal
          </span>
          <span className="text-base sm:text-lg md:text-xl font-semibold tracking-widest">
            <span className="font-extrabold">Y</span>oga
          </span>
        </div>
      </div>

      {/* 🔥 Loader Bar */}
      <div className="mt-8 w-40 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-white animate-loader"></div>
      </div>

      {/* 🔥 Animations */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }

        @keyframes glow {
          0%,100% { text-shadow: 0 0 10px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 30px rgba(255,255,255,1); }
        }
        .animate-glow {
          animation: glow 1.5s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }

        @keyframes loader {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loader {
          animation: loader 4s linear forwards;
        }

        @keyframes bgMove {
          0% { transform: translate(-20%, -20%); }
          50% { transform: translate(20%, 20%); }
          100% { transform: translate(-20%, -20%); }
        }
        .animate-bgMove {
          animation: bgMove 10s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;