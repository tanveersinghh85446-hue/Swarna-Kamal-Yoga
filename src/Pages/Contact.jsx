import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/P1.png",
  "/P2.png",
  "/P3.png",
  "/P4.png",
  "/P5.png",
  "/P6.png",
  "/P7.png",
  "/P8.png",
  "/P9.png",
  "/P10.png",
  "/P11.png",
  "/P12.png",
];

// ── FadeIn (same as Home.jsx) ─────────────────────────────────────────────────
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

// ── WhatsApp Icon ─────────────────────────────────────────────────────────────
const WaIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── Contact Details ───────────────────────────────────────────────────────────
const contactDetails = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 96638 94499",
    link: "tel:+919663894499",
    color: "",
    iconBg: "border",
  },
  {
    icon: "📧",
    label: "Email",
    value: "info@swarnakamalyoga.com",
    link: "mailto:info@swarnakamalyoga.com",
    color: "",
    iconBg: "border",
  },
  {
    icon: "📍",
    label: "Address",
    value: "Celebrity Classic Layout, Electronic City, Bengaluru, India",
    link: "https://maps.google.com",
    color: "",
    iconBg: "border",
  },
];

const timings = [
  { batch: "Morning Batch", time: "6:00 AM – 1:00 PM" },
  { batch: "Evening Batch", time: "5:00 PM – 9:00 PM" },
];

// ── Contact Page ──────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const WHATSAPP_NUMBER = "919663894499";

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    const msg = [
      `🙏 *New Message – Swarna Kamal Yoga*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      `💬 *Message:* ${form.message}`,
      ``,
      `_Sent via Contact Page_`,
    ].join("\n");

    const a = document.createElement("a");
    a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    a.target = "_blank";
    a.rel = "noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full font-sans overflow-x-hidden pt-16 border-t border-white/20">
      {/* ── HERO BANNER ── */}
      <div className="relative w-full h-[38vh] sm:h-[45vh] overflow-hidden">
        <img
          src="Home1.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs text-amber-400 mb-2 font-semibold">
            Swarna Kamal Yoga Center
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg mb-3 leading-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base opacity-85 max-w-lg">
            Have questions or want to know more about our yoga classes? Feel
            free to reach out — we'd love to help you start your yoga journey.
          </p>
          <div className="flex items-center gap-2 mt-4 text-xs sm:text-sm text-white/70">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Contact</span>
          </div>
        </div>
      </div>

      {/* ── CONTACT DETAILS + YOGA GIRL ── */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          {/* Left — details */}
          <div className="flex-1 w-full">
            <FadeIn>
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
                Get In Touch
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                We're Here For You
              </h2>
            </FadeIn>

            {/* Contact cards */}
            <div className="flex flex-col gap-3 mb-8">
              {contactDetails.map((d, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 border-2 rounded-2xl px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md ${d.color}`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${d.iconBg}`}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
                        {d.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold">
                        {d.value}
                      </p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>

            {/* Timings */}
            <FadeIn delay={0.3}>
              <div className=" border rounded-2xl px-5 py-4 mb-6">
                <p className="font-bold text-sm uppercase tracking-wider mb-3">
                  🕒 Working Hours
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {timings.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3  bg-white rounded-xl px-4 py-3 flex-1 border shadow-sm"
                    >
                      <span className="text-2xl">{t.icon}</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">
                          {t.batch}
                        </p>
                        <p className="text-sm font-bold text-gray-800">
                          {t.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden py-10 bg-amber-100">
        <div className="slider-track flex gap-6">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="min-w-62.5 sm:min-w-50 h-40 sm:h-55 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt="yoga"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* CSS */}
        <style>
          {`
          .slider-track {
            width: max-content;
            animation: scroll 25s linear infinite;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
        </style>
      </div>

      {/* ── MAP SECTION ── */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-center text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-2">
              Location
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
              Find Us Here
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-amber-100">
              <iframe
                title="Swarna Kamal Yoga Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3!2d77.6600!3d12.8450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzQyLjAiTiA3N8KwMzknMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── CTA BANNER ── */}

      <div className="py-10 sm:py-12 px-4 sm:px-6 bg-amber-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Ready to Start Your Yoga Journey?
          </h2>
          <p className="opacity-90 text-sm sm:text-base mb-6">
            Join thousands of students who have transformed their lives at
            Swarna Kamal Yoga Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919663894499"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              <WaIcon size={20} /> Chat on WhatsApp
            </a>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center bg-white text-amber-600 font-bold text-sm px-6 py-3.5 rounded-full hover:bg-amber-50 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Apply Now →
            </Link>
          </div>
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
        <WaIcon size={200} />
      </a>
       {/* BOTTOM */}
      <div className="border-t border-stone-800 mt-10 pt-4 mb-8 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
};

export default Contact;
