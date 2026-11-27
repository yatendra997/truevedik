import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CTAButton } from '@/components/ui/CTAButton'
import { BLOG_POSTS } from '@/lib/blog/posts'
import { absoluteSiteUrl } from '@/lib/constants/site'
import { SIGNS } from '@/lib/horoscope'
import { HINDI_BLOG_POSTS, HINDI_PAGES, type HindiPageContent, type HindiSection } from '@/lib/i18n/hindi-content'

const HINDI_PATHS = [
  ...Object.keys(HINDI_PAGES),
  '/blog',
  ...HINDI_BLOG_POSTS.map((post) => `/blog/${post.slug}`),
  ...SIGNS.map((sign) => `/horoscope/${sign.en.toLowerCase()}`),
]

export const dynamicParams = false

export function generateStaticParams() {
  return HINDI_PATHS.map((path) => ({ segments: path.split('/').filter(Boolean) }))
}

function getHindiTitle(path: string) {
  if (path === '/blog') return 'ज्योतिष और वास्तु पर मार्गदर्शिकाएँ'
  const blog = HINDI_BLOG_POSTS.find((post) => path === `/blog/${post.slug}`)
  if (blog) return blog.title
  const sign = path.startsWith('/horoscope/')
    ? SIGNS.find((item) => item.en.toLowerCase() === path.split('/')[2])
    : undefined
  if (sign) return `${sign.hi} राशि का दैनिक राशिफल`
  return HINDI_PAGES[path]?.title
}

export async function generateMetadata({ params }: { params: Promise<{ segments: string[] }> }): Promise<Metadata> {
  const { segments } = await params
  const path = `/${segments.join('/')}`
  const blog = HINDI_BLOG_POSTS.find((post) => path === `/blog/${post.slug}`)
  const page = HINDI_PAGES[path]
  const title = getHindiTitle(path)
  if (!title) return {}
  return {
    title,
    description: blog?.description ?? page?.description ?? 'TrueVedik पर वैदिक ज्योतिष और जीवन से जुड़े प्रश्नों के लिए सरल जानकारी।',
    alternates: { canonical: absoluteSiteUrl(`/hi${path}`) },
  }
}

