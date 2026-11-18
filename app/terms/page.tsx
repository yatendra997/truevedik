import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Terms of Service | TrueVedik',
  description:
    'Terms of service and consultation guidelines for TrueVedik astrology guidance and Vedic advisory sessions.',
  alternates: {
    canonical: absoluteSiteUrl('/terms'),
  },
}

const sections = [
  {
    number: '01',
    title: 'Scope of Astrological Advisory',
    body: `TrueVedik provides astrological interpretations and Vedic guidance based on traditional Parashari, Jaimini, and Vastu principles through Acharya Ved Prakash.

Astrology is an advisory discipline designed to provide perspective, self-awareness, and supportive spiritual remedies. It does not replace licensed medical diagnosis, legal counsel, or certified financial advisory.`,
  },
  {
    number: '02',
    title: 'Consultation Bookings & Rescheduling',
    body: `Consultation slots are reserved upon receipt of booking requests. If you need to reschedule your call due to an unexpected emergency, please notify our coordinator at least 6 hours in advance on WhatsApp or Email, and we will happily assign an alternate slot.`,
  },
  {
    number: '03',
    title: 'Authenticity of Prescribed Remedies & Gemstones',
    body: `Ask for details about the source and any available testing for gemstones or Rudraksha before purchase. If a Puja ritual is discussed, we will explain what the proposed practice involves.`,
  },
  {
    number: '04',
    title: 'Confidentiality & Code of Conduct',
    body: `We maintain a respectful, compassionate, and non-judgmental environment for all seekers regardless of cultural background, nationality, or faith. All client discussions remain strictly confidential.`,
  },
] as const

export default function TermsPage() {
  return (
    <main style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #FAF4E8 0%, #FFFDF8 60%, #F5EADB 100%)',
          padding: 'clamp(4rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem) clamp(3rem, 4vw, 4rem)',
          borderBottom: '1px solid rgba(184,134,11,0.15)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1000px' }}>
          <AnimatedSection>
            <SectionLabel>Engagement Terms</SectionLabel>
            <GoldRule className="mt-3 mb-5" />
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                color: '#1E1208',
                marginBottom: '1rem',
              }}
            >
              Terms of Service
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '0.85rem',
                color: '#6B5B47',
              }}
            >
              Last updated: {new Date().getFullYear()} · TrueVedik Advisory Guidelines
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          {sections.map((section, i) => (
            <AnimatedSection key={section.number} delay={i * 0.04}>
              <article
                style={{
                  marginBottom: '2.5rem',
                  paddingBottom: '2.5rem',
                  borderBottom: '1px solid rgba(30,18,8,0.08)',
                }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#B8860B',
                    }}
                  >
                    {section.number}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.45rem',
                      fontWeight: 500,
                      color: '#1E1208',
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                <div style={{ paddingLeft: '2rem' }}>
                  {section.body.split('\n\n').map((para, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: 'var(--font-geist)',
                        fontSize: '0.875rem',
                        lineHeight: 1.8,
                        color: '#5A4A36',
                        marginBottom: '0.75rem',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  )
}
