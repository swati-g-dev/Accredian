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
        <div className="flex justify-center">
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
            Specialized Programs 
            <span className="text-blue-600">Designed to Fuel Innovation</span>
          </p>
        </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="border p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold">Feature {i}</h3>
            <p className="text-gray-600 mt-2">Details about program</p>
          </div>
        ))}
      </div>
    </section>  )
}

export default Edge