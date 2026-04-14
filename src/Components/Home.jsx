import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ── Count-up Hook ──────────────────────────────────────────
function useCountUp(target, duration = 2000, splashDone = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!splashDone || started.current) return;
    started.current = true;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [splashDone, target, duration]);
  return count;
}

function StatItem({ target, suffix, label, splashDone }) {
  const count = useCountUp(target, 2000, splashDone);
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl font-extrabold">{count}{suffix}</p>
      <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-widest">{label}</p>
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────
const stats = [
  { target: 500, suffix: "+", label: "Students" },
  { target: 14,  suffix: "+", label: "Courses" },
  { target: 10,  suffix: "+", label: "Expert Trainers" },
  { target: 5,   suffix: "★", label: "Rating" },
];

const courses = [
  { title: "Pranayama Mudra Meditations Certificate Course", slug: "pranayama", desc: "Master the ancient science of breath, mudra therapy and meditation. YACEP certified course." },
  { title: "Weight Loss Coach Certification",               slug: "weight-loss", desc: "Comprehensive training in yoga-based weight management. Starts June 4th, 7 PM IST." },
  { title: "Women's Wellness Coach",                        slug: "womens-wellness", desc: "Specialized course in hormonal health, PCOS, fertility and women's yoga therapy. June 4th, 12 PM IST." },
  { title: "Hatha Yoga Teacher Training Course",            slug: "hatha-yoga", desc: "Classical Hatha yoga training covering asanas, pranayama, philosophy and teaching methodology." },
  { title: "Ashtanga Vinyasa Teacher Training Course",      slug: "ashtanga", desc: "Dynamic Ashtanga practice covering primary series, bandhas, drishti and vinyasa flow." },
  { title: "Pregnancy and Postnatal",                       slug: "pregnancy", desc: "Safe prenatal and postnatal yoga practices for every stage of the motherhood journey." },
  { title: "Asana Anatomy & Alignment Course",              slug: "asana-anatomy", desc: "Deep dive into musculoskeletal anatomy, safe alignment and injury prevention in yoga." },
  { title: "Face Yoga Certificate Course",                  slug: "face-yoga", desc: "Natural anti-aging techniques using facial exercises, acupressure and skin wellness routines." },
  { title: "Nutrition Diet Course",                         slug: "nutrition", desc: "Sattvic diet principles, meal planning, Ayurvedic nutrition and yogic lifestyle guidance." },
  { title: "Power Yoga Course",                             slug: "power-yoga", desc: "High-intensity yoga combining strength training, circuit training and dynamic asana sequences." },
  { title: "Yin Yoga Teacher Training Course",              slug: "yin-yoga", desc: "Slow and meditative Yin yoga targeting deep connective tissues and meridian pathways." },
  { title: "MAT Pilates Instructor Certification",          slug: "mat-pilates", desc: "Core strength and flexibility training using classical Pilates mat sequences and Swiss ball." },
  { title: "Therapy Teacher Course",                        slug: "therapy", desc: "Yoga therapy for common ailments, naturopathy principles and therapeutic modifications." },
  { title: "Kids Teacher Training Course",                  slug: "kids-training", desc: "Fun and creative yoga teaching techniques designed specifically for children of all ages." },
];

const testimonials = [
  { name: "Priya S.",   course: "Women's Wellness Coach",     stars: 5, text: "This course completely changed my understanding of hormonal health. The trainer was incredibly knowledgeable and supportive throughout every session." },
  { name: "Anita R.",   course: "Pranayama & Meditation",     stars: 5, text: "The pranayama techniques I learned have transformed my daily life. I feel calmer, more focused, and energized every single morning." },
  { name: "Meena K.",   course: "Weight Loss Certification",  stars: 5, text: "I lost 8 kgs in 3 months following the yogic diet and asana sequences. The course content was detailed and very practical." },
];

const faqs = [
  { q: "Is the certification internationally recognized?", a: "Yes. Our courses are YACEP certified under Yoga Alliance. Upon completion, you receive a soft copy certificate recognized globally for teaching yoga professionally." },
  { q: "Are study materials included?", a: "Absolutely. All courses include live & recorded Zoom sessions, PDF study materials, and notes access free during the course duration." },
  { q: "Do I need prior experience to join?", a: "For most courses, beginners are very welcome! We start from the foundations. Some advanced courses may require prior basic yoga knowledge." },
  { q: "How do I attend the classes?", a: "All our classes are conducted live on Zoom. You will receive the meeting link after enrollment. Sessions are also recorded for 3 months access." },
];

// ── Home Page ──────────────────────────────────────────────
function Home({ splashDone }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white text-black font-sans">

      {/* ── HERO ── */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="uppercase tracking-[0.5em] text-gray-400 text-xs mb-4">Welcome to</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Swarna Kamal <br />
            <span className="border-b-4 border-white pb-1">Yoga</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 mb-3 max-w-2xl mx-auto leading-relaxed">
            Yoga Alliance Certified Online Courses
          </p>
          <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10">
            Live Teacher Training & Wellness Coaching — Live on Zoom
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/courses"
              className="bg-white text-black px-6 sm:px-8 py-3 font-bold rounded-full hover:bg-gray-200 transition-all text-sm sm:text-base">
              Explore Courses
            </Link>
            <Link to="/apply"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 font-bold rounded-full hover:bg-white hover:text-black transition-all text-sm sm:text-base">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-black text-white border-t border-gray-800 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6">
          {stats.map((s, i) => (
            <StatItem key={i} target={s.target} suffix={s.suffix} label={s.label} splashDone={splashDone} />
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">Who We Are</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Swarna Kamal Yoga Academy</h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          <strong>Swarna Kamal Yoga</strong> is a certified online yoga teacher training school with an authentic, practical approach. Rooted in classical yogic tradition, our teachings cultivate focus, clarity, and deep inner awareness.
        </p>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          We offer comprehensive courses in Pranayama, Women's Health, Weight Loss, Hatha Yoga, Ashtanga Vinyasa, Yin Yoga, Pilates, Nutrition, and many more — all conducted live on Zoom by highly experienced certified trainers.
        </p>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Our curriculum ensures a complete and balanced training covering <strong>Asana, Pranayama, Meditation, Yoga Philosophy, Anatomy, and Therapeutic practices</strong>, supporting your transformation beyond the mat.
        </p>
        <Link to="/about"
          className="inline-block mt-8 border-2 border-black text-black px-6 sm:px-8 py-3 font-bold rounded-full hover:bg-black hover:text-white transition-all text-sm sm:text-base">
          Meet Our Trainers
        </Link>
      </section>

      {/* ── COURSES ── */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-3 text-center">Our Teacher Training Courses</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">Online Yoga Courses</h2>
          <p className="text-gray-400 text-center text-sm sm:text-base max-w-xl mx-auto mb-10 sm:mb-14">
            Choose the path that resonates with your journey. From pranayama to pilates, we offer comprehensive training live on Zoom.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {courses.map((c, i) => (
              <div key={i}
                className="border border-gray-700 rounded-2xl p-5 flex flex-col justify-between hover:border-white transition-all duration-300 hover:-translate-y-1">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Live on Zoom</p>
                  <h3 className="text-white font-bold text-sm sm:text-base mb-3 leading-snug">{c.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
                <Link to={`/courses/${c.slug}`}
                  className="mt-5 inline-block text-xs font-bold uppercase tracking-wider border-b border-white pb-0.5 hover:text-gray-400 hover:border-gray-400 transition-colors w-fit">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses"
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm sm:text-base">
              View All 14 Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUOTE STRIP ── */}
      <section className="border-y border-gray-200 py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
          <p className="text-lg sm:text-xl font-light italic text-gray-700 max-w-2xl text-center sm:text-left">
            "Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame."
            <span className="block text-sm font-semibold text-black mt-2 not-italic">— B.K.S Iyengar</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/apply"
              className="bg-black text-white px-6 py-2.5 rounded-full font-bold hover:bg-gray-800 transition-all text-sm text-center">
              Apply Now →
            </Link>
            <Link to="/contact"
              className="border-2 border-black text-black px-6 py-2.5 rounded-full font-bold hover:bg-black hover:text-white transition-all text-sm text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3 text-center">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 sm:mb-14">Flexible Learning & Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            { icon: "🎓", title: "Yoga Alliance Certified",  desc: "YACEP certified courses recognized globally for professional teaching." },
            { icon: "📹", title: "Live + Recorded Sessions", desc: "Attend live on Zoom and rewatch recordings for up to 3 months." },
            { icon: "📄", title: "PDF Study Materials",      desc: "Comprehensive notes and study materials provided free during course." },
            { icon: "🏅", title: "Soft Copy Certificate",    desc: "Receive your certificate digitally upon successful course completion." },
          ].map((f, i) => (
            <div key={i}
              className="border border-gray-200 rounded-xl p-5 sm:p-6 text-center hover:border-black hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-3 text-center">Student Stories</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">What Our Students Say</h2>
          <p className="text-gray-400 text-center text-sm sm:text-base max-w-md mx-auto mb-10 sm:mb-14">
            Hear from the yogis who have transformed their lives through our training programs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <div key={i}
                className="border border-gray-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-white transition-all duration-300">
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array(t.stars).fill(0).map((_, j) => (
                      <span key={j} className="text-white text-base">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-extrabold text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-0.5">{t.course}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all text-sm sm:text-base">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3 text-center">Got Questions?</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-10 sm:mb-14">
          Everything you need to know about your Swarna Kamal Yoga journey.
        </p>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all duration-200">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <span className={`text-xl shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-5 sm:px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Yoga Alliance Badge */}
        <div className="text-center mt-10 sm:mt-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Certified & Recognized by</p>
          <div className="inline-flex items-center gap-2 border-2 border-black rounded-full px-6 py-2.5">
            <span className="text-lg">🎓</span>
            <span className="font-extrabold text-sm sm:text-base uppercase tracking-wider">Yoga Alliance — YACEP</span>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">Start Your Journey</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 max-w-2xl mx-auto leading-tight">
          Begin Your Yogic Journey Today
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you want to teach yoga, heal others, or deepen your practice — Swarna Kamal Yoga offers a genuine path rooted in tradition, integrity, and experiential learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/apply"
            className="bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-extrabold text-sm sm:text-base hover:bg-gray-200 transition-all">
            Apply Now →
          </Link>
          <Link to="/contact"
            className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-black transition-all">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;