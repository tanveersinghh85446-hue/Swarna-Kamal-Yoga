import React, { useState } from "react";

const images = [
  "/G1.jpeg",
  "/G2.jpeg",
  "/G3.jpeg",
  "/G4.jpeg",
  "/G5.jpeg",
  "/G6.jpeg",
  "/G7.jpeg",
  "/G8.jpeg",
  "/G9.jpeg",
  "/G10.jpeg",
  "/G11.jpeg",
  "/G12.jpeg",
  "/G13.jpeg",
  "/G14.jpeg",
  "/G15.jpeg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full bg-white">
      {/* ───── HERO SECTION ───── */}
      <div
        className="relative h-[40vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/Flower.png)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold">Our Gallery</h1>
          <p className="text-gray-300 mt-3 text-sm sm:text-base">
            Moments of Yoga, Peace & Transformation
          </p>
        </div>
      </div>

      {/* ───── GALLERY GRID ───── */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`gallery-${i}`}
                loading="lazy"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-110 transition duration-300"
              />

              {/* overlay */}
            </div>
          ))}
        </div>
      </div>

      {/* ───── LIGHTBOX ───── */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="preview"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* ───── CTA SECTION ───── */}
      <div className="bg-amber-500 text-white text-center py-12 px-4 mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Join Our Yoga Community
        </h2>
        <p className="mt-2 text-sm sm:text-base opacity-90">
          Experience peace, strength & transformation with us
        </p>

        <a
          href="https://wa.me/919663894499"
          target="_blank"
          className="inline-block mt-5 bg-green-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}
