import { useState } from "react";
import { Link } from "react-router-dom";

const trainers = [
  { name: "Trainer 1", role: "Hatha & Ashtanga Expert",      exp: "10+ Years",  bio: "Certified Yoga Alliance instructor specializing in Hatha and Ashtanga yoga. Passionate about helping students build strength and flexibility." },
  { name: "Trainer 2", role: "Women's Wellness Specialist",  exp: "8+ Years",   bio: "Expert in women's health, PCOS, hormonal balance, and prenatal yoga. Dedicated to empowering women through the science of yoga." },
  { name: "Trainer 3", role: "Pranayama & Meditation Guide", exp: "12+ Years",  bio: "Deep practitioner of pranayama, mudra therapy, and meditation. Guides students toward inner peace and spiritual growth." },
  { name: "Trainer 4", role: "Nutrition & Wellness Coach",   exp: "7+ Years",   bio: "Certified nutritionist and yoga trainer. Combines Ayurvedic principles with modern nutrition science for holistic wellness." },
];

function About() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-3">Our Team</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Meet Our Trainers</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Expert certified yoga professionals dedicated to your transformation.
        </p>
      </section>

      {/* Trainer Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {trainers.map((t, i) => (
            <div
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="border border-gray-200 rounded-2xl p-5 sm:p-6 cursor-pointer hover:border-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 border-2 border-gray-300 mx-auto mb-4 flex items-center justify-center text-3xl sm:text-4xl">
                🧘
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-center mb-1">{t.name}</h3>
              <p className="text-gray-500 text-xs text-center uppercase tracking-wider mb-2">{t.role}</p>
              <p className="text-center text-xs font-bold bg-black text-white rounded-full px-3 py-1 w-fit mx-auto">{t.exp}</p>

              {/* Expanded bio */}
              {selected === i && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">{t.bio}</p>
                </div>
              )}

              <p className="text-center text-xs text-gray-400 mt-3">
                {selected === i ? "Click to close ▲" : "Click to view ▼"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-14 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Learn from the Best</h2>
        <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
          Join thousands of students who have transformed with our expert trainers.
        </p>
        <Link to="/courses"
          className="bg-white text-black px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm sm:text-base">
          Explore Courses →
        </Link>
      </section>

    </div>
  );
}

export default About;