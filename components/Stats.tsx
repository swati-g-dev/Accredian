import { stats } from "@/lib/data";

const Stats = () => {
  return (
    <section id="stats" className="flex flex-col items-center mt-8 sm:mt-28 px-4">
      {/* Heading */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Our <span className="text-blue-600">Track Record</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </p>
      </div>

      {/* stats */}
      <div className="max-w-5xl mx-auto w-full flex flex-col sm:flex-row items-center justify-center">
        {stats.map((s, index) => (
          <div
            key={s.label}
            className={`
              flex flex-col items-center justify-center py-6 px-4 sm:px-8
              w-full sm:w-auto sm:flex-1
              border-gray-200
              ${index !== stats.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""}
            `}
          >
            <div className="text-2xl text-blue-600 font-semibold w-24 h-14 flex items-center justify-center bg-blue-100 rounded-full">
              {s.value}
            </div>
            <div className="text-sm font-medium text-center mt-3 text-gray-700">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
