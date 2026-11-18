import type { MetadataRoute } from 'next'
import { SITE_URL, absoluteSiteUrl } from '@/lib/constants/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: absoluteSiteUrl('/sitemap.xml'),
    host: SITE_URL,
  }
}
