'use client'

import { useRef, useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react'

interface ClientTestimonial {
  name: string
  city: string
  topic: string
  review: string
  verifiedClient: boolean
  rating: number
}

// Explicit demo placeholders, never represented as genuine client feedback.
// Replace each row with an approved review and verified rating before using it as social proof.
const TESTIMONIALS: ClientTestimonial[] = [
  { name: 'DEMO client 01 — replace', city: 'India · demo location', topic: 'Kundali reading', review: 'DEMO PLACEHOLDER: Replace with a real, client-approved comment about their experience. Do not publish this sample as a testimonial.', verifiedClient: false, rating: 4.2 },
  { name: 'DEMO client 02 — replace', city: 'United Kingdom · demo location', topic: 'Career questions', review: 'DEMO PLACEHOLDER: Add the client’s own words here after receiving permission and confirming the consultation.', verifiedClient: false, rating: 4.2 },
  { name: 'DEMO client 03 — replace', city: 'United States · demo location', topic: 'Relationship reading', review: 'DEMO PLACEHOLDER: Replace this sample with an accurate review that does not promise a particular outcome.', verifiedClient: false, rating: 4.2 },
  { name: 'DEMO client 04 — replace', city: 'Australia · demo location', topic: 'Vastu consultation', review: 'DEMO PLACEHOLDER: Add a genuine review only after consent. Include a location only if the client has agreed.', verifiedClient: false, rating: 4.2 },
]

export function Testimonials() {
  const [activeReview, setActiveReview] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const review = TESTIMONIALS[activeReview]

  const showPrevious = () => setActiveReview((index) => (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const showNext = () => setActiveReview((index) => (index + 1) % TESTIMONIALS.length)

  return (
    <section style={{ background: '#302044', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(226,196,127,.2)' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[.18em]" style={{ color: '#E2C47F' }}>Editable demo layout</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 500, color: '#FFF9ED', lineHeight: 1.2, marginTop: '.75rem' }}>
            Client feedback, shared with permission
          </h2>
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: '#E8E0ED', maxWidth: '700px', margin: '0.75rem auto 0' }}>
            DEMO / PLACEHOLDER ONLY — these are not real reviews or a real rating. Replace them with approved feedback and verified data before presenting them as client experiences.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          {review ? (
            <div
              className="mx-auto"
              style={{ maxWidth: '860px' }}
              role="region"
              aria-roledescription="carousel"
                aria-label="Demo testimonial card carousel. All entries are placeholders."
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
                style={{ background: '#3A2A4E', borderRadius: '16px', border: '1px solid rgba(226,196,127,.25)', boxShadow: '0 12px 38px rgba(0,0,0,.16)' }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1.5" style={{ background: 'rgba(226,196,127,.12)', borderRadius: '20px', fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F1D597', fontWeight: 600 }}>
                    {review.topic}
                  </span>
                  {review.verifiedClient ? (
                    <span className="inline-flex items-center gap-1.5" style={{ color: '#356248', fontSize: '0.75rem' }}>
                      <BadgeCheck size={16} aria-hidden="true" />
                      Verified client
                    </span>
                  ) : <span className="text-xs font-semibold" style={{ color: '#F1D597' }}>DEMO · NOT VERIFIED</span>}
                </div>
                <blockquote className="my-7 sm:my-9">
                  <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', lineHeight: 1.5, color: '#FFF9ED' }}>
                    “{review.review}”
                  </p>
                  <p aria-label={`Demo rating ${review.rating} out of 5, not a real customer rating`} className="mt-4 text-sm" style={{ color: '#F1D597' }}>★★★★☆ <span className="font-semibold">{review.rating}/5 · DEMO ONLY</span></p>
                </blockquote>
                <div className="flex items-center justify-between gap-4 border-t pt-5" style={{ borderColor: 'rgba(255,255,255,.14)' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.84rem', fontWeight: 600, color: '#FFF9ED' }}>{review.name}</p>
                    <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', color: '#D9C9E3' }}>{review.city}</p>
                  </div>
                  <span className="text-sm" aria-hidden="true" style={{ color: '#D9C9E3' }}>{activeReview + 1} / {TESTIMONIALS.length}</span>
                </div>
              </motion.article>

              <div className="mt-5 flex items-center justify-center gap-4">
                <button type="button" onClick={showPrevious} aria-label="Previous demo testimonial" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10" style={{ border: '1px solid rgba(226,196,127,.45)', color: '#F1D597' }}>
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <div className="flex items-center gap-2" role="group" aria-label="Choose a client review">
                  {TESTIMONIALS.map((item, index) => (
                    <button key={`${item.name}-${item.city}-${index}`} type="button" onClick={() => setActiveReview(index)} aria-label={`Show demo testimonial ${index + 1}`} aria-current={activeReview === index ? 'true' : undefined} className="h-3 rounded-full transition-all" style={{ width: activeReview === index ? '24px' : '12px', background: activeReview === index ? '#E2C47F' : 'rgba(226,196,127,.4)' }} />
                  ))}
                </div>
                <button type="button" onClick={showNext} aria-label="Next demo testimonial" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10" style={{ border: '1px solid rgba(226,196,127,.45)', color: '#F1D597' }}>
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
