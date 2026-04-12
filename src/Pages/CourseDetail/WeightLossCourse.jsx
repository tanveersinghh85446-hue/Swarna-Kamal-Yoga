import { Link } from "react-router-dom";

const syllabus = [
  { heading: "Asana & Movement", items: ["Asana Sequences", "Sun Salutation Sequences", "Strength Training", "Swiss Ball – Balance and Core Training", "Speed Training", "Circuit Training", "Whole Body Strength for Women"] },
  { heading: "Flexibility & Stretching", items: ["Static Flexibility Exercises", "Dynamic vs Static Stretching", "Flexibility Training Stretching", "Mobility Exercises for Flexibility", "Pilates Sequence"] },
  { heading: "Training Methods", items: ["TABATA vs HIIT", "Core Stability & Strengthening", "Variation & Modification for People with Ailments"] },
  { heading: "Nutrition & Diet", items: ["Yogic Diet and Nutrition", "How to Create a Perfect Meal Plan", "Different Types of Diets", "Importance of Water in Weight Loss", "Role of Naturopathy in Weight Loss"] },
  { heading: "Yoga & Wellness", items: ["Pranayamas & Mudras for Weight Loss", "Relaxation Techniques", "Meditations", "Spiritual Healing Mantras for Weight Loss", "Obesity – Causes & Side Effects"] },
];

const inclusions = [
  "Live & Recorded Sessions",
  "Study Materials in PDFs",
  "Soft Copy of Certificate",
  "Notes Access Free During Course",
  "Access to Recordings Online",
];

function WeightLossCourse() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <Link to="/courses" className="text-gray-400 text-sm hover:text-white mb-6 inline-block">← Back to Courses</Link>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <span className="bg-white text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">June 4th</span>
          <span className="bg-white text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">7:00 PM IST</span>
          <span className="border border-white text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">Live on Zoom</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
          Weight Loss Coach Certification
        </h1>
      </section>

      {/* Syllabus */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold mb-10 border-b-2 border-black pb-4">Course Syllabus</h2>
        <div className="space-y-8">
          {syllabus.map((sec, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-7 hover:border-black transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-black text-white text-xs px-3 py-1 rounded-full">{String(i + 1).padStart(2, "0")}</span>
                {sec.heading}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sec.items.map((item, j) => (
                  <li key={j} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Inclusions */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Course Inclusions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {inclusions.map((item, i) => (
              <div key={i} className="border border-gray-700 rounded-xl px-5 py-4 flex items-center gap-3">
                <span className="text-white text-lg">✓</span>
                <p className="text-gray-200 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/apply"
              className="bg-white text-black px-10 py-4 rounded-full font-extrabold text-lg hover:bg-gray-200 transition-all">
              Apply for This Course →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default WeightLossCourse;