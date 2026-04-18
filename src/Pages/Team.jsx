import React from "react";

export default function Team() {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-8">


      {/* TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
          Our Expert Yoga Instructors
        </h1>
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Dedicated teachers blending tradition, science & transformation
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">

        {/* ─────────────────────────────────────────────
            INSTRUCTOR 1 - SARITA SAHU
        ───────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/Sarita Sahu.jpeg" 
                alt="Sarita Sahu"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">
              Sarita Sahu
            </h2>
            <p className="text-amber-600 font-semibold mt-1">
              Yoga Instructor
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              I believe that Yoga is a bridge between physical effort and the stillness of the soul.
              My teaching style is rooted in functional alignment and flow, focusing on physical resilience
              and mental clarity.
            </p>

            {/* EDUCATION */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Education & Credentials</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• M.Com in International Banking & Financial Management</li>
                <li>• Certified Yoga Teacher Training (Yoga Alliance – RYT 200)</li>
                <li>• Certified Yoga Therapist</li>
                <li>• Yin Yoga & Face Yoga Certified</li>
                <li>• Pre & Postnatal Yoga (WYORS / Ekam Yoga)</li>
                <li>• Patanjali Assistant Yoga Teacher Certified</li>
                <li>• Asana, Props & Alignment Specialist (50 hrs Yoga Alliance)</li>
                <li>• Fitness Program & Pilates Training</li>
              </ul>
            </div>

            {/* APPROACH */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Teaching Approach</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Fluid movement, breath awareness, controlled transitions, alignment correction,
                deep body sensing, adaptability in poses, and integration of fitness with traditional yoga.
              </p>
            </div>

            {/* EXPERIENCE + PHILOSOPHY */}
            <div className="mt-6 text-sm text-gray-600">
              <p><b>Experience:</b> 10+ Years</p>
              <p className="mt-2 italic">
                “Yoga is about sensing the internal state of the body, reconnecting with self-awareness,
                and developing emotional strength.”
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            INSTRUCTOR 2 - P SHREE VILASITHA
        ───────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/P.Shree.Vilasitha.jpeg" 
                alt="P Shree Vilasitha"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">
              P. Shree Vilasitha
            </h2>
            <p className="text-amber-600 font-semibold mt-1">
              Yoga Instructor
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Making yoga simple, accessible, and transformative. A dedicated instructor
              with strong academic and scientific foundation blended with traditional yoga wisdom.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-6 text-sm text-gray-600">
              <p>✔ 500+ Students Trained</p>
              <p>✔ 4+ Years Teaching Experience</p>
              <p>✔ Dual Academic Background (Science + Education)</p>
            </div>

            {/* EDUCATION */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Credentials</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
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

            {/* SPECIALIZATION */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Specialisations</h3>
              <p className="text-sm text-gray-600 mt-2">
                Women’s wellness, hormonal balance, menopause support,
                breathwork, therapeutic yoga, holistic health, and root-based traditional practice.
              </p>
            </div>

            {/* PHILOSOPHY */}
            <p className="mt-6 italic text-gray-600 text-sm">
              “Yoga is not about how flexible you are — it is about how present you can be.
              My mission is to simplify yoga for every student.”
            </p>
          </div>
        </div>

         {/* ─────────────────────────────────────────────
            INSTRUCTOR 3 - DASARI NANDITHA
        ───────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/Dasari Nanditha.jpeg" 
                alt="P Shree Vilasitha"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">
              Dasari Nanditha
            </h2>
            <p className="text-amber-600 font-semibold mt-1">
              Yoga Instructor
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Making yoga simple, accessible, and transformative. A dedicated instructor
              with strong academic and scientific foundation blended with traditional yoga wisdom.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-6 text-sm text-gray-600">
              {/* <p>✔ 500+ Students Trained</p> */}
              <p>✔ 10+ Years Teaching Experience</p>
              <p>✔ M.Sc (Nutrition & Dietetics)</p>
            </div>

            {/* EDUCATION */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Credentials</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Certified Yoga Instructor</li>
                <li>• Certified kids yoga teacher</li>
                {/* <li>• B.Ed (Education)</li> */}
                <li>• 200 hrs Yoga (Internationally Certified ) E.Ryt</li>
                <li>• Certified pre and postnatal yoga teacher </li>
                <li>• Pre & Postnatal Yoga (Yogakulam)</li>
                <li>• Certified mat pilates </li>
                <li>• Certified face yoga teacher </li>
                <li>• Certified yoga therapist </li>
                {/* <li>• Mudgar Training Specialist</li> */}
              </ul>
            </div>

            {/* SPECIALIZATION */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Specialisations</h3>
              <p className="text-sm text-gray-600 mt-2">
                Women’s wellness, hormonal balance, menopause support,
                breathwork, therapeutic yoga, holistic health, and root-based traditional practice.
              </p>
            </div>

            {/* PHILOSOPHY */}
            <p className="mt-6 italic text-gray-600 text-sm">
              “Yoga is not about how flexible you are — it is about how present you can be.
              My mission is to simplify yoga for every student.”
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}