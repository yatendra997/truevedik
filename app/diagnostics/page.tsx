import type { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'
import { BriefcaseBusiness, Heart, HeartPulse, Plane } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kundali Reading & Horoscope Analysis | TrueVedic',
  description:
    'Book a Vedic birth chart reading or Kundali matching consultation with Acharya Ved Prakash. Discuss questions about work, relationships, and important decisions.',
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
                Birth chart readings and Kundali matching
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
                Learn how a Vedic birth chart is read and talk through questions about work, relationships, and the years ahead. We explain each step in plain language.
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
                src="/service-kundali.jpg"
                alt="Traditional Vedic birth chart illustrated on parchment"
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
                  A chart is prepared from your date, time, and place of birth
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
            A personal birth chart reading
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
            Birth chart review · Life phases · Your questions
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
            A Janam Kundali is a traditional Vedic birth chart. Acharya Ved Prakash can explain its main parts and discuss how an astrologer might read life phases in the context of the questions you bring.
          </p>

          <div className="space-y-2 mb-6">
            {[
              'Work changes, career plans, or a new business',
              'Questions about money and important decisions',
              'Personal wellbeing, alongside professional care',
              'Other questions you want to talk through',
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
                desc: 'Talk through work changes, new roles, or business plans as part of a chart reading.',
                icon: BriefcaseBusiness,
              },
              {
                title: 'Marriage & Family',
                desc: 'Discuss relationship questions and how horoscope matching is understood in Vedic tradition.',
                icon: Heart,
              },
              {
                title: 'Health & Vitality',
                desc: 'You can discuss wellbeing as a personal belief topic. Astrology is not a substitute for medical care.',
                icon: HeartPulse,
              },
              {
                title: 'Study or work abroad',
                desc: 'Talk through plans to study or work abroad. An astrology reading cannot guarantee what will happen.',
                icon: Plane,
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
                <card.icon size={25} strokeWidth={1.5} color="#B8860B" className="mb-2" aria-hidden="true" />
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
              What a matching reading may cover
            </h3>

            <div className="space-y-4">
              {[
                { title: 'The traditional score', desc: 'Learn what the 36-point Gun Milan score includes and what it leaves out.' },
                { title: 'Mars in each chart', desc: 'Discuss how different Vedic traditions interpret Mangal Dosha.' },
                { title: 'Questions for the couple', desc: 'Use the reading to talk about expectations, communication, and shared plans.' },
                { title: 'What a chart cannot tell you', desc: 'Compatibility is also built through respect, consent, and honest conversation.' },
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
            Kundali matching for couples
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
            A starting point for a conversation
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
            Kundali matching compares selected parts of two birth charts. It can be a way to start a conversation, but it cannot decide whether a relationship will work. That depends on the people involved and the choices they make together.
          </p>

          <div className="flex flex-wrap gap-3">
            <CTAButton label="Ask about Kundali matching" />
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
