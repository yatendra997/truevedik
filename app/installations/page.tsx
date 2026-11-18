import type { Metadata } from 'next'
import Image from 'next/image'
import { GemstoneShowcase } from '@/components/sections/installations/GemstoneShowcase'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Sacred Gemstones & Rudraksha Guidance | TrueVedik',
  description:
    '100% natural, lab-certified Vedic gemstones (Pukhraj, Neelam, Panna, Manikya) and authentic Nepali Rudraksha energized through Vedic rituals for planetary strength and harmony.',
  alternates: {
    canonical: absoluteSiteUrl('/installations'),
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
              <SectionLabel>Vedic Gemology &amp; Rudraksha</SectionLabel>
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
                Vedic gemstones and Rudraksha
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
                Learn about gemstones traditionally linked to your birth chart, along with natural Rudraksha beads. We can explain the options and what to check before you choose.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton label="Get Gemstone Recommendation" size="lg" />
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
                src="/service-gems.jpg"
                alt="Vedic gemstones in several colors"
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
                  Know what you are choosing
                </p>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.72rem', color: '#D4AF37' }}>
                  Ask about each stone, its source, and its certificate
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function InstallationsPage() {
  return (
    <main>
      <PageHero />
      <GemstoneShowcase />
    </main>
  )
}
