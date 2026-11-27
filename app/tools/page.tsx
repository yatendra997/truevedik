import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/StructuredData'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Daily Astrology Reflections & Guides',
  description: 'Read general daily zodiac reflection prompts and learn about Vedic astrology. These prompts are not personal predictions or professional advice.',
  alternates: { canonical: absoluteSiteUrl('/tools') },
}

const SIGNS: readonly [string, string, readonly string[]][] = [
  ['Aries', 'Aries', ['Pause before you respond today. A short break may help you see another option.', 'Put your energy toward one useful task, then give yourself a moment to reset.', 'Notice when it helps to ask for support instead of doing everything alone.']],
  ['Taurus', 'Taurus', ['Notice which routine feels steady and which one could use a small change.', 'Take time to enjoy something simple before moving on to the next task.', 'Check your plans and choose one small step that feels manageable.']],
  ['Gemini', 'Gemini', ['Make room for a useful conversation. Ask one clear question and listen to the answer.', 'Write down the main point before sharing a new idea.', 'A little quiet may help you sort through several things competing for your attention.']],
  ['Cancer', 'Cancer', ['Check in with your own needs before taking on another task for someone else.', 'A kind conversation may begin with saying plainly what would help.', 'Give yourself permission to pause before saying yes to a new request.']],
  ['Leo', 'Leo', ['Choose one thing you would like to finish and give it your attention.', 'Share an idea with care and leave room to hear another view.', 'Notice a small effort you have made, even if the larger goal is still ahead.']],
  ['Virgo', 'Virgo', ['A simple plan can help. Leave a little space in it for something unexpected.', 'Check the details that matter and let the rest wait for now.', 'Ask whether a good enough next step is more useful than a perfect plan.']],
  ['Libra', 'Libra', ['Consider what a fair next step looks like for everyone involved, including you.', 'Take time to weigh the options without rushing yourself into an answer.', 'A clear boundary can make a conversation easier for everyone.']],
  ['Scorpio', 'Scorpio', ['You do not need to solve everything at once. Focus on what you can check today.', 'Take a moment to notice what is known and what still needs a conversation.', 'Choose a calm next step instead of reacting to a guess.']],
  ['Sagittarius', 'Sagittarius', ['Stay curious, but check the details before committing to a new plan.', 'Give yourself time to learn more before choosing a direction.', 'A practical detail can help turn a broad idea into a useful plan.']],
  ['Capricorn', 'Capricorn', ['Notice progress you have made, even if the longer goal is still taking shape.', 'Break a large task into a first step you can finish today.', 'Make room for rest as well as responsibility.']],
  ['Aquarius', 'Aquarius', ['An idea may improve when you share it with someone you trust.', 'Consider a different approach, then check whether it fits your real needs.', 'A thoughtful question can help a group move forward together.']],
  ['Pisces', 'Pisces', ['Take a quiet moment to separate what you know from what you are still guessing.', 'A little time away from a busy day can help you feel more settled.', 'Be kind to yourself while you decide what deserves your attention.']],
] as const

export default function ToolsPage() {
  const today = new Intl.DateTimeFormat('en-IN', { dateStyle: 'long', timeZone: 'Asia/Kolkata' }).format(new Date())
  const now = new Date()
  const dayOfYear = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(now.getFullYear(), 0, 0)) / 86_400_000)

  return (
    <main style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Free Tools', path: '/tools' }]} />
      <header style={{ background: '#F5F0E6', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <p style={{ color: '#805900', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase' }}>Explore at your own pace</p>
          <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, marginTop: '.6rem' }}>Daily zodiac reflections and guides</h1>
          <p style={{ maxWidth: 680, color: '#514536', lineHeight: 1.8, marginTop: '.8rem' }}>Use these general prompts for reflection. They do not predict a certain event or replace advice from a qualified professional.</p>
        </div>
      </header>

      <section aria-labelledby="daily-horoscope" className="mx-auto" style={{ maxWidth: 1120, padding: '3.5rem 1.5rem' }}>
        <div className="mb-7">
          <p style={{ color: '#805900', fontSize: '.7rem', letterSpacing: '.13em', textTransform: 'uppercase' }}>{today}</p>
          <h2 id="daily-horoscope" style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '2.4rem', fontWeight: 500, marginTop: '.25rem' }}>Daily zodiac reflections</h2>
          <p className="mt-2 max-w-2xl" style={{ color: '#514536', lineHeight: 1.75 }}>A gentle prompt for each sun sign. These short notes are general and not a personal birth chart reading.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SIGNS.map(([name, sign, prompts]) => <article key={name} className="rounded-xl p-5" style={{ background: '#FFFFFF', border: '1px solid rgba(30,18,8,.1)' }}>
            <h3 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '1.45rem', fontWeight: 500 }}>{name}</h3>
            <p className="mt-2 text-sm" style={{ color: '#514536', lineHeight: 1.7 }}>{prompts[dayOfYear % prompts.length]}</p>
            <span className="mt-3 inline-flex rounded-full px-2.5 py-1 text-xs" style={{ color: '#62470B', background: '#F7F0E1' }}>{sign} sun sign</span>
          </article>)}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Are the daily sign prompts personal predictions?', acceptedAnswer: { '@type': 'Answer', text: 'No. They are general reflection prompts and are not a personal reading or a guaranteed forecast.' } }, { '@type': 'Question', name: 'Can I generate a Kundali on this site?', acceptedAnswer: { '@type': 'Answer', text: 'Automated birth chart generation is not currently available. A personal Kundali reading is a consultation, and availability is confirmed separately.' } }] }).replace(/</g, '\u003c') }} />
    </main>
  )
}
