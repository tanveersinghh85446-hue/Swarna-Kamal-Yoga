import { Link } from "react-router-dom";

const syllabus = [
  { heading: "Theory & Philosophy", items: ["Anatomy & Physiology – Reproductive & Endocrine System", "Hormonal Imbalance & Reproductive Health Disorders", "Pathology behind PCOS, Fibroid, Menstrual Irregularities, UTI & Thyroid", "How to Prevent & Cure Women's Health Disorders with Yoga", "Infertility Causes & Therapy – Yoga & Modern Science"] },
  { heading: "Practice Sessions", items: ["Yoga for Healthy Metabolism & Reproductive Health", "Yoga for Prevention & Therapy in Infertility", "Yoga Therapy – Menstrual Health Disorders", "Yoga Therapy for PCOS / Fibroid / Endometriosis", "Yoga Therapy for Thyroid Disorder", "Yoga for Obesity"] },
  { heading: "Pelvic Floor & Hormonal Health", items: ["Pelvic Floor Anatomy", "Managing Menopause & Osteoarthritis", "Hormonal Imbalance Control", "Women's Reproductive Health – Menstruation, Fertility, Pregnancy, Menopause"] },
  { heading: "Nutrition & Fitness", items: ["Nutrition & Fitness for Women's Health", "Healthy Eating & Posture Strategies", "Ayurvedic Approach to Women's Health", "Balancing the Doshas", "Natural Remedies for Reproductive & General Wellbeing"] },
  { heading: "Yoga & Relaxation", items: ["Yoga & Meditation as Tools for Physical & Emotional Wellbeing", "Relaxation Techniques (I, Q, D, P)", "Mudra Therapy", "Pranayamas & Meditation Techniques", "Practical Application in Daily Life", "Gentle Strength Building, Restorative Poses & Breathing"] },
];

const benefits = [
  "Address Hormonal Imbalance",
  "Support Through Fertility Challenges",
  "Pregnancy & Postpartum Care",
  "Menopause Management",
  "Address Auto Immune Disorders",
  "Promote Preventative Health",
  "Mental Health Support",
  "Mindfulness & Emotional Wellbeing",
  "Stress Management Techniques",
  "Specialized: PCOD/PCOS, Infertility, Anxiety, Depression",
];

const inclusions = [
  "40 Live Zoom Sessions",
  "Fee: ₹9,000",
  "3 Months Access",
  "Access to Recordings Online",
  "PDF Study Materials",
  "Notes Access Free During Course",
];

function WomensWellness() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <Link to="/courses" className="text-gray-400 text-sm hover:text-white mb-6 inline-block">← Back to Courses</Link>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <span className="bg-white text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">June 4th</span>
          <span className="bg-white text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">12:00 PM IST</span>
          <span className="border border-white text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">40 Sessions</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
          Women's Health Coach Certification
        </h1>
        <p className="text-gray-400 mt-4 text-lg">Fee: ₹9,000 • Live on Zoom</p>
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

      {/* Key Benefits */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-10 text-center">Key Benefits of Specializing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-3 bg-white hover:border-black transition-all">
                <span className="text-black font-bold text-lg">✓</span>
                <p className="text-gray-700 text-sm font-medium">{b}</p>
              </div>
            ))}
          </div>
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

export default WomensWellness;