import type { Metadata } from 'next'
import { Cormorant_Garamond, Geist } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ModalProvider } from '@/components/modal/ModalProvider'
import { rootJsonLd } from '@/lib/seo/metadata'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://truevedic.com'),
  title: {
    default: 'TrueVedic — Authentic Vedic Astrology & Life Guidance | Astrologer Ranjith Kumar',
    template: '%s | TrueVedic',
  },
  description:
    'TrueVedic provides trusted Vedic astrology consultations, Janam Kundali reading, marriage matchmaking, authentic Puja remedies, certified gemstones, and Vastu guidance with Astrologer Ranjith Kumar (20+ years experience). Serving clients across India, UAE, US, New Zealand, Australia, Canada, UK and Europe.',
  keywords: [
    'Astrologer Ranjith Kumar',
    'Vedic astrology consultation',
    'Janam Kundali reading',
    'Kundali Milan matching',
    'marriage astrology guidance',
    'career astrology predictions',
    'Vedic Puja remedies',
    'certified Vedic gemstones',
    'Rudraksha beads',
    'Vastu Shastra consultation',
    'NRI astrology consultation',
    'online astrologer India UAE USA UK Canada Australia',
  ],
  authors: [{ name: 'Astrologer Ranjith Kumar' }],
  creator: 'TrueVedic',
  publisher: 'TrueVedic',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: 'TrueVedic',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueVedic — Vedic Astrology & Life Guidance by Astrologer Ranjith Kumar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif' }}>
        <ModalProvider>
          <Navigation />
          <div id="main-content">{children}</div>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  )
}
