import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-3">Get in Touch</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Have questions? We'd love to hear from you. Send us a message and we'll respond soon.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">

          {/* Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8">Swarna Kamal Yoga</h2>
            <div className="space-y-5 sm:space-y-6">
              {[
                { icon:"📧", label:"Email",    value:"info@swarnakamalyoga.com" },
                { icon:"📱", label:"Phone",    value:"+91 XXXXX XXXXX" },
                { icon:"🌐", label:"Platform", value:"Live Classes on Zoom" },
                { icon:"🕐", label:"Timing",   value:"Mon–Sat • 6 AM – 8 PM IST" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">{c.label}</p>
                    <p className="font-semibold text-sm sm:text-base">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="border-2 border-black rounded-2xl p-8 sm:p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-extrabold mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 sm:space-y-5">
                {[
                  { label:"Full Name",     name:"name",    type:"text",  placeholder:"Your full name" },
                  { label:"Email Address", name:"email",   type:"email", placeholder:"your@email.com" },
                  { label:"Phone Number",  name:"phone",   type:"tel",   placeholder:"+91 XXXXX XXXXX" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">{f.label}</label>
                    <input
                      type={f.type} name={f.name} value={form[f.name]}
                      onChange={handle} placeholder={f.placeholder} required
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-black transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handle}
                    placeholder="Tell us how we can help you..." required rows={4}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-black transition-all resize-none"
                  />
                </div>
                <button type="submit"
                  className="w-full bg-black text-white py-3 sm:py-4 rounded-full font-extrabold text-sm sm:text-base hover:bg-gray-800 transition-all">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;