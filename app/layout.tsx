import type { Metadata } from 'next'
import { Lora, Manrope } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ModalProvider } from '@/components/modal/ModalProvider'
import { rootJsonLd } from '@/lib/seo/metadata'
import { absoluteSiteUrl, SITE_URL } from '@/lib/constants/site'
import { CookieConsent } from '@/components/privacy/CookieConsent'

const lora = Lora({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-body',
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
  alternates: { canonical: '/', languages: { en: '/', hi: '/hi' } },
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
    icon: '/truevedik-golden-lotus-logo.webp',
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
        url: absoluteSiteUrl('/acharya-ved-prakash-study.webp'),
        alt: 'Acharya Ved Prakash in his study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueVedik | Vedic Astrology Consultations',
    description: 'Clear, personal guidance from Acharya Ved Prakash.',
    images: [absoluteSiteUrl('/acharya-ved-prakash-study.webp')],
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
      className={`${lora.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
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
