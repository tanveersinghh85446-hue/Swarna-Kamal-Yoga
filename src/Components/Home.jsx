import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    img: "Home4.jpg",
    title: "SWARNA KAMAL YOGA",
    sub: "Transform your mind, body & soul since 2012",
    btn: "Book a Free Trial",
    to: "/apply",
  },
  {
    img: "Home2.jpg",
    title: "YOGA ALLIANCE CERTIFIED",
    sub: "Internationally recognized Teacher Training Courses",
    btn: "View Courses",
    to: "/courses",
  },
  {
    img: "Home1.jpg",
    title: "ONLINE & OFFLINE CLASSES",
    sub: "Learn from anywhere — flexible batches available",
    btn: "Apply Now",
    to: "/apply",
  },
  {
    img: "Home5.jpg",
    title: "WOMEN'S WELLNESS YOGA",
    sub: "Specialized courses for hormonal health & complete wellbeing",
    btn: "Explore More",
    to: "/courses/womens-wellness",
  },
];

const courses = [
  {
    title: "100 Hour TTC",
    desc: "Foundation level. Perfect for beginners stepping into yoga teaching.",
    img: "100 Hour TTC.jpg",
    to: "/courses/hatha-yoga",
    badge: "Beginner",
  },
  {
    title: "200 Hour TTC",
    desc: "The globally recognized standard for certified yoga instructors.",
    img: "200 Hour TTC.jpg",
    to: "/courses/pranayama",
    badge: "Most Popular",
  },
  {
    title: "300 Hour TTC",
    desc: "Advanced training for deepening practice and teaching skills.",
    img: "Samita.png",
    to: "/courses/ashtanga",
    badge: "Advanced",
  },
  {
    title: "500 Hour TTC",
    desc: "Master-level program combining 200Hr + 300Hr for complete mastery.",
    img: "500 Hour TTC.jpg",
    to: "/courses",
    badge: "Master Level",
  },
];

const whyUs = [
  {
    title: "16+ Years of Excellence",
    desc: "Established in 2012, one of Bengaluru's most trusted yoga institutions.",
    img: "16+ Years of Excellence.jpg",
    to: "/about",
  },
  {
    title: "Globally Recognized Certification",
    desc: "TTC programs follow Yoga Alliance standards, accepted worldwide.",
    img: "Globally Recognized Certification.jpg",
    to: "/courses",
  },
  {
    title: "All Ages Welcome",
    desc: "From toddlers to seniors — classes for every age group and fitness level.",
    img: "OldAge.jpg",
    to: "/about",
  },
  {
    title: "Online & Offline Modes",
    desc: "Can't visit in person? Our hybrid learning model lets you practice from home.",
    img: "Online & Offline Modes.jpg",
    to: "/courses",
  },
  {
    title: "Holistic Approach",
    desc: "We blend asanas, pranayama, meditation, and yogic philosophy.",
    img: "Holistic Approach.jpg",
    to: "/courses/pranayama",
  },
  {
    title: "Personalized Guidance",
    desc: "Small batch sizes ensure every student receives individual attention.",
    img: "Personalized Guidance.jpg",
    to: "/contact",
  },
];

const faqs = [
  {
    question: "Who can join Swarna Kamal Yoga Center?",
    answer:
      "Anyone can join — beginners, intermediate, and advanced practitioners. We welcome adults, kids, seniors, and people with health conditions. Our trainers customize sessions to individual needs.",
    to: "/about",
  },
  {
    question: "What are the available batch timings?",
    answer:
      "We offer flexible morning and evening batches on weekdays and weekends. Please contact us on WhatsApp or visit the center to check the latest available slots.",
    to: "/contact",
  },
  {
    question: "Is the Teacher Training Course (TTC) recognized?",
    answer:
      "Yes! All our TTC programs (100Hr, 200Hr, 300Hr, 500Hr) are internationally recognized and follow Yoga Alliance standards, making our certification globally accepted.",
    to: "/courses",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, we offer both offline and online yoga sessions. Our flexible learning model allows students from any part of the world to learn from Smita Karakavalasa directly.",
    to: "/courses",
  },
  {
    question: "What is the fee structure for courses?",
    answer:
      "Fee structure varies based on the course type and duration. Please reach out to us via WhatsApp or fill the enquiry form for a detailed fee breakdown and available discounts.",
    to: "/contact",
  },
  {
    question: "How experienced is the faculty?",
    answer:
      "Our founder, Smita Karakavalasa, has over 12 years of dedicated yoga teaching experience and has trained hundreds of students with warmth and expertise.",
    to: "/about",
  },
];

