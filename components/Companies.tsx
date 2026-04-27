import { clients, testimonials } from "@/lib/data";

export default function Companies() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 text-center">
<div className="text-center mb-10 max-w-2xl mx-auto px-4">        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
        Our  Proven <span className="text-blue-600">Partnerships</span>
      </h2>
      <p className="text-sm sm:text-lg text-gray-700 mt-3">
      Successful Collaborations With the <span className="text-blue-600">Industry's Best</span>
      </p>
      </div>
    
      {/* MOBILE: ticker */}
        <div className="relative flex md:hidden overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap ticker-track">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-3 shadow-sm shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1a4fba] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="text-slate-700 font-semibold text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: centered grid */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {clients.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-6 py-3 shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-[#1a4fba] flex items-center justify-center">
                <span className="text-white font-bold text-xs">
                  {name.charAt(0)}
                </span>
              </div>
              <span className="text-slate-700 font-semibold text-sm">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>
  );
}