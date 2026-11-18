'use client'

import { useState, type KeyboardEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const CATEGORIES = ['Career', 'Love & relationships', 'Finance', 'Wellbeing'] as const
const VIEWS = ['Today', 'Tomorrow', 'This week', 'This year'] as const

type Sign = (typeof import('@/lib/horoscope').SIGNS)[number]

export function HoroscopeReading({ sign, dateLabel, dateTime, dayIndex }: { sign: Sign; dateLabel: string; dateTime: string; dayIndex: number }) {
  const [view, setView] = useState(0)
  const currentReading = sign.prompts[(dayIndex + (view === 1 ? 1 : 0)) % sign.prompts.length]

  const selectWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + VIEWS.length) % VIEWS.length
    setView(next)
    document.getElementById(`horoscope-view-${next}`)?.focus()
  }

  return <>
    <section className="rounded-2xl p-6 sm:p-9" style={{ background: '#F5F0E6', border: '1px solid #E7E0D5' }}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div aria-hidden="true" className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full" style={{ background: '#FFFDF8', border: '1px solid #E6DED0' }}>
          <Image src={`/icons/zodiac/${sign.en.toLowerCase()}.svg`} alt="" width={48} height={48} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.15em]" style={{ color: '#805900' }}>Your {sign.en} horoscope</p>
          <h1 className="mt-1 text-4xl font-medium sm:text-5xl" style={{ color: '#1E1208', fontFamily: 'var(--font-cormorant), Georgia, serif' }}>{sign.en} <span lang="hi" className="text-2xl">({sign.hi})</span></h1>
          <p className="mt-2 text-sm" style={{ color: '#665B4E' }}>A general Vedic astrology reflection for <time dateTime={dateTime}>{dateLabel}</time>.</p>
        </div>
      </div>
    </section>

    <section className="mt-7" aria-labelledby="reading-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-xs font-semibold uppercase tracking-[.15em]" style={{ color: '#805900' }}>Horoscope guide</p><h2 id="reading-title" className="mt-1 text-2xl font-semibold" style={{ color: '#1E1208' }}>A moment to reflect</h2></div>
        <span className="rounded-full px-3 py-1 text-xs" style={{ color: '#62470B', background: '#F7F1E5' }}>Lucky number · {sign.luckyNumber}</span>
      </div>

      <div role="tablist" aria-label={`${sign.en} horoscope period`} className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {VIEWS.map((label, index) => <button key={label} id={`horoscope-view-${index}`} type="button" role="tab" aria-selected={view === index} aria-controls="horoscope-panel" tabIndex={view === index ? 0 : -1} onClick={() => setView(index)} onKeyDown={(event) => selectWithKeyboard(event, index)} className="shrink-0 rounded-full border px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2" style={{ color: view === index ? '#FFFDF8' : '#4D4031', background: view === index ? '#75530F' : '#FFFDF8', borderColor: view === index ? '#75530F' : '#E6DED0' }}>{label}</button>)}
      </div>

      <article id="horoscope-panel" role="tabpanel" aria-labelledby={`horoscope-view-${view}`} className="mt-3 rounded-2xl bg-white p-5 sm:p-7" style={{ border: '1px solid #E7E0D5' }}>
        <p className="text-sm leading-7" style={{ color: '#514536' }}>{view === 0 ? 'Take these gentle prompts as a way to pause and think about the day ahead. They are general reflections for your sun sign.' : view === 1 ? 'Here is another set of general prompts for tomorrow. Use what feels helpful and leave the rest.' : view === 2 ? 'For the week ahead, consider these simple themes as prompts for reflection. They are not a forecast of events.' : 'Use these broad themes as a yearly reflection guide. A personal birth chart reading would need your birth details.'}</p>
        <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CATEGORIES.map((category, index) => <div key={category} className="rounded-xl p-4" style={{ background: '#FAF8F3' }}><dt className="text-sm font-semibold" style={{ color: '#1E1208' }}>{category}</dt><dd className="mt-1 text-sm leading-6" style={{ color: '#665B4E' }}>{currentReading[index]}</dd></div>)}
        </dl>
        <p className="mt-4 text-xs" style={{ color: '#665B4E' }}>Lucky colour · {sign.luckyColour} <span aria-hidden="true">·</span> For interest only.</p>
      </article>
    </section>

    <aside className="mt-7 rounded-2xl p-6 sm:p-7" style={{ background: '#21190E', color: '#FFFDF8' }}>
      <h2 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>Want to explore your birth chart?</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6" style={{ color: '#E8DDC7' }}>A personal consultation can look at your birth details and the questions you bring. There are no guaranteed outcomes.</p>
      <Link href="/consultation" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: '#F1D99C' }}>Explore a consultation <ArrowRight size={16} aria-hidden="true" /></Link>
    </aside>

    <p className="mt-6 text-xs leading-5" style={{ color: '#665B4E' }}>Astrology is a traditional belief practice. These general readings are not personal predictions and do not replace medical, legal, or financial advice.</p>
  </>
}
