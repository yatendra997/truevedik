'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { CTAButton } from '@/components/ui/CTAButton'

export function ArchitectureOfAlignment() {
  return (
    <section style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>

        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <SectionLabel>Meet Your Guide</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.2 }}>
            Meet Acharya Ved Prakash
          </h2>
        </AnimatedSection>

        {/* Astrologer feature — two column */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
            style={{ background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 4px 40px rgba(30,18,8,0.08)', border: '1px solid rgba(184,134,11,0.12)' }}>

            {/* Image */}
            <div className="relative min-h-[360px] lg:min-h-[480px]">
              <Image
                src="/Astrologer in a Warm Study.png"
                alt="Acharya Ved Prakash in his study"
                fill
                className="object-cover object-top"
              />
              {/* Gold overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: 'linear-gradient(to top, rgba(30,18,8,0.8), transparent)' }}>
                <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#FFFFFF' }}>Acharya Ved Prakash</p>
                <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4AF37' }}>Vedic Astrologer · Founder, TrueVedic</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-3 mb-6">
                {['Vedic Astrology', 'Jyotish', 'Vastu Shastra'].map((badge) => (
                  <span key={badge} className="px-3 py-1.5"
                    style={{ background: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.25)', borderRadius: '20px', fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#B8860B', fontWeight: 600 }}>
                    {badge}
                  </span>
                ))}
              </div>

              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.9rem', lineHeight: 1.85, color: '#5A4A36', marginBottom: '1.25rem' }}>
                Acharya Ved Prakash founded TrueVedic and has more than 12 years of experience offering one-to-one Vedic astrology guidance. He works with people who have questions about career, relationships, family, and other important decisions.
              </p>
              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.9rem', lineHeight: 1.85, color: '#5A4A36', marginBottom: '2rem' }}>
                He explains traditional Jyotish and Vastu ideas in everyday language, then discusses practical options with you. Astrology is a personal belief practice and does not replace medical, legal, or financial advice.
              </p>

              {/* Specializations */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Career & Job', 'Marriage', 'Business', 'Health', 'Family', 'Foreign Travel', 'Property', 'Child Astrology'].map((spec) => (
                  <span key={spec}
                    style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.68rem', color: '#5A4A36', border: '1px solid rgba(30,18,8,0.12)', borderRadius: '4px', padding: '0.25rem 0.6rem' }}>
                    {spec}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <Image src="/India Excellence Awards Ceremony.png" alt="Acharya Ved Prakash at the India Excellence Awards 2025" width={1536} height={1024} className="h-36 w-full rounded-md object-cover" />
                <Image src="/Global Vedic Astrologer Award 2025.png" alt="Global Vedic Astrologer of the Year 2025 award presented to Acharya Ved Prakash" width={1790} height={894} className="h-36 w-full rounded-md object-cover" />
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/consultation">
                  <CTAButton label="Book a Consultation" />
                </Link>
                <CTAButton label="Ask a Question" variant="ghost" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
