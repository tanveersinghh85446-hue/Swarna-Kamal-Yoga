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
    badge: "YACEP Certified",
    icon: <FaOm />,
    sessions: "Live + Recorded",
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
    badge: "June 4th • 7 PM IST",
    icon: <GiWeightLiftingUp />,
    sessions: "Live on Zoom",
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
    badge: "June 4th • 12 PM IST",
    icon: <GiFlowerEmblem />,
    sessions: "40 Sessions • ₹9000",
    highlights: [
      "PCOS & Thyroid Therapy",
      "Hormonal Balance",
      "Pelvic Floor Anatomy",
      "Ayurvedic Approach",
    ],
  },
  {
    id: 4,
    title: "Pregnancy and Postnatal",
    slug: "pregnancy",
    badge: "Live on Zoom",
    icon: <FaPersonPregnant />,
    sessions: "Live + Recorded",
    highlights: [
      "Prenatal Yoga",
      "Postnatal Recovery",
      "Breathing Techniques",
      "Safe Asana Practice",
    ],
  },
  {
    id: 5,
    title: "Hatha Yoga TTC",
    slug: "hatha-yoga",
    badge: "Yoga Alliance",
    icon: <GiMeditation />,
    sessions: "Live + Recorded",
    highlights: ["Asanas", "Pranayama", "Teaching", "Anatomy"],
  },
  {
    id: 6,
    title: "Ashtanga Vinyasa TTC",
    slug: "ashtanga",
    badge: "Yoga Alliance",
    icon: <SiLoop />,
    sessions: "Live + Recorded",
    highlights: ["Primary Series", "Flow", "Bandhas", "Adjustments"],
  },
  {
    id: 7,
    title: "Asana Anatomy",
    slug: "asana-anatomy",
    badge: "Certificate",
    icon: <PiBoneThin />,
    sessions: "Live + Recorded",
    highlights: ["Muscles", "Alignment", "Injury", "Safety"],
  },
  {
    id: 8,
    title: "Face Yoga",
    slug: "face-yoga",
    badge: "Certificate",
    icon: <RiShiningFill />,
    sessions: "Live + Recorded",
    highlights: ["Glow", "Anti-Aging", "Acupressure", "Routine"],
  },
  {
    id: 9,
    title: "Nutrition Course",
    slug: "nutrition",
    badge: "Certificate",
    icon: <FaNutritionix />,
    sessions: "Live + Recorded",
    highlights: ["Diet", "Meals", "Water", "Balance"],
  },
  {
    id: 10,
    title: "Power Yoga",
    slug: "power-yoga",
    badge: "Certificate",
    icon: <IoIosFlash />,
    sessions: "Live + Recorded",
    highlights: ["Strength", "Core", "Flow", "Energy"],
  },
  {
    id: 11,
    title: "Yin Yoga TTC",
    slug: "yin-yoga",
    badge: "Yoga Alliance",
    icon: <IoMoon />,
    sessions: "Live + Recorded",
    highlights: ["Yin", "Fascia", "Meditation", "Teaching"],
  },
  {
    id: 12,
    title: "MAT Pilates",
    slug: "mat-pilates",
    badge: "Certificate",
    icon: <GiSportMedal />,
    sessions: "Live + Recorded",
    highlights: ["Core", "Flexibility", "Balance", "Training"],
  },
  {
    id: 13,
    title: "Therapy Course",
    slug: "therapy",
    badge: "Certificate",
    icon: <RiPsychotherapyFill />,
    sessions: "Live + Recorded",
    highlights: ["Therapy", "Healing", "Relaxation", "Naturopathy"],
  },
  {
    id: 14,
    title: "Kids Yoga TTC",
    slug: "kids-training",
    badge: "Certificate",
    icon: <LuBaby />,
    sessions: "Live + Recorded",
    highlights: ["Kids Yoga", "Fun", "Safety", "Play"],
  },
];

function Courses() {
  return (
    <div className="bg-linear-to-b from-white to-gray-100 min-h-screen pt-15 border-t border-white/2">
      {/* Header */}
      <section className="bg-linear-to-r from-purple-600 to-indigo-600 text-white py-16 text-center">
        <p className="uppercase tracking-[0.4em] text-xs mb-3 opacity-80">
          Live on Zoom
        </p>
        <h1 className="text-5xl font-extrabold mb-4">Online Yoga Courses</h1>
        <p className="max-w-xl mx-auto text-lg opacity-90">
          Certified courses with expert trainers — learn, grow & transform.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Top Gradient */}
              <div
                className={`h-2 bg-linear-to-r ${colors[i % colors.length]}`}
              />

              <div className="p-6 bg-white">
                <div className="flex justify-between mb-4">
                  <span className="text-4xl text-purple-600">
                    {course.icon}
                  </span>
                  <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-500 text-xs mb-4">{course.sessions}</p>

                <ul className="space-y-2 mb-6">
                  {course.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-purple-500">•</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/courses/${course.slug}`}
                  className="block text-center bg-linear-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full font-semibold hover:opacity-90 transition"
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
        <h2 className="text-3xl font-bold mb-4">Not sure which course?</h2>
        <p className="mb-6 opacity-70">We’ll guide you to the perfect one.</p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="border px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
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
    </div>
  );
}

export default Courses;
