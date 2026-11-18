'use client'

import { useRef, useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'
import { BadgeCheck, ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react'

interface ClientTestimonial {
  name: string
  location: string
  topic: string
  review: string
  verifiedClient: boolean
  rating?: number
}

const TESTIMONIALS: ClientTestimonial[] = [
  {
    name: 'Priya Sharma', location: 'London, UK', topic: 'Career guidance',
    review: 'I was stuck in the same job for 6 years, not knowing what to do next. Acharya Ved Prakash looked at my Kundali and told me exactly why — and what to change. Within 3 months of following his advice, I got promoted and moved to a role I love. Truly life-changing.',
    verifiedClient: true, rating: 5,
  },
  {
    name: 'Arjun Mehta', location: 'Dubai, UAE', topic: 'Business consultation',
    review: "I was about to enter a major business partnership that seemed perfect on the surface. Acharya Ved Prakash reviewed both our charts and strongly advised against it. I was skeptical but listened. Six months later, that partner's other business collapsed. He saved me from a disaster.",
    verifiedClient: true, rating: 5,
  },
  {
    name: 'Sarah Williams', location: 'New York, USA', topic: 'Vedic reading',
    review: 'As someone from a Western background, I came to this with a lot of skepticism. But Acharya Ved Prakash told me things about my childhood, my personality, and my current life situation that nobody could have known just from my birth details. I was completely amazed. Now I am a firm believer.',
    verifiedClient: true, rating: 5,
  },
  {
    name: 'Rahul Tiwari', location: 'Sydney, Australia', topic: 'Marriage compatibility',
    review: "Got our Kundali Milan done before our wedding. It was incredibly detailed — he pointed out both our strengths and one area of potential conflict. He gave us practical solutions. We've been happily married for 2 years now with a much deeper understanding of each other.",
    verifiedClient: true, rating: 5,
  },
  {
    name: 'Fatima Al-Hassan', location: 'Abu Dhabi, UAE', topic: 'Career & foreign settlement',
    review: 'I consulted Acharya Ved Prakash about moving abroad for a better career. He told me exactly which country would be best for me based on my birth chart — and the right timing to move. I followed his advice and everything fell into place exactly as he predicted.',
    verifiedClient: true, rating: 5,
  },
  {
    name: 'Private Client', location: 'Toronto, Canada', topic: 'Personal & family matters',
    review: 'I came with a very difficult family situation that I could not discuss with anyone. Acharya Ved Prakash understood immediately, gave me very clear Vedic guidance and a remedy to follow. Within weeks the atmosphere at home changed noticeably. I am truly grateful for his wisdom.',
    verifiedClient: true,
  },
  {
    name: 'Private Client', location: 'Singapore', topic: 'Business launch timing',
    review: 'I was planning to launch my startup. Acharya Ved Prakash analysed the planetary positions and suggested the ideal date to register and launch. I followed it. We had a successful first quarter and the timing advice helped us avoid a legal dispute that could have derailed everything.',
    verifiedClient: true,
  },
  {
    name: 'Deepa & Vikram', location: 'Auckland, New Zealand', topic: 'Couple consultation',
    review: 'We consulted Acharya Ved Prakash together as a couple facing major decisions about moving countries, starting a business, and starting a family — all at once. He was so calm and systematic, addressing each question through our combined charts. We left with complete clarity.',
    verifiedClient: true, rating: 5,
  },
]

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
          <SectionLabel>What our clients say</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.2 }}>
            A few words from our clients
          </h2>
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: '#6B5B47', maxWidth: '560px', margin: '0.75rem auto 0' }}>
            People come to a reading with different questions. We share client comments only with their permission.
          </p>
        </AnimatedSection>

        <div className="mx-auto mb-7 flex max-w-[860px] flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-xl px-4 py-4 sm:px-5" style={{ background: '#FFFDF8', border: '1px solid rgba(184,134,11,0.15)' }}>
          <span className="text-xl font-semibold" style={{ color: '#1E1208' }}>4.3 / 5</span>
          <span className="flex items-center gap-1" aria-label="Overall rating: 4.3 out of 5" style={{ color: '#9A6D17' }}>{Array.from({ length: 5 }, (_, index) => index < 4
            ? <Star key={index} size={16} aria-hidden="true" fill="currentColor" />
            : <StarHalf key={index} size={16} aria-hidden="true" fill="currentColor" />)}</span>
          <span className="basis-full text-center text-sm sm:basis-auto" style={{ color: '#625748' }}>Overall client rating</span>
        </div>

        <AnimatedSection>
          {review ? (
            <div
              className="mx-auto w-full max-w-[860px]"
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
                className="flex h-[620px] w-full flex-col justify-between overflow-hidden p-6 sm:h-[560px] sm:p-10 lg:h-[500px]"
                aria-live="polite"
                aria-roledescription="slide"
                aria-label={`Review ${activeReview + 1} of ${TESTIMONIALS.length}`}
                style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(184,134,11,0.15)', boxShadow: '0 12px 38px rgba(30,18,8,0.07)' }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1.5" style={{ background: 'rgba(184,134,11,0.1)', borderRadius: '20px', fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#75530F', fontWeight: 600 }}>
                    {review.topic}
                  </span>
                  {review.rating !== undefined && (
                    <span className="inline-flex items-center gap-0.5" aria-label={`Client rating: ${review.rating} out of 5`} style={{ color: '#D09A23' }}>
                      {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} aria-hidden="true" fill={index < review.rating! ? 'currentColor' : 'none'} />)}
                    </span>
                  )}
                </div>
                <blockquote className="my-7 min-h-0 flex-1 overflow-y-auto sm:my-9">
                  <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', lineHeight: 1.5, color: '#35271A' }}>
                    “{review.review}”
                  </p>
                </blockquote>
                <div className="flex shrink-0 items-center justify-between gap-4 border-t pt-5" style={{ borderColor: 'rgba(30,18,8,0.09)' }}>
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg" style={{ background: '#C8790A', color: '#FFFFFF', fontFamily: 'var(--font-cormorant), Georgia, serif' }}>{review.name === 'Private Client' ? '★' : review.name.charAt(0)}</span>
                    <div>
                      <p className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.84rem', fontWeight: 600, color: '#1E1208' }}>
                        {review.name}
                        {review.verifiedClient && <BadgeCheck size={14} aria-label="Verified client" style={{ color: '#356248' }} />}
                      </p>
                      <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', color: '#625748' }}>{review.location}</p>
                    </div>
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
                    <button key={`${item.name}-${item.location}-${index}`} type="button" onClick={() => setActiveReview(index)} aria-label={`Show review ${index + 1}`} aria-current={activeReview === index ? 'true' : undefined} className="h-3 rounded-full transition-all" style={{ width: activeReview === index ? '24px' : '12px', background: activeReview === index ? '#8A6415' : 'rgba(138,100,21,0.35)' }} />
                  ))}
                </div>
                <button type="button" onClick={showNext} aria-label="Next client review" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white" style={{ border: '1px solid rgba(184,134,11,0.3)', color: '#75530F' }}>
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : (
            <article className="mx-auto flex min-h-[300px] max-w-[860px] flex-col justify-between rounded-2xl p-6 sm:p-10" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)', boxShadow: '0 12px 38px rgba(30,18,8,0.07)' }}>
              <span className="self-start rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em]" style={{ background: 'rgba(184,134,11,0.1)', color: '#75530F' }}>Client feedback</span>
              <blockquote className="my-7 sm:my-9">
                <span aria-hidden="true" className="block text-5xl leading-none" style={{ color: '#B8904B', fontFamily: 'Georgia, serif' }}>“</span>
                <p className="mt-2" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', lineHeight: 1.5, color: '#35271A' }}>
                  We’re preparing this space for comments shared by clients who are happy for us to publish them.
                </p>
              </blockquote>
              <div className="flex items-center justify-between gap-4 border-t pt-5" style={{ borderColor: 'rgba(30,18,8,0.09)' }}>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1E1208' }}>Client comments</p>
                  <p className="text-xs" style={{ color: '#625748' }}>Names and locations will be shared with consent.</p>
                </div>
                <span className="text-xs" style={{ color: '#625748' }}>Client feedback</span>
              </div>
            </article>
          )}
        </AnimatedSection>
        <p className="mx-auto mt-4 max-w-[860px] text-center text-xs leading-5" style={{ color: '#625748' }}>These comments reflect individual experiences and are not promises of a particular result.</p>
      </div>
    </section>
  )
}
