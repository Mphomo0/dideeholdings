import { Card, CardContent } from '@/components/ui/card'
import { Award, Shield, Target, Users } from 'lucide-react'

export default function OurValues() {
  return (
    <section className='py-20 bg-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Our Core Values
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            These values guide everything we do and shape our approach to every
            project we undertake.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <Card className='bg-white text-center border border-gray-200 p-8 hover:shadow-xl transition-color duration-300 hover:border-blue-600'>
            <CardContent className='pt-6'>
              <Shield className='h-16 w-16 text-blue-600 mx-auto mb-6' />
              <h3 className='text-2xl font-semibold mb-4'>Safety First</h3>
              <p className='text-gray-600 leading-relaxed'>
                We prioritize the safety of our workers, clients, and
                communities in every project we undertake.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-white text-center border border-gray-200 p-8 hover:shadow-xl transition-color duration-300 hover:border-blue-600'>
            <CardContent className='pt-6'>
              <Award className='h-16 w-16 text-blue-600 mx-auto mb-6' />
              <h3 className='text-2xl font-semibold mb-4'>
                Quality Excellence
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                We deliver superior quality in every aspect of our work,
                exceeding industry standards.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-white text-center border border-gray-200 p-8 hover:shadow-xl transition-color duration-300 hover:border-blue-600'>
            <CardContent className='pt-6'>
              <Target className='h-16 w-16 text-blue-600 mx-auto mb-6' />
              <h3 className='text-2xl font-semibold mb-4'>Reliability</h3>
              <p className='text-gray-600 leading-relaxed'>
                Our clients can count on us to deliver projects on time and
                within budget, every time.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-white text-center border border-gray-200 p-8 hover:shadow-xl transition-color duration-300 hover:border-blue-600'>
            <CardContent className='pt-6'>
              <Users className='h-16 w-16 text-blue-600 mx-auto mb-6' />
              <h3 className='text-2xl font-semibold mb-4'>Partnership</h3>
              <p className='text-gray-600 leading-relaxed'>
                We build lasting relationships with our clients, treating every
                project as a true partnership.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
