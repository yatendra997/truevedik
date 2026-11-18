import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | TrueVedik',
  description:
    'TrueVedik privacy policy explains how we handle client birth details and personal information.',
  alternates: {
    canonical: absoluteSiteUrl('/privacy'),
  },
}

const sections = [
  {
    number: '01',
    title: 'Our Commitment to Confidentiality',
    body: `We use the information you submit to respond to a consultation request and prepare for a session. Please share only details needed for your request. Do not include medical, financial, legal, or other sensitive information in the form.`,
  },
  {
    number: '02',
    title: 'Information We Receive',
    body: `The booking form may collect:

- Exact birth details (date, time, and location of birth)
- Questions or life topics you wish to explore with Acharya Ved Prakash
- Contact details (phone / WhatsApp / email) for scheduling the consultation call

The form does not ask for payment card numbers or identity documents.`,
  },
  {
    number: '03',
    title: 'How We Use Your Information',
    body: `Booking details are used to respond to your request and arrange a consultation. When booking email notifications are enabled, the form sends the information to the configured notification provider and inbox.`,
  },
  {
    number: '04',
    title: 'Data Security & Storage',
    body: `The website does not save booking requests in a database. A submitted request is sent by email through Resend to the configured booking inbox. Email providers and inbox settings may retain messages; contact us if you need to request deletion.`,
  },
  {
    number: '05',
    title: 'Your Rights & Deletion Requests',
    body: `You may ask us to delete a booking message by contacting TrueVedik through the contact page. We may need to retain information where required by law.`,
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
              Last updated: {new Date().getFullYear()} · Privacy information
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
