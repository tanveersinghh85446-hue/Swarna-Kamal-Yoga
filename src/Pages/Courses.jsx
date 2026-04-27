import { Link } from "react-router-dom";
import { FaOm, FaHeartbeat } from "react-icons/fa";
import {
  GiWeightLiftingUp,
  GiFlowerEmblem,
  GiMeditation,
  GiSportMedal,
  GiStomach,
  GiSpinalCoil,
  GiStrong,
} from "react-icons/gi";
import { FaPersonPregnant } from "react-icons/fa6";
import { SiLoop } from "react-icons/si";
import { PiBoneThin } from "react-icons/pi";
import { RiShiningFill, RiPsychotherapyFill } from "react-icons/ri";
import { FaNutritionix } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { LuBaby } from "react-icons/lu";
import { MdSelfImprovement, MdChair } from "react-icons/md";

const colors = [
  "from-pink-500 to-rose-500",
  "from-purple-500 to-indigo-500",
  "from-green-400 to-emerald-500",
  "from-yellow-400 to-orange-500",
  "from-blue-400 to-cyan-500",
  "from-fuchsia-500 to-pink-500",
];

const workshopColors = [
  "from-teal-400 to-emerald-500",
  "from-orange-400 to-amber-500",
  "from-lime-400 to-green-500",
  "from-cyan-400 to-blue-500",
  "from-violet-400 to-purple-500",
  "from-rose-400 to-pink-500",
  "from-amber-400 to-yellow-500",
  "from-indigo-400 to-blue-500",
];

const courses = [
  {
    id: 1,
    title: "Pranayama Mudra Meditations Certificate Course",
    slug: "pranayama",
    icon: <FaOm />,
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
  {
    id: 6,
    title: "Ashtanga Vinyasa TTC",
    slug: "ashtanga",
    icon: <SiLoop />,
    mode: "Live + Recorded",
    highlights: ["Primary Series", "Flow", "Bandhas", "Adjustments"],
  },
  {
    id: 7,
    title: "Asana Anatomy",
    slug: "asana-anatomy",
    icon: <PiBoneThin />,
    price: "₹5,500",
    mode: "Live + Recorded",
    startDate: "August 3rd  12-1 PM IST",
    highlights: ["Muscles", "Alignment", "Injury", "Safety"],
  },
  {
    id: 8,
    title: "Face Yoga",
    slug: "face-yoga",
    icon: <RiShiningFill />,
    mode: "Live + Recorded",
    highlights: ["Glow", "Anti-Aging", "Acupressure", "Routine"],
  },
  {
    id: 9,
    title: "Nutrition Course",
    slug: "nutrition",
    icon: <FaNutritionix />,
    mode: "Live + Recorded",
    highlights: ["Diet", "Meals", "Water", "Balance"],
  },
  {
    id: 11,
    title: "Yin Yoga TTC",
    slug: "yin-yoga",
    icon: <IoMoon />,
    price: "₹6,500",
    duration: "6 Weeks",
    mode: "Live + Recorded",
    startDate: "June 15th  8-9 PM IST",
    highlights: ["Yin", "Fascia", "Meditation", "Teaching"],
  },
  {
    id: 12,
    title: "MAT Pilates",
    slug: "mat-pilates",
    icon: <GiSportMedal />,
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
    mode: "Live + Recorded",
    highlights: ["Kids Yoga", "Fun", "Safety", "Play"],
  },
];

const workshops = [
  {
    id: "w1",
    title: "Chair Yoga Workshop",
    icon: <MdChair />,
    colorIndex: 0,
  },
  {
    id: "w2",
    title: "Power Yoga Workshop",
    icon: <IoIosFlash />,
    colorIndex: 1,
  },
  {
    id: "w3",
    title: "Yoga Therapy for Digestive Disorders",
    icon: <GiStomach />,
    colorIndex: 2,
  },
  {
    id: "w4",
    title: "Yoga Therapy for Diabetes Reversal",
    icon: <FaHeartbeat />,
    colorIndex: 3,
  },
  {
    id: "w5",
    title: "Yoga Therapy for Thyroid Management",
    icon: <GiFlowerEmblem />,
    colorIndex: 4,
  },
  {
    id: "w6",
    title: "Yoga Therapy for Stress & Anxiety",
    icon: <GiMeditation />,
    colorIndex: 5,
  },
  {
    id: "w7",
    title: "Yoga Therapy for Neck & Back Pain Relief",
    icon: <PiBoneThin />,
    colorIndex: 6,
  },
  {
    id: "w8",
    title: "Yoga Therapy for Menopause",
    icon: <RiShiningFill />,
    colorIndex: 7,
  },
  {
    id: "w9",
    title: "Yoga Therapy for Somatic Awareness & Embodied Healing",
    icon: <MdSelfImprovement />,
    colorIndex: 0,
  },
  {
    id: "w10",
    title: "Master the Basics of Strength Training",
    icon: <GiStrong />,
    colorIndex: 1,
  },
  {
    id: "w11",
    title: "Garbh Sanskar — Journey of Pregnancy",
    icon: <FaPersonPregnant />,
    colorIndex: 2,
  },
  {
    id: "w12",
    title: "Prenatal Therapy Yoga",
    icon: <LuBaby />,
    colorIndex: 3,
  },
  {
    id: "w13",
    title: "Yoga Therapy for Spinal Health",
    icon: <GiSpinalCoil />,
    colorIndex: 4,
  },
  {
    id: "w14",
    title: "Pilates with Stick and Dumbbells",
    icon: <GiSportMedal />,
    colorIndex: 5,
  },
  {
    id: "w15",
    title: "Unwinding with Restorative Yoga",
    icon: <IoMoon />,
    colorIndex: 6,
  },
];

function Courses() {
  return (
    <div className="bg-linear-to-b from-white to-gray-100 min-h-screen pt-16 border-t border-white/20">
      {/* ── HERO ── */}
      <section
        className="relative text-white py-16 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/God.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
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

      {/* ── CERTIFICATE COURSES ── */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white"
            >
              <div
                className={`h-2 bg-linear-to-r ${colors[i % colors.length]}`}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl text-purple-600">
                    {course.icon}
                  </span>
                  {course.price && (
                    <div className="bg-linear-to-r from-amber-400 to-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm shadow-md">
                      {course.price}
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 min-h-14">
                  {course.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.duration && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      ⏱️ {course.duration}
                    </span>
                  )}
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    📹 {course.mode}
                  </span>
                </div>
                {course.startDate && (
                  <p className="text-purple-600 text-xl font-bold mb-3">
                    🗓️ Starts: {course.startDate}
                  </p>
                )}
                <ul className="space-y-2 mb-6">
                  {course.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
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

      {/* ── DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-gray-200" />
      </div>

      {/* ── ONLINE WORKSHOPS SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Welcome to{" "}
            <span className="text-yellow-400">Swarna Kamal Yoga</span> Online
            Workshop Courses
          </h2>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {workshops.map((w) => (
            <div
              key={w.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Color Bar */}
              <div
                className={`h-1.5 bg-linear-to-r ${workshopColors[w.colorIndex]}`}
              />

              {/* Workshop Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-teal-50 text-teal-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-teal-200">
                  Workshop
                </span>
              </div>

              <div className="p-6 pt-5">
                {/* Icon Circle */}
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${workshopColors[w.colorIndex]} flex items-center justify-center text-white text-2xl mb-4 shadow-sm`}
                >
                  {w.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug min-h-14 pr-8">
                  {w.title}
                </h3>

                {/* Tag */}
                <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                  {w.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
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
