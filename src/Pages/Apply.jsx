import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ── Reusable FadeIn (same as Home.jsx) ──────────────────────────────────────
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

// ── WhatsApp SVG Icon (same as Home.jsx) ────────────────────────────────────
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

// ── Course options ────────────────────────────────────────────────────────────
const courseOptions = [
  {
    label: "100 Hour TTC",
    badge: "Beginner",
  },
  {
    label: "200 Hour TTC",
    badge: "Most Popular",
  },
  {
    label: "300 Hour TTC",
    badge: "Advanced",
  },
  {
    label: "500 Hour TTC",
    badge: "Master Level",
  },
  {
    label: "Regular Yoga Classes",
    badge: "All Levels",
    color: "",
  },
  {
    label: "Women's Wellness Yoga",
    badge: "Special",
  },
];

const modeOptions = ["Online"];

// ── How It Works (Collapsible) ───────────────────────────────────────────────
function HowItWorks() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
        open ? "border-green-400 bg-green-50" : "border-stone-200 bg-stone-50"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2.5">
          <WaIcon size={18} />
          <span className="text-sm font-semibold text-green-800">
            How it works?
          </span>
        </div>
        <span
          className="text-lg font-light text-green-600 shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "120px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p className="text-xs sm:text-sm text-green-800 leading-relaxed px-4 pb-3.5">
          After clicking <strong>Submit</strong>, WhatsApp will open with your
          details pre-filled. Just press <strong>Send</strong> — our team will
          respond within 24 hours! 🙏
        </p>
      </div>
    </div>
  );
}

