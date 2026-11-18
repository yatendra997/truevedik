'use client'

import { useRef, useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'
import { BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react'

interface ClientTestimonial {
  name: string
  city: string
  topic: string
  review: string
  verifiedClient: boolean
}

// Add only client-approved feedback whose consultation can be confirmed.
const TESTIMONIALS: ClientTestimonial[] = []

export function Testimonials() {
  const [activeReview, setActiveReview] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const review = TESTIMONIALS[activeReview]

  const showPrevious = () => setActiveReview((index) => (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const showNext = () => setActiveReview((index) => (index + 1) % TESTIMONIALS.length)

  return (
    <section style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        <AnimatedSection className="text-center mb-12">
          <SectionLabel>Client feedback</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.2 }}>
            Hear from people who have booked a reading
          </h2>
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: '#6B5B47', maxWidth: '560px', margin: '0.75rem auto 0' }}>
            We publish feedback only with a client’s permission and identify verified clients only when we can confirm their consultation.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          {review ? (
            <div
              className="mx-auto"
              style={{ maxWidth: '860px' }}
              role="region"
              aria-roledescription="carousel"
              aria-label="Client feedback carousel"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'ArrowLeft') showPrevious()
                if (event.key === 'ArrowRight') showNext()
              }}
              onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return
                const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current
                if (Math.abs(distance) > 48) {
                  if (distance < 0) showNext()
                  else showPrevious()
                }
                touchStartX.current = null
              }}
            >
              <motion.article
                key={activeReview}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex min-h-[300px] flex-col justify-between p-6 sm:p-10"
                aria-live="polite"
                aria-roledescription="slide"
                aria-label={`Review ${activeReview + 1} of ${TESTIMONIALS.length}`}
                style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(184,134,11,0.15)', boxShadow: '0 12px 38px rgba(30,18,8,0.07)' }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1.5" style={{ background: 'rgba(184,134,11,0.1)', borderRadius: '20px', fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#75530F', fontWeight: 600 }}>
                    {review.topic}
                  </span>
                  {review.verifiedClient && (
                    <span className="inline-flex items-center gap-1.5" style={{ color: '#356248', fontSize: '0.75rem' }}>
                      <BadgeCheck size={16} aria-hidden="true" />
                      Verified client
                    </span>
                  )}
                </div>
                <blockquote className="my-7 sm:my-9">
                  <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', lineHeight: 1.5, color: '#35271A' }}>
                    “{review.review}”
                  </p>
                </blockquote>
                <div className="flex items-center justify-between gap-4 border-t pt-5" style={{ borderColor: 'rgba(30,18,8,0.09)' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.84rem', fontWeight: 600, color: '#1E1208' }}>{review.name}</p>
                    <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', color: '#625748' }}>{review.city}</p>
                  </div>
                  <span className="text-sm" aria-hidden="true" style={{ color: '#625748' }}>{activeReview + 1} / {TESTIMONIALS.length}</span>
                </div>
              </motion.article>

              <div className="mt-5 flex items-center justify-center gap-4">
                <button type="button" onClick={showPrevious} aria-label="Previous client review" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white" style={{ border: '1px solid rgba(184,134,11,0.3)', color: '#75530F' }}>
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <div className="flex items-center gap-2" role="group" aria-label="Choose a client review">
                  {TESTIMONIALS.map((item, index) => (
                    <button key={`${item.name}-${item.city}-${index}`} type="button" onClick={() => setActiveReview(index)} aria-label={`Show review ${index + 1}`} aria-current={activeReview === index ? 'true' : undefined} className="h-3 rounded-full transition-all" style={{ width: activeReview === index ? '24px' : '12px', background: activeReview === index ? '#8A6415' : 'rgba(138,100,21,0.35)' }} />
                  ))}
                </div>
                <button type="button" onClick={showNext} aria-label="Next client review" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white" style={{ border: '1px solid rgba(184,134,11,0.3)', color: '#75530F' }}>
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : (
            <p className="mx-auto rounded-xl p-6 text-center" style={{ maxWidth: '720px', background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)', color: '#514536', lineHeight: 1.7 }}>
              Client feedback will appear here once we have permission to share it. We don’t publish invented reviews or promise specific outcomes.
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
