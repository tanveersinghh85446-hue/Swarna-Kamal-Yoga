import { Link } from "react-router-dom";
import { FaOm } from "react-icons/fa";
import {
  GiWeightLiftingUp,
  GiFlowerEmblem,
  GiMeditation,
  GiSportMedal,
} from "react-icons/gi";
import { FaPersonPregnant } from "react-icons/fa6";
import { SiLoop } from "react-icons/si";
import { PiBoneThin } from "react-icons/pi";
import { RiShiningFill, RiPsychotherapyFill } from "react-icons/ri";
import { FaNutritionix } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { LuBaby } from "react-icons/lu";

const colors = [
  "from-pink-500 to-rose-500",
  "from-purple-500 to-indigo-500",
  "from-green-400 to-emerald-500",
  "from-yellow-400 to-orange-500",
  "from-blue-400 to-cyan-500",
  "from-fuchsia-500 to-pink-500",
];

const courses = [
  {
    id: 1,
    title: "Pranayama Mudra Meditations Certificate Course",
    slug: "pranayama",
    icon: <FaOm />,
    // price: "₹7,500",
    // duration: "8 Weeks",
    mode: "Live + Recorded",
    highlights: [
      "Pranayama × 35",
      "Mudra Therapy × 60",
      "Meditation × 20",
      "Mantra Chanting × 25",
    ],
  },
  {
    id: 2,
    title: "Weight Loss Coach Certification",
    slug: "weight-loss",
    icon: <GiWeightLiftingUp />,
    price: "₹8,500",
    duration: "35 Classes",
    mode: "Live on Zoom",
    startDate: "June 4th  7-8 PM IST",
    highlights: [
      "Asana Sequences",
      "HIIT & Tabata",
      "Yogic Diet & Nutrition",
      "Pranayama for Weight Loss",
    ],
  },
  {
    id: 3,
    title: "Women's Wellness Coach",
    slug: "womens-wellness",
    icon: <GiFlowerEmblem />,
    price: "₹9,000",
    duration: "40 Sessions",
    mode: "Live + Recorded",
    startDate: "June 4th  12-1 PM IST",
    highlights: [
      "PCOS & Thyroid Therapy",
      "Hormonal Balance",
      "Pelvic Floor Anatomy",
      "Ayurvedic Approach",
    ],
  },
  // {
  //   id: 5,
  //   title: "Hatha Yoga TTC",
  //   slug: "hatha-yoga",
  //   icon: <GiMeditation />,
  //   // price: "₹12,000",
  //   // duration: "6-8 Weeks",
  //   mode: "Live + Recorded",
  //   highlights: ["Asanas", "Pranayama", "Teaching", "Anatomy"],
  // },
  {
    id: 6,
    title: "Ashtanga Vinyasa TTC",
    slug: "ashtanga",
    icon: <SiLoop />,
    // price: "₹15,000",
    // duration: "8 Weeks",
    mode: "Live + Recorded",
    highlights: ["Primary Series", "Flow", "Bandhas", "Adjustments"],
  },
  {
    id: 7,
    title: "Asana Anatomy",
    slug: "asana-anatomy",
    icon: <PiBoneThin />,
    price: "₹5,500",
    // duration: "4 Weeks",
    mode: "Live + Recorded",
    startDate: "August 3rd  12-1 PM IST",
    highlights: ["Muscles", "Alignment", "Injury", "Safety"],
  },
  {
    id: 8,
    title: "Face Yoga",
    slug: "face-yoga",
    icon: <RiShiningFill />,
    // price: "₹3,500",
    // duration: "3 Weeks",
    mode: "Live + Recorded",
    highlights: ["Glow", "Anti-Aging", "Acupressure", "Routine"],
  },
  {
    id: 9,
    title: "Nutrition Course",
    slug: "nutrition",
    icon: <FaNutritionix />,
    // price: "₹6,000",
    // duration: "5 Weeks",
    mode: "Live + Recorded",
    highlights: ["Diet", "Meals", "Water", "Balance"],
  },
  {
    id: 10,
    title: "Power Yoga",
    slug: "power-yoga",
    icon: <IoIosFlash />,
    // price: "₹5,500",
    // duration: "4 Weeks",
    mode: "Live + Recorded",
    highlights: ["Strength", "Core", "Flow", "Energy"],
  },
  {
    id: 11,
    title: "Yin Yoga TTC",
    slug: "yin-yoga",
    icon: <IoMoon />,
    price: "₹6,500",
    duration: "6 Weeks",
    mode: "Live + Recorded",
    startDate: "June 15  8-9 PM IST",
    highlights: ["Yin", "Fascia", "Meditation", "Teaching"],
  },
  {
    id: 12,
    title: "MAT Pilates",
    slug: "mat-pilates",
    icon: <GiSportMedal />,
    // price: "₹7,000",
    // duration: "5 Weeks",
    mode: "Live + Recorded",
    highlights: ["Core", "Flexibility", "Balance", "Training"],
  },
  {
    id: 13,
    title: "Therapy Course",
    slug: "therapy",
    icon: <RiPsychotherapyFill />,
    price: "₹8,500",
    duration: "35 Classes",
    mode: "Live + Recorded",
    highlights: ["Therapy", "Healing", "Relaxation", "Naturopathy"],
  },
  {
    id: 14,
    title: "Kids Yoga TTC",
    slug: "kids-training",
    icon: <LuBaby />,
    // price: "₹6,500",
    // duration: "4 Weeks",
    mode: "Live + Recorded",
    highlights: ["Kids Yoga", "Fun", "Safety", "Play"],
  },
];

function Courses() {
  return (
    <div className="bg-linear-to-b from-white to-gray-100 min-h-screen pt-16 border-t border-white/2">
      {/* Header */}
      <section
        className="relative text-white py-16 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/God.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative">
          <p className="uppercase tracking-[0.4em] text-xs mb-3 text-white/70">
            Live on Zoom
          </p>

          <h1 className="text-5xl font-extrabold mb-4 text-white">
            Online Yoga Courses
          </h1>

          <p className="max-w-xl mx-auto text-lg text-white/85">
            Certified courses with expert trainers — learn, grow & transform.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white"
            >
              {/* Top Gradient Strip */}
              <div
                className={`h-2 bg-linear-to-r ${colors[i % colors.length]}`}
              />

              <div className="p-6">
                {/* Icon */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl text-purple-600">
                    {course.icon}
                  </span>
                  {/* Price Tag */}
                  <div className="bg-linear-to-r from-amber-400 to-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm shadow-md">
                    {course.price}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-3 text-gray-900 min-h-14">
                  {course.title}
                </h3>

                {/* Info Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ⏱️ {course.duration}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    📹 {course.mode}
                  </span>
                </div>

                {/* Start Date if available */}
                {course.startDate && (
                  <p className="text-purple-600 text-xl font-bold">
                    🗓️ Starts: {course.startDate}
                  </p>
                )}

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {course.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to={`/courses/${course.slug}`}
                  className="block text-center bg-linear-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
                >
                  View Syllabus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-black to-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Not sure which course?
        </h2>
        <p className="mb-6 text-white/60">
          We'll guide you to the perfect one.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="border px-6 py-3 rounded-full hover:bg-white hover:text-black transition text-white/90"
          >
            Contact
          </Link>
          <Link
            to="/apply"
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Apply
          </Link>
        </div>
      </section>

      <div className="border-t border-stone-800 mt-10 pt-4 mb-8 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
}

export default Courses;
