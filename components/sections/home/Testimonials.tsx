'use client'

import { AnimatedSection, AnimatedGroup, fadeUpItem } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'London, UK',
    type: 'public',
    topic: 'Career Guidance',
    review: 'I was stuck in the same job for 6 years, not knowing what to do next. Ranjit Kumar looked at my Kundali and told me exactly why — and what to change. Within 3 months of following his advice, I got promoted and moved to a role I love. Truly life-changing.',
    rating: 5,
    initial: 'P',
  },
  {
    name: 'Arjun Mehta',
    location: 'Dubai, UAE',
    type: 'public',
    topic: 'Business Consultation',
    review: 'I was about to enter a major business partnership that seemed perfect on the surface. Ranjit Kumar reviewed both our charts and strongly advised against it. I was skeptical but listened. Six months later, that partner\'s other business collapsed. He saved me from a disaster.',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Sarah Williams',
    location: 'New York, USA',
    type: 'public',
    topic: 'Vedic Reading',
    review: 'As someone from a Western background, I came to this with a lot of skepticism. But Ranjit Kumar told me things about my childhood, my personality, and my current life situation that nobody could have known just from my birth details. I was completely amazed. Now I am a firm believer.',
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
    review: 'I consulted Ranjit Kumar about moving abroad for a better career. He told me exactly which country would be best for me based on my birth chart — and the right timing to move. I followed his advice and everything fell into place exactly as he predicted.',
    rating: 5,
    initial: 'F',
  },
  {
    name: 'Private Client',
    location: 'Toronto, Canada',
    type: 'confidential',
    topic: 'Personal & Family Matters',
    review: 'I came with a very difficult family situation that I could not discuss with anyone. Ranjit Kumar understood immediately, gave me very clear Vedic guidance and a remedy to follow. Within weeks the atmosphere at home changed noticeably. I am truly grateful for his wisdom.',
    rating: 5,
    initial: '★',
  },
  {
    name: 'Private Client',
    location: 'Singapore',
    type: 'confidential',
    topic: 'Business Launch Timing',
    review: 'I was planning to launch my startup. Ranjit Kumar analysed the planetary positions and suggested the ideal date to register and launch. I followed it. We had a successful first quarter and the timing advice helped us avoid a legal dispute that could have derailed everything.',
    rating: 5,
    initial: '★',
  },
  {
    name: 'Private Client',
    location: 'Manchester, UK',
    type: 'confidential',
    topic: 'Health & Wellness Guidance',
    review: 'My health had been declining for two years and doctors kept saying nothing was wrong. Ranjit Kumar identified a Saturn affliction in my 6th house and recommended specific gemstone therapy and remedies. My health improved steadily over the next few months. Incredible.',
    rating: 5,
    initial: '★',
  },
  {
    name: 'Deepa & Vikram',
    location: 'Auckland, New Zealand',
    type: 'public',
    topic: 'Couple Consultation',
    review: 'We consulted Ranjit Kumar together as a couple facing major decisions about moving countries, starting a business, and starting a family — all at once. He was so calm and systematic, addressing each question through our combined charts. We left with complete clarity.',
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
  return (
    <section style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>

        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <SectionLabel>What Our Clients Say</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.2 }}>
            Real Experiences. Real Transformations.
          </h2>
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: '#6B5B47', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            Some clients choose to share their names. Others prefer to remain private. All experiences are genuine.
          </p>
        </AnimatedSection>

        {/* Reviews grid */}
        <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={i}
              variants={fadeUpItem}
              className="flex flex-col p-5"
              style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(184,134,11,0.1)', boxShadow: '0 2px 16px rgba(30,18,8,0.05)' }}
            >
              {/* Topic badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1" style={{ background: 'rgba(184,134,11,0.1)', borderRadius: '20px', fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8860B', fontWeight: 600 }}>
                  {t.topic}
                </span>
                {t.type === 'confidential' && (
                  <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.58rem', color: '#9A8C7E', letterSpacing: '0.08em' }}>CONFIDENTIAL</span>
                )}
              </div>

              <StarRating count={t.rating} />

              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.82rem', lineHeight: 1.8, color: '#5A4A36', margin: '0.75rem 0 1.25rem', flex: 1 }}>
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(30,18,8,0.07)' }}>
                <div className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #B8860B, #C4600A)', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>
                  {t.initial}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#1E1208' }}>{t.name}</p>
                  <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.68rem', color: '#9A8C7E' }}>{t.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatedGroup>

        {/* Overall rating */}
        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5"
            style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.2)', borderRadius: '12px', boxShadow: '0 2px 12px rgba(30,18,8,0.04)' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '2.5rem', fontWeight: 600, color: '#B8860B', lineHeight: 1 }}>4.9/5</p>
              <div className="flex items-center gap-0.5 justify-center mt-1">
                {[1,2,3,4,5].map((i) => <span key={i} style={{ color: '#D4AF37', fontSize: '0.9rem' }}>★</span>)}
              </div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(184,134,11,0.2)' }} className="hidden sm:block" aria-hidden="true" />
            <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.8rem', color: '#6B5B47', maxWidth: '260px', lineHeight: 1.6 }}>
              Average rating from 10,000+ consultations across India, UAE, USA, UK, Canada, Australia & beyond
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
