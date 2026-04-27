import { expertise } from "@/lib/data"

const Edge = () => {
  return (
    <section id="edge" className="px-8 py-20">
      <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            Key Aspects of{" "}
            <span className="text-blue-600">Our Strategic Training</span>
          </p>
      </div>

      {/* different image for different screen width */}
      <div className="flex justify-center mb-20">
        <img
          src="accredian-edge-desktop.svg" 
          alt="Accredian Edge"
          className="hidden md:block w-full max-w-4xl"
        />
        <img
          src="accredian-edge-mobile.svg" 
          alt="Accredian Edge"
          className="block md:hidden w-full max-w-sm"
        />
      </div>  
      


      {/* domain expertise */}

      <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            Specialized Programs {" "}
            <span className="text-blue-600">Designed to Fuel Innovation</span>
          </p>
      </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-4">
  {expertise.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={item.id}
        className=" 
        w-[30%]
  flex gap-3 flex-col items-center text-center
  border border-gray-200 rounded-xl p-5
  hover:shadow-md hover:-translate-y-1 transition
  "
      >
        {/* Responsive layout */}
        <div className="flex items-center gap-3 md:flex-col md:items-center md:text-center">
          
          {/* Icon */}
          <div className="p-3 rounded-lg md:p-4">
            <Icon className="w-6 h-6 md:w-10 md:h-10 text-blue-600" />
          </div>

          {/* Title */}
          <h3 className="font-medium md:font-semibold text-gray-900 text-xs md:text-lg">
            {item.title}
          </h3>

        </div>
      </div>
    );
      })}
    </div>
  </section>  
)}

export default Edge