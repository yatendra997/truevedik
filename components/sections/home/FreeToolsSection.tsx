import Link from 'next/link'
import { ArrowRight, BookOpen, CalendarDays, Calculator, HeartHandshake, MoonStar, Sparkles, Telescope } from 'lucide-react'

const SIGNS = [
  { en: 'Aries', hi: 'मेष', glyph: '♈', prompts: ['Choose one priority and give it your attention before adding something new.', 'Pause before responding; a little time may help you see another option.'] },
  { en: 'Taurus', hi: 'वृषभ', glyph: '♉', prompts: ['Take one steady step toward a practical task and leave time for rest.', 'Notice which routine is helping and which one may need a small change.'] },
  { en: 'Gemini', hi: 'मिथुन', glyph: '♊', prompts: ['Ask one clear question in a conversation and make room to hear the answer.', 'Write down your main idea before sharing it with others.'] },
  { en: 'Cancer', hi: 'कर्क', glyph: '♋', prompts: ['Check in with your own needs before taking on another task for someone else.', 'A kind, direct conversation may make your expectations clearer.'] },
  { en: 'Leo', hi: 'सिंह', glyph: '♌', prompts: ['Focus on one thing you would like to complete today.', 'Share an idea with confidence and leave room for another point of view.'] },
  { en: 'Virgo', hi: 'कन्या', glyph: '♍', prompts: ['A short list can help you decide what needs attention first.', 'Check the important details, then allow yourself to let smaller things wait.'] },
  { en: 'Libra', hi: 'तुला', glyph: '♎', prompts: ['Consider a fair next step for everyone involved, including you.', 'Take a moment to weigh your options without rushing toward an answer.'] },
  { en: 'Scorpio', hi: 'वृश्चिक', glyph: '♏', prompts: ['Focus on what you know and take one manageable step from there.', 'Ask a question before acting on an assumption.'] },
  { en: 'Sagittarius', hi: 'धनु', glyph: '♐', prompts: ['Stay curious and check the practical details before committing to a new plan.', 'Turn a broad idea into one small action you can try.'] },
  { en: 'Capricorn', hi: 'मकर', glyph: '♑', prompts: ['Break a longer task into one step you can finish and review today.', 'Notice the progress you have made, even if the larger goal is still ahead.'] },
  { en: 'Aquarius', hi: 'कुंभ', glyph: '♒', prompts: ['A different approach may help; share it and invite practical feedback.', 'A thoughtful question may help a group move forward together.'] },
  { en: 'Pisces', hi: 'मीन', glyph: '♓', prompts: ['Separate what you know from what you are still working out.', 'A quiet moment may help you notice what deserves your attention today.'] },
] as const

const REPORTS = [
  { title: 'Kundli Matching', description: 'Understand what traditional chart matching considers, with a guide to its limits.', icon: HeartHandshake, href: '/blog/kundali-matching-beyond-guna-milan', action: 'Read the guide' },
  { title: 'Free Kundali', description: 'Ask about a Kundali overview. Automated chart generation is not available yet.', icon: Telescope, href: '/tools', action: 'See how to request' },
  { title: 'Free Horoscope', description: 'Read today’s general reflections for all 12 zodiac signs above.', icon: MoonStar, href: '/tools', action: 'Explore reflections' },
  { title: 'Aaj Ka Shubh Muhurat', description: 'Ask about traditional auspicious timing. No live calculation is shown here.', icon: Sparkles, href: '/contact', action: 'Ask a question' },
  { title: 'Aaj Ka Panchang', description: 'Panchang values depend on date, location, and calculation method; ask us about a reading.', icon: CalendarDays, href: '/contact', action: 'Contact TrueVedik' },
  { title: 'Monthly Panchang', description: 'Get in touch to discuss a monthly Panchang question and the details required.', icon: BookOpen, href: '/contact', action: 'Get in touch' },
  { title: 'Numerology Report', description: 'Ask about numerology as a traditional reflection practice, without promises of an outcome.', icon: Calculator, href: '/consultation', action: 'Explore consultation' },
] as const