function SectionList({ sections }: { sections: HindiSection[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {sections.map((section) => (
        <section key={section.heading} className="rounded-2xl border border-[#B8860B]/15 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#2A1D12] sm:text-2xl" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>{section.heading}</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[#5A4A36] sm:text-base">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
      ))}
    </div>
  )
}

function PageHero({ page }: { page: HindiPageContent }) {
  return (
    <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12" style={{ background: '#F5F0E6', padding: 'clamp(3rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem)' }}>
      <div className={page.image ? 'lg:col-span-7' : 'mx-auto w-full max-w-4xl'}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#805900]">TrueVedik · {page.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-medium leading-tight text-[#20160F] sm:text-5xl" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>{page.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#514536]">{page.description}</p>
        {page.ctaLabel && page.ctaHref && (
          <div className="mt-7">
            {page.ctaHref === '#consultation-form'
              ? <CTAButton label={page.ctaLabel} size="lg" />
              : <Link href={page.ctaHref} className="inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: '#9A4B0A', textDecoration: 'none' }}>{page.ctaLabel}</Link>}
          </div>
        )}
      </div>
      {page.image && (
        <div className="relative mx-auto h-64 w-full overflow-hidden rounded-2xl border border-[#B8860B]/20 shadow-lg sm:h-80 lg:col-span-5 lg:h-[25rem]">
          <Image src={page.image} alt={page.imageAlt ?? ''} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
        </div>
      )}
    </section>
  )
}

function HindiBlogIndex() {
  return (
    <main lang="hi" className="min-h-screen bg-[#FFFDF8] text-[#1E1208]">
      <section className="bg-[#F5F0E6] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#805900]">TrueVedik · पठन सामग्री</p>
          <h1 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>ज्योतिष और वास्तु पर मार्गदर्शिकाएँ</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#514536]">कुंडली, रिश्तों, काम, पूजा, रत्न और घर से जुड़े विषयों पर सरल जानकारी पढ़ें।</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {HINDI_BLOG_POSTS.map((post) => {
          const source = BLOG_POSTS.find((item) => item.slug === post.slug)
          if (!source) return null
          return (
            <article key={post.slug} className="overflow-hidden rounded-xl border border-[#B8860B]/15 bg-white">
              <Link href={`/hi/blog/${post.slug}`} className="block text-inherit no-underline">
                <div className="relative h-48">
                  <Image src={source.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-medium leading-snug text-[#20160F]" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#5A4A36]">{post.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#805900]">लेख पढ़ें →</span>
                </div>
              </Link>
            </article>
          )
        })}
      </section>
    </main>
  )
}

function HindiBlogArticle({ slug }: { slug: string }) {
  const post = HINDI_BLOG_POSTS.find((item) => item.slug === slug)
  const source = BLOG_POSTS.find((item) => item.slug === slug)
  if (!post || !source) notFound()
  return (
    <main lang="hi" className="min-h-screen bg-[#FFFDF8] px-6 py-12 text-[#1E1208] sm:px-10">
      <article className="mx-auto max-w-4xl">
        <Link href="/hi/blog" className="text-sm font-semibold text-[#805900]">← सभी लेख</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#805900]">TrueVedik · मार्गदर्शिका</p>
        <h1 className="mt-3 text-4xl font-medium leading-tight sm:text-5xl" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>{post.title}</h1>
        <p className="mt-5 text-base leading-8 text-[#514536]">{post.description}</p>
        <div className="relative mt-8 h-64 overflow-hidden rounded-2xl sm:h-[26rem]">
          <Image src={source.image} alt={post.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 900px" className="object-cover" />
        </div>
        <div className="mt-8 space-y-7">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>{section.heading}</h2>
              <div className="mt-3 space-y-3 text-base leading-8 text-[#514536]">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-[#F5F0E6] p-6 sm:p-8">
          <p className="text-base leading-7 text-[#514536]">ज्योतिष एक पारंपरिक आस्था-अभ्यास है और किसी परिणाम की गारंटी नहीं देता। महत्वपूर्ण स्वास्थ्य, कानूनी या वित्तीय फैसलों के लिए योग्य पेशेवर की सलाह लें।</p>
          <Link href="/hi/consultation" className="mt-5 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: '#9A4B0A', textDecoration: 'none' }}>परामर्श के बारे में जानें</Link>
        </div>
      </article>
    </main>
  )
}

function HindiHoroscopePage({ slug }: { slug: string }) {
  const sign = SIGNS.find((item) => item.en.toLowerCase() === slug)
  if (!sign) notFound()
  return (
    <main lang="hi" className="min-h-screen bg-[#FFFDF8] px-6 py-16 text-[#1E1208] sm:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#805900]">TrueVedik · दैनिक राशिफल</p>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>{sign.hi} राशि</h1>
        <p className="mt-5 text-base leading-8 text-[#514536]">आज के संकेत को आत्मचिंतन के लिए सामान्य जानकारी की तरह पढ़ें। यह व्यक्तिगत कुंडली-पठन, निश्चित भविष्यवाणी या पेशेवर सलाह नहीं है।</p>
        <section className="mt-8 rounded-2xl border border-[#B8860B]/15 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>आज अपने प्रश्न पर विचार करें</h2>
          <p className="mt-3 text-base leading-8 text-[#514536]">कोई महत्वपूर्ण निर्णय लेने से पहले उपलब्ध तथ्य, अपनी परिस्थिति और भरोसेमंद लोगों की राय पर ध्यान दें। स्वास्थ्य, कानून, सुरक्षा और धन से जुड़े मामलों में योग्य पेशेवर से सलाह लें।</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>अन्य राशियाँ</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {SIGNS.map((item) => <Link key={item.en} href={`/hi/horoscope/${item.en.toLowerCase()}`} className="rounded-xl border border-[#B8860B]/15 bg-white p-4 text-center font-medium text-[#62470B]">{item.hi}</Link>)}
          </div>
        </section>
      </div>
    </main>
  )
}

export default async function HindiContentPage({ params }: { params: Promise<{ segments: string[] }> }) {
  const { segments } = await params
  const path = `/${segments.join('/')}`
  if (path === '/blog') return <HindiBlogIndex />
  if (path.startsWith('/blog/')) return <HindiBlogArticle slug={segments[1]} />
  if (path.startsWith('/horoscope/')) return <HindiHoroscopePage slug={segments[1]} />
  const page = HINDI_PAGES[path]
  if (!page) notFound()

  return (
    <main lang="hi" className="min-h-screen bg-[#FFFDF8] pb-16 text-[#1E1208]">
      <PageHero page={page} />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionList sections={page.sections} />
      </div>
    </main>
  )
}
