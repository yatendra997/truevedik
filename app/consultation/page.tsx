import Image from 'next/image'
import { CTAButton } from '@/components/ui/CTAButton'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { SOCIAL_LINKS } from '@/lib/constants/social'
import type { Metadata } from 'next'
import { Check, Clock, ShieldCheck, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consultation with Astrologer Ranjith Kumar | TrueVedic',
  description: 'Book a 1-on-1 private Vedic astrology consultation with Astrologer Ranjith Kumar (20+ years experience). Accurate Kundali analysis, marriage, career, and remedy guidance.',
}

const CONSULTATION_TIERS = [
  {
    title: 'Single Personal Consultation',
    subtitle: 'For Career, Health, or Specific Life Decisions',
    desc: 'Comprehensive analysis of your Janam Kundali focusing on your immediate challenges, career path, financial prospects, and upcoming planetary periods (Dasha).',
    duration: 'No strict time rush · Direct 1-on-1',
    popular: false,
    features: [
      'Full Janam Kundali (Birth Chart) Reading',
      'Career, Job & Promotion Forecasting',
      'Health & Wellness Planetary Analysis',
      'Personalized Gemstone & Vedic Remedies',
      'Answers to all your specific questions',
    ],
  },
  {
    title: 'Marriage & Relationship Consultation',
    subtitle: 'For Matchmaking, Compatibility & Marital Peace',
    desc: 'Deep Gun Milan, Mangal Dosha assessment, and behavioral compatibility reading for couples or prospective bride & groom before or during marriage.',
    duration: 'Comprehensive Couple Reading',
    popular: true,
    features: [
      'Kundali Milan (36 Gunas Compatibility)',
      'Mangal Dosha & Navamsha (D-9) Analysis',
      'Emotional, Physical & Financial Harmony',
      'Remedies for Relationship Delays or Discord',
      'Auspicious Muhurat for Wedding Rituals',
    ],
  },
  {
    title: 'Business & Wealth Consultation',
    subtitle: 'For Founders, Investors & Business Expansion',
    desc: 'Strategic astrological insights for partnership compatibility, company registration Muhurat, market expansion timing, and planetary wealth houses.',
    duration: 'Strategic In-Depth Consultation',
    popular: false,
    features: [
      'Business Chart & Partner Compatibility',
      'Auspicious Timing for Launches & Investments',
      'Wealth Houses (2nd & 11th) Activation',
      'Vedic Remedial Yantras for Commercial Spaces',
      'Annual Fortune Forecast for Business Owners',
    ],
  },
]

