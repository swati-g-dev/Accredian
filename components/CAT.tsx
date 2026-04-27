import React from 'react'

const CAT = () => {
  return (
    <section id='cat' className="px-8 py-20">
    <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Our Proven Approach to{" "}
          <span className="text-blue-600">Learning Excellence</span>
        </p>
    </div>

    {/* different image for different screen width */}
    <div className="flex justify-center mb-20">

      <img
        src="cat.png" 
        alt="CAT"
        className="block w-full max-w-sm"
      />
    </div> 
    </section>
  )
}

export default CAT