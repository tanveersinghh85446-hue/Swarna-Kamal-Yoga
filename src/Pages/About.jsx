import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const accomplishments = [
  "Founder of Swarna Kamal Yoga Center",
  "Honorary Doctorate Award by American Merit Council",
  "Certified Yoga Instructor (RYT 200)",
  "Certified Meditation and Pranayama Trainer",
  "Certified Yoga Therapist and Nutritionist",
  "Added Yoga Alliance Certified Pre & Post Natal Yoga Instructor",
  "Certified Pilates Trainer",
  "Simplified Kundalini Yoga Assistant Professor",
  "Certified Spiritual Healer & Counselor",
  "Certified Varmam Professional",
  "National Yoga Champion (2017)",
];

const knowledge = [
  "Hatha Yoga",
  "Ashtanga Vinyasa",
  "Prenatal Yoga",
  "Power Yoga",
  "Yoga Therapy",
  "Pranayama",
  "Meditation",
  "Mudras",
  "Kundalini Yoga",
  "Yin Yoga",
  "Relaxation Techniques",
  "Nutrition",
];

function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const heroRef = useRef(null);
  const imageRef = useFadeUp();
  const introRef = useFadeUp();
  const journeyRef = useFadeUp();
  const accomplishRef = useFadeUp();
  const knowledgeRef = useFadeUp();
  const ctaRef = useFadeUp();

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <div className="bg-linear-to-b from-white to-gray-100 text-center pt-16 border-t border-white/2">
      {/* ── Hero Banner ── */}
      <div className="w-full bg-linear-to-br from-amber-400 via-yellow-400 to-amber-500 py-20 px-4">
        <div ref={heroRef}>
          <p className="text-sm tracking-[0.25em] uppercase text-amber-900 font-semibold mb-3">
            Meet Your Guide
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-sm">
            Dr. Smita K
          </h1>
          <p className="mt-4 text-amber-900 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            Yoga Trainer · Therapist · Spiritual Healer
          </p>
        </div>
      </div>

      <div className="py-20 px-4 bg-cover bg-center bg-no-repeat">
        {/* ── Image Section ── */}
        <div ref={imageRef} className="relative w-full max-w-4xl mx-auto group">
          <img
            src="Samita5.jpeg"
            alt="background"
            className="w-full h-full md:h-112.5 rounded-3xl shadow-xl"
          />
          <div className="absolute inset-0 bg-black/20 rounded-3xl" />
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
            <img
              src="Samita1.png"
              alt="profile"
              className="w-44 h-44 md:w-52 md:h-52 rounded-full border-[6px] border-white object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* ── Intro ── */}
        <div ref={introRef} className="mt-24 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
            "Dr. Smita K is a Certified Yoga Instructor equipped with the
            knowledge and experience to train and motivate people through Yoga.
            She holds 16 years of teaching experience and specializes in
            holistic transformation through yoga."
          </p>
          <p className="mt-6 font-bold text-lg">— Dr. Smita K</p>
        </div>

        {/* ── Her Journey ── */}
        <div ref={journeyRef} className="max-w-5xl mx-auto mt-16 text-left">
          <h3 className="text-2xl font-bold mb-4">Her Journey</h3>
          <p className="text-gray-700 leading-relaxed">
            Smita, an MCA postgraduate, started her career as an IT professional
            and later transitioned into a full-time yoga trainer at the peak of
            her career. While her professional journey brought material success,
            yoga—an ancestral practice—brought her true inner peace and balance.
            Soon, yoga became her way of life.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Today, she is a passionate yoga trainer with degrees in Master of
            Arts in Yoga for Human Excellence and Masters in Yoga Therapy. She
            is also a certified Varmam professional and a trained Simplified
            Kundalini Yoga (SKY) Assistant Professor. She has over 16 years of
            experience and has trained more than 8000 students, many of whom
            have won medals in yoga championships.
          </p>
        </div>

        {/* ── Accomplishments ── */}
        <div ref={accomplishRef} className="max-w-5xl mx-auto mt-16 text-left">
          <h3 className="text-2xl font-bold mb-6">Accomplishments</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {accomplishments.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow-sm border flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-green-500 font-bold">✓</span>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Areas of Knowledge — Marquee ── */}
        <div ref={knowledgeRef} className="max-w-5xl mx-auto mt-16 text-left">
          <h3 className="text-2xl font-bold mb-6">Areas of Knowledge</h3>
          <div className="overflow-hidden relative w-full">
            <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
              {[...knowledge, ...knowledge].map((item, i) => (
                <span
                  key={i}
                  className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="mt-16">
          <Link
            to="/apply"
            className="bg-linear-to-r from-amber-400 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md inline-block"
          >
            Start Your Yoga Journey →
          </Link>
        </div>
      </div>

      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
       {/* BOTTOM */}
      <div className="border-t border-stone-800 mt-10 pt-4 mb-8 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
}
