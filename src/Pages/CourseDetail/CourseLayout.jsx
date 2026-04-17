import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function CourseLayout({
  title,
  badge,
  tags = [],
  syllabus,
  inclusions,
  benefits = [],
}) {
  return (
    <div className="bg-white text-black min-h-screen pt-15 border-t border-white/2">

      {/* 🔥 HERO SECTION */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Home1.jpg"
            alt="Yoga"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Link
            to="/courses"
            className="text-gray-300 text-sm border border-gray-500 px-4 py-2 rounded-full hover:text-white hover:border-white transition inline-block mb-6"
          >
            ← Back to Courses
          </Link>

          {tags.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/90 text-black text-xs font-bold px-4 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs uppercase text-gray-300 mb-3">{badge}</p>
          )}

          <h1 className="text-4xl sm:text-6xl font-extrabold max-w-3xl mx-auto leading-tight">
            {title}
          </h1>

          {badge && tags.length > 0 && (
            <p className="text-gray-300 mt-3">{badge}</p>
          )}
        </div>
      </section>

      {/* 📚 SYLLABUS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold mb-10 border-b pb-4">
          Course Syllabus
        </h2>

        {Array.isArray(syllabus) ? (
          <div className="grid md:grid-cols-3 gap-6">
            {syllabus.map((sec, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 group border border-gray-200"
              >
                {/* Image */}
                {sec.image && (
                  <div className="overflow-hidden">
                    <img
                      src={sec.image}
                      alt={sec.heading}
                      className="h-40 w-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {sec.heading}
                  </h3>

                  <ul className="space-y-2">
                    {sec.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <FaCheckCircle className="text-green-500 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          syllabus
        )}
      </section>

      {/* 🎯 BENEFITS */}
      {benefits.length > 0 && (
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-10 text-center">
              Key Benefits
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-md border rounded-xl p-4 flex items-center gap-3 hover:shadow-lg transition"
                >
                  <FaCheckCircle className="text-green-500 text-lg" />
                  <p className="text-gray-700 text-sm font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 📦 INCLUSIONS */}
      <section className="bg-linear-to-r from-black via-gray-900 to-black text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            Course Inclusions
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {inclusions.map((item, i) => (
              <div
                key={i}
                className="border border-gray-700 rounded-xl p-4 flex items-center gap-3 hover:border-white hover:scale-105 transition"
              >
                <FaCheckCircle className="text-green-400" />
                <p className="text-gray-200 text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/apply"
              className="bg-linear-to-r from-amber-400 to-yellow-500 text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Apply for This Course →
            </Link>
          </div>
        </div>
      </section>

      {/* 🌍 TRUST LINE */}
      <div className="text-center my-10">
        <p className="text-sm text-gray-500 italic">
          Trusted by 1000+ students worldwide 🌍
        </p>
      </div>

    </div>
  );
}