const placeholders = [
  { label:"Yoga Class",        emoji:"🧘" },
  { label:"Meditation Session", emoji:"🕉️" },
  { label:"Group Training",    emoji:"👥" },
  { label:"Pranayama Class",   emoji:"💨" },
  { label:"Women's Wellness",  emoji:"🌸" },
  { label:"Zoom Session",      emoji:"💻" },
  { label:"Outdoor Yoga",      emoji:"🌿" },
  { label:"Kids Yoga",         emoji:"👶" },
  { label:"Pilates Class",     emoji:"🏅" },
  { label:"Face Yoga",         emoji:"✨" },
  { label:"Nutrition Talk",    emoji:"🥗" },
  { label:"Power Yoga",        emoji:"⚡" },
];

function Gallery() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-3">Our Moments</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Gallery</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Glimpses of our live classes, sessions, and student journeys.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {placeholders.map((p, i) => (
            <div key={i}
              className="border border-gray-200 rounded-xl sm:rounded-2xl aspect-square flex flex-col items-center justify-center hover:border-black hover:shadow-md transition-all duration-300 cursor-pointer group">
              <span className="text-4xl sm:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider text-center px-2">{p.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-8 sm:mt-10">
          📸 Upload your yoga journey photos here — replace placeholders with real images.
        </p>
      </section>

    </div>
  );
}

export default Gallery;