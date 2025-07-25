import React from 'react'

export default function OurProcess() {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Process</h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            We follow a proven process to ensure every project is delivered on
            time, within budget, and to the highest quality standards.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
              1
            </div>
            <h3 className='text-xl font-semibold mb-2'>Consultation</h3>
            <p className='text-gray-600'>
              We meet with you to understand your vision, requirements, and
              budget.
            </p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
              2
            </div>
            <h3 className='text-xl font-semibold mb-2'>Planning</h3>
            <p className='text-gray-600'>
              Detailed project planning, design development, and timeline
              creation.
            </p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
              3
            </div>
            <h3 className='text-xl font-semibold mb-2'>Execution</h3>
            <p className='text-gray-600'>
              Professional construction execution with regular progress updates.
            </p>
          </div>

          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
              4
            </div>
            <h3 className='text-xl font-semibold mb-2'>Delivery</h3>
            <p className='text-gray-600'>
              Final inspection, handover, and ongoing support for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
