import type { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'

export const metadata: Metadata = {
  title: 'Vastu Shastra & Home Energy Alignment | TrueVedic',
  description:
    'Authentic Vastu Shastra consultations for homes, apartments, villas, and commercial offices. Align directions, room placements, and energy flow without unnecessary demolition.',
  alternates: {
    canonical: 'https://truevedic.com/spatial-harmonic',
  },
}

function PageHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAF4E8 0%, #FFFDF8 60%, #F5EADB 100%)',
        padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 4vw, 3rem) clamp(3rem, 5vw, 4.5rem)',
        borderBottom: '1px solid rgba(184,134,11,0.15)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <AnimatedSection>
              <SectionLabel>Vastu Shastra &amp; Numerology</SectionLabel>
              <GoldRule className="mt-3 mb-5" />
              <h1
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: '#1E1208',
                  marginBottom: '1.25rem',
                }}
              >
                Vastu Shastra for Home, Office &amp; Prosperity
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-geist), system-ui, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                  lineHeight: 1.85,
                  color: '#5A4A36',
                  maxWidth: '560px',
                  marginBottom: '2rem',
                }}
              >
                The directions of your entrance, kitchen, bedroom, and workspace directly impact your health, wealth, and family peace. Learn how simple Vastu corrections bring positive transformation.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton label="Request Vastu Consultation" size="lg" />
                <CTAButton
                  label="Inquire on WhatsApp"
                  size="lg"
                  variant="whatsapp"
                  href={SOCIAL_LINKS.whatsapp}
                />
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5">
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg h-72 lg:h-96"
              style={{ border: '1px solid rgba(184,134,11,0.2)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Harmonious Vastu compliant home interior"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(30,18,8,0.7) 0%, transparent 60%)',
                }}
              />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem' }}>
                  Vastu Without Demolition
                </p>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.72rem', color: '#D4AF37' }}>
                  Remedies using sacred colors, directional elements, crystals &amp; Yantras
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function VastuShastra() {
  return (
    <section style={{ background: '#FFFDF8', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)' }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" style={{ maxWidth: '1400px' }}>
        
        <AnimatedSection className="lg:col-span-5">
          <SectionLabel>01 · Space Energy</SectionLabel>
          <GoldRule className="mt-3 mb-4" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.25, marginBottom: '0.5rem' }}>
            Vastu Consultation for Homes &amp; Commercial Spaces
          </h2>
          <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', fontWeight: 600, marginBottom: '1.25rem' }}>
            Blueprints Analysis &amp; On-Site Guidance
          </p>
          <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.9rem', lineHeight: 1.8, color: '#5A4A36', marginBottom: '1.5rem' }}>
            Do you feel restless in certain rooms? Are business transactions facing unexpected resistance? Vastu Shastra balances the five cosmic elements (Pancha Bhoota: Earth, Water, Fire, Air, Space) inside your property to unlock smooth cash flow and good health.
          </p>

          <div className="space-y-2 mb-6">
            {[
              'North-East (Ishanya): Spiritual clarity & wealth accumulation',
              'South-East (Agneya): Cash liquidity, vitality & kitchen fire balance',
              'South-West (Nairutya): Master bedroom stability & leadership decision-making',
              'North-West (Vayavya): Helpful networking, business support & guest harmony',
            ].map((v, i) => (
              <div key={i} className="flex items-center gap-2 text-xs" style={{ color: '#5A4A36' }}>
                <span style={{ color: '#B8860B', fontWeight: 'bold' }}>✓</span>
                <span>{v}</span>
              </div>
            ))}
          </div>

          <CTAButton label="Request Vastu Review" variant="ghost" />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Residential Homes & Flats',
                desc: 'Optimize living rooms, bedrooms, kitchens, and mandir directions for harmonious family living.',
                icon: '🏡',
              },
              {
                title: 'Corporate Offices & Retail',
                desc: 'Strategic seating for founders, cash counter positioning, and entrance energy for footfall and profit.',
                icon: '🏢',
              },
              {
                title: 'Factories & Industrial Units',
                desc: 'Heavy machinery placement in South/South-West, raw materials, and transformer fire zones.',
                icon: '⚙️',
              },
              {
                title: 'Pre-Purchase Property Audit',
                desc: 'Check Vastu suitability before buying or renting an apartment, plot, or commercial building.',
                icon: '🔍',
              },
            ].map((space, i) => (
              <div
                key={i}
                className="p-5 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(184,134,11,0.15)',
                  boxShadow: '0 2px 10px rgba(30,18,8,0.03)',
                }}
              >
                <span className="text-2xl mb-2 block">{space.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', fontWeight: 500, color: '#1E1208', marginBottom: '0.25rem' }}>
                  {space.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.8rem', lineHeight: 1.6, color: '#6B5B47' }}>
                  {space.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

function AnkJyotish() {
  return (
    <section style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" style={{ maxWidth: '1400px' }}>
        
        <AnimatedSection className="lg:col-span-6">
          <SectionLabel>02 · Vedic Numerology</SectionLabel>
          <GoldRule className="mt-3 mb-4" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.25, marginBottom: '0.5rem' }}>
            Ank Jyotish &amp; Name Alignment
          </h2>
          <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', fontWeight: 600, marginBottom: '1.25rem' }}>
            Harmonize Your Name, Business Name &amp; Key Numbers
          </p>
          <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.9rem', lineHeight: 1.8, color: '#5A4A36', marginBottom: '1.5rem' }}>
            Every alphabet has a numerical vibration corresponding to a specific planet. When your name spelling or company brand number matches your birth number (Mulank) and destiny number (Bhagyank), you experience effortless resonance, popularity, and success.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['Brand Name Selection', 'Newborn Baby Names', 'Signature Correction', 'Mobile Number & Account Numbers', 'Auspicious Launch Dates'].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '0.68rem',
                  color: '#5A4A36',
                  background: '#FFFFFF',
                  border: '1px solid rgba(30,18,8,0.1)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '4px',
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <CTAButton label="Request Name Numerology Audit" />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="lg:col-span-6">
          <div className="p-8 rounded-2xl" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.2)', boxShadow: '0 4px 24px rgba(30,18,8,0.06)' }}>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 500, color: '#1E1208', marginBottom: '1rem' }}>
              How Vedic Numerology Works for You:
            </h3>
            <ul className="space-y-3">
              {[
                { title: 'Mulank (Birth Number)', desc: 'Calculated from your day of birth — reveals your innate personality, traits, and core strengths.' },
                { title: 'Bhagyank (Destiny Number)', desc: 'Calculated from full date of birth — reveals your life destiny and career trajectory.' },
                { title: 'Namank (Name Number)', desc: 'Adjusted through subtle spelling correction to bring harmonious planetary resonance.' },
              ].map((n, i) => (
                <li key={i} className="p-3 rounded-lg" style={{ background: '#FAF7F0', border: '1px solid rgba(184,134,11,0.1)' }}>
                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.85rem', fontWeight: 600, color: '#1E1208', marginBottom: '0.2rem' }}>
                    {n.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.78rem', color: '#6B5B47', lineHeight: 1.5 }}>
                    {n.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export default function SpatialHarmonicPage() {
  return (
    <main>
      <PageHero />
      <VastuShastra />
      <AnkJyotish />
    </main>
  )
}
