import { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [step, setStep] = useState(0);
  

  const typed = ["S", "K", "Y"];

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800), 
      setTimeout(() => setStep(2), 1300), 
      setTimeout(() => setStep(3), 1800), 
      setTimeout(() => setStep(4), 2500), 
      setTimeout(() => setStep(5), 4000),
      setTimeout(() => onFinish(), 4600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-9999 bg-purple-600 flex flex-col items-center justify-center transition-opacity duration-700 ${
        step === 5 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`mb-6 transition-all duration-700 ${
          step >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <img
          src="Start.png"
          alt="Yoga Pose"
          className="w-32 sm:w-40 md:w-48 mx-auto"
          style={{ filter: "drop-shadow(0 0 30px rgba(255,255,255,0.3))" }}
        />
      </div>

      {/* SKY Typing */}
      <div className="flex items-center gap-1 sm:gap-2 mb-4">
        {typed.map((letter, i) => (
          <span
            key={i}
            className={`text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-widest transition-all duration-300 ${
              step >= i + 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {letter}
          </span>
        ))}

        
      </div>

      {/* Meaning — Swarna Kamal Yoga */}
      <div
        className={`text-center transition-all duration-700 ${
          step >= 4 ? "opacity-10 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >

        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-white">
          <span className="text-base sm:text-lg md:text-xl font-semibold tracking-widest">
            Swarna
          </span>
          <span className="text-base sm:text-lg md:text-xl font-semibold tracking-widest">
            Kamal
          </span>
          <span className="text-base sm:text-lg md:text-xl font-semibold tracking-widest">
            <span className="text-white font-extrabold">Y</span>oga
          </span>
        </div>

        
      </div>
    </div>
  );
}

export default SplashScreen;
