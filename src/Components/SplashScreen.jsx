import { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 1000),
      setTimeout(() => setStep(3), 2200),
      setTimeout(() => onFinish(), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
        step === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #4a0080 0%, #6b21a8 45%, #1a0030 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <img
        src="/Start.png"
        alt="Swarna Kamal Logo"
        className={`relative z-10 mb-7 transition-all duration-700 ${
          step >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{
          width: "clamp(110px, 22vw, 160px)",
          filter: "drop-shadow(0 0 24px rgba(255,255,255,0.35))",
        }}
      />

      {/* SWARNA KAMAL heading */}
      <h1
        className={`relative z-10 text-center transition-all duration-700 ${
          step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(1.9rem, 7vw, 3.4rem)",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "6px",
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        SWARNA KAMAL
      </h1>

      {/* YOGA CENTER subtitle */}
      <p
        className={`relative z-10 text-center transition-all duration-700 delay-75 ${
          step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(0.9rem, 3vw, 1.35rem)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.72)",
          letterSpacing: "10px",
          margin: "8px 0 0",
        }}
      >
        YOGA CENTER
      </p>

      {/* Loader bar */}
      <div
        className="relative z-10 mt-10 rounded-full overflow-hidden"
        style={{ width: "clamp(160px, 40vw, 220px)", height: "2px", background: "rgba(255,255,255,0.18)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            background: "rgba(255,255,255,0.75)",
            animation: "loader 3s linear forwards",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        className={`relative z-10 mt-4 transition-all duration-700 ${
          step >= 2 ? "opacity-100" : "opacity-0"
        }`}
        style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", letterSpacing: "3px" }}
      >
        Transform Your Mind • Body • Soul
      </p>

      <style>{`
        @keyframes loader {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;