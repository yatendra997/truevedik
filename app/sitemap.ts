import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog/posts'
import { absoluteSiteUrl } from '@/lib/constants/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/tools', priority: 0.75, changeFrequency: 'daily' as const },
    { path: '/hi', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/consultation', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/kundali-reading', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/puja-remedies', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/gemstones', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/vastu-consultation', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/refund-cancellation', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return [
    ...routes.map(({ path, priority, changeFrequency }) => ({
      url: absoluteSiteUrl(path),
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: absoluteSiteUrl(`/blog/${post.slug}`),
      lastModified: new Date(`${post.publishedAt}T00:00:00`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
