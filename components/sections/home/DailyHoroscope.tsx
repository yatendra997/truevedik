import Link from 'next/link'
import Image from 'next/image'
import { SIGNS } from '@/lib/horoscope'

export function DailyHoroscope({ dateLabel }: { dateLabel: string }) {
  return (
    <section aria-labelledby="daily-horoscope-title" className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.18), transparent 48%), linear-gradient(135deg, #25170F 0%, #392318 55%, #24170F 100%)', padding: 'clamp(4rem, 7vw, 6.5rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border" style={{ borderColor: 'rgba(226,184,77,0.12)', boxShadow: '0 0 0 28px rgba(226,184,77,0.035), 0 0 0 56px rgba(226,184,77,0.025)' }} />
      <div className="relative mx-auto" style={{ maxWidth: 1240 }}>
        <header className="mx-auto mb-9 max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.17em]" style={{ borderColor: 'rgba(226,184,77,0.35)', background: 'rgba(226,184,77,0.09)', color: '#F2D796' }}>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ background: '#E2B84D' }} />
            Daily horoscope · {dateLabel}
          </p>
          <h2 id="daily-horoscope-title" className="mt-5" style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.12, color: '#FFF9EE' }}>
            A little guidance for your day
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base" style={{ color: '#E4D4BE' }}>
            Choose your sun sign to read its latest general daily horoscope.
          </p>
        </header>

        <div className="horoscope-marquee-viewport" role="group" aria-label="Choose a zodiac sign to read today’s horoscope">
          <div className="horoscope-marquee-track">
            {[false, true].map((duplicate) => (
              <div key={duplicate ? 'duplicate' : 'original'} className="horoscope-marquee-group" aria-hidden={duplicate}>
                {SIGNS.map((sign) => (
                  <Link
                    key={`${sign.en}${duplicate ? '-duplicate' : ''}`}
                    href={`/horoscope/${sign.en.toLowerCase()}`}
                    tabIndex={duplicate ? -1 : undefined}
                    className="horoscope-sign-card group flex min-h-40 w-40 shrink-0 flex-col items-center rounded-2xl border p-4 text-center sm:min-h-44 sm:w-44 sm:p-5"
                    style={{ borderColor: 'rgba(226,184,77,0.24)', background: 'linear-gradient(160deg, rgba(255,252,246,0.98), rgba(248,239,221,0.98))', boxShadow: '0 12px 30px rgba(9,5,2,0.16)', textDecoration: 'none' }}
                  >
                    <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16" style={{ borderColor: 'rgba(184,134,11,0.22)', background: '#F6EBD0' }}>
                      <Image src={`/icons/zodiac/${sign.en.toLowerCase()}.svg`} alt="" width={46} height={46} unoptimized />
                    </span>
                    <span className="mt-2 font-semibold" style={{ color: '#2B1A10', fontFamily: 'var(--font-display), Georgia, serif', fontSize: '1.12rem' }}>{sign.en}</span>
                    <span lang="hi" className="mt-0.5 text-xs" style={{ color: '#806950' }}>{sign.hi}</span>
                    <span className="mt-auto pt-2 text-[0.62rem] font-semibold uppercase tracking-[0.08em]" style={{ color: '#93530C' }}>Today’s horoscope <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5" style={{ color: '#CFC0AB' }}>
          These are general astrology reflections for interest and self-reflection, not personal predictions or professional advice.
        </p>
      </div>
    </section>
  )
}
