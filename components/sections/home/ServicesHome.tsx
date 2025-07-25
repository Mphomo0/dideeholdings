import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Building2, Truck, Shield } from 'lucide-react'

export default function ServicesHome() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='flex justify-center items-center mb-4'>
            <div className='w-12 h-1 bg-blue-600 mr-4'></div>
            <span className='text-blue-600 font-bold text-sm tracking-wider uppercase'>
              Our Services
            </span>
            <div className='w-12 h-1 bg-blue-600 ml-4'></div>
          </div>
          <h2 className='text-5xl font-black text-gray-900 mb-4 leading-tight'>
            CONSTRUCTION SERVICES
          </h2>
          <p className='text-gray-700 text-lg max-w-3xl mx-auto font-medium'>
            From foundation to finish, we provide comprehensive construction
            services with unmatched quality and expertise.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card className='bg-gray-50 border border-gray-200 text-center p-8 hover:shadow-xl transition-color duration-300 hover:border-blue-600 group'>
            <CardContent className='pt-6'>
              <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors'>
                <Building2 className='h-10 w-10 text-blue-600 group-hover:text-white' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900'>
                Commercial Construction
              </h3>
              <p className='text-gray-600 font-medium'>
                Large-scale commercial projects including office buildings,
                retail spaces, and industrial facilities.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-gray-50 border border-gray-200 text-center p-8 hover:shadow-xl transition-color duration-300 hover:border-blue-600 group'>
            <CardContent className='pt-6'>
              <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors'>
                <Truck className='h-10 w-10 text-blue-600 group-hover:text-white' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900'>
                Residential Projects
              </h3>
              <p className='text-gray-600 font-medium'>
                Quality Residential construction from single homes to large
                housing developments.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-gray-50 border border-gray-200 text-center p-8 hover:shadow-xl transition-color duration-300 hover:border-blue-600 group'>
            <CardContent className='pt-6'>
              <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors'>
                <Shield className='h-10 w-10 text-blue-600 group-hover:text-white' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900'>
                Industrial Construction
              </h3>
              <p className='text-gray-600 font-medium'>
                Specialized industrial facilities designed for manufacturing and
                production needs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='text-center mt-12'>
          <Button
            asChild
            size='lg'
            className='w-full md:w-2/8 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-6'
          >
            <Link href='/services'>VIEW ALL SERVICES</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
