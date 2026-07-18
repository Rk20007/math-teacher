import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { LocalBusinessSchema, OrganizationSchema } from '@/components/common/schema'
import { FloatingContacts } from '@/components/common/floating-contacts'
import { generateMetadata } from '@/lib/seo'
import './globals.css'

const seo = generateMetadata('Anil Kataria | Senior Mathematics Specialist', 'Expert Maths Tutor in Dubai', '/')

export const metadata: Metadata = {
  ...seo,
  metadataBase: new URL('https://anilkataria.com'),
  canonical: 'https://anilkataria.com',
  keywords: [
    'Maths Tutor Dubai',
    'Mathematics Tutor Dubai',
    'IB Maths Tutor Dubai',
    'IGCSE Maths Tutor Dubai',
    'A-Level Maths Tutor Dubai',
    'CBSE Maths Tutor Dubai',
    'IB mathematics tutor',
    'MOHRE licensed maths teacher',
    'private maths tutor Sharjah',
  ],
  authors: [{ name: 'Anil Kataria', url: 'https://anilkataria.com/about' }],
  publisher: 'Anil Kataria',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <LocalBusinessSchema />
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <FloatingContacts />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