const faqColors = [
  { bg: "#FEF9EE", border: "#D97706", text: "#92400E" },
  { bg: "#F0FDF4", border: "#16A34A", text: "#14532D" },
  { bg: "#FFF7ED", border: "#EA580C", text: "#7C2D12" },
  { bg: "#EFF6FF", border: "#2563EB", text: "#1E3A8A" },
  { bg: "#FDF4FF", border: "#9333EA", text: "#581C87" },
  { bg: "#F0FDFA", border: "#0D9488", text: "#134E4A" },
];

const stats = [
  { target: 8000, suffix: "+", label: "Students Trained" },
  { target: 16, suffix: "+", label: "Years Experience" },
  { target: 14, suffix: "+", label: "Certified Courses" },
  { target: 5, suffix: "★", label: "Student Rating" },
];

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function FadeIn({ children, delay = 0, className = "" }) {
  const { ref, visible } = useVisible();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function StatItem({ target, suffix, label, started }) {
  const count = useCounter(target, target > 100 ? 2000 : 1200, started);
  return (
    <div>
      <p className="text-3xl sm:text-4xl font-extrabold">
        {count}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 mt-1">
        {label}
      </p>
    </div>
  );
}

const WaIcon = ({ size = 22 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredFaq, setHoveredFaq] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const timerRef = useRef(null);

  const { ref: statsRef, visible: statsVisible } = useVisible(0.3);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      3500,
    );
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const fn = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", fn, { passive: true });
    return () => {
      window.removeEventListener("scroll", fn);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      3500,
    );
  };

  const go = (dir) => {
    setCurrent((p) => (p + dir + slides.length) % slides.length);
    resetTimer();
  };
  return (
    <div className="w-full font-sans overflow-x-hidden pt-15 border-t border-white/2">
      {/* ── 1. HERO SLIDER ── */}
      <div className="w-full h-[65vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden relative">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              transform:
                i === current
                  ? "translateX(0%)"
                  : i < current
                    ? "translateX(-6%)"
                    : "translateX(6%)",
              zIndex: i === current ? 10 : 0,
            }}
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
              <p
                className="uppercase tracking-[0.25em] text-[10px] sm:text-xs md:text-sm text-amber-400 mb-2 sm:mb-3 font-semibold"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 0.2s",
                }}
              >
                Swarna Kamal Yoga Center
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-3 sm:mb-4 leading-[1.1] max-w-3xl">
                {s.title}
              </h1>
              
              <p
                className="text-sm sm:text-base md:text-lg max-w-xl drop-shadow-md opacity-90 mb-6 sm:mb-8 px-2"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 0.5s",
                }}
              >
                {s.sub}
              </p>
              
              <div
                className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none justify-center"
                style={{
                  opacity: i === current ? 1 : 0,
                  transition: "all 0.8s ease 0.65s",
                }}
              >
                <Link
                  to={s.to}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  {s.btn}
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                resetTimer();
              }}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-amber-400" : "w-2.5 h-2.5 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>

      {/* ── 2. STATS BAR ── */}
      <div ref={statsRef} className="bg-amber-500 py-5 sm:py-7 md:py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 text-center text-white">
          {stats.map((s, i) => (
            <StatItem
              key={i}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              started={statsVisible}
            />
          ))}
        </div>
      </div>

      {/* ── 3. ABOUT ── */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-14">
          <FadeIn delay={0} className="flex-1">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5 leading-tight">
              Swarna Kamal <br className="hidden sm:block" /> Yoga Center
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
              Swarna Kamal Yoga Center was established in December 2012 in
              Bengaluru, India, focused on the well-being of individuals through
              Yoga. SKYC has trained thousands of students — from adults to
              kids. It is the first registered yoga center in the Celebrity
              Classic Layout of Electronic City.
              <br />
              <br />
              This was only possible with the vision, hard work and dedication
              of the soft-hearted Founder <strong>Smita Karakavalasa</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all hover:-translate-y-0.5 transform shadow"
              >
                Meet Our Team
              </Link>
              <Link
                to="/courses"
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all"
              >
                View Courses
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="flex-1 flex justify-center">
            <div className="img-zoom w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-100">
              <img
                src="Samita4.jpeg"
                alt="Yoga"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── 4. COURSES ── */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-center text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
              Certifications
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-12">
              Our Teacher Training Courses
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {courses.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link
                  to={c.to}
                  className="block card-hover rounded-2xl overflow-hidden shadow-md border border-stone-100 bg-white group"
                >
                  <div className="img-zoom h-40 sm:h-44 overflow-hidden relative">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                    <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {c.badge}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {c.desc}
                    </p>
                    <span className="inline-block mt-4 text-amber-600 text-xs font-bold uppercase tracking-wider border-b-2 border-amber-400">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. WHY US ── */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-center text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
              Why Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-12">
              Why Choose Swarna Kamal Yoga?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whyUs.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link
                  to={item.to}
                  className="block card-hover rounded-2xl overflow-hidden shadow-sm border border-stone-100 group bg-white"
                >
                  <div className="img-zoom h-40 sm:h-44 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5 hover:bg-amber-50 transition-colors">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-amber-700 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. FLEXIBLE LEARNING ── */}
      <FadeIn>
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-amber-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold opacity-80 mb-2">
              Learning Mode
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
              Flexible Learning & Real Returns
            </h2>
            <p className="opacity-90 leading-relaxed text-sm sm:text-base md:text-lg px-2">
              Learn at your own pace with our flexible online and offline
              programs. Expert guidance, practical knowledge, and long-term
              personal growth benefits.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "🎯 Expert-Led Sessions",
                "📱 Online & Offline",
                "🕐 Flexible Timings",
                "📜 Certified Courses",
              ].map((tag, i) => (
                <div
                  key={i}
                  className="bg-white/20 border border-white/30 rounded-xl px-4 py-2 text-sm font-medium hover:bg-white/30 transition-all"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/apply"
                className="bg-white text-amber-600 font-extrabold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-amber-50 transition-all shadow-lg hover:-translate-y-0.5 transform inline-block"
              >
                Start Your Journey →
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ── 7. FAQ ── */}
      <div
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-stone-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('God.jpg')" }}
      >
        <div className="max-w-3xl mx-auto p-4 sm:p-6 rounded-xl">
          <FadeIn>
            <p className="text-center text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
              Got Questions?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, i) => {
              const color = faqColors[i % faqColors.length];
              const isOpen = openFaq === i;
              const isHov = hoveredFaq === i;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    onMouseEnter={() => setHoveredFaq(i)}
                    onMouseLeave={() => setHoveredFaq(null)}
                    style={{
                      backgroundColor: isOpen || isHov ? color.bg : "#ffffff",
                      borderLeft: `4px solid ${isOpen || isHov ? color.border : "#e5e7eb"}`,
                      transition: "all 0.3s ease",
                    }}
                    className="rounded-xl shadow-sm cursor-pointer px-5 sm:px-6 py-4 sm:py-5 select-none"
                  >
                    {/* FAQ content unchanged */}
                    <div className="flex justify-between items-center gap-4">
                      <h3
                        className="font-semibold text-base sm:text-lg pr-2"
                        style={{
                          color: isOpen || isHov ? color.text : "#1f2937",
                          transition: "color 0.3s",
                        }}
                      >
                        {faq.question}
                      </h3>
                      <span
                        className="text-2xl font-light shrink-0"
                        style={{
                          color: color.border,
                          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                          transition: "transform 0.3s",
                        }}
                      >
                        +
                      </span>
                    </div>
                    {/* rest of FAQ unchanged */}
                    <div
                      style={{
                        maxHeight: isOpen ? "220px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                      }}
                    >
                      <p className="text-gray-600 text-sm leading-relaxed mt-3">
                        {faq.answer}
                      </p>
                      {isOpen && (
                        <Link
                          to={faq.to}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block mt-3 text-xs font-bold uppercase tracking-wider border-b-2 pb-0.5"
                          style={{
                            color: color.border,
                            borderColor: color.border,
                          }}
                        >
                          Know More →
                        </Link>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 8. CTA ── */}
      <FadeIn>
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Begin Your Yoga Journey?
            </h2>
            <p className="text-gray-500 mb-8 text-sm sm:text-base md:text-lg">
              Join thousands of students who have transformed their lives
              through yoga at Swarna Kamal Yoga Center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/9663894499"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5 transform"
              >
                <WaIcon size={22} /> Chat on WhatsApp
              </a>
              <Link
                to="/apply"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5 transform"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Floating WhatsApp & Scroll To Top - unchanged */}
      {/* ... */}
    </div>
  );
};

export default Home;