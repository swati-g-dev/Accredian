import React from 'react'

const Programs = () => {
  return (
<section id="programs" className="px-8 py-20">
      <h2 className="text-3xl font-bold mb-10">Programs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="border p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold">Program {i}</h3>
            <p className="text-gray-600 mt-2">Details about program</p>
          </div>
        ))}
      </div>
    </section>  )
}

export default Programs