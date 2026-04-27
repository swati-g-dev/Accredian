import { stats } from "@/lib/data";

const Stats = () => {
  return (
    <section className="flex flex-col items-center mt-8 sm:mt-28 px-4">
      <div className="text-center mb-10 max-w-2xl">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
        Our <span className="text-blue-600">Track Record</span>
      </h2>
      <p className="text-sm sm:text-lg text-gray-700 mt-3">
        The Numbers Behind <span className="text-blue-600">Our Success</span>
      </p>
      </div>

  <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      
    {stats.map((s,index) => (
        <div key={s.label}
        className={`
            flex flex-col items-center justify-center py-6
            border-gray-200
            ${index % 2 === 0 ? "border-r md:border-b" : ""}
            ${index < 2 ? "border-r md:border-b-0" : ""}
          `}
        >      <div className="text-2xl text-universal font-semibold w-24 h-15 bg-blue-100 p-2 rounded-full">
          {s.value}
        </div>
        <div className="text-sm font-medium">{s.label}</div>
      </div>
    ))}
      </div>
          </div>
          </section>
)
}

export default Stats