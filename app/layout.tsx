import type { Metadata } from 'next'
import { Cormorant_Garamond, Geist } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ModalProvider } from '@/components/modal/ModalProvider'
import { rootJsonLd } from '@/lib/seo/metadata'
import { absoluteSiteUrl, SITE_URL } from '@/lib/constants/site'
import { CookieConsent } from '@/components/privacy/CookieConsent'

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TrueVedik — Vedic Astrology & Life Guidance | Acharya Ved Prakash',
    template: '%s | TrueVedik',
  },
  description:
    'Book a personal Vedic astrology consultation with Acharya Ved Prakash. Get clear guidance on birth charts, relationships, career, traditional remedies, gemstones, and Vastu.',
  alternates: { canonical: '/' },
  keywords: [
    'Acharya Ved Prakash',
    'Vedic astrology consultation',
    'Janam Kundali reading',
    'Kundali Milan matching',
    'marriage astrology guidance',
    'career astrology predictions',
    'Vedic Puja remedies',
    'Vedic gemstones',
    'Rudraksha beads',
    'Vastu Shastra consultation',
    'NRI astrology consultation',
    'online astrologer India UAE USA UK Canada Australia',
  ],
  authors: [{ name: 'Acharya Ved Prakash' }],
  creator: 'TrueVedik',
  publisher: 'TrueVedik',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/truevedik-golden-lotus-logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'TrueVedik',
    locale: 'en_US',
    title: 'TrueVedik | Vedic Astrology Consultations with Acharya Ved Prakash',
    description: 'Clear, personal guidance for questions about career, relationships, family, and home.',
    url: absoluteSiteUrl('/'),
    images: [
      {
        url: absoluteSiteUrl('/Astrologer in a Warm Study.png'),
        alt: 'Acharya Ved Prakash in his study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueVedik | Vedic Astrology Consultations',
    description: 'Clear, personal guidance from Acharya Ved Prakash.',
    images: [absoluteSiteUrl('/Astrologer in a Warm Study.png')],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif' }}>
        <ModalProvider>
          <Navigation />
          <div id="main-content">{children}</div>
          <Footer />
          <CookieConsent />
        </ModalProvider>
      </body>
    </html>
  )
}
