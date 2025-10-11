import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">
                About Our Company
              </span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              BUILDING SOUTH AFRICA&rsquo;S FUTURE
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
              Since 2018, Didee Holdings has been at the forefront of South
              Africa&rsquo;s construction industry. Founded by Stopper and
              Didintle Rantsiapana, we&rsquo;ve grown from a small startup to
              one of the leading black woman-owned construction companies in the
              country.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
              Our team of experienced construction professionals brings decades
              of expertise to every project, ensuring quality workmanship,
              on-time delivery, and complete client satisfaction.
            </p>
            <Button className="w-full md:w-2/5 bg-blue-600 font-bold px-8 p-6 text-white">
              <Link href="/about">LEARN MORE ABOUT US</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-600 rounded-lg"></div>
            <Image
              src="https://ik.imagekit.io/e2pess7p4/Didee/aboutHome.jpg?updatedAt=1760181725716?tr=w-800,h-600,q-80,f-auto"
              alt="Construction professional"
              width={800}
              height={600}
              className="rounded-lg shadow-xl relative z-10"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
