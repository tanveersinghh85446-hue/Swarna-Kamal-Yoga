import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ── Count-up Hook ──────────────────────────────────────────
// splashDone true hone ke baad hi count shuru hoga
function useCountUp(target, duration = 2000, splashDone = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    // Splash khatam nahi hua toh wait karo
    if (!splashDone) return;
    // Ek baar se zyada mat chalao
    if (started.current) return;
    started.current = true;

    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [splashDone, target, duration]);

  return count;
}

// ── Stat Item ──────────────────────────────────────────────
function StatItem({ target, suffix, label, splashDone }) {
  const count = useCountUp(target, 2000, splashDone);
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl font-extrabold">
        {count}{suffix}
      </p>
      <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-widest">{label}</p>
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────
const stats = [
  { target: 500, suffix: "+", label: "Students" },
  { target: 14,  suffix: "+", label: "Courses" },
  { target: 10,  suffix: "+", label: "Expert Trainers" },
  { target: 5,   suffix: "★", label: "Rating" },
];

const courses = [
  "Pranayama Mudra Meditations",
  "Weight Loss Coach Certification",
  "Women's Wellness Coach",
  "Pregnancy and Postnatal",
  "Hatha Yoga Teacher Training",
  "Ashtanga Vinyasa Teacher Training",
];

const features = [
  { icon: "🎓", title: "Yoga Alliance Certified", desc: "YACEP certified courses recognized globally." },
  { icon: "📹", title: "Live + Recorded",         desc: "Attend live on Zoom & rewatch recordings anytime." },
  { icon: "📄", title: "PDF Materials",           desc: "Get study material & notes during the course." },
  { icon: "🏅", title: "Soft Copy Certificate",   desc: "Receive your certificate digitally after completion." },
];

// ── Home Page ──────────────────────────────────────────────
function Home({ splashDone }) {
  return (
    <div className="bg-white text-black font-sans">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="uppercase tracking-[0.4em] text-gray-400 text-xs mb-4 sm:mb-6">Welcome to</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
            Swarna Kamal <br />
            <span className="border-b-4 border-white pb-1">Yoga</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Transform your mind, body & soul through certified online yoga courses — Live on Zoom.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/courses"
              className="bg-white text-black px-6 sm:px-8 py-3 font-bold rounded-full hover:bg-gray-200 transition-all text-sm sm:text-base">
              Explore Courses
            </Link>
            <Link to="/apply"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 font-bold rounded-full hover:bg-white hover:text-black transition-all text-sm sm:text-base">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* STATS — Count Up after Splash */}
      <section className="bg-black text-white border-t border-gray-800 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6">
          {stats.map((s, i) => (
            <StatItem
              key={i}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              splashDone={splashDone}   // ← yahan se control hota hai
            />
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">Who We Are</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">Ancient Wisdom. Modern Teaching.</h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Swarna Kamal Yoga offers certified online yoga teacher training courses accredited by Yoga Alliance.
          Our expert trainers guide you through live Zoom sessions with recorded access, PDF materials, and personal support.
        </p>
        <Link to="/about"
          className="inline-block mt-6 sm:mt-8 border-2 border-black text-black px-6 sm:px-8 py-3 font-bold rounded-full hover:bg-black hover:text-white transition-all text-sm sm:text-base">
          Meet Our Trainers
        </Link>
      </section>

      {/* COURSES PREVIEW */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-3 text-center">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">Online Yoga Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {courses.map((c, i) => (
              <div key={i}
                className="border border-gray-700 rounded-xl p-5 sm:p-6 hover:border-white transition-all duration-300 hover:-translate-y-1">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Live on Zoom</p>
                <h3 className="text-white font-bold text-base sm:text-lg">{c}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link to="/courses"
              className="bg-white text-black px-6 sm:px-8 py-3 font-bold rounded-full hover:bg-gray-200 transition-all text-sm sm:text-base">
              View All 14 Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3 text-center">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">The Swarna Kamal Difference</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {features.map((f, i) => (
            <div key={i}
              className="border border-gray-200 rounded-xl p-5 sm:p-6 text-center hover:border-black transition-all hover:-translate-y-1 duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{f.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="bg-black text-white py-14 sm:py-16 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">Student Love</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6">What Our Students Say</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
          Hundreds of students have transformed their lives through Swarna Kamal Yoga.
        </p>
        <Link to="/testimonials"
          className="border-2 border-white text-white px-6 sm:px-8 py-3 font-bold rounded-full hover:bg-white hover:text-black transition-all text-sm sm:text-base">
          Read Testimonials
        </Link>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8">Join Swarna Kamal Yoga today and start your transformation.</p>
        <Link to="/apply"
          className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-full hover:bg-gray-800 transition-all text-base sm:text-lg">
          Apply Now →
        </Link>
      </section>

    </div>
  );
}

export default Home;