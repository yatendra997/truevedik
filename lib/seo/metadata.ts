import type { Metadata } from 'next'

const SITE_URL = 'https://truevedic.com'
const SITE_NAME = 'TrueVedic'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export interface PageSEO {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
}

export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
}: PageSEO): Metadata {
  const canonical = `${SITE_URL}${path}`
  const resolvedOgTitle = ogTitle ?? title
  const resolvedOgDesc = ogDescription ?? description

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
    },
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Vedic Astrology & Life Guidance by Astrologer Ranjith Kumar`,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export const rootJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TrueVedic — Astrologer Ranjith Kumar',
  description:
    'Authentic Vedic astrology consultation, Kundali reading, marriage matching, Puja rituals, certified gemstones, and Vastu Shastra guidance with Astrologer Ranjith Kumar (20+ years experience).',
  url: SITE_URL,
  serviceType: 'Vedic Astrology Advisory',
  areaServed: [
    'India',
    'UAE',
    'United States',
    'New Zealand',
    'Australia',
    'Canada',
    'United Kingdom',
    'Europe',
  ],
  knowsAbout: [
    'Vedic Astrology',
    'Janam Kundali Reading',
    'Kundali Milan & Matchmaking',
    'Vedic Puja & Anushthan',
    'Vastu Shastra Consultation',
    'Certified Vedic Gemstones',
    'Nepali Rudraksha Beads',
    'Vedic Numerology (Ank Jyotish)',
  ],
  slogan: 'Ancient Vedic Wisdom. Compassionate Guidance.',
  priceRange: '₹₹ / $$',
}