// ── Apply Page ────────────────────────────────────────────────────────────────
const Apply = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    mode: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "919663894499"; //

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = "Enter a valid 10-digit Indian mobile number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.course) e.course = "Please select a course";
    if (!form.mode) e.mode = "Please select a learning mode";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCourseSelect = (label) => {
    setForm((prev) => ({ ...prev, course: label }));
    if (errors.course) setErrors((prev) => ({ ...prev, course: "" }));
  };

  const handleModeSelect = (label) => {
    setForm((prev) => ({ ...prev, mode: label }));
    if (errors.mode) setErrors((prev) => ({ ...prev, mode: "" }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    // Build WhatsApp message
    const msg = [
      `🙏 *New Enquiry – Swarna Kamal Yoga Center*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `📧 *Email:* ${form.email}` : null,
      `📚 *Course:* ${form.course}`,
      `💻 *Mode:* ${form.mode}`,
      form.message ? `💬 *Message:* ${form.message}` : null,
      ``,
      `_Sent via website apply form_`,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    const a = document.createElement("a");
    a.href = waUrl;
    a.target = "_blank";
    a.rel = "noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setSubmitted(true);
  };

  return (
    <div className="w-full font-sans overflow-x-hidden pt-15 border-t border-white/20">
      {/* ── HERO BANNER ── */}
      <div className="relative w-full h-[38vh] sm:h-[45vh] overflow-hidden">
        <img
          src="Home4.jpg"
          alt="Apply"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs text-amber-400 mb-2 font-semibold">
            Swarna Kamal Yoga Center
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg mb-3 leading-tight">
            Apply Now
          </h1>
          <p className="text-sm sm:text-base opacity-85 max-w-md">
            Take the first step towards your yoga journey — fill the form &amp;
            we'll connect with you on WhatsApp!
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-4 text-xs sm:text-sm text-white/70">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Apply</span>
          </div>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <div
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-stone-50 bg-cover bg-center"
        style={{ backgroundImage: "url('God.jpg')" }}
      >
        <div className="max-w-3xl mx-auto">
          {/* ── Success State ── */}
          {submitted && (
            <FadeIn>
              <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6 sm:p-8 text-center mb-8 shadow-md">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                  WhatsApp Opened!
                </h3>
                <p className="text-green-700 text-sm sm:text-base mb-4">
                  Your details are pre-filled in WhatsApp. Just press{" "}
                  <strong>Send</strong> to submit your enquiry to us!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      course: "",
                      mode: "",
                      message: "",
                    });
                  }}
                  className="text-sm text-green-700 underline hover:text-green-900 transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            </FadeIn>
          )}

          {/* ── Form Card ── */}
          {!submitted && (
            <FadeIn>
              <div className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-red-600 px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                  <h2 className="text-lg sm:text-2xl font-extrabold text-white leading-tight">
                    Swarna Kamal Yoga Enquiry Form
                  </h2>

                  <img
                    src="/Start.png"
                    alt="Logo"
                    className="h-20 sm:h-16 object-contain"
                  />
                </div>

                <div className="px-6 sm:px-8 py-6 sm:py-8 flex flex-col gap-6">
                  {/* ── Name ── */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter Your Full Name"
                      className={`w-full border-2 rounded-xl px-4 py-3 text-sm sm:text-base outline-none transition-all focus:border-amber-400 focus:bg-amber-50 ${
                        errors.name
                          ? "border-red-400 bg-red-50"
                          : "border-stone-200 bg-stone-50"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* ── Phone + Email ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter Your Mobile Number"
                        maxLength={10}
                        className={`w-full border-2 rounded-xl px-4 py-3 text-sm sm:text-base outline-none transition-all focus:border-amber-400 focus:bg-amber-50 ${
                          errors.phone
                            ? "border-red-400 bg-red-50"
                            : "border-stone-200 bg-stone-50"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email{" "}
                        <span className="text-gray-400 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email Address"
                        className={`w-full border-2 rounded-xl px-4 py-3 text-sm sm:text-base outline-none transition-all focus:border-amber-400 focus:bg-amber-50 ${
                          errors.email
                            ? "border-red-400 bg-red-50"
                            : "border-stone-200 bg-stone-50"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ── Course Selection ── */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Interested Course{" "}
                      <span className="text-amber-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {courseOptions.map((c) => (
                        <button
                          key={c.label}
                          type="button"
                          onClick={() => handleCourseSelect(c.label)}
                          className={`flex items-center justify-between gap-2 border-2 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                            form.course === c.label
                              ? "border-amber-500 bg-amber-50 shadow-md"
                              : "border-stone-200 bg-stone-50 hover:border-amber-300 hover:bg-amber-50/50"
                          }`}
                        >
                          <span className="text-sm font-semibold text-gray-700">
                            {c.label}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5  ${c.color} shrink-0`}
                          >
                            {c.badge}
                          </span>
                        </button>
                      ))}
                    </div>
                    {errors.course && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.course}
                      </p>
                    )}
                  </div>

                  {/* ── Mode Selection ── */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Mode <span className="text-amber-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {modeOptions.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => handleModeSelect(m)}
                          className={`border-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                            form.mode === m
                              ? "border-amber-500 bg-amber-500 text-white shadow-md"
                              : "border-stone-200 bg-stone-50 text-gray-600 hover:border-amber-400 hover:text-amber-700"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    {errors.mode && (
                      <p className="text-red-500 text-xs mt-1">{errors.mode}</p>
                    )}
                  </div>

                  {/* ── Message ── */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific questions or requirements ? "
                      className="w-full border-2 border-stone-200 bg-stone-50 rounded-xl px-4 py-3 text-sm sm:text-base outline-none transition-all focus:border-amber-400 focus:bg-amber-50 resize-none"
                    />
                  </div>

                  {/* ── Note (Collapsible) ── */}
                  <HowItWorks />

                  {/* ── Submit Button ── */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 transform"
                  >
                    <WaIcon size={40} />
                    Submit via WhatsApp
                  </button>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      {/* ── WHY APPLY CTA BAR ── */}

      <div className="py-10 sm:py-12 px-4 sm:px-6 bg-amber-500 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Still Thinking?
          </h2>
          <p className="opacity-90 text-sm sm:text-base mb-6">
            Book a <strong>FREE trial class</strong> — experience the magic of
            Swarna Kamal Yoga before committing!
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              " No commitment required",
              " Expert guidance",
              " All levels welcome",
              " Flexible batches",
            ].map((tag, i) => (
              <div
                key={i}
                className="bg-white/20 border border-white/30 rounded-xl px-4 py-2 font-medium hover:bg-white/30 transition-all"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/courses"
              className="bg-white text-amber-600 font-extrabold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-amber-50 transition-all shadow-lg hover:-translate-y-0.5 transform inline-block"
            >
              Explore Our Courses →
            </Link>
          </div>
        </div>
      </div>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href="https://wa.me/919663894499"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <WaIcon size={28} />
      </a>
      {/* BOTTOM */}
      <div className="border-t border-stone-800 mt-10 pt-4 mb-8 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
};

export default Apply;
