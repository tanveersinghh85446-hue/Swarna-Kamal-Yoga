import { Link } from "react-router-dom";

const syllabus = [
  { heading: "Pranayama & Breathing", items: ["What is Prana", "Sub Pranas and Their Functions", "Purification of Nadis", "The Science of Breath", "Pranayama & The Nervous System", "Conscious Breathing", "Mechanics of Breathing", "Respiratory System Awareness", "Sensitizing the Lungs", "35 Pranayama Techniques"] },
  { heading: "Meditation", items: ["What is Meditation", "Meditation Postures", "Meditation, Mind & Mantra", "Increasing Energy Flow through the Chakras", "Yoga Practices for Balancing each Chakra", "20 Meditation Techniques"] },
  { heading: "Mudra Therapy", items: ["60 Mudra Techniques", "Mudra for Health & Healing", "Mudra & Prana Flow"] },
  { heading: "Mantra Chanting", items: ["25 Mantra Chanting Practices", "Importance of Mantras in Your Life", "Effects of Mantra on the Brain", "Can Mantra Heal Our Body?", "Mala for which Mantra", "Understanding Mantras", "A Healing Prayer to Deal with Disease", "Chanting / Sound / Vibration to Change Life", "Vedic Chanting"] },
  { heading: "Theory & Philosophy", items: ["Yogic Philosophy", "Teaching Methodology", "Alignment & Adjustment"] },
];

const inclusions = [
  "Live & Recorded Sessions",
  "Study Materials in PDFs",
  "Soft Copy of Certificate",
  "YACEP Certification Course",
  "Notes Access Free During Course",
];

function PranayamaCourse() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <Link to="/courses" className="text-gray-400 text-sm hover:text-white mb-6 inline-block">← Back to Courses</Link>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">YACEP Certified • Live on Zoom</p>
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
          Pranayama, Mudra & Meditation Teaching Training Course
        </h1>
      </section>

      {/* Info Bar */}
      <section className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Pranayamas", value: "35" },
            { label: "Mudras", value: "60" },
            { label: "Meditations", value: "20" },
            { label: "Mantras", value: "25" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-3xl font-extrabold">{s.value}</p>
              <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold mb-10 border-b-2 border-black pb-4">Course Syllabus</h2>
        <div className="space-y-10">
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

      {/* Course Inclusions */}
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

export default PranayamaCourse;