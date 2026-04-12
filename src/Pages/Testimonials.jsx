const testimonials = [
  { name:"Priya S.",    course:"Women's Wellness Coach",      text:"This course completely changed my understanding of hormonal health. The trainer was incredibly knowledgeable and supportive throughout.", stars:5 },
  { name:"Anita R.",   course:"Pranayama & Meditation",       text:"The pranayama techniques I learned have transformed my daily life. I feel calmer, more focused, and energized every single day.", stars:5 },
  { name:"Meena K.",   course:"Weight Loss Certification",    text:"I lost 8 kgs in 3 months following the yogic diet and asana sequences. The course content was detailed and very practical.", stars:5 },
  { name:"Sunita V.",  course:"Hatha Yoga Teacher Training",  text:"Became a certified yoga teacher thanks to Swarna Kamal Yoga. The live sessions were interactive and the trainer feedback was excellent.", stars:5 },
  { name:"Deepa M.",   course:"Pregnancy & Postnatal",        text:"The prenatal yoga sessions gave me so much confidence during my pregnancy. I felt safe and supported at every step.", stars:5 },
  { name:"Kavitha T.", course:"Nutrition Diet Course",        text:"Learned how to create the perfect meal plan combining Ayurvedic principles with modern nutrition. Highly recommend this course!", stars:5 },
];

function Testimonials() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Header */}
      <section className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-3">Student Stories</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Testimonials</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Hear from students who have transformed their lives with Swarna Kamal Yoga.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="border border-gray-200 rounded-2xl p-5 sm:p-7 hover:border-black hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <span key={j} className="text-black text-base sm:text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">"{t.text}"</p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-extrabold text-sm sm:text-base">{t.name}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-0.5">{t.course}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-14 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Ready to Write Your Success Story?</h2>
        <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">Join Swarna Kamal Yoga and start your transformation today.</p>
        <a href="/apply"
          className="bg-white text-black px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm sm:text-base inline-block">
          Apply Now →
        </a>
      </section>

    </div>
  );
}

export default Testimonials;