import Link from 'next/link'
import { ArrowRight, BookOpen, CalendarDays, Calculator, HeartHandshake, MoonStar, Sparkles, Telescope } from 'lucide-react'
import { DailyHoroscopeSlider } from './DailyHoroscopeSlider'

const REPORTS = [
  { title: 'Kundli Matching', description: 'Understand what traditional chart matching considers, with a guide to its limits.', icon: HeartHandshake, href: '/blog/kundali-matching-beyond-guna-milan', action: 'Read the guide' },
  { title: 'Free Kundali', description: 'Ask about a Kundali overview. Automated chart generation is not available yet.', icon: Telescope, href: '/tools', action: 'See how to request' },
  { title: 'Free Horoscope', description: 'Read today’s general reflections for all 12 zodiac signs above.', icon: MoonStar, href: '/tools', action: 'Explore reflections' },
  { title: 'Aaj Ka Shubh Muhurat', description: 'Ask about traditional auspicious timing. No live calculation is shown here.', icon: Sparkles, href: '/contact', action: 'Ask a question' },
  { title: 'Aaj Ka Panchang', description: 'Panchang values depend on date, location, and calculation method; ask us about a reading.', icon: CalendarDays, href: '/contact', action: 'Contact TrueVedik' },
  { title: 'Monthly Panchang', description: 'Get in touch to discuss a monthly Panchang question and the details required.', icon: BookOpen, href: '/contact', action: 'Get in touch' },
  { title: 'Numerology Report', description: 'Ask about numerology as a traditional reflection practice, without promises of an outcome.', icon: Calculator, href: '/consultation', action: 'Explore consultation' },
] as const

const INK = '#1E1208'
const GOLD = '#B8904B'
const MUTED = '#655A4A'

export function FreeToolsSection() {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  const year = Number(parts.find((part) => part.type === 'year')?.value)
  const month = Number(parts.find((part) => part.type === 'month')?.value)
  const day = Number(parts.find((part) => part.type === 'day')?.value)
  const indiaDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
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

        <DailyHoroscopeSlider dateLabel={today} dateTime={indiaDate} />

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
