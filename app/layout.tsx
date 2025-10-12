import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import GoogleAnalytics from '@/components/global/GoogleAnalytics'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Didee Holdings - We Build Your Future',
  description:
    'Professional construction services wit a focus to safety, quality, and realiability. Serving Centurion and Northern Cape since 2018',
  other: {
    'google-site-verification': 'NGImAA3SJhPN6t7BHUfUXiGjsA-olnCds9ZhWXkMXY',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
