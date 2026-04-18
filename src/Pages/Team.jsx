import React from "react";
import { TiTick } from "react-icons/ti";

export default function Team() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-8">
      {/* TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
          Our Expert Yoga Instructors
        </h1>
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Dedicated teachers blending tradition, science & transformation
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* ─────────────────────────────────────────────
            INSTRUCTOR 1 - SARITA SAHU
        ───────────────────────────────────────────── */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* LEFT CONTENT */}
            <div className="w-full md:w-2/3 p-8 md:p-10">
              {/* PROFILE SUMMARY */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  PROFILE SUMMARY
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I believe that Yoga is a bridge between physical effort and the
                  stillness of the soul. My teaching style is rooted in functional
                  alignment and flow, focusing on physical resilience and mental
                  clarity.
                </p>
              </div>

              {/* EDUCATION & CREDENTIALS */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  EDUCATION & YOGA CREDENTIALS
                </h2>
                <ul className="text-gray-700 text-sm space-y-1.5">
                  <li>• M.Com in International Banking & Financial Management</li>
                  <li>• Certified Yoga Teacher Training (Yoga Alliance – RYT 200)</li>
                  <li>• Certified Yoga Therapist</li>
                  <li>• Yin Yoga & Face Yoga</li>
                  <li>• Certified in Pre and Postnatal Yoga (WYORS / Ekam Yoga and Wellness Institute)</li>
                  <li>• Certified Patanjali Assistant Yoga Teacher (Yoga Samiti)</li>
                  <li>
                    • Completed and certified in "Shree Radhaji Aasham" - Asana,
                    Props and Alignment Specialist course (50 hrs.) from Yoga Alliance
                  </li>
                  <li>• Trained in Fitness Program and Pilates and teaches as well</li>
                  <li>• Teaches Breathe work, Relaxation & Meditation</li>
                </ul>
              </div>

              {/* PHILOSOPHY */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">PHILOSOPHY</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Yoga is impact and ability to sense the internal state of the
                  body. It's more to remember who we are beneath knowing self
                  awareness & emotional awareness.
                </p>
              </div>

              {/* TEACHING APPROACH */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  TEACHING APPROACH & CORE COMPETENCIES
                </h2>
                <ul className="text-gray-700 text-sm space-y-1.5">
                  <li>• A blend of fluid movement</li>
                  <li>• Intentional Breathe</li>
                  <li>• Radical Yoga act of slowing down</li>
                  <li>• Power and Grace in a steady warrior to pose or quiet fold</li>
                  <li>• Moving to remember who we are beneath</li>
                  <li>• Command and Control</li>
                  <li>• Contemporary fitness setting</li>
                  <li>• Style to one that prioritizes</li>
                  <li>• Self awareness</li>
                  <li>• Impact and ability to sense the internal state of the body</li>
                  <li>• Aesthetic alignment and adaptability</li>
                  <li>• Shape the pose to fit the body</li>
                  <li>• Validation on the power of the pause</li>
                  <li>• Deep understanding of musculoskeletal</li>
                </ul>
              </div>

              {/* STRENGTHS & GROWTH */}
              <div>
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  STRENGTHS & GROWTH
                </h2>
                <p className="text-gray-700 text-sm font-semibold">
                  10+ years of experience
                </p>
              </div>
            </div>

            {/* RIGHT - PHOTO & NAME */}
            <div className="w-full md:w-1/3 bg-linear-to-b from-red-50 to-white p-8 flex flex-col items-center justify-start">
              <div className="w-48 h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img
                  src="/Sarita Sahu.jpeg"
                  alt="Sarita Sahu"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-red-700 font-bold text-2xl text-center">
                SARITA SAHU
              </h3>
              <p className="text-red-600 font-semibold text-center mt-1">
                YOGA INSTRUCTOR
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            INSTRUCTOR 2 - P SHREE VILASITHA
        ───────────────────────────────────────────── */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* LEFT CONTENT */}
            <div className="w-full md:w-2/3 p-8 md:p-10">
              {/* PROFILE SUMMARY */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  PROFILE SUMMARY
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Making yoga simple, accessible, and transformative. A dedicated
                  instructor with strong academic and scientific foundation blended
                  with traditional yoga wisdom.
                </p>
              </div>

              {/* EDUCATION & CREDENTIALS */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  EDUCATION & YOGA CREDENTIALS
                </h2>
                <ul className="text-gray-700 text-sm space-y-1.5">
                  <li>• Certified Yoga Instructor</li>
                  <li>• M.Sc Biochemistry</li>
                  <li>• B.Ed (Education)</li>
                  <li>• Hatha Yoga YTT 300 & 500 hrs (Jeevan Yoga Studio)</li>
                  <li>• Yoga Therapy Certified</li>
                  <li>• Pre & Postnatal Yoga (Yogakulam)</li>
                  <li>• Mat Pilates (Shubhyoga)</li>
                  <li>• Diet & Nutrition (Tratak Yoga)</li>
                  <li>• HIIT Training & Weight Loss Yoga</li>
                  <li>• Mudgar Training Specialist</li>
                </ul>
              </div>

              {/* PHILOSOPHY */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">PHILOSOPHY</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "Yoga is not about how flexible you are — it is about how present
                  you can be. My mission is to simplify yoga for every student."
                </p>
              </div>

              {/* SPECIALIZATIONS */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  SPECIALIZATIONS
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Women's wellness, hormonal balance, menopause support, breathwork,
                  therapeutic yoga, holistic health, and root-based traditional
                  practice.
                </p>
              </div>

              {/* STRENGTHS & GROWTH */}
              <div>
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  STRENGTHS & GROWTH
                </h2>
                <div className="text-gray-700 text-sm space-y-1 ">
                  <p className="flex"><TiTick className="text-2xl"/> 500+ Students Trained</p>
                  <p className="flex"><TiTick className="text-2xl"/> 4+ Years Teaching Experience</p>
                  <p className="flex"><TiTick className="text-2xl"/> Dual Academic Background (Science + Education)</p>
                </div>
              </div>
            </div>

            {/* RIGHT - PHOTO & NAME */}
            <div className="w-full md:w-1/3 bg-linear-to-b from-red-50 to-white p-8 flex flex-col items-center justify-start">
              <div className="w-48 h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img
                  src="/P.Shree.Vilasitha.jpeg"
                  alt="P Shree Vilasitha"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-red-700 font-bold text-2xl text-center">
                P. SHREE VILASITHA
              </h3>
              <p className="text-red-600 font-semibold text-center mt-1">
                YOGA INSTRUCTOR
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            INSTRUCTOR 3 - DASARI NANDITHA
        ───────────────────────────────────────────── */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* LEFT CONTENT */}
            <div className="w-full md:w-2/3 p-8 md:p-10">
              {/* PROFILE SUMMARY */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  PROFILE SUMMARY
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Making yoga simple, accessible, and transformative. A dedicated
                  instructor with strong academic and scientific foundation blended
                  with traditional yoga wisdom.
                </p>
              </div>

              {/* EDUCATION & CREDENTIALS */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  EDUCATION & YOGA CREDENTIALS
                </h2>
                <ul className="text-gray-700 text-sm space-y-1.5">
                  <li>• Certified Yoga Instructor</li>
                  <li>• Certified kids yoga teacher</li>
                  <li>• 200 hrs Yoga (Internationally Certified) E.Ryt</li>
                  <li>• Certified pre and postnatal yoga teacher</li>
                  <li>• Pre & Postnatal Yoga (Yogakulam)</li>
                  <li>• Certified mat pilates</li>
                  <li>• Certified face yoga teacher</li>
                  <li>• Certified yoga therapist</li>
                </ul>
              </div>

              {/* PHILOSOPHY */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">PHILOSOPHY</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "Yoga is not about how flexible you are — it is about how present
                  you can be. My mission is to simplify yoga for every student."
                </p>
              </div>

              {/* SPECIALIZATIONS */}
              <div className="mb-6">
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  SPECIALIZATIONS
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Women's wellness, hormonal balance, menopause support, breathwork,
                  therapeutic yoga, holistic health, and root-based traditional
                  practice.
                </p>
              </div>

              {/* STRENGTHS & GROWTH */}
              <div>
                <h2 className="text-red-700 font-bold text-lg mb-3">
                  STRENGTHS & GROWTH
                </h2>
                <div className="text-gray-700 text-sm space-y-1">
                  <p className="flex"><TiTick className="text-2xl"/> 10+ Years Teaching Experience</p>
                  <p className="flex"><TiTick className="text-2xl"/> M.Sc (Nutrition & Dietetics)</p>
                </div>
              </div>
            </div>

            {/* RIGHT - PHOTO & NAME */}
            <div className="w-full md:w-1/3 bg-linear-to-b from-red-50 to-white p-8 flex flex-col items-center justify-start">
              <div className="w-48 h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img
                  src="/Dasari Nanditha.jpeg"
                  alt="Dasari Nanditha"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-red-700 font-bold text-2xl text-center">
                DASARI NANDITHA
              </h3>
              <p className="text-red-600 font-semibold text-center mt-1">
                YOGA INSTRUCTOR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}