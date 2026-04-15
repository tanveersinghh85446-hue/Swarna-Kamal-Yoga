import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="bg-linear-to-b from-white to-gray-100 py-20 px-4 text-center">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
        Real People. <span className="text-amber-500">Real Results.</span>
      </h2>

      {/* Image Section */}
      <div className="relative w-full max-w-4xl mx-auto group">
        <img
          src="Samita5.jpeg"
          alt="background"
          className="w-full h-87.5 md:h-112.5 object-cover rounded-3xl shadow-xl"
        />

        <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

        {/* Profile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <img
            src="Samita1.png"
            alt="profile"
            className="w-44 h-44 md:w-52 md:h-52 rounded-full border-[6px] border-white object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Intro */}
      <div className="mt-24 max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
          “Dr. Smita K is a Certified Yoga Instructor equipped with the
          knowledge and experience to train and motivate people through Yoga.
          She holds 16 years of teaching experience and specializes in holistic
          transformation through yoga.”
        </p>

        <p className="mt-6 font-bold text-lg">— Dr. Smita K</p>
      </div>

      {/* 🔥 DETAILS SECTION */}
      <div className="max-w-5xl mx-auto mt-16 text-left">
        <h3 className="text-2xl font-bold mb-4">Her Journey</h3>
        <p className="text-gray-700 leading-relaxed">
          Smita, an MCA postgraduate, started her career as an IT professional
          and later transitioned into a full-time yoga trainer at the peak of
          her career. While her professional journey brought material success,
          yoga—an ancestral practice—brought her true inner peace and balance.
          Soon, yoga became her way of life.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Today, she is a passionate yoga trainer with degrees in Master of Arts
          in Yoga for Human Excellence and Masters in Yoga Therapy. She is also
          a certified Varmam professional and a trained Simplified Kundalini Yoga
          (SKY) Assistant Professor. She has over 16 years of experience and has
          trained more than 100 students, many of whom have won medals in yoga
          championships.
        </p>
      </div>

      {/* 🏆 ACCOMPLISHMENTS */}
      <div className="max-w-5xl mx-auto mt-16 text-left">
        <h3 className="text-2xl font-bold mb-6">Accomplishments</h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Founder of Swarna Kamal Yoga Center",
            "Honorary Doctorate Award by American Merit Council",
            "Certified Yoga Instructor (RYT 200)",
            "Certified Meditation and Pranayama Trainer",
            "Certified Yoga Therapist and Nutritionist",
            "Pre & Post Natal Yoga Instructor",
            "Certified Pilates Trainer",
            "Simplified Kundalini Yoga Assistant Professor",
            "Certified Spiritual Healer & Counselor",
            "Certified Varmam Professional",
            "National Yoga Champion (2017)",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm border flex items-center gap-3"
            >
              <span className="text-green-500 font-bold">✓</span>
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🧘 AREAS OF KNOWLEDGE */}
      <div className="max-w-5xl mx-auto mt-16 text-left">
        <h3 className="text-2xl font-bold mb-6">Areas of Knowledge</h3>

        <div className="flex flex-wrap gap-3">
          {[
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
          ].map((item, i) => (
            <span
              key={i}
              className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16">
        <Link
          to="/apply"
          className="bg-linear-to-r from-amber-400 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md"
        >
          Start Your Yoga Journey →
        </Link>
      </div>
    </div>
  );
}