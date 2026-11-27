import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/blog/posts'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Vedic Astrology & Vastu Guides',
  description: 'Clear guides to birth charts, relationship compatibility, Vedic astrology, and practical Vastu for your home.',
  alternates: { canonical: absoluteSiteUrl('/blog') },
}

export default function BlogPage() {
  return (
    <main style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <section style={{ padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3rem) 2.5rem', background: '#F5F0E6', borderBottom: '1px solid rgba(184,134,11,0.14)' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <p style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#B8860B', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Astrology &amp; Vastu Guides</p>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, lineHeight: 1.1, maxWidth: '760px' }}>Vedic astrology, explained simply</h1>
          <p style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#6B5B47', fontSize: '0.92rem', lineHeight: 1.8, maxWidth: '620px', marginTop: '1rem' }}>Read clear guides to birth charts, relationships, and thoughtful Vastu planning for your home.</p>
        </div>
      </section>
      <section style={{ padding: '3rem clamp(1.5rem, 4vw, 3rem) var(--space-section)' }}>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: '1200px' }}>
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.14)', borderRadius: '8px' }}>
              <Link href={`/blog/${post.slug}`} className="group block" style={{ textDecoration: 'none' }}>
                <div className="relative h-56 overflow-hidden">
                  <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '0.65rem', color: '#9A8C7E' }}>
                    <span style={{ color: '#B8860B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.category}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '1.65rem', fontWeight: 500, lineHeight: 1.25, color: '#1E1208', margin: '0.85rem 0 0.6rem' }}>{post.title}</h2>
                  <p style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '0.8rem', lineHeight: 1.7, color: '#6B5B47' }}>{post.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4" style={{ color: '#B8860B', fontSize: '0.73rem', fontWeight: 600 }}>Read article <ArrowUpRight size={14} aria-hidden="true" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
