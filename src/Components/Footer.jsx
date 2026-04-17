
import React from "react";
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { IoMdMailUnread } from "react-icons/io";
import { TiStopwatch } from "react-icons/ti";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* LOGO + ABOUT */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start">
              <img
                src="/Start.png"
                alt="logo"
                className="w-36 sm:w-52 object-contain mb-2"
              />
              <h3 className="text-xl sm:text-2xl font-bold">
                Swarna Kamal Yoga
              </h3>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed mt-3 max-w-sm">
              Yoga Alliance certified yoga courses. Transform your mind body &
              soul since 2012.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="mt-6 sm:mt-0">
            <h4 className="font-semibold uppercase text-xs mb-5 text-stone-300 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              {[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Apply", "/apply"],
                ["Gallery", "/gallery"],
                ["Testimonials", "/testimonials"],
              ].map(([l, t], i) => (
                <li key={i}>
                  <Link to={t} className="hover:text-white transition">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COURSES */}
          <div className="mt-6 sm:mt-0">
            <h4 className="font-semibold uppercase text-xs mb-5 text-stone-300 tracking-wider">
              Top Courses
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              {[
                ["Pranayama & Meditation", "/courses/pranayama"],
                ["Weight Loss Coach", "/courses/weight-loss"],
                ["Women's Wellness", "/courses/womens-wellness"],
                ["Hatha Yoga TTC", "/courses/hatha-yoga"],
                ["Yin Yoga TTC", "/courses/yin-yoga"],
                ["MAT Pilates", "/courses/mat-pilates"],
              ].map(([l, t], i) => (
                <li key={i}>
                  <Link to={t} className="hover:text-white transition">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div className="mt-6 sm:mt-0">
            <h4 className="font-semibold uppercase text-xs mb-5 text-stone-300 tracking-wider">
              Contact Us
            </h4>

            <ul className="space-y-3 text-sm text-stone-400 mb-6">
              <li className="flex items-center gap-3">
                <IoMdMailUnread /> info@swarnakamalyoga.com
              </li>
              <li className="flex items-center gap-3">
                <CiMobile3 className="text-blue-400" /> +91 96638 94499
              </li>
              <li className="flex items-center gap-3">
                <MdLiveTv className="text-red-500" /> Live Classes on Zoom
              </li>
              <li className="flex items-center gap-3">
                <TiStopwatch className="text-yellow-400" /> Mon–Sat • 6 AM – 8 PM IST
              </li>
            </ul>

            {/* SOCIAL */}
            <h4 className="font-semibold uppercase text-xs mb-3 text-stone-300 tracking-wider">
              Connect With Us
            </h4>

            <div className="flex gap-3">
              <a className="p-2 rounded-full bg-blue-600">
                <FaFacebookF />
              </a>

              <a className="p-2 rounded-full bg-linear-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]">
                <FaInstagram className="text-white" />
              </a>

              <a className="p-2 rounded-full bg-red-600">
                <FaYoutube />
              </a>

              <a className="p-2 rounded-full bg-blue-500">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-stone-800 mt-10 pt-4 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}

