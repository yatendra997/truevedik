import type { Metadata } from 'next'
import { absoluteSiteUrl, SITE_URL } from '@/lib/constants/site'

const SITE_NAME = 'TrueVedik'
const DEFAULT_OG_IMAGE = absoluteSiteUrl('/acharya-ved-prakash-study.webp')

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
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'TrueVedik',
      url: SITE_URL,
      logo: absoluteSiteUrl('/truevedik-golden-lotus-logo.webp'),
      founder: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Acharya Ved Prakash',
      jobTitle: 'Vedic astrologer',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      knowsAbout: ['Vedic astrology', 'Kundali reading', 'Vastu Shastra'],
    },
  ],
}
