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
            Why Thousands Trust Ranjit Kumar
          </h2>
        </AnimatedSection>

        {/* Astrologer feature — two column */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
            style={{ background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 4px 40px rgba(30,18,8,0.08)', border: '1px solid rgba(184,134,11,0.12)' }}>

            {/* Image */}
            <div className="relative min-h-[360px] lg:min-h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                alt="Jyotish Ranjit Kumar — International Vedic Astrologer with 20+ years of experience"
                fill
                className="object-cover object-top"
              />
              {/* Gold overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: 'linear-gradient(to top, rgba(30,18,8,0.8), transparent)' }}>
                <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#FFFFFF' }}>Ranjit Kumar</p>
                <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4AF37' }}>International Jyotish · 20+ Years</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-3 mb-6">
                {['20+ Years Experience', '10,000+ Clients', '15+ Countries'].map((badge) => (
                  <span key={badge} className="px-3 py-1.5"
                    style={{ background: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.25)', borderRadius: '20px', fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#B8860B', fontWeight: 600 }}>
                    {badge}
                  </span>
                ))}
              </div>

              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.9rem', lineHeight: 1.85, color: '#5A4A36', marginBottom: '1.25rem' }}>
                Jyotish Ranjit Kumar has been guiding individuals, families, and business leaders for over two decades. Born into a lineage of traditional Vedic scholars, he mastered the ancient sciences of Jyotish, Vastu, and Gemstone therapy — and today brings this wisdom to clients across the world.
              </p>
              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.9rem', lineHeight: 1.85, color: '#5A4A36', marginBottom: '2rem' }}>
                His readings are known for being <strong style={{ color: '#1E1208' }}>direct, accurate, and compassionate</strong>. He speaks in plain language — no complicated jargon — so you understand exactly what your chart reveals and what actions to take.
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
