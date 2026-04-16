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
