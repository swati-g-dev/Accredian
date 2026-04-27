import { testimonials } from "@/lib/data"

const Testimonials = () => {
    return (
      <>
    <section id="testimonials" className="bg-gray-100 py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2].map((i) => (
          <div key={i} className="bg-white p-6 rounded-xl">
            "Great experience with Accredian!"
          </div>
        ))}
      </div>
            </section>

            <section id="testimonials" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            What Our Partners Say
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full md:w-[30%] min-w-[280px] max-w-[400px] bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Workforce?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Join 500+ enterprises that trust Accredian to upskill their teams.
          Let&apos;s build your custom learning program today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition text-sm"
          >
            Get a Free Demo
          </a>
          <a
            href="mailto:enterprise@accredian.com"
            className="border border-white/50 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition text-sm"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </section>  
    </>
    )
}

export default Testimonials