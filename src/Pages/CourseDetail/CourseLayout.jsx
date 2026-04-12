import { Link } from "react-router-dom";

export default function CourseLayout({ title, badge, tags = [], syllabus, inclusions, benefits = [] }) {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <Link to="/courses" className="text-gray-400 text-sm hover:text-white mb-4 sm:mb-6 inline-block transition-colors">
          ← Back to Courses
        </Link>

        {/* Badges / Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-5">
            {tags.map((tag, i) => (
              <span key={i} className="bg-white text-black text-xs font-bold uppercase tracking-wider px-3 sm:px-4 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {!tags.length && (
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">{badge}</p>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight px-2">
          {title}
        </h1>

        {badge && tags.length > 0 && (
          <p className="text-gray-400 mt-3 text-base sm:text-lg">{badge}</p>
        )}
      </section>

      {/* Syllabus */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10 border-b-2 border-black pb-4">
          Course Syllabus
        </h2>
        <div className="space-y-5 sm:space-y-8">
          {syllabus.map((sec, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-5 sm:p-7 hover:border-black transition-all">
              <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 flex-wrap">
                <span className="bg-black text-white text-xs px-2 sm:px-3 py-1 rounded-full shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {sec.heading}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sec.items.map((item, j) => (
                  <li key={j} className="text-gray-600 text-xs sm:text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Benefits (optional) */}
      {benefits.length > 0 && (
        <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 bg-white hover:border-black transition-all">
                  <span className="text-black font-bold text-base sm:text-lg shrink-0">✓</span>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inclusions */}
      <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-center">Course Inclusions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {inclusions.map((item, i) => (
              <div key={i} className="border border-gray-700 rounded-xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3">
                <span className="text-white text-base sm:text-lg shrink-0">✓</span>
                <p className="text-gray-200 text-xs sm:text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link to="/apply"
              className="bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-extrabold text-base sm:text-lg hover:bg-gray-200 transition-all inline-block">
              Apply for This Course →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}