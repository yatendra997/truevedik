import type { Metadata } from 'next'
import { absoluteSiteUrl, SITE_URL } from '@/lib/constants/site'

const SITE_NAME = 'TrueVedik'
const DEFAULT_OG_IMAGE = absoluteSiteUrl('/Astrologer in a Warm Study.png')

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
  const canonical = absoluteSiteUrl(path)
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
          alt: `${SITE_NAME} — Vedic Astrology & Life Guidance by Acharya Ved Prakash`,
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
  name: 'TrueVedik — Acharya Ved Prakash',
  description:
    'Vedic astrology consultation, Kundali reading, marriage matching, Puja rituals, gemstones, and Vastu Shastra guidance with Acharya Ved Prakash.',
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  serviceType: ['Vedic astrology consultations', 'Kundali reading', 'Vastu guidance'],
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
  founder: {
    '@type': 'Person',
    name: 'Acharya Ved Prakash',
    jobTitle: 'Vedic astrologer',
  },
  slogan: 'Traditional Vedic guidance in clear, everyday language.',
}
