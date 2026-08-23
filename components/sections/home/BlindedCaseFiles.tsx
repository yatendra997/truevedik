import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'

export function BlindedCaseFiles() {
  return (
    <section
      style={{
        background: '#0A0A0A',
        padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        {/* Header */}
        <AnimatedSection className="mb-16">
          <SectionLabel>Case Files</SectionLabel>
          <GoldRule className="mt-4 mb-5" />
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#FFFFFF',
              lineHeight: 1.15,
              maxWidth: '540px',
            }}
          >
            Blinded Case Files
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-geist), system-ui, sans-serif',
              fontSize: '0.8rem',
              color: '#666',
              marginTop: '1rem',
              letterSpacing: '0.05em',
            }}
          >
            All client identities are permanently anonymized. No names, photographs,
            or identifying information are ever disclosed.
          </p>
        </AnimatedSection>

        {/* Single case file — editorial card */}
        <AnimatedSection delay={0.15}>
          <article
            style={{
              border: '0.5px solid rgba(255,255,255,0.08)',
              background: '#111111',
              maxWidth: '900px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Gold top accent */}
            <div
              style={{ height: '0.5px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
              aria-hidden="true"
            />

            <div
              className="grid grid-cols-1 lg:grid-cols-12"
              style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {/* Left — case metadata */}
              <div
                className="lg:col-span-4 lg:pr-8 mb-8 lg:mb-0"
                style={{
                  borderBottom: '0.5px solid rgba(255,255,255,0.06)',
                  paddingBottom: 'clamp(1.5rem, 3vw, 2rem)',
                }}
              >
                {/* Case number */}
                <div
                  className="inline-flex items-center gap-3 mb-6"
                  style={{
                    border: '0.5px solid rgba(212,175,55,0.25)',
                    padding: '0.4rem 0.85rem',
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#D4AF37',
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-geist), system-ui, sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#D4AF37',
                    }}
                  >
                    Case 402
                  </span>
                </div>

                {/* Client descriptor */}
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    marginBottom: '2rem',
                  }}
                >
                  46-Year-Old Tech Founder
                </h3>

                {/* Metadata list */}
                <dl className="flex flex-col gap-4">
                  <CaseMetaItem label="Presenting" value="Hostile takeover attempt." />
                  <CaseMetaItem
                    label="Protocol"
                    value="14-Day Rahu Pacification + Hessonite Installation."
                  />
                  <CaseMetaItem
                    label="Outcome"
                    value="Board dispute settled favorably within 60 days."
                  />
                </dl>
              </div>

              {/* Right — case context */}
              <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-white/[0.06] pt-4 lg:pt-0">
                <p
                  style={{
                    fontFamily: 'var(--font-geist), system-ui, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#666',
                    marginBottom: '1.5rem',
                  }}
                >
                  Advisory Context
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-geist), system-ui, sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: 1.9,
                    color: '#8A8A8A',
                    marginBottom: '1.5rem',
                  }}
                >
                  During a particularly aggressive Rahu transit in the 10th house, the
                  client experienced a sudden, coordinated attempt by minority shareholders
                  to restructure board governance. Conventional legal counsel had stalled
                  for weeks without resolution.
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-geist), system-ui, sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: 1.9,
                    color: '#8A8A8A',
                    marginBottom: '2rem',
                  }}
                >
                  TrueVedic identified the precise transit window, initiated a 14-day
                  closed-door Rahu pacification protocol, and prescribed a calibrated
                  Hessonite installation. Within 60 days of protocol completion, the
                  board dispute was resolved in the client&apos;s favor.
                </p>

                {/* Disclaimer */}
                <p
                  style={{
                    fontFamily: 'var(--font-geist), system-ui, sans-serif',
                    fontSize: '0.65rem',
                    color: '#444',
                    letterSpacing: '0.05em',
                    lineHeight: 1.7,
                    borderTop: '0.5px solid rgba(255,255,255,0.06)',
                    paddingTop: '1.25rem',
                  }}
                >
                  This case file is anonymized in accordance with TrueVedic&apos;s
                  strict non-disclosure obligations. All identifying information
                  has been permanently removed. Individual outcomes are not
                  representative of universal results.
                </p>
              </div>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  )
}

function CaseMetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt
        style={{
          fontFamily: 'var(--font-geist), system-ui, sans-serif',
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#D4AF37',
          marginBottom: '0.35rem',
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontFamily: 'var(--font-geist), system-ui, sans-serif',
          fontSize: '0.8rem',
          color: '#8A8A8A',
          lineHeight: 1.6,
        }}
      >
        {value}
      </dd>
    </div>
  )
}
