import Link from 'next/link'
import Image from 'next/image'
import type { DailyHoroscopeResult } from '@/lib/daily-horoscope-api'
import { SIGNS } from '@/lib/horoscope'

type Sign = (typeof SIGNS)[number]

export function HoroscopeReading({ sign, dateLabel, dateTime, reading }: {
  sign: Sign
  dateLabel: string
  dateTime: string
  reading: DailyHoroscopeResult | null
}) {
  const sourceDateLabel = reading
    ? new Intl.DateTimeFormat('en-IN', { dateStyle: 'full', timeZone: 'UTC' }).format(new Date(`${reading.date}T12:00:00Z`))
    : null

  return <>
    <section className="rounded-2xl p-6 sm:p-9" style={{ background: '#F5F0E6', border: '1px solid #E7E0D5' }}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div aria-hidden="true" className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full" style={{ background: '#FFFDF8', border: '1px solid #E6DED0' }}>
          <Image src={`/icons/zodiac/${sign.en.toLowerCase()}.svg`} alt="" width={48} height={48} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.15em]" style={{ color: '#805900' }}>Daily horoscope</p>
          <h1 className="mt-1 text-4xl font-medium sm:text-5xl" style={{ color: '#1E1208', fontFamily: 'var(--font-display), Georgia, serif' }}>{sign.en} <span lang="hi" className="text-2xl">({sign.hi})</span></h1>
          <p className="mt-2 text-sm" style={{ color: '#665B4E' }}>A general sun-sign reading for <time dateTime={dateTime}>{dateLabel}</time>.</p>
        </div>
      </div>
    </section>

    <section className="mt-7" aria-labelledby="reading-title">
      <div className="rounded-2xl border bg-white p-5 sm:p-8" style={{ borderColor: '#E7E0D5' }}>
        <p className="text-xs font-semibold uppercase tracking-[.15em]" style={{ color: '#805900' }}>Your reading</p>
        <h2 id="reading-title" className="mt-2 text-2xl font-semibold" style={{ color: '#1E1208', fontFamily: 'var(--font-display), Georgia, serif' }}>A moment to reflect</h2>
        {reading && sourceDateLabel ? (
          <>
            <p className="mt-2 text-xs" style={{ color: '#665B4E' }}>
              Reading dated <time dateTime={reading.date}>{sourceDateLabel}</time>
            </p>
            <p className="mt-5 text-base leading-8" style={{ color: '#514536' }}>{reading.text}</p>
          </>
        ) : (
          <p className="mt-5 text-base leading-8" role="status" style={{ color: '#514536' }}>
            Today’s horoscope is temporarily unavailable. Please check back shortly for the latest reading.
          </p>
        )}
      </div>
    </section>

    <aside className="mt-7 rounded-2xl p-6 sm:p-7" style={{ background: '#21190E', color: '#FFFDF8' }}>
      <h2 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>Want to explore your birth chart?</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6" style={{ color: '#E8DDC7' }}>A personal consultation can look at your birth details and the questions you bring. There are no guaranteed outcomes.</p>
      <Link href="/consultation" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: '#F1D99C' }}>Explore a consultation <span aria-hidden="true">→</span></Link>
    </aside>

    <section className="mt-8" aria-labelledby="other-signs-title">
      <h2 id="other-signs-title" className="text-2xl font-medium" style={{ color: '#1E1208', fontFamily: 'var(--font-display), Georgia, serif' }}>Explore other signs</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {SIGNS.filter((item) => item.en !== sign.en).map((item) => (
          <Link key={item.en} href={`/horoscope/${item.en.toLowerCase()}`} className="rounded-xl border bg-white p-3 text-center transition-colors hover:bg-[#F7F0E3]" style={{ borderColor: 'rgba(184,134,11,0.2)', color: '#62470B', textDecoration: 'none' }}>
            <span className="block font-medium">{item.en}</span>
            <span lang="hi" className="mt-0.5 block text-xs" style={{ color: '#806950' }}>{item.hi}</span>
          </Link>
        ))}
      </div>
    </section>
  </>
}
