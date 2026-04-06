import type { Metadata } from 'next'
import Head from 'next/head'
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
return (
    <html lang="en">
      <Head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="wnb5XBO4SNxIkYnPMzO+OA"
          async
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
