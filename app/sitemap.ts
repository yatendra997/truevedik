import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truevedic.com'

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/consultation', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/diagnostics', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/pacification', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/installations', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/spatial-harmonic', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
