'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/public/images/new.webp'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top bar */}
        <div className='hidden md:flex items-center justify-between py-2 border-b border-gray-200 text-sm'>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-2'>
              <Phone className='h-4 w-4 text-blue-500' />
              <span className='text-muted-foreground'>+27 12 345 6789</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4 text-blue-500' />
              <span className='text-muted-foreground'>
                info@dideeholdings.co.za
              </span>
            </div>
          </div>
          <div className='text-muted-foreground'>
            Pretoria & Springbok Offices
          </div>
        </div>

        {/* Main navigation */}
        <div className='flex items-center justify-between py-4'>
          <div className='flex items-center space-x-2'>
            <Link href='/'>
              <Image
                src={Logo}
                width={120}
                height={120}
                priority
                alt='Logo'
                className='object-cover h-full w-full'
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-foreground hover:text-primary transition-colors duration-200 font-medium'
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className='hidden md:flex items-center space-x-4'>
            <Link
              href='/contact'
              className='bg-white border border-black hover:bg-blue-500 text-black hover:border-transparent hover:text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out'
            >
              Get Quote
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 border-b border-gray-200'>
            <nav className='flex flex-col space-y-4 pt-4'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-foreground hover:text-primary transition-colors duration-200 font-medium'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className='flex flex-col space-y-2 pt-4'>
                <Link
                  href='/contact'
                  className='bg-white border border-black hover:bg-blue-500 text-black hover:border-transparent hover:text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out text-center'
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
