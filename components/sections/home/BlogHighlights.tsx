import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/blog/posts'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'

export function BlogHighlights() {
  return (
    <section style={{ background: '#FFFDF8', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        <div className="mb-10">
          <SectionLabel>Latest from TrueVedik</SectionLabel>
          <GoldRule className="mt-3 mb-5" />
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.2 }}>
              Astrology, explained in everyday language
            </h2>
            <Link href="/blog" className="inline-flex items-center gap-1" style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', color: '#B8860B', fontSize: '0.75rem', textDecoration: 'none' }}>
              Browse all guides <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BLOG_POSTS.slice(0, 4).map((post) => (
            <article key={post.slug} className="overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.14)', borderRadius: '8px' }}>
              <Link href={`/blog/${post.slug}`} className="group block" style={{ color: 'inherit', textDecoration: 'none' }}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.75rem' }}>{post.category}</p>
                  <p className="mb-2 text-xs" style={{ color: '#827768' }}>{new Date(`${post.publishedAt}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.45rem', lineHeight: 1.25, fontWeight: 500, color: '#1E1208', marginBottom: '0.65rem' }}>{post.title}</h3>
                  <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.78rem', lineHeight: 1.7, color: '#6B5B47' }}>{post.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4" style={{ color: '#B8860B', fontSize: '0.72rem', fontWeight: 600 }}>
                    Read guide <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
