import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BreadcrumbJsonLd } from '@/components/seo/StructuredData'
import { absoluteSiteUrl } from '@/lib/constants/site'
import { SIGNS } from '@/lib/horoscope'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Daily Horoscopes & Astrology Guides',
  description: 'Choose your sun sign to read a general daily horoscope, or explore straightforward astrology guides.',
  alternates: { canonical: absoluteSiteUrl('/tools') },
}

export default function ToolsPage() {
  const today = new Intl.DateTimeFormat('en-IN', { dateStyle: 'long', timeZone: 'Asia/Kolkata' }).format(new Date())

  return (
    <main style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Free Tools', path: '/tools' }]} />
      <header style={{ background: '#F5F0E6', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <p style={{ color: '#805900', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase' }}>Explore at your own pace</p>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, marginTop: '.6rem' }}>Daily horoscopes and guides</h1>
          <p style={{ maxWidth: 680, color: '#514536', lineHeight: 1.8, marginTop: '.8rem' }}>Choose a sun sign to read its latest daily horoscope. These broad readings are for reflection and do not replace a personal birth chart reading or advice from a qualified professional.</p>
        </div>
      </header>

      <section aria-labelledby="daily-horoscope" className="mx-auto" style={{ maxWidth: 1120, padding: '3.5rem 1.5rem' }}>
        <div className="mb-7">
          <p style={{ color: '#805900', fontSize: '.7rem', letterSpacing: '.13em', textTransform: 'uppercase' }}>{today}</p>
          <h2 id="daily-horoscope" style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '2.4rem', fontWeight: 500, marginTop: '.25rem' }}>Daily horoscopes by sign</h2>
          <p className="mt-2 max-w-2xl" style={{ color: '#514536', lineHeight: 1.75 }}>Select your sign to read its latest general daily horoscope.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SIGNS.map((sign) => <Link key={sign.en} href={`/horoscope/${sign.en.toLowerCase()}`} className="card-hover rounded-xl p-5" style={{ background: '#FFFFFF', border: '1px solid rgba(30,18,8,.1)', color: '#24160D', textDecoration: 'none' }}>
            <Image src={`/icons/zodiac/${sign.en.toLowerCase()}.svg`} alt="" width={36} height={36} />
            <h3 className="mt-2" style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '1.45rem', fontWeight: 500 }}>{sign.en} <span lang="hi" className="text-base">({sign.hi})</span></h3>
            <span className="mt-3 inline-flex rounded-full px-2.5 py-1 text-xs" style={{ color: '#62470B', background: '#F7F0E1' }}>Read today’s horoscope →</span>
          </Link>)}
        </div>
      </section>

      <section aria-labelledby="personal-reading-title" className="mx-auto" style={{ maxWidth: 1120, padding: '0 1.5rem 5rem' }}>
        <div className="mb-5">
          <h2 id="personal-reading-title" style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '2.2rem', fontWeight: 500 }}>Looking for a personal reading?</h2>
          <p className="mt-2 max-w-2xl text-sm" style={{ color: '#514536', lineHeight: 1.8 }}>These are consultation topics, not automated tools. Ask about the process and available options before you decide.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="rounded-2xl p-7" style={{ background: '#F5F0E6' }}>
          <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '1.9rem', fontWeight: 500 }}>Kundali reading consultation</h3>
          <p className="mt-3 text-sm" style={{ color: '#514536', lineHeight: 1.8 }}>Automated chart calculations are not available on this site. A personal reading is a consultation request; the team will explain availability and terms before you confirm.</p>
          <Link href="/consultation" className="mt-5 inline-flex rounded-md px-5 py-3 text-sm font-semibold" style={{ background: '#9A4B0A', color: '#fff', textDecoration: 'none' }}>See consultation options</Link>
        </article>
        <article className="rounded-2xl p-7" style={{ background: '#231A12', color: '#FFFDF8' }}>
          <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '1.9rem', fontWeight: 500 }}>Panchang and muhurat questions</h3>
          <p className="mt-3 text-sm" style={{ color: '#E3D8C8', lineHeight: 1.8 }}>This site does not yet show verified Panchang or muhurat calculations. Contact us to ask whether we can discuss your question in a consultation.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-md px-5 py-3 text-sm font-semibold" style={{ background: '#B8860B', color: '#fff', textDecoration: 'none' }}>Contact TrueVedik</Link>
        </article>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Are the daily horoscopes personal predictions?', acceptedAnswer: { '@type': 'Answer', text: 'No. They are general sun-sign readings and are not a personal birth chart reading or a guaranteed forecast.' } }, { '@type': 'Question', name: 'Can I generate a Kundali on this site?', acceptedAnswer: { '@type': 'Answer', text: 'Automated birth chart generation is not currently available. A personal Kundali reading is a consultation, and availability is confirmed separately.' } }] }).replace(/</g, '\u003c') }} />
    </main>
  )
}
