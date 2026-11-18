import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS, getBlogPost } from '@/lib/blog/posts'
import { absoluteSiteUrl, SITE_URL } from '@/lib/constants/site'

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: 'Acharya Ved Prakash' }],
    alternates: { canonical: absoluteSiteUrl(`/blog/${post.slug}`) },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      authors: ['Acharya Ved Prakash'],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: absoluteSiteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Person', name: 'Acharya Ved Prakash' },
    publisher: { '@type': 'Organization', name: 'TrueVedik', url: SITE_URL },
    mainEntityOfPage: absoluteSiteUrl(`/blog/${post.slug}`),
  }

  return (
    <main style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <article>
        <header style={{ background: '#F5F0E6', padding: 'clamp(3rem, 7vw, 5.5rem) clamp(1.5rem, 4vw, 3rem) 2.5rem' }}>
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <Link href="/blog" style={{ color: '#8A6A28', fontSize: '0.75rem', textDecoration: 'none' }}>Journal / Articles</Link>
            <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', color: '#B8860B', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '2rem' }}>{post.category}</p>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.3rem, 5.5vw, 3.8rem)', lineHeight: 1.12, fontWeight: 400, marginTop: '0.75rem' }}>{post.title}</h1>
            <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', color: '#6B5B47', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '700px', marginTop: '1rem' }}>{post.description}</p>
            <div className="flex items-center gap-3 mt-5" style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', color: '#827768' }}>
              <span>By Acharya Ved Prakash</span><span aria-hidden="true">·</span><time dateTime={post.publishedAt}>{new Date(`${post.publishedAt}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time><span aria-hidden="true">·</span><span>{post.readingTime}</span>
            </div>
          </div>
        </header>
        <div className="relative mx-auto mt-8 overflow-hidden" style={{ maxWidth: '900px', width: 'calc(100% - 3rem)', aspectRatio: '16 / 8', borderRadius: '8px' }}>
          <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover" sizes="(max-width: 900px) 100vw, 900px" />
        </div>
        <div className="mx-auto" style={{ maxWidth: '740px', padding: '2.5rem 1.5rem var(--space-section)' }}>
          {post.sections.map((section) => (
            <section key={section.heading} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.85rem', fontWeight: 500, lineHeight: 1.25, marginBottom: '0.8rem' }}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.92rem', lineHeight: 1.9, color: '#5A4A36', marginBottom: '1rem' }}>{paragraph}</p>
              ))}
            </section>
          ))}
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.78rem', lineHeight: 1.75, color: '#827768', borderTop: '1px solid rgba(30,18,8,0.1)', paddingTop: '1.25rem' }}>This article is for general educational purposes and reflects traditional perspectives. It is not medical, legal, financial, or other professional advice.</p>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }} />
    </main>
  )
}
