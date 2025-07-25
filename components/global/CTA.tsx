import { Button } from '../ui/button'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className='py-20 bg-blue-600 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-4xl font-bold mb-6'>Ready to Work With Us?</h2>
          <p className='text-xl text-blue-100 mb-8'>
            Let&rsquo;s discuss how we can bring your construction project to
            life with our expertise and dedication.
          </p>
          <Button
            asChild
            size='lg'
            className='bg-white text-blue-600 hover:bg-gray-100 py-6'
          >
            <Link href='/contact'>Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
