'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'

const testimonials = [
  {
    name: 'Rahul Sharma',
    service: 'Kundali Reading',
    quote: 'I had a wonderful consultation experience. Acharya Ji explained my kundali in detail and answered all my questions patiently. The guidance was clear, thoughtful and easy to understand.',
  },
  {
    name: 'Priya Verma',
    service: 'Marriage Consultation',
    quote: 'I consulted TrueVedik for marriage compatibility. The entire process was smooth, and the explanations were detailed and easy to follow. Really appreciate the professional approach.',
  },
  {
    name: 'Amit Gupta',
    service: 'Career Guidance',
    quote: 'I was looking for career guidance and decided to consult TrueVedik. Acharya Ji listened carefully and shared valuable insights based on my kundali. A very informative experience.',
  },
  {
    name: 'Neha Singh',
    service: 'Vastu Consultation',
    quote: 'The Vastu consultation was very helpful in understanding traditional Vastu principles for my home. I received clear suggestions and had a positive overall experience.',
  },
  {
    name: 'Vikas Mishra',
    service: 'Puja & Remedies',
    quote: 'I had a good experience with TrueVedik. The consultation was detailed, and everything was explained with patience. I appreciate the personal attention and traditional approach.',
  },
]

export function Testimonials() {
  return (
    <section style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <AnimatedSection className="mx-auto max-w-[760px] text-center">
          <SectionLabel>Client testimonials</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.2 }}>
            Kind words from our clients
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <AnimatedSection key={testimonial.name}>
              <article className="flex h-full flex-col rounded-sm border p-6 md:p-7" style={{ background: '#FFFCF6', borderColor: 'rgba(184,134,11,0.2)', boxShadow: '0 8px 24px rgba(30,18,8,0.04)' }}>
                <div aria-label="5 out of 5 stars" className="text-lg tracking-[0.18em]" style={{ color: '#B8860B' }}>
                  <span aria-hidden="true">★★★★★</span>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: '#8A5B21' }}>
                  {testimonial.service}
                </p>
                <blockquote className="mt-3 flex-1" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '0.97rem', lineHeight: 1.8, color: '#514536' }}>
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-6 border-t pt-4" style={{ borderColor: 'rgba(184,134,11,0.16)' }}>
                  <p className="font-medium" style={{ color: '#1E1208' }}>{testimonial.name}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
