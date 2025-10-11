'use client'

import { ArrowRight, Award, Users, Clock, Star, Shield } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ik.imagekit.io/e2pess7p4/Didee/hero.jpg?updatedAt=1760181728018?tr=w-1920,h-1080,q-80,f-auto"
          alt="Modern construction site with cranes"
          fill
          sizes="100vw"
          unoptimized
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-60' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 sm:py-36 lg:py-44">
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-xs sm:text-sm font-semibold border border-cyan-400/30 backdrop-blur-md shadow-lg">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden">
                Excellence in Construction Since 2018
              </span>
              <span className="xs:hidden">Est. 2018</span>
            </span>
          </div>

          {/* Main heading - Responsive typography */}
          <div className="mb-6 sm:mb-8">
            <h1 className="font-black leading-tight">
              <span className=" text-white drop-shadow-2xl text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-8xl mb-2 sm:mb-4">
                WE BUILD
              </span>
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                YOUR FUTURE
              </span>
            </h1>
          </div>

          {/* Description - Responsive text sizing */}
          <div className="mb-8 sm:mb-12">
            <p className="text-gray-300 leading-relaxed font-light max-w-4xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-0">
              At{' '}
              <span className="font-semibold text-cyan-400">
                Didee Holdings
              </span>
              , we transform visions into reality through our culture of
              <span className="text-white font-medium">
                {' '}
                safety, quality, and reliability
              </span>
              . Led by dedicated professionals with decades of experience across
              South Africa.
            </p>
          </div>

          {/* Buttons - Responsive layout and sizing */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 justify-center lg:justify-start px-2 sm:px-0">
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5">
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </Link>
            </button>

            <button className="w-full sm:w-auto bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/50 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-md hover:shadow-xl text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5">
              <Link
                href="/projects"
                className="flex items-center justify-center"
              >
                <Shield className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                View Our Projects
              </Link>
            </button>
          </div>

          {/* Stats - Responsive grid and sizing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto lg:mx-0 px-2 sm:px-0">
            {/* Stat 1 */}
            <div className="text-center lg:text-left bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 sm:col-span-1">
              <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  7+
                </span>
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base lg:text-lg mb-1">
                Years of Excellence
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Industry Leading Standards
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center lg:text-left bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 sm:col-span-1">
              <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  100+
                </span>
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base lg:text-lg mb-1">
                Projects Completed
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                On Time & On Budget
              </p>
            </div>

            {/* Stat 3 - Full width on small screens, normal on larger */}
            <div className="text-center lg:text-left bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  24/7
                </span>
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base lg:text-lg mb-1">
                Expert Support
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Always Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
