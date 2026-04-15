import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-extrabold tracking-widest mb-3">
                🪷 Swarna Kamal Yoga
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Yoga Alliance certified yoga courses. Transform your mind, body
                & soul since 2012.
              </p>
              <span className="inline-flex items-center gap-2 border border-stone-700 rounded-full px-4 py-1.5 text-xs text-stone-400">
                🎓 YACEP Certified
              </span>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-5 text-stone-300">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-stone-400">
                {[
                  ["Home", "/"],
                  ["Courses", "/courses"],
                  ["About", "/about"],
                  ["Contact", "/contact"],
                  ["Apply", "/apply"],
                  ["Blog", "/blog"],
                  ["Gallery", "/gallery"],
                  ["Testimonials", "/testimonials"],
                ].map(([l, t], i) => (
                  <li key={i}>
                    <Link to={t} className="hover:text-white transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-5 text-stone-300">
                Top Courses
              </h4>
              <ul className="space-y-2.5 text-sm text-stone-400">
                {[
                  ["Pranayama & Meditation", "/courses/pranayama"],
                  ["Weight Loss Coach", "/courses/weight-loss"],
                  ["Women's Wellness", "/courses/womens-wellness"],
                  ["Hatha Yoga TTC", "/courses/hatha-yoga"],
                  ["Yin Yoga TTC", "/courses/yin-yoga"],
                  ["MAT Pilates", "/courses/mat-pilates"],
                ].map(([l, t], i) => (
                  <li key={i}>
                    <Link to={t} className="hover:text-white transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-5 text-stone-300">
                Contact Us
              </h4>
              <ul className="space-y-3 text-sm text-stone-400">
                <li className="flex items-start gap-2">
                  📧 info@swarnakamalyoga.com
                </li>
                <li className="flex items-start gap-2">📱 +91 96638 94499</li>
                <li className="flex items-start gap-2">
                  🌐 Live Classes on Zoom
                </li>
                <li className="flex items-start gap-2">
                  🕐 Mon–Sat • 6 AM – 8 PM IST
                </li>
              </ul>
              <a
                href="https://wa.me/9663894499"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
            <p>
              © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru.
              All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link to="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link
                to="/gallery"
                className="hover:text-white transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/testimonials"
                className="hover:text-white transition-colors"
              >
                Testimonials
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