const INK = '#221334'
const PURPLE = '#302044'
const GOLD = '#B8904B'
const MUTED = '#655C6D'

export function FreeToolsSection() {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  const year = Number(parts.find((part) => part.type === 'year')?.value)
  const month = Number(parts.find((part) => part.type === 'month')?.value)
  const day = Number(parts.find((part) => part.type === 'day')?.value)
  const indiaDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  const dayOfYear = Math.floor((Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 0)) / 86_400_000)
  const today = new Intl.DateTimeFormat('en-IN', { dateStyle: 'full', timeZone: 'Asia/Kolkata' }).format(now)

  return (
    <section aria-labelledby="free-tools-title" className="scroll-mt-20" style={{ background: '#F3EFE7', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1320 }}>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em]" style={{ color: '#826331' }}>Explore at your own pace</p>
            <h2 id="free-tools-title" className="mt-3" style={{ color: INK, fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4.4vw, 3.1rem)', fontWeight: 500, lineHeight: 1.12 }}>Free astrology tools &amp; reports</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7" style={{ color: MUTED }}>Start with today’s horoscope, then explore guides and consultation options.</p>
          </div>
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2" style={{ color: '#70501D' }}>View all tools <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>

        <div className="overflow-hidden rounded-2xl" style={{ background: PURPLE, border: '1px solid rgba(226,196,127,.28)' }}>
          <div className="flex flex-wrap items-end justify-between gap-3 px-5 py-5 sm:px-7 sm:py-6">
            <div><p className="text-xs font-semibold uppercase tracking-[.15em]" style={{ color: '#E2C47F' }}>Daily horoscope</p><h3 className="mt-1 text-2xl font-semibold" style={{ color: '#FFF9ED' }}>Your sign for today</h3></div>
            <time className="text-sm" dateTime={indiaDate} style={{ color: '#E8E0ED' }}>{today}</time>
          </div>
          <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6" style={{ background: 'rgba(255,255,255,.12)' }}>
            {SIGNS.map((sign) => <article key={sign.en} className="p-4 sm:p-5" style={{ background: '#3A2A4E' }}>
              <div className="flex items-center gap-2"><span aria-hidden="true" className="text-2xl" style={{ color: '#E2C47F' }}>{sign.glyph}</span><div><h4 className="text-sm font-semibold" style={{ color: '#FFF9ED' }}>{sign.en}</h4><p lang="hi" className="text-xs" style={{ color: '#D9C9E3' }}>{sign.hi}</p></div></div>
              <p className="mt-3 text-xs leading-5" style={{ color: '#E8E0ED' }}>{sign.prompts[dayOfYear % sign.prompts.length]}</p>
              <Link href="/tools" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold underline-offset-4 hover:underline focus-visible:outline-2" style={{ color: '#F1D597' }}>Read more <ArrowRight size={13} aria-hidden="true" /></Link>
            </article>)}
          </div>
          <p className="px-5 py-4 text-xs leading-5 sm:px-7" style={{ color: '#D9C9E3' }}>These are general editorial reflections, not live planetary calculations or personal predictions. Astrology is a traditional belief practice and does not replace professional medical, legal, or financial advice.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REPORTS.map((report) => {
            const Icon = report.icon
            return <article key={report.title} className="flex flex-col rounded-xl p-5" style={{ background: '#FFFDF8', border: '1px solid #E7E0D5' }}>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ color: GOLD, background: '#F7F1E5' }}><Icon size={21} aria-hidden="true" /></span>
              <h3 className="mt-3 text-base font-semibold" style={{ color: INK }}>{report.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6" style={{ color: MUTED }}>{report.description}</p>
              <Link href={report.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2" style={{ color: '#70501D' }}>{report.action}<ArrowRight size={15} aria-hidden="true" /></Link>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