export default function ConsultationPage() {
  return (
    <main style={{ background: '#FFFDF8', color: '#1E1208' }}>
      {/* Hero Banner */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FAF4E8 0%, #FFFDF8 60%, #F5EADB 100%)',
          padding: 'clamp(4rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem)',
          borderBottom: '1px solid rgba(184,134,11,0.15)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                style={{
                  background: 'rgba(184,134,11,0.12)',
                  border: '1px solid rgba(184,134,11,0.25)',
                }}
              >
                <Award size={14} color="#B8860B" />
                <span
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#B8860B',
                    fontWeight: 600,
                  }}
                >
                  Direct 1-on-1 Private Call
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  lineHeight: 1.15,
                  fontWeight: 400,
                  marginBottom: '1.25rem',
                }}
              >
                Book a Consultation with Astrologer Ranjith Kumar
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#5A4A36',
                  marginBottom: '1.75rem',
                }}
              >
                Find answers, clarity, and peace of mind with an international Jyotish advisor with over <strong>20+ years of experience</strong>. Get direct, practical solutions tailored to your unique planetary chart.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3 rounded-lg" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 600, color: '#B8860B' }}>20+ Yrs</p>
                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.7rem', color: '#6B5B47' }}>Vedic Astrologer</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 600, color: '#B8860B' }}>10,000+</p>
                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.7rem', color: '#6B5B47' }}>Lives Guided</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 600, color: '#B8860B' }}>8+ Countries</p>
                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.7rem', color: '#6B5B47' }}>Worldwide Diaspora</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <CTAButton label="Book Your Call Now" size="lg" />
                <CTAButton
                  label="Instant WhatsApp Booking"
                  size="lg"
                  variant="whatsapp"
                  href={SOCIAL_LINKS.whatsapp}
                />
              </div>
            </div>

            {/* Right Astrologer Card */}
            <div className="lg:col-span-5">
              <div
                className="overflow-hidden rounded-2xl relative shadow-xl"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(184,134,11,0.2)',
                }}
              >
                <div className="relative h-80 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                    alt="Astrologer Ranjith Kumar Vedic Astrologer"
                    fill
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(30,18,8,0.85) 0%, transparent 60%)',
                    }}
                  />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 500 }}>
                      Jyotish Ranjith Kumar
                    </p>
                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.75rem', color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Senior Vedic Astrologer &amp; Vastu Consultant
                    </p>
                  </div>
                </div>

                <div className="p-5" style={{ background: '#FFFFFF' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={18} color="#B8860B" />
                    <span style={{ fontFamily: 'var(--font-geist)', fontSize: '0.75rem', fontWeight: 600, color: '#1E1208' }}>
                      100% Private, Respectful &amp; Confidential
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.78rem', lineHeight: 1.6, color: '#6B5B47' }}>
                    Consult directly on Google Meet, Zoom, or WhatsApp Audio/Video call. No assistants in between — speak directly with Ranjith Kumar.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Consultation Options Grid */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          
          <div className="text-center mb-12">
            <SectionLabel>Consultation Options</SectionLabel>
            <GoldRule className="mt-2 mb-4 mx-auto" />
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 400,
                color: '#1E1208',
              }}
            >
              Choose the Right Session for You
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '0.9rem',
                color: '#6B5B47',
                maxWidth: '600px',
                margin: '0.5rem auto 0',
              }}
            >
              Every consultation is thorough and focused on actionable solutions. No complex jargon, just straightforward Vedic wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONSULTATION_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-xl relative transition-all duration-300 hover:shadow-lg"
                style={{
                  background: tier.popular ? '#FAF5EB' : '#FFFFFF',
                  border: tier.popular
                    ? '2px solid #B8860B'
                    : '1px solid rgba(30,18,8,0.1)',
                  boxShadow: '0 4px 20px rgba(30,18,8,0.04)',
                }}
              >
                {tier.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wider"
                    style={{ background: 'linear-gradient(135deg, #C4600A, #D4750C)' }}
                  >
                    Most Requested
                  </div>
                )}

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      color: '#1E1208',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {tier.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-geist)',
                      fontSize: '0.72rem',
                      color: '#B8860B',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '1rem',
                    }}
                  >
                    {tier.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-geist)',
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                      color: '#5A4A36',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {tier.desc}
                  </p>

                  <div
                    className="flex items-center gap-2 mb-4 p-2 rounded"
                    style={{ background: 'rgba(184,134,11,0.08)' }}
                  >
                    <Clock size={14} color="#B8860B" />
                    <span style={{ fontFamily: 'var(--font-geist)', fontSize: '0.72rem', color: '#5A4A36', fontWeight: 500 }}>
                      {tier.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs" style={{ color: '#5A4A36' }}>
                        <Check size={14} className="mt-0.5 flex-shrink-0" color="#B8860B" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <CTAButton label="Book This Session" className="w-full justify-center" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section
        style={{
          background: '#F5F0E6',
          padding: 'clamp(4rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem)',
          borderTop: '1px solid rgba(184,134,11,0.15)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-12">
            <SectionLabel>Simple 3-Step Process</SectionLabel>
            <GoldRule className="mt-2 mb-4 mx-auto" />
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 400,
                color: '#1E1208',
              }}
            >
              How Your Consultation Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold"
                style={{ background: 'linear-gradient(135deg, #B8860B, #C4600A)' }}
              >
                1
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.35rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Share Your Birth Details
              </h3>
              <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.82rem', lineHeight: 1.7, color: '#5A4A36' }}>
                Fill out the booking form with your Date, Time, and Place of birth, along with the main topics or questions you want to explore.
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold"
                style={{ background: 'linear-gradient(135deg, #B8860B, #C4600A)' }}
              >
                2
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.35rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                1-on-1 Call with Ranjith Kumar
              </h3>
              <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.82rem', lineHeight: 1.7, color: '#5A4A36' }}>
                Connect directly on Google Meet or WhatsApp call at your confirmed slot time. Ask anything without hurry or hesitation.
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold"
                style={{ background: 'linear-gradient(135deg, #B8860B, #C4600A)' }}
              >
                3
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.35rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Clear Actionable Remedies
              </h3>
              <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.82rem', lineHeight: 1.7, color: '#5A4A36' }}>
                Receive customized, authentic Vedic remedies (Mantras, Gemstone advice, Puja rituals, or lifestyle adjustments) to overcome hurdles.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton label="Schedule Your Consultation Today" size="lg" />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          <div className="text-center mb-10">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <GoldRule className="mt-2 mb-4 mx-auto" />
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 400,
                color: '#1E1208',
              }}
            >
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What if I do not know my exact birth time?',
                a: 'If your birth time is approximate, Jyotish Ranjith Kumar can use Prashna Kundali (Horary Astrology) and Birth Time Rectification techniques based on major life events to provide accurate predictions.',
              },
              {
                q: 'How are consultations conducted for international clients?',
                a: 'We serve clients across India, UAE, USA, UK, Australia, New Zealand, Canada, and Europe via Google Meet, Zoom, or high-definition WhatsApp video/audio calls across all global timezones.',
              },
              {
                q: 'Will my personal details and conversation be kept confidential?',
                a: 'Yes, 100%. We follow a strict privacy policy. Your birth chart, personal circumstances, and conversation details are strictly confidential between you and Astrologer Ranjith Kumar.',
              },
              {
                q: 'Are the recommended remedies complicated or expensive?',
                a: 'Not at all. Ranjith Kumar believes in simple, pure, and practical Vedic remedies including specific mantras, dietary alignment, charitable acts (Daan), or authentic natural gemstones.',
              },
            ].map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-xl"
                style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)' }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#1E1208',
                    marginBottom: '0.4rem',
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '0.85rem',
                    lineHeight: 1.7,
                    color: '#5A4A36',
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
