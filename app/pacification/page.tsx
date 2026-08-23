import type { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'

export const metadata: Metadata = {
  title: 'Vedic Puja & Spiritual Remedies | TrueVedic',
  description:
    'Authentic Vedic Puja, Anushthan, Yantras, and planetary remedies performed according to traditional Shastras for health, peace, relationship harmony, and prosperity.',
  alternates: {
    canonical: 'https://truevedic.com/pacification',
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
              <SectionLabel>Vedic Remedies &amp; Healing</SectionLabel>
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
                Vedic Puja, Anushthan &amp; Planetary Remedies
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
                Remove planetary obstacles, clear energetic blockages, and invite peace and blessings into your life through authentic Shastra-guided rituals.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton label="Inquire About Puja" size="lg" />
                <CTAButton
                  label="Talk to Us on WhatsApp"
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
                src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=800&q=80"
                alt="Sacred Vedic Puja ritual and offerings"
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
                  Pure Vedic Sanatan Rituals
                </p>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.72rem', color: '#D4AF37' }}>
                  Conducted with pure Sanskrit mantras, Vedic havan, and authentic Sankalpam
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function PujaServices() {
  const rituals = [
    {
      title: 'Maha Mrityunjaya Anushthan',
      desc: 'For supreme health protection, overcoming chronic illness, mental peace, and longevity.',
      deity: 'Lord Shiva',
      icon: '🕉️',
    },
    {
      title: 'Navagraha Shanti Puja',
      desc: 'To balance negative planetary effects (Rahu, Ketu, Shani Sade Sati) and harmonize all nine celestial grahas.',
      deity: 'The 9 Planets',
      icon: '✨',
    },
    {
      title: 'Maha Lakshmi & Kubera Puja',
      desc: 'To remove financial obstacles, clear stalled payments, and attract abundance into business and home.',
      deity: 'Goddess Lakshmi',
      icon: '🪔',
    },
    {
      title: 'Katyayani & Manglik Dosha Puja',
      desc: 'For resolving marriage delays, mitigating strong Mangal Dosha, and restoring love and understanding between couples.',
      deity: 'Maa Katyayani',
      icon: '🌺',
    },
    {
      title: 'Ganesha Vighnaharta Havan',
      desc: 'Performed prior to starting new businesses, house warmings, or launching important ventures to eliminate obstacles.',
      deity: 'Lord Ganesha',
      icon: '🐘',
    },
    {
      title: 'Saraswati & Medha Suktam Puja',
      desc: 'For students, competitive exams, intellect sharpening, and artistic creativity.',
      deity: 'Maa Saraswati',
      icon: '📚',
    },
  ]

  return (
    <section style={{ background: '#FFFDF8', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        <AnimatedSection className="text-center mb-12">
          <SectionLabel>Authentic Rituals</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 400, color: '#1E1208' }}>
            Sacred Vedic Puja &amp; Hawan
          </h2>
          <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.9rem', color: '#6B5B47', maxWidth: '550px', margin: '0.5rem auto 0' }}>
            Every puja is performed with individual Sankalp taken in your name, Gotra, and Nakshatra by learned Vedic priests.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rituals.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)', boxShadow: '0 2px 14px rgba(30,18,8,0.04)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{r.icon}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider" style={{ background: 'rgba(184,134,11,0.1)', color: '#B8860B' }}>
                    {r.deity}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 500, color: '#1E1208', marginBottom: '0.5rem' }}>
                  {r.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.82rem', lineHeight: 1.7, color: '#6B5B47', marginBottom: '1.25rem' }}>
                  {r.desc}
                </p>
              </div>

              <CTAButton label="Book This Puja" variant="ghost" size="sm" className="w-full justify-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function YantrasAndKavach() {
  return (
    <section style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" style={{ maxWidth: '1400px' }}>
        <AnimatedSection className="lg:col-span-6">
          <SectionLabel>Sacred Geometry</SectionLabel>
          <GoldRule className="mt-3 mb-4" />
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 400, color: '#1E1208', lineHeight: 1.25, marginBottom: '0.5rem' }}>
            Consecrated Yantras &amp; Kavach
          </h2>
          <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', fontWeight: 600, marginBottom: '1.25rem' }}>
            Continuous Positive Energy in Your Living Space
          </p>
          <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.9rem', lineHeight: 1.8, color: '#5A4A36', marginBottom: '1.5rem' }}>
            A Yantra is a sacred geometric diagram that channels divine cosmic frequencies. Sourced on pure copper, silver, or Bhojpatra and energized through Pran Pratishtha rituals, these sacred symbols radiate protection, clarity, and prosperity.
          </p>
          <div className="space-y-2 mb-6">
            {['Sri Yantra (for wealth & abundance)', 'Mahamrityunjaya Yantra (for health & protection)', 'Kuber Yantra (for business prosperity)', 'Navagraha Yantra (for all 9 planets)'].map((y, i) => (
              <div key={i} className="flex items-center gap-2 text-xs" style={{ color: '#5A4A36' }}>
                <span style={{ color: '#B8860B', fontWeight: 'bold' }}>✓</span>
                <span>{y}</span>
              </div>
            ))}
          </div>
          <CTAButton label="Request Energized Yantra" />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96" style={{ border: '1px solid rgba(184,134,11,0.2)' }}>
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
              alt="Sacred spiritual meditation and Vedic energy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,18,8,0.75) 0%, transparent 60%)' }} />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem' }}>Pran Pratishtha Energized</p>
              <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.72rem', color: '#D4AF37' }}>Each Yantra is consecrated with specific mantras before dispatch</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default function PacificationPage() {
  return (
    <main>
      <PageHero />
      <PujaServices />
      <YantrasAndKavach />
    </main>
  )
}
