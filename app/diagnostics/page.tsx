import type { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'

export const metadata: Metadata = {
  title: 'Kundali Reading & Horoscope Analysis | TrueVedic',
  description:
    'Detailed Janam Kundali (birth chart) reading, Kundali Milan (horoscope matching), and Dasha timeline analysis with Astrologer Ranjith Kumar. Clear spiritual guidance for career, marriage, and life decisions.',
  alternates: {
    canonical: 'https://truevedic.com/diagnostics',
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
              <SectionLabel>Vedic Astrology Services</SectionLabel>
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
                Janam Kundali Reading &amp; Horoscope Matching
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
                Understand your planetary chart, upcoming life phases (Dasha periods), strengths, and remedies. Clear, practical answers without complicated terminology.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton label="Book Kundali Reading" size="lg" />
                <CTAButton
                  label="WhatsApp Consultation"
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
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
                alt="Vedic birth chart and cosmic alignment"
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
                  Your Celestial Blueprint
                </p>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.72rem', color: '#D4AF37' }}>
                  Accurate Janam Kundali calculation based on exact date, time &amp; place
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function JanamKundali() {
  return (
    <section
      style={{
        background: '#FFFDF8',
        padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)',
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        style={{ maxWidth: '1400px' }}
      >
        <AnimatedSection className="lg:col-span-5">
          <SectionLabel>01 · Life Roadmap</SectionLabel>
          <GoldRule className="mt-3 mb-4" />
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              color: '#1E1208',
              lineHeight: 1.25,
              marginBottom: '0.5rem',
            }}
          >
            Personal Janam Kundali Reading
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-geist), system-ui, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#B8860B',
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}
          >
            Birth Chart Analysis · Dasha Timing · Life Predictions
          </p>

          <p
            style={{
              fontFamily: 'var(--font-geist), system-ui, sans-serif',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              color: '#5A4A36',
              marginBottom: '1.5rem',
            }}
          >
            When life feels stuck or confusing — whether in your career, finances, or personal life — your Janam Kundali provides the exact answers. Astrologer Ranjith Kumar studies the 12 houses, planetary placements, and active Mahadasha to show you when opportunities will open and how to navigate difficulties.
          </p>

          <div className="space-y-2 mb-6">
            {[
              'Career growth, job changes & business timing',
              'Financial wealth cycles & investment prosperity',
              'Health tendencies & preventive Vedic remedies',
              'Answers to your top personal life questions',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs" style={{ color: '#5A4A36' }}>
                <span style={{ color: '#B8860B', fontWeight: 'bold' }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <CTAButton label="Request Kundali Reading" variant="ghost" />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Career & Wealth',
                desc: 'Find out the ideal profession for you, timing of promotions, and auspicious periods for business expansion.',
                icon: '💼',
              },
              {
                title: 'Marriage & Family',
                desc: 'Analyze marital harmony, suitable partner characteristics, and timing of marriage.',
                icon: '💍',
              },
              {
                title: 'Health & Vitality',
                desc: 'Identify planetary influences affecting energy levels and receive supportive lifestyle remedies.',
                icon: '🌿',
              },
              {
                title: 'Foreign Travel & Settling',
                desc: 'Determine whether overseas education, work, or permanent settlement is indicated in your chart.',
                icon: '✈️',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-5 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(184,134,11,0.15)',
                  boxShadow: '0 2px 10px rgba(30,18,8,0.03)',
                }}
              >
                <span className="text-2xl mb-2 block">{card.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', fontWeight: 500, color: '#1E1208', marginBottom: '0.25rem' }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.8rem', lineHeight: 1.6, color: '#6B5B47' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function KundaliMilan() {
  return (
    <section
      style={{
        background: '#F5F0E6',
        padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)',
        borderTop: '1px solid rgba(184,134,11,0.1)',
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        style={{ maxWidth: '1400px' }}
      >
        <AnimatedSection delay={0.1} className="lg:col-span-6 order-2 lg:order-1">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(184,134,11,0.2)',
              boxShadow: '0 4px 24px rgba(30,18,8,0.06)',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 500, color: '#1E1208', marginBottom: '1rem' }}>
              What Gun Milan &amp; Matching Covers:
            </h3>

            <div className="space-y-4">
              {[
                { title: 'Ashtakoot Gun Milan (36 Points)', desc: 'Analysis of Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi.' },
                { title: 'Mangal Dosha (Kuja Dosha) Analysis', desc: 'Accurate evaluation of Mars placement in both charts with authentic cancellation rules.' },
                { title: 'Emotional & Behavioral Harmony', desc: 'Understanding temperament and mental compatibility to build a peaceful, lasting bond.' },
                { title: 'Longevity, Prosperity & Child Prospects', desc: 'Assessing planetary support for health, prosperity, and happy family life together.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg" style={{ background: '#FAF7F0', border: '1px solid rgba(184,134,11,0.1)' }}>
                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.85rem', fontWeight: 600, color: '#1E1208', marginBottom: '0.2rem' }}>
                    {item.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.78rem', color: '#6B5B47', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-6 order-1 lg:order-2">
          <SectionLabel>02 · Marriage Compatibility</SectionLabel>
          <GoldRule className="mt-3 mb-4" />
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              color: '#1E1208',
              lineHeight: 1.25,
              marginBottom: '0.5rem',
            }}
          >
            Kundali Milan (Horoscope Matching)
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-geist), system-ui, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#B8860B',
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}
          >
            For Couples, Matchmaking &amp; Relationship Harmony
          </p>

          <p
            style={{
              fontFamily: 'var(--font-geist), system-ui, sans-serif',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              color: '#5A4A36',
              marginBottom: '1.5rem',
            }}
          >
            Marriage is a sacred lifelong journey. Horoscope matching goes far beyond just counting numbers — it provides a deep look into mental harmony, mutual respect, financial stability, and shared life goals. Astrologer Ranjith Kumar also suggests gentle Vedic remedies if minor planetary doshas exist.
          </p>

          <div className="flex flex-wrap gap-3">
            <CTAButton label="Match Horoscopes" />
            <CTAButton label="Ask a Question" variant="ghost" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default function DiagnosticsPage() {
  return (
    <main>
      <PageHero />
      <JanamKundali />
      <KundaliMilan />
    </main>
  )
}
