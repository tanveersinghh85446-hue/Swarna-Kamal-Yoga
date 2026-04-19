import { useParams, Link } from "react-router-dom";
import blogs from "./blogdata";

function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-extrabold mb-3">Blog Not Found</h2>
        <p className="text-gray-400 mb-6 text-sm">
          The article you're looking for doesn't exist.
        </p>
        <Link
          to="/blog"
          className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-all text-sm"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const related = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 2);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ── Hero Image ── */}
      <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover grayscale"
        />
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        {/* Text on image */}
        <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 pb-8 sm:pb-12 max-w-4xl mx-auto left-0 right-0">
          <Link
            to="/blog"
            className="text-gray-300 text-xs sm:text-sm hover:text-white mb-4 inline-block transition-colors w-fit"
          >
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-bold bg-white text-black px-3 py-1.5 rounded-full uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-xs text-gray-300">{blog.date}</span>
            <span className="text-xs text-gray-300">⏱ {blog.readTime}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Intro */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed border-l-4 border-black pl-5 mb-12 font-light italic">
          {blog.intro}
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {blog.content.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl font-extrabold mb-3 flex items-center gap-3">
                <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded-md shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-0 sm:pl-10">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black my-12 sm:my-16" />

        {/* CTA Box */}
        <div className="bg-black text-white rounded-2xl p-7 sm:p-10 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Ready to Practice?
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Join Swarna Kamal Yoga
          </h3>
          <p className="text-gray-400 text-sm mb-7 max-w-sm mx-auto">
            Live certified yoga courses on Zoom — taught by expert trainers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/courses"
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-all text-sm"
            >
              View Courses
            </Link>
            <Link
              to="/apply"
              className="border-2 border-white text-white px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-black transition-all text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </article>

      {/* ── Related Articles ── */}
      {related.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold">
            Related Articles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {related.map((b) => (
              <Link
                key={b.id}
                to={`/blog/${b.slug}`}
                className="group flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:border-black hover:shadow-lg transition-all duration-300"
              >
                <div className="overflow-hidden h-40">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold bg-black text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {b.category}
                  </span>
                  <h4 className="font-extrabold text-sm sm:text-base mt-3 mb-1 leading-snug group-hover:underline underline-offset-2">
                    {b.title}
                  </h4>
                  <p className="text-gray-500 text-xs line-clamp-2">
                    {b.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

       {/* BOTTOM */}
      <div className="border-t border-stone-800 mt-10 pt-4 mb-8 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
}

export default BlogDetail;
