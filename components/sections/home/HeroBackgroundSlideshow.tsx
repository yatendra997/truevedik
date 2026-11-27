'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const SLIDES = [
  {
    src: '/acharya-ved-prakash-study.webp',
    alt: 'Acharya Ved Prakash in his study',
    position: 'center 30%',
  },
  {
    src: '/global-vedic-astrologer-award-2025.webp',
    alt: 'Acharya Ved Prakash receiving the Global Vedic Astrologer award',
    position: 'center center',
  },
  {
    src: '/india-excellence-awards.webp',
    alt: 'Acharya Ved Prakash at the India Excellence Awards',
    position: 'center center',
  },
] as const

export function HeroBackgroundSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % SLIDES.length),
      7000,
    )
    return () => window.clearInterval(timer)
  }, [activeSlide, paused, reducedMotion])

  const showSlide = (index: number) => {
    setActiveSlide((index + SLIDES.length) % SLIDES.length)
  }

  const slide = SLIDES[activeSlide]

  return (
    <div className="absolute inset-0" aria-label="Featured TrueVedik images">
      <Image
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        fill
        priority={activeSlide === 0}
        sizes="100vw"
        className="hero-slide object-cover"
        style={{ objectPosition: slide.position }}
      />
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 sm:bottom-6 sm:right-8" aria-label="Slideshow controls">
        <button
          type="button"
          onClick={() => showSlide(activeSlide - 1)}
          aria-label="Previous hero image"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white transition-colors hover:bg-black/55"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        {SLIDES.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => showSlide(index)}
            aria-label={`Show hero image ${index + 1}`}
            aria-current={index === activeSlide ? 'true' : undefined}
            className="h-2.5 w-2.5 rounded-full border border-white/80 transition-colors"
            style={{ background: index === activeSlide ? '#D4AF37' : 'rgba(255,255,255,0.35)' }}
          />
        ))}
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white transition-colors hover:bg-black/55"
        >
          {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={() => showSlide(activeSlide + 1)}
          aria-label="Next hero image"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white transition-colors hover:bg-black/55"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
