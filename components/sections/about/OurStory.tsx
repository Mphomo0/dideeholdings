import Image from 'next/image'

export default function OurStory() {
  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>Our Story</h2>
            <p className='text-gray-600 text-lg mb-6 leading-relaxed'>
              The origins of the present Company date back to 2018 when Didee
              Holdings Pty Ltd was formed by Stopper Rantsiapana and Didintle
              Rantsiapana. Today the company is one of the few major black woman
              owned emerging construction companies in South Africa.
            </p>
            <p className='text-gray-600 text-lg mb-6 leading-relaxed'>
              The driving force behind Didee is a core of dedicated, hands-on
              management professionals whose experience spans decades of major
              construction projects across South Africa. We have built our
              reputation on delivering quality construction services while
              maintaining the highest standards of safety and reliability.
            </p>
            <p className='text-gray-600 text-lg mb-8 leading-relaxed'>
              Our commitment to excellence and our client-focused approach has
              enabled us to grow from a small startup to a respected name in the
              South African construction industry.
            </p>
          </div>
          <div className='relative'>
            <Image
              src='/images/aboutPage.jpg'
              alt='Didee Holdings team'
              width={800}
              height={600}
              className='rounded-lg shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
