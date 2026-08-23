'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection, AnimatedGroup, fadeUpItem } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    icon: '🔭',
    label: 'Kundali Reading',
    title: 'Know What the Stars Say About Your Life',
    description: 'Your birth chart holds the answers to why things happen in your life — career struggles, relationship problems, financial setbacks. We read it precisely and tell you exactly what to do.',
    href: '/diagnostics',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80',
    imageAlt: 'Night sky with stars — Vedic Kundali reading',
  },
  {
    icon: '🪔',
    label: 'Puja & Remedies',
    title: 'Vedic Rituals That Actually Work',
    description: 'When life feels blocked — relationships breaking, health suffering, money not flowing — Vedic remedies through sacred Puja can remove those blockages and restore positive energy.',
    href: '/pacification',
    image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=600&q=80',
    imageAlt: 'Sacred Puja ritual with candles and flowers',
  },
  {
    icon: '💎',
    label: 'Sacred Gems',
    title: 'Gemstones Prescribed for Your Specific Chart',
    description: 'Not all gemstones are for everyone. We prescribe only the gems your planetary chart needs — sourced, tested and properly energized. Wear what works for you, not what looks pretty.',
    href: '/installations',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    imageAlt: 'Beautiful colorful gemstones — Vedic gem therapy',
  },
  {
    icon: '🏛️',
    label: 'Vastu Shastra',
    title: 'Make Your Home a Place of Blessings',
    description: 'The direction your home or office faces, where you sleep, where you work — all of this affects your life outcomes. Vastu corrections can transform the energy of your space.',
    href: '/spatial-harmonic',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    imageAlt: 'Beautiful home interior — Vastu Shastra alignment',
  },
] as const

export function AudienceIndex() {
  return (
    <section style={{ background: '#FFFDF8', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', paddingTop: '4rem' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <SectionLabel>How Can We Help You?</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 400, color: '#1E1208', lineHeight: 1.2,
          }}>
            Vedic Guidance for Every Area of Life
          </h2>
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: '#6B5B47', maxWidth: '520px', margin: '1rem auto 0' }}>
            Whatever challenge you are facing — our ancient Vedic science has clear answers and proven solutions.
          </p>
        </AnimatedSection>

        {/* Service cards with images */}
        <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
          {SERVICES.map((service) => (
            <motion.div key={service.label} variants={fadeUpItem}>
              <Link
                href={service.href}
                className="card-hover group flex flex-col overflow-hidden"
                style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.12)', borderRadius: '12px', boxShadow: '0 2px 16px rgba(30,18,8,0.06)', textDecoration: 'none' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,18,8,0.6), transparent)' }} aria-hidden="true" />
                  {/* Label overlay */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span style={{ fontSize: '1.1rem' }} aria-hidden="true">{service.icon}</span>
                    <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4AF37', fontWeight: 600 }}>{service.label}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.35rem', fontWeight: 500, color: '#1E1208', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.82rem', lineHeight: 1.75, color: '#6B5B47', flex: 1 }}>
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-4" style={{ color: '#B8860B' }}>
                    <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Learn More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1" style={{ fontSize: '0.8rem' }}>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
