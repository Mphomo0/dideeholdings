import { MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo_white.png"
                alt="Logo"
                width={150}
                height={150}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Building dreams with dedication, expertise, and unwavering
              commitment to excellence since 2018.
            </p>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bg-white rounded-full text-blue-800 p-2 border border-gray-300"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-white hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-white font-medium">
                <Link href="/services">Commercial Construction</Link>
              </li>

              <li className="text-white font-medium">
                <Link href="/services">Industrial Buildings</Link>
              </li>

              <li className="text-white font-medium">
                <Link href="/services">Project Management</Link>
              </li>

              <li className="text-white font-medium">
                <Link href="/services">Safety Management</Link>
              </li>

              <li className="text-white font-medium">
                <Link href="/services">Construction Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-white mt-1 mr-3 flex-shrink-0" />
                <div className="text-white text-sm">
                  472 Rooibos Street
                  <br />
                  Centurion, 0158
                  <br />
                  Pretoria, Gauteng
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white text-sm">061 426 2909</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white text-sm">
                  stopper@dideeholdings.co.za
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Didee Holdings Pty Ltd. All rights
            reserved. Developed by{' '}
            <a
              href="https://nostalgic-studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Nostalgic Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
