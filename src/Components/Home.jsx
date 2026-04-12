import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import { BiVideoRecording } from "react-icons/bi";
import { BsFiletypePdf } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";

const courses = [
  "Pranayama Mudra Meditations",
  "Weight Loss Coach Certification",
  "Women's Wellness Coach",
  "Pregnancy and Postnatal",
  "Hatha Yoga Teacher Training",
  "Ashtanga Vinyasa Teacher Training",
];

const stats = [
  { num: "500+", label: "Students" },
  { num: "14+", label: "Courses" },
  { num: "10+", label: "Expert Trainers" },
];

function Home() {
  return (
    <div className="bg-white text-black font-sans">
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px), repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.5em] text-gray-400 text-xs mb-6">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            Swarna Kamal <br />
            <span className="border-b-4 border-white pb-1">Yoga</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-6 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your mind, body & soul through certified online yoga
            courses Live on Zoom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-black px-8 py-3 font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              Explore Courses
            </Link>
            <Link
              to="/apply"
              className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-black transition-all"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-black text-white border-t border-gray-800 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-extrabold">{s.num}</p>
              <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
          Who We Are
        </p>
        <h2 className="text-4xl font-extrabold mb-6">
          Ancient Wisdom. Modern Teaching.
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Swarna Kamal Yoga offers certified online yoga teacher training
          courses accredited by Yoga Alliance. Our expert trainers guide you
          through live Zoom sessions with recorded access, PDF materials, and
          personal support.
        </p>
        <Link
          to="/about"
          className="inline-block mt-8 border-2 border-black text-black px-8 py-3 font-bold rounded-full hover:bg-black hover:text-white transition-all"
        >
          Meet Our Trainers
        </Link>
      </section>

      {/* ── COURSES PREVIEW ── */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-3 text-center">
            What We Offer
          </p>
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Online Yoga Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <div
                key={i}
                className="border border-gray-700 rounded-xl p-6 hover:border-white transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                  Live on Zoom
                </p>
                <h3 className="text-white font-bold text-lg">{c}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="bg-white text-black px-8 py-3 font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              View All 14 Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3 text-center">
          Why Choose Us
        </p>
        <h2 className="text-4xl font-extrabold text-center mb-12">
          The Swarna Kamal Difference
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaGraduationCap/>,
              title: "Yoga Alliance Certified",
              desc: "YACEP certified courses recognized globally.",
            },
            {
              icon: <BiVideoRecording/>,
              title: "Live + Recorded",
              desc: "Attend live on Zoom & rewatch recordings anytime.",
            },
            {
              icon: <BsFiletypePdf/>,
              title: "PDF Materials",
              desc: "Get study material & notes during the course.",
            },
            {
              icon: <FaMedal/>,
              title: "Soft Copy Certificate",
              desc: "Receive your certificate digitally after completion.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 text-center hover:border-black transition-all hover:-translate-y-1 duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ── */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
          Student Love
        </p>
        <h2 className="text-3xl font-extrabold mb-6">What Our Students Say</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Hundreds of students have transformed their lives through Swarna Kamal
          Yoga.
        </p>
        <Link
          to="/testimonials"
          className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-black transition-all"
        >
          Read Testimonials
        </Link>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-gray-500 text-lg mb-8">
          Join Swarna Kamal Yoga today and start your transformation.
        </p>
        <Link
          to="/apply"
          className="bg-black text-white px-10 py-4 font-bold rounded-full hover:bg-gray-800 transition-all text-lg"
        >
          Apply Now →
        </Link>
      </section>
    </div>
  );
}

export default Home;
