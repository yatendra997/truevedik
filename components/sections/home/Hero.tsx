'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Flame, Gem, House, Telescope } from 'lucide-react'

const HERO_SLIDES = [
  { src: '/acharya-ved-prakash-study.webp', alt: 'Acharya Ved Prakash in his study' },
  { src: '/india-excellence-awards.webp', alt: 'Acharya Ved Prakash at the India Excellence Awards 2025' },
  { src: '/global-vedic-astrologer-award-2025.webp', alt: 'Acharya Ved Prakash receiving the Global Vedic Astrologer award' },
] as const

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ background: '#FFFDF8' }}>
      <div className="relative w-full" style={{ height: 'min(88vh, 760px)', minHeight: '560px' }}>
        <Image
          key={HERO_SLIDES[activeSlide].src}
          src={HERO_SLIDES[activeSlide].src}
          alt={HERO_SLIDES[activeSlide].alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: activeSlide === 0 ? 'center 30%' : 'center 42%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(24,17,13,0.9) 0%, rgba(24,17,13,0.68) 48%, rgba(24,17,13,0.38) 100%), linear-gradient(0deg, rgba(24,17,13,0.25), transparent 35%, rgba(24,17,13,0.12))' }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full" style={{ maxWidth: '1400px', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
            <div style={{ maxWidth: '690px' }}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5"
                style={{ background: 'rgba(184,134,11,0.18)', border: '1px solid rgba(212,175,55,0.42)', borderRadius: '20px' }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37' }}>
                  Personal Vedic guidance for everyday decisions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
                  fontWeight: 400, lineHeight: 1.1,
                  color: '#FFFFFF', marginBottom: '1.25rem',
                }}
              >
                Clear guidance for the decisions that matter
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{
                  fontFamily: 'var(--font-geist), system-ui, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                  lineHeight: 1.8, color: 'rgba(255,255,255,0.85)',
                  marginBottom: '2rem', maxWidth: '520px',
                }}
              >
                Speak with Acharya Ved Prakash about work, relationships, family, or what comes next.
                Get a thoughtful reading explained in simple, everyday language.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <CTAButton label="Book a Consultation" size="lg" />
                <CTAButton label="Chat on WhatsApp" size="lg" variant="whatsapp" href={SOCIAL_LINKS.whatsapp} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-5 mt-6"
              >
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: '#D4AF37' }}>12+</span>
                  <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.82)', letterSpacing: '0.05em' }}>Years of experience</span>
                </div>
                <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.82)', letterSpacing: '0.05em', alignSelf: 'center' }}>Private one-to-one consultations</span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 sm:bottom-8 sm:right-10" aria-label="Hero image controls">
          <button type="button" onClick={() => setActiveSlide((activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} aria-label="Show previous image" className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20 focus-visible:outline-white" style={{ border: '1px solid rgba(255,255,255,0.55)', background: 'rgba(24,17,13,0.28)' }}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <div className="flex items-center gap-1.5 px-2" aria-label={`Image ${activeSlide + 1} of ${HERO_SLIDES.length}`}>
            {HERO_SLIDES.map((slide, index) => (
              <button key={slide.src} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show image ${index + 1}`} aria-current={activeSlide === index ? 'true' : undefined} className="h-2 rounded-full transition-all" style={{ width: activeSlide === index ? '24px' : '8px', background: activeSlide === index ? '#D4AF37' : 'rgba(255,255,255,0.72)' }} />
            ))}
          </div>
          <button type="button" onClick={() => setActiveSlide((activeSlide + 1) % HERO_SLIDES.length)} aria-label="Show next image" className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20 focus-visible:outline-white" style={{ border: '1px solid rgba(255,255,255,0.55)', background: 'rgba(24,17,13,0.28)' }}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mx-auto" style={{ maxWidth: '1400px', padding: '0 clamp(1.5rem, 4vw, 3rem)', marginTop: '-1.25rem', position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Kundali Reading', icon: Telescope, href: '/kundali-reading', desc: 'Birth chart analysis' },
            { label: 'Puja & Remedies', icon: Flame, href: '/puja-remedies', desc: 'Vedic rituals & healing' },
            { label: 'Sacred Gems', icon: Gem, href: '/gemstones', desc: 'Traditional gemstone guidance' },
            { label: 'Vastu Shastra', icon: House, href: '/vastu-consultation', desc: 'Home & office guidance' },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="card-hover block p-4 text-center"
              style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)', borderRadius: '8px', boxShadow: '0 2px 12px rgba(30,18,8,0.06)', textDecoration: 'none' }}
            >
              <card.icon size={25} strokeWidth={1.5} color="#B8860B" className="mx-auto mb-2" aria-hidden="true" />
              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#1E1208', letterSpacing: '0.02em', marginBottom: '0.2rem' }}>{card.label}</p>
              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', color: '#9A8C7E' }}>{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
