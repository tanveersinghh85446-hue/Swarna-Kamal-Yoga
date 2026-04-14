import { Link } from "react-router-dom";
import blogs from "./blogdata";

function Blog() {
  const [featured, ...rest] = blogs;

  return (
    <div className="bg-white text-black min-h-screen">

      {/* ── Header ── */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-3">Knowledge Hub</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Our Blog</h1>
        <div className="w-12 h-0.5 bg-white mx-auto mt-4 opacity-30" />
      </section>

      {/* ── Featured Post ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold">Featured Article</p>
        <Link to={`/blog/${featured.slug}`} className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <div className="overflow-hidden h-64 lg:h-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
              />
            </div>
            {/* Content */}
            <div className="p-8 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-3 mb-5 flex-wrap">
                  <span className="text-xs font-bold bg-black text-white px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400">{featured.date}</span>
                  <span className="text-xs text-gray-400">⏱ {featured.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight group-hover:underline underline-offset-4">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{featured.intro}</p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-0.5">
                  Read Article →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── Rest of Blogs ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-8 font-semibold">More Articles</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {rest.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="group flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:border-black hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-xs font-bold bg-black text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-400">{blog.date}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">⏱ {blog.readTime}</p>
                  <h3 className="font-extrabold text-base sm:text-lg mb-3 leading-snug group-hover:underline underline-offset-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {blog.intro}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-0.5">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Blog;