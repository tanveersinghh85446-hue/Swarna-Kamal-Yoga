import React, { useState, useEffect, useRef, useCallback } from "react";
import { IoIosSearch } from "react-icons/io";

const images = [
  "/G1.jpeg", "/G2.jpeg", "/G3.jpeg", "/G4.jpeg", "/G5.jpeg",
  "/G6.jpeg", "/G7.jpeg", "/G8.jpeg", "/G9.jpeg", "/G10.jpeg",
  "/G11.jpeg", "/G12.jpeg", "/G13.jpeg", "/G14.jpeg", "/G15.jpeg",
];

// ── Lightweight fade-in hook (reusable) ──────────────────────────────────────
function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Single animated gallery card ─────────────────────────────────────────────
function GalleryCard({ img, index, onClick }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      onClick={onClick}
      className="overflow-hidden rounded-2xl shadow-md cursor-pointer group relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1) translateY(0)" : "scale(0.94) translateY(20px)",
        transition: `opacity 0.5s ease ${(index % 4) * 0.07}s, transform 0.5s ease ${(index % 4) * 0.07}s`,
      }}
    >
      <img
        src={img}
        alt={`yoga-${index + 1}`}
        loading="lazy"
        className="w-full h-44 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
        <span
          className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
          aria-label="View"
        >
          <IoIosSearch/>
        </span>
      </div>
    </div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((p) => (p + dir + images.length) % images.length);
      setAnimating(false);
    }, 180);
  }, [animating, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
      style={{ animation: "fadeInBg 0.25s ease" }}
      onClick={onClose}
    >
      <style>{`
        @keyframes fadeInBg { from { opacity:0 } to { opacity:1 } }
        @keyframes imgPop { from { opacity:0; transform:scale(0.93) } to { opacity:1; transform:scale(1) } }
      `}</style>

      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-light z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Prev */}
      <button
        className="absolute left-3 sm:left-6 text-white bg-white/10 hover:bg-amber-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110 z-10"
        onClick={(e) => { e.stopPropagation(); go(-1); }}
      >
        ‹
      </button>

      {/* Image */}
      <img
        key={current}
        src={images[current]}
        alt={`preview-${current}`}
        className="max-w-[88vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain"
        style={{ animation: "imgPop 0.22s ease" }}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        className="absolute right-3 sm:right-6 text-white bg-white/10 hover:bg-amber-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110 z-10"
        onClick={(e) => { e.stopPropagation(); go(1); }}
      >
        ›
      </button>

      {/* Counter */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <span className="bg-white/15 text-white text-xs px-4 py-1.5 rounded-full font-semibold tracking-wider">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? "#F59E0B" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── WhatsApp Icon ─────────────────────────────────────────────────────────────
const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── Gallery Page ──────────────────────────────────────────────────────────────
export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null

  return (
    <div className="w-full font-sans overflow-x-hidden pt-15 border-t border-white/20">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 0.75; }
        }
        .hero-text { animation: heroFadeUp 0.8s ease 0.15s both; }
        .hero-sub  { animation: heroFadeUp 0.8s ease 0.35s both; }
        .hero-badge{ animation: heroFadeUp 0.8s ease 0.5s both; }
        .overlay-pulse { animation: subtlePulse 4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ── */}
      <div
        className="relative h-[42vh] sm:h-[50vh] flex items-center justify-center text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url(/Flower.png)" }}
      >
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/50 to-black/70 overlay-pulse" />

        <div className="relative text-center px-4 z-10">
          <p className="hero-badge uppercase tracking-[0.25em] text-[10px] sm:text-xs text-amber-400 mb-3 font-semibold">
            Swarna Kamal Yoga Center
          </p>
          <h1 className="hero-text text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
            Our Gallery
          </h1>
          <p className="hero-sub text-gray-300 mt-3 text-sm sm:text-base opacity-90 max-w-md mx-auto">
            Moments of Yoga, Peace &amp; Transformation
          </p>
          {/* Breadcrumb */}
          <div className="hero-sub flex items-center justify-center gap-2 mt-4 text-xs text-white/60">
            <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Gallery</span>
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section label */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-1">
            Photo Gallery
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Glimpses of Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <GalleryCard
              key={i}
              img={img}
              index={i}
              onClick={() => setLightbox(i)}
            />
          ))}
        </div>

        
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* ── CTA ── */}
      <div className="bg-amber-500 text-white text-center py-12 sm:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Join Our Yoga Community 🧘‍♀️
        </h2>
        <p className="text-sm sm:text-base opacity-90 mb-6 max-w-md mx-auto">
          Experience peace, strength &amp; transformation with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/919663894499"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          >
            <WaIcon /> Chat on WhatsApp
          </a>
          <a
            href="/apply"
            className="inline-flex items-center justify-center bg-white text-amber-600 font-bold text-sm px-6 py-3.5 rounded-full hover:bg-amber-50 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Apply Now →
          </a>
        </div>
      </div>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://wa.me/919663894499"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <WaIcon />
      </a>
    </div>
  );
}