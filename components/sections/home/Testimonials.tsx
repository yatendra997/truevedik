'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { CTAButton } from '@/components/ui/CTAButton'

export function Testimonials() {
  return (
    <section style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        <AnimatedSection className="mx-auto max-w-[760px] text-center">
          <SectionLabel>Client feedback</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.2 }}>
            A thoughtful conversation starts with your questions
          </h2>
          <p className="mx-auto mt-4 max-w-[620px]" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '1rem', lineHeight: 1.75, color: '#514536' }}>
            We’ll publish client comments here only when we have permission to share them. Until then, you can ask about the process, available times, and what a session includes before deciding.
          </p>
          <div className="mt-7 flex justify-center">
            <CTAButton label="How consultations work" href="/consultation" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
