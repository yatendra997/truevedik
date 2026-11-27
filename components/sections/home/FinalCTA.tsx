import { CTAButton } from '@/components/ui/CTAButton'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { SOCIAL_LINKS } from '@/lib/constants/social'

export function FinalCTA() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #FAF4E8 0%, #FFFDF8 50%, #F5EADB 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)',
        borderTop: '1px solid rgba(184,134,11,0.15)',
        borderBottom: '1px solid rgba(184,134,11,0.15)',
      }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: '800px' }}>
        <SectionLabel>Direct Guidance</SectionLabel>
        <GoldRule className="mt-3 mb-5 mx-auto" />

        <h2
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: '#1E1208',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}
        >
          Talk through the question on your mind
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
            lineHeight: 1.8,
            color: '#5A4A36',
            marginBottom: '2.5rem',
            maxWidth: '620px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Book a private consultation with Acharya Ved Prakash to discuss your birth chart, relationships, work, or home.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTAButton label="Book a Consultation Now" size="lg" />
          {SOCIAL_LINKS.whatsapp !== '/consultation' && <CTAButton
            label="Chat on WhatsApp"
            size="lg"
            variant="whatsapp"
            href={SOCIAL_LINKS.whatsapp}
          />}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: '0.72rem',
            color: '#9A8C7E',
            marginTop: '2rem',
            letterSpacing: '0.05em',
          }}
        >
          Serving seekers across India, UAE, US, New Zealand, Australia, Canada, UK, and Europe.
        </p>
      </div>
    </section>
  )
}
