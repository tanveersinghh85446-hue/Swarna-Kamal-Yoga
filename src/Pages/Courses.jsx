import { Link } from "react-router-dom";
import { FaOm } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiFlowerEmblem } from "react-icons/gi";
import { IoWoman } from "react-icons/io5";
import { GiMeditation } from "react-icons/gi";
import { SiActiveloop } from "react-icons/si";
import { PiBoneFill } from "react-icons/pi";
import { GiShiningHeart } from "react-icons/gi";
import { FaNutritionix } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { IoMoon } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import { RiPsychotherapyFill } from "react-icons/ri";
import { LuBaby } from "react-icons/lu";

const courses = [
  {
    id: 1,
    title: "Pranayama Mudra Meditations Certificate Course",
    slug: "pranayama",
    badge: "YACEP Certified",
    sessions: "Live + Recorded",
    icon: <FaOm/>,
    highlights: ["Pranayama × 35", "Mudra Therapy × 60", "Meditation × 20", "Mantra Chanting × 25"],
  },
  {
    id: 2,
    title: "Weight Loss Coach Certification",
    slug: "weight-loss",
    badge: "June 4th • 7 PM IST",
    sessions: "Live on Zoom",
    icon: <GiWeightLiftingUp/>,
    highlights: ["Asana Sequences", "HIIT & Tabata", "Yogic Diet & Nutrition", "Pranayama for Weight Loss"],
  },
  {
    id: 3,
    title: "Women's Wellness Coach",
    slug: "womens-wellness",
    badge: "June 4th • 12 PM IST",
    sessions: "40 Sessions • ₹9000",
    icon: <GiFlowerEmblem/>,
    highlights: ["PCOS & Thyroid Therapy", "Hormonal Balance", "Pelvic Floor Anatomy", "Ayurvedic Approach"],
  },
  {
    id: 4,
    title: "Pregnancy and Postnatal",
    slug: "pregnancy",
    badge: "Live on Zoom",
    sessions: "Live + Recorded",
    icon: <IoWoman/>,
    highlights: ["Prenatal Yoga", "Postnatal Recovery", "Breathing Techniques", "Safe Asana Practice"],
  },
  {
    id: 5,
    title: "Hatha Yoga Teacher Training Course",
    slug: "hatha-yoga",
    badge: "Yoga Alliance",
    sessions: "Live + Recorded",
    icon: <GiMeditation/>,
    highlights: ["Classical Hatha Asanas", "Pranayama", "Teaching Methodology", "Anatomy & Alignment"],
  },
  {
    id: 6,
    title: "Ashtanga Vinyasa Teacher Training Course",
    slug: "ashtanga",
    badge: "Yoga Alliance",
    sessions: "Live + Recorded",
    icon: <SiActiveloop/>,
    highlights: ["Primary Series", "Vinyasa Flow", "Bandhas & Drishti", "Adjustment Techniques"],
  },
  {
    id: 7,
    title: "Asana Anatomy & Alignment Course",
    slug: "asana-anatomy",
    badge: "Certificate Course",
    sessions: "Live + Recorded",
    icon: <PiBoneFill/>,
    highlights: ["Musculoskeletal System", "Postural Alignment", "Injury Prevention", "Safe Adjustments"],
  },
  {
    id: 8,
    title: "Face Yoga Certificate Course",
    slug: "face-yoga",
    badge: "Certificate Course",
    sessions: "Live + Recorded",
    icon: <GiShiningHeart/>,
    highlights: ["Facial Exercises", "Anti-Aging Techniques", "Acupressure Points", "Skin Glow Routine"],
  },
  {
    id: 9,
    title: "Nutrition Diet Course",
    slug: "nutrition",
    badge: "Certificate Course",
    sessions: "Live + Recorded",
    icon: <FaNutritionix/>,
    highlights: ["Meal Planning", "Types of Diets", "Importance of Water", "Yogic Diet Principles"],
  },
  {
    id: 10,
    title: "Power Yoga Course",
    slug: "power-yoga",
    badge: "Certificate Course",
    sessions: "Live + Recorded",
    icon: <ImPower/>,
    highlights: ["Strength Training", "Circuit Training", "Core Stability", "Dynamic Sequences"],
  },
  {
    id: 11,
    title: "Yin Yoga Teacher Training Course",
    slug: "yin-yoga",
    badge: "Yoga Alliance",
    sessions: "Live + Recorded",
    icon: <IoMoon/>,
    highlights: ["Yin Asanas", "Fascia & Connective Tissue", "Meditation Integration", "Teaching Yin Classes"],
  },
  {
    id: 12,
    title: "MAT Pilates Instructor Certification",
    slug: "mat-pilates",
    badge: "Certificate Course",
    sessions: "Live + Recorded",
    icon: <FaMedal/>,
    highlights: ["Pilates Sequences", "Core Strengthening", "Flexibility Training", "Swiss Ball Training"],
  },
  {
    id: 13,
    title: "Therapy Teacher Course",
    slug: "therapy",
    badge: "Certificate Course",
    sessions: "Live + Recorded",
    icon: <RiPsychotherapyFill/>,
    highlights: ["Yoga Therapy Basics", "Ailment Modifications", "Naturopathy Role", "Relaxation Techniques"],
  },
  {
    id: 14,
    title: "Kids Teacher Training Course",
    slug: "kids-training",
    badge: "Certificate Course",
    sessions: "Live + Recorded",
    icon: <LuBaby/>,
    highlights: ["Kids Yoga Sequences", "Fun Teaching Methods", "Safety & Alignment", "Creative Play Yoga"],
  },
];

function Courses() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-3">Live on Zoom</p>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Online Yoga Courses</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Yoga Alliance certified courses taught by expert trainers — attend live & rewatch anytime.
        </p>
      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-gray-200 rounded-2xl p-7 flex flex-col justify-between hover:border-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{course.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold mb-2 leading-snug">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">{course.sessions}</p>

                {/* Highlights */}
                <ul className="space-y-1 mb-6">
                  {course.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full inline-block"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <Link
                to={`/courses/${course.slug}`}
                className="block text-center border-2 border-black text-black px-6 py-2.5 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-200"
              >
                View Syllabus →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Not sure which course to choose?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Contact us and our team will guide you to the perfect course for your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all">
            Contact Us
          </Link>
          <Link to="/apply"
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all">
            Apply Now
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Courses;