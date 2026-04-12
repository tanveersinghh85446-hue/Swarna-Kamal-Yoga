import { useState } from "react";

const courseList = [
  "Pranayama Mudra Meditations Certificate Course",
  "Weight Loss Coach Certification",
  "Women's Wellness Coach",
  "Pregnancy and Postnatal",
  "Hatha Yoga Teacher Training Course",
  "Ashtanga Vinyasa Teacher Training Course",
  "Asana Anatomy & Alignment Course",
  "Face Yoga Certificate Course",
  "Nutrition Diet Course",
  "Power Yoga Course",
  "Yin Yoga Teacher Training Course",
  "MAT Pilates Instructor Certification",
  "Therapy Teacher Course",
  "Kids Teacher Training Course",
];

function Apply() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", course:"", experience:"", message:"" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-3">Join Us</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Apply Now</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Take the first step toward your yoga journey. Fill in the form below and we'll get back to you.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {sent ? (
          <div className="border-2 border-black rounded-2xl p-8 sm:p-12 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Application Submitted!</h3>
            <p className="text-gray-500 text-sm sm:text-base">Our team will contact you within 24 hours to confirm your enrollment.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4 sm:space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">Full Name *</label>
              <input type="text" name="name" value={form.name} onChange={handle}
                placeholder="Your full name" required
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-black transition-all" />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">Email *</label>
                <input type="email" name="email" value={form.email} onChange={handle}
                  placeholder="your@email.com" required
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-black transition-all" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">Phone *</label>
                <input type="tel" name="phone" value={form.phone} onChange={handle}
                  placeholder="+91 XXXXX XXXXX" required
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-black transition-all" />
              </div>
            </div>

            {/* Course */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">Select Course *</label>
              <select name="course" value={form.course} onChange={handle} required
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-black transition-all bg-white">
                <option value="">-- Choose a course --</option>
                {courseList.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">Yoga Experience</label>
              <select name="experience" value={form.experience} onChange={handle}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-black transition-all bg-white">
                <option value="">-- Select level --</option>
                <option>Beginner (0–1 year)</option>
                <option>Intermediate (1–3 years)</option>
                <option>Advanced (3+ years)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">Additional Message</label>
              <textarea name="message" value={form.message} onChange={handle}
                placeholder="Any questions or special requirements..." rows={4}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-black transition-all resize-none" />
            </div>

            <button type="submit"
              className="w-full bg-black text-white py-3 sm:py-4 rounded-full font-extrabold text-sm sm:text-base hover:bg-gray-800 transition-all">
              Submit Application →
            </button>
          </form>
        )}
      </section>

    </div>
  );
}

export default Apply;