import { whyUs, programs, steps } from "@/lib/data";

export default function WhyAccredian() {
    return (
      <>
    <section id="why" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
            The Accredian Advantage
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We don't just deliver courses — we build learning ecosystems that
            drive real business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="group border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-100 transition">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
            </section>

            <section id="programs" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
            Programs Built for Enterprise Scale
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From AI to Leadership — we cover every function your business needs
            to stay competitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {program.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span>⏱ {program.duration}</span>
                <span>📶 {program.level}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
<a
              
                href="#contact"
                className="text-center text-sm font-semibold text-blue-600 border border-blue-200 rounded-xl py-2.5 hover:bg-blue-50 transition"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
            </section>
            
            <section id="how" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From first call to full rollout — we make enterprise upskilling
            simple.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-5 shadow-lg shadow-blue-200 relative z-10">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition text-sm"
          >
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>

            </>
  );
}