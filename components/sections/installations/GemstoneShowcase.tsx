'use client'

import { AnimatedGroup, fadeUpItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { CTAButton } from '@/components/ui/CTAButton'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { ShieldCheck, Sparkles, Gem, Award } from 'lucide-react'

const GEMSTONES = [
  {
    sanskrit: 'Pukhraj (Yellow Sapphire)',
    planet: 'Guru (Jupiter)',
    color: '#D4AF37',
    benefit: 'Wealth, Wisdom & Higher Knowledge',
    description:
      'The premier stone for luck, business expansion, spiritual growth, and financial stability. Highly beneficial for entrepreneurs, educators, lawyers, and seekers of prosperity.',
    applications: ['Wealth & Prosperity', 'Career Stability', 'Marriage Blessing', 'Higher Wisdom'],
  },
  {
    sanskrit: 'Neelam (Blue Sapphire)',
    planet: 'Shani (Saturn)',
    color: '#2A52BE',
    benefit: 'Fast Career Growth, Focus & Protection',
    description:
      'One of the most potent stones in Vedic astrology. Dispels obstacles, provides immense discipline, sharp mental focus, and shields from negative envy or sudden downturns.',
    applications: ['Career Authority', 'Saturn Blessing', 'Supreme Focus', 'Accident Shield'],
  },
  {
    sanskrit: 'Panna (Emerald)',
    planet: 'Budh (Mercury)',
    color: '#138808',
    benefit: 'Communication, Business & Sharp Intellect',
    description:
      'Enhances memory, mathematical ability, negotiation power, and artistic speech. Recommended for professionals in trade, marketing, technology, finance, and creative fields.',
    applications: ['Business Growth', 'Negotiation Skills', 'Memory & Focus', 'Speech & Charm'],
  },
  {
    sanskrit: 'Manikya (Ruby)',
    planet: 'Surya (Sun)',
    color: '#C71585',
    benefit: 'Leadership, Vitality & Social Respect',
    description:
      'Infuses confidence, leadership presence, good health, and government favor. Strengthens the vital life force and bestows social recognition and authority.',
    applications: ['Leadership Presence', 'Vital Energy', 'Government Support', 'Confidence'],
  },
  {
    sanskrit: 'Moti (Natural Pearl)',
    planet: 'Chandra (Moon)',
    color: '#4682B4',
    benefit: 'Emotional Peace, Intuition & Sleep',
    description:
      'Calms an overactive mind, relieves emotional anxiety and stress, strengthens motherly bonds, and restores peaceful sleep and intuitive clarity.',
    applications: ['Mental Peace', 'Stress Relief', 'Emotional Balance', 'Sound Sleep'],
  },
  {
    sanskrit: 'Nepali Rudraksha (1 to 14 Mukhi)',
    planet: 'Lord Shiva & Planets',
    color: '#8B4513',
    benefit: 'Spiritual Protection, Blood Pressure & Chakra Balance',
    description:
      'Authentic Himalayan Rudraksha beads selected for high electromagnetic resonance. Harmonizes the body’s energy centers (Chakras) and neutralizes malefic planetary rays.',
    applications: ['Meditation & Aura', 'Stress Mitigation', 'Chakra Healing', 'Divine Protection'],
  },
] as const

export function GemstoneShowcase() {
  return (
    <section
      style={{
        background: '#FFFDF8',
        padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        
        {/* Section Header */}
        <AnimatedSection className="text-center mb-14">
          <SectionLabel>Sacred Jyotish Gemstones</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
              fontWeight: 400,
              color: '#1E1208',
            }}
          >
            Prescribed Only After Careful Chart Analysis
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-geist), system-ui, sans-serif',
              fontSize: '0.9rem',
              color: '#6B5B47',
              maxWidth: '560px',
              margin: '0.5rem auto 0',
            }}
          >
            A gemstone acts like a cosmic antenna, drawing favorable planetary energy to your body. We ensure exact suitability, weight (Ratti), metal setting, and auspicious wearing Muhurat.
          </p>
        </AnimatedSection>

        {/* Gemstones Grid */}
        <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {GEMSTONES.map((gem) => (
            <motion.article
              key={gem.sanskrit}
              variants={fadeUpItem}
              className="p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(184,134,11,0.15)',
                boxShadow: '0 2px 14px rgba(30,18,8,0.04)',
              }}
            >
              <div>
                {/* Planet Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(184,134,11,0.1)' }}
                  >
                    <Gem size={14} color="#B8860B" />
                    <span
                      style={{
                        fontFamily: 'var(--font-geist)',
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#B8860B',
                      }}
                    >
                      {gem.planet}
                    </span>
                  </div>
                  <Sparkles size={16} color="#D4AF37" />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.45rem',
                    fontWeight: 500,
                    color: '#1E1208',
                    marginBottom: '0.25rem',
                  }}
                >
                  {gem.sanskrit}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#B8860B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '1rem',
                  }}
                >
                  {gem.benefit}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-geist), system-ui, sans-serif',
                    fontSize: '0.82rem',
                    lineHeight: 1.7,
                    color: '#5A4A36',
                    marginBottom: '1.5rem',
                  }}
                >
                  {gem.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {gem.applications.map((app) => (
                    <span
                      key={app}
                      style={{
                        fontFamily: 'var(--font-geist)',
                        fontSize: '0.65rem',
                        color: '#6B5B47',
                        background: '#FAF7F0',
                        border: '1px solid rgba(30,18,8,0.08)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <CTAButton label="Inquire for Your Chart" variant="ghost" size="sm" className="w-full justify-center" />
              </div>
            </motion.article>
          ))}
        </AnimatedGroup>

        {/* Quality Guarantee Box */}
        <AnimatedSection
          delay={0.2}
          className="mt-14 p-8 rounded-2xl"
          style={{
            background: '#F5F0E6',
            border: '1px solid rgba(184,134,11,0.2)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FFFFFF', color: '#B8860B' }}>
                <Award size={24} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.85rem', fontWeight: 600, color: '#1E1208' }}>
                  100% Lab Tested &amp; Certified
                </p>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.75rem', color: '#6B5B47' }}>
                  Free Gemological Institute certificate with every gemstone purchase.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FFFFFF', color: '#B8860B' }}>
                <Sparkles size={24} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.85rem', fontWeight: 600, color: '#1E1208' }}>
                  Vedic Mantra Energization
                </p>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.75rem', color: '#6B5B47' }}>
                  Consecrated with planetary Beej Mantras on auspicious Tithi &amp; Nakshatra.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FFFFFF', color: '#B8860B' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.85rem', fontWeight: 600, color: '#1E1208' }}>
                  Worldwide Insured Delivery
                </p>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.75rem', color: '#6B5B47' }}>
                  Shipped safely to India, UAE, USA, UK, Canada, Australia &amp; Europe.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
