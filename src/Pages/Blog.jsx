import { Link } from "react-router-dom";
import blogs from "./blogData";

function Blog() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-3">Knowledge Hub</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Blog</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Yoga tips, wellness guides, and expert insights from Swarna Kamal Yoga.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {blogs.map((blog) => (
            <div key={blog.id}
              className="border border-gray-200 rounded-2xl p-5 sm:p-6 hover:border-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                  <span className="text-xs font-bold bg-black text-white px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-400">{blog.date}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">⏱ {blog.readTime}</p>
                <h3 className="font-extrabold text-base sm:text-lg mb-3 leading-snug">{blog.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{blog.intro}</p>
              </div>

              {/* Read More → Blog Detail Page */}
              <Link
                to={`/blog/${blog.slug}`}
                className="mt-5 inline-block text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors w-fit"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Blog;