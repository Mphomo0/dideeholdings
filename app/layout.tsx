import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import GoogleAnalytics from '@/components/global/GoogleAnalytics'
import Script from 'next/script'

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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="wnb5XBO4SNxIkYnPMzO+OA"
          strategy="afterInteractive"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
