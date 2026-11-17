'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'London, UK',
    type: 'public',
    topic: 'Career Guidance',
    review: 'I was stuck in the same job for 6 years, not knowing what to do next. Acharya Ved Prakash looked at my Kundali and told me exactly why — and what to change. Within 3 months of following his advice, I got promoted and moved to a role I love. Truly life-changing.',
    rating: 5,
    initial: 'P',
  },
  {
    name: 'Arjun Mehta',
    location: 'Dubai, UAE',
    type: 'public',
    topic: 'Business Consultation',
    review: 'I was about to enter a major business partnership that seemed perfect on the surface. Acharya Ved Prakash reviewed both our charts and strongly advised against it. I was skeptical but listened. Six months later, that partner\'s other business collapsed. He saved me from a disaster.',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Sarah Williams',
    location: 'New York, USA',
    type: 'public',
    topic: 'Vedic Reading',
    review: 'As someone from a Western background, I came to this with a lot of skepticism. But Acharya Ved Prakash told me things about my childhood, my personality, and my current life situation that nobody could have known just from my birth details. I was completely amazed. Now I am a firm believer.',
    rating: 5,
    initial: 'S',
  },
  {
    name: 'Rahul Tiwari',
    location: 'Sydney, Australia',
    type: 'public',
    topic: 'Marriage Compatibility',
    review: 'Got our Kundali Milan done before our wedding. It was incredibly detailed — he pointed out both our strengths and one area of potential conflict. He gave us practical solutions. We\'ve been happily married for 2 years now with a much deeper understanding of each other.',
    rating: 5,
    initial: 'R',
  },
  {
    name: 'Fatima Al-Hassan',
    location: 'Abu Dhabi, UAE',
    type: 'public',
    topic: 'Career & Foreign Settlement',
    review: 'I consulted Acharya Ved Prakash about moving abroad for a better career. He told me exactly which country would be best for me based on my birth chart — and the right timing to move. I followed his advice and everything fell into place exactly as he predicted.',
    rating: 5,
    initial: 'F',
  },
  {
    name: 'Private Client',
    location: 'Toronto, Canada',
    type: 'confidential',
    topic: 'Personal & Family Matters',
    review: 'I came with a very difficult family situation that I could not discuss with anyone. Acharya Ved Prakash understood immediately, gave me very clear Vedic guidance and a remedy to follow. Within weeks the atmosphere at home changed noticeably. I am truly grateful for his wisdom.',
    rating: 5,
    initial: '★',
  },
  {
    name: 'Private Client',
    location: 'Singapore',
    type: 'confidential',
    topic: 'Business Launch Timing',
    review: 'I was planning to launch my startup. Acharya Ved Prakash analysed the planetary positions and suggested the ideal date to register and launch. I followed it. We had a successful first quarter and the timing advice helped us avoid a legal dispute that could have derailed everything.',
    rating: 5,
    initial: '★',
  },
  {
    name: 'Private Client',
    location: 'Manchester, UK',
    type: 'confidential',
    topic: 'Health & Wellness Guidance',
    review: 'My health had been declining for two years and doctors kept saying nothing was wrong. Acharya Ved Prakash identified a Saturn affliction in my 6th house and recommended specific gemstone therapy and remedies. My health improved steadily over the next few months. Incredible.',
    rating: 5,
    initial: '★',
  },
  {
    name: 'Deepa & Vikram',
    location: 'Auckland, New Zealand',
    type: 'public',
    topic: 'Couple Consultation',
    review: 'We consulted Acharya Ved Prakash together as a couple facing major decisions about moving countries, starting a business, and starting a family — all at once. He was so calm and systematic, addressing each question through our combined charts. We left with complete clarity.',
    rating: 5,
    initial: 'D',
  },
] as const

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#D4AF37', fontSize: '0.75rem' }}>★</span>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [activeReview, setActiveReview] = useState(0)
  const review = TESTIMONIALS[activeReview]

  return (
    <section style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>

        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <SectionLabel>What Our Clients Say</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.2 }}>
            A few words from our clients
          </h2>
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: '#6B5B47', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            People come to a reading with different questions. Here are some of the comments they have shared.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mx-auto" style={{ maxWidth: '860px' }} role="region" aria-roledescription="carousel" aria-label="Client comments">
            <motion.article
              key={activeReview}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex min-h-[310px] flex-col justify-between p-6 sm:p-10"
              aria-live="polite"
              aria-roledescription="slide"
              aria-label={`${activeReview + 1} of ${TESTIMONIALS.length}`}
              style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(184,134,11,0.15)', boxShadow: '0 12px 38px rgba(30,18,8,0.07)' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1.5" style={{ background: 'rgba(184,134,11,0.1)', borderRadius: '20px', fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A6415', fontWeight: 600 }}>
                  {review.topic}
                </span>
                <StarRating count={review.rating} />
              </div>
              <blockquote className="my-7 sm:my-9">
                <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', lineHeight: 1.5, color: '#35271A' }}>
                  &ldquo;{review.review}&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center justify-between gap-4 border-t pt-5" style={{ borderColor: 'rgba(30,18,8,0.09)' }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, #B8860B, #C4600A)', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: '#FFFFFF' }} aria-hidden="true">{review.initial}</div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.84rem', fontWeight: 600, color: '#1E1208' }}>{review.name}</p>
                    <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', color: '#827768' }}>{review.location}</p>
                  </div>
                </div>
                <span className="text-sm" style={{ color: '#827768' }}>{activeReview + 1} / {TESTIMONIALS.length}</span>
              </div>
            </motion.article>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button type="button" onClick={() => setActiveReview((activeReview - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous client comment" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white" style={{ border: '1px solid rgba(184,134,11,0.3)', color: '#75530F' }}>
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <div className="flex items-center gap-1.5" aria-label="Choose a client comment">
                {TESTIMONIALS.map((item, index) => (
                  <button key={`${item.initial}-${index}`} type="button" onClick={() => setActiveReview(index)} aria-label={`Show comment ${index + 1}`} aria-current={activeReview === index ? 'true' : undefined} className="h-2.5 rounded-full transition-all" style={{ width: activeReview === index ? '22px' : '9px', background: activeReview === index ? '#B8860B' : 'rgba(184,134,11,0.28)' }} />
                ))}
              </div>
              <button type="button" onClick={() => setActiveReview((activeReview + 1) % TESTIMONIALS.length)} aria-label="Next client comment" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white" style={{ border: '1px solid rgba(184,134,11,0.3)', color: '#75530F' }}>
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
