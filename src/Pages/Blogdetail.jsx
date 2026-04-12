import { useParams, Link } from "react-router-dom";
import blogs from "./blogData";

function BlogDetail() {
  const { slug } = useParams();

  // Slug se sahi blog dhundo
  const blog = blogs.find((b) => b.slug === slug);

  // Agar blog nahi mila
  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
        <p className="text-6xl mb-4">📄</p>
        <h2 className="text-2xl font-extrabold mb-2">Blog Not Found</h2>
        <p className="text-gray-400 mb-6 text-sm">The blog you're looking for doesn't exist.</p>
        <Link to="/blog"
          className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-all text-sm">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Related blogs (same category, exclude current)
  const related = blogs.filter((b) => b.category === blog.category && b.slug !== blog.slug).slice(0, 2);

  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog"
            className="text-gray-400 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>

          {/* Category + Date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold bg-white text-black px-3 py-1 rounded-full uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-xs text-gray-400">{blog.date}</span>
            <span className="text-xs text-gray-400">⏱ {blog.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            {blog.title}
          </h1>

          {/* Intro */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{blog.intro}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-8 sm:space-y-10">
          {blog.content.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl font-extrabold mb-3 flex items-start gap-2">
                <span className="bg-black text-white text-xs px-2 py-1 rounded-full mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-0 sm:pl-9">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black my-10 sm:my-14" />

        {/* CTA */}
        <div className="bg-black text-white rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold mb-2">Want to Learn More?</h3>
          <p className="text-gray-400 text-sm mb-6">
            Join our certified online yoga courses — Live on Zoom.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/courses"
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
              View Courses
            </Link>
            <Link to="/apply"
              className="border-2 border-white text-white px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-black transition-all text-sm">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {related.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <h3 className="text-xl sm:text-2xl font-extrabold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {related.map((b) => (
              <div key={b.id}
                className="border border-gray-200 rounded-2xl p-5 hover:border-black transition-all hover:-translate-y-1 duration-300">
                <span className="text-xs font-bold bg-black text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  {b.category}
                </span>
                <h4 className="font-extrabold text-sm sm:text-base mt-3 mb-2 leading-snug">{b.title}</h4>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">{b.intro}</p>
                <Link to={`/blog/${b.slug}`}
                  className="text-xs font-bold uppercase tracking-wider border-b-2 border-black pb-0.5 hover:text-gray-500 transition-colors">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

export default BlogDetail;