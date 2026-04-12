import { Link } from "react-router-dom";
const syllabus = [
  { heading: "Anatomy Foundations", items: ["Skeletal System", "Muscular System", "Joint Mechanics", "Spine Anatomy", "Nervous System Basics"] },
  { heading: "Alignment Principles", items: ["Postural Assessment", "Safe Alignment in Key Poses", "Common Misalignments", "Use of Props", "Cueing for Alignment"] },
  { heading: "Injury Prevention", items: ["Common Yoga Injuries", "Contraindications per Pose", "Modifications for Ailments", "Warm-up & Cool-down", "Safe Hands-on Adjustments"] },
];
const inclusions = ["Live & Recorded Sessions","PDF Study Materials","Soft Copy Certificate","Notes During Course","Access to Recordings"];
function Layout({ title, badge, syllabus, inclusions }) {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="bg-black text-white py-20 px-6 text-center">
        <Link to="/courses" className="text-gray-400 text-sm hover:text-white mb-6 inline-block">← Back to Courses</Link>
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">{badge}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">{title}</h1>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold mb-10 border-b-2 border-black pb-4">Course Syllabus</h2>
        <div className="space-y-8">
          {syllabus.map((sec, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-7 hover:border-black transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-black text-white text-xs px-3 py-1 rounded-full">{String(i+1).padStart(2,"0")}</span>{sec.heading}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sec.items.map((item, j) => (<li key={j} className="text-gray-600 text-sm flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>{item}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Course Inclusions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {inclusions.map((item, i) => (<div key={i} className="border border-gray-700 rounded-xl px-5 py-4 flex items-center gap-3"><span className="text-white text-lg">✓</span><p className="text-gray-200 text-sm font-medium">{item}</p></div>))}
          </div>
          <div className="text-center mt-12"><Link to="/apply" className="bg-white text-black px-10 py-4 rounded-full font-extrabold text-lg hover:bg-gray-200 transition-all">Apply for This Course →</Link></div>
        </div>
      </section>
    </div>
  );
}
export default function AsanaAnatomy() { return <Layout title="Asana Anatomy & Alignment Course" badge="Certificate Course • Live on Zoom" syllabus={syllabus} inclusions={inclusions} />; }