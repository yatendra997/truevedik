import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Privacy Policy | TrueVedic',
  description:
    'TrueVedic privacy policy explains how we protect client birth details and personal information with 100% confidentiality.',
  alternates: {
    canonical: 'https://truevedic.com/privacy',
  },
}

const sections = [
  {
    number: '01',
    title: 'Our Commitment to Confidentiality',
    body: `TrueVedic is a dedicated Vedic advisory practice. The protection of our clients' personal, family, and astrological information is our absolute priority. All information submitted through our consultation forms is treated with the strictest privacy.

No client name, birth chart details, personal questions, or consultation notes are ever shared, published, sold, or disclosed to any third party under any circumstance.`,
  },
  {
    number: '02',
    title: 'Information We Receive',
    body: `During booking and consultation, TrueVedic receives:

- Exact birth details (date, time, and location of birth)
- Questions or life topics you wish to explore with Astrologer Ranjith Kumar
- Contact details (phone / WhatsApp / email) for scheduling the consultation call

We never request or store sensitive financial card numbers or government identity cards.`,
  },
  {
    number: '03',
    title: 'How We Use Your Information',
    body: `All information is used exclusively to prepare and conduct your Vedic consultation:

- Birth details are used to calculate the Janam Kundali and planetary periods
- Contact details are used to coordinate the consultation slot
- We do not spam or sell data to third-party marketing companies`,
  },
  {
    number: '04',
    title: 'Data Security & Storage',
    body: `Client information is stored in secure, password-protected systems accessible only to Astrologer Ranjith Kumar and his direct scheduling coordinator.`,
  },
  {
    number: '05',
    title: 'Your Rights & Deletion Requests',
    body: `You have the right to request deletion of your birth records or contact details from our database at any time by messaging our support on WhatsApp or emailing contact@truevedic.com.`,
  },
] as const

export default function PrivacyPage() {
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
            <SectionLabel>Client Privacy</SectionLabel>
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
              Privacy &amp; Confidentiality Policy
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '0.85rem',
                color: '#6B5B47',
              }}
            >
              Last updated: {new Date().getFullYear()} · 100% Secure &amp; Protected
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
