'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SIGNS } from '@/lib/horoscope'

export function DailyHoroscopeSlider({ dateLabel, dateTime }: { dateLabel: string; dateTime: string }) {
  const listRef = useRef<HTMLDivElement>(null)
  const scrollSigns = (direction: -1 | 1) => listRef.current?.scrollBy({ left: direction * 280, behavior: 'smooth' })

  return <div className="overflow-hidden rounded-2xl" style={{ background: '#F5F0E6', border: '1px solid rgba(184,134,11,.18)' }}>
    <div className="flex flex-wrap items-end justify-between gap-3 px-5 py-5 sm:px-7 sm:py-6">
      <div><p className="text-xs font-semibold uppercase tracking-[.15em]" style={{ color: '#805900' }}>Daily horoscope</p><h3 className="mt-1 text-2xl font-semibold" style={{ color: '#1E1208' }}>Choose your zodiac sign</h3></div>
      <time className="text-sm" dateTime={dateTime} style={{ color: '#665B4E' }}>{dateLabel}</time>
    </div>

    <div className="flex items-center gap-2 px-4 sm:px-6">
      <button type="button" onClick={() => scrollSigns(-1)} aria-label="Scroll to earlier zodiac signs" className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white transition-colors hover:bg-[#F7F1E5] focus-visible:outline-2 focus-visible:outline-offset-2 sm:flex" style={{ borderColor: '#D9CCB5', color: '#75530F' }}><ArrowLeft size={18} aria-hidden="true" /></button>
      <nav ref={listRef} aria-label="Daily horoscope by zodiac sign" className="flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SIGNS.map((sign) => <Link
          key={sign.en}
          href={`/horoscope/${sign.en.toLowerCase()}`}
          aria-label={`Read the ${sign.en} horoscope`}
          className="group flex w-[112px] shrink-0 snap-start flex-col items-center justify-center rounded-xl border px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-[#B8860B] hover:bg-[#FBF7EE] focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-[128px]"
          style={{ color: '#1E1208', background: '#FFFDF8', borderColor: '#E6DED0' }}
        >
          <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full transition-colors group-hover:bg-[#F0E5CC]" style={{ background: '#F7F1E5' }}>
            <Image src={`/icons/zodiac/${sign.en.toLowerCase()}.svg`} alt="" width={38} height={38} />
          </span>
          <span className="mt-2 text-sm font-semibold">{sign.en}</span>
          <span lang="hi" className="text-xs" style={{ color: '#665B4E' }}>{sign.hi}</span>
        </Link>)}
      </nav>
      <button type="button" onClick={() => scrollSigns(1)} aria-label="Scroll to later zodiac signs" className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white transition-colors hover:bg-[#F7F1E5] focus-visible:outline-2 focus-visible:outline-offset-2 sm:flex" style={{ borderColor: '#D9CCB5', color: '#75530F' }}><ArrowRight size={18} aria-hidden="true" /></button>
    </div>
    <p className="px-5 pb-5 pt-2 text-xs leading-5 sm:px-7 sm:pb-6" style={{ color: '#665B4E' }}>Choose a sign to read its daily, weekly and yearly reflections. Astrology is a belief practice; these general readings are not personal predictions or professional advice.</p>
  </div>
}
