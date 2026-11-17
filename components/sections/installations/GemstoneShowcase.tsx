'use client'

import Image from 'next/image'
import { AnimatedGroup, fadeUpItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { CTAButton } from '@/components/ui/CTAButton'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { ShieldCheck, Sparkles, Gem, Award } from 'lucide-react'

const GEMSTONES = [
  {
    sanskrit: 'Pukhraj (Yellow Sapphire)',
    image: '/gem-pukhraj.jpg',
    imageAlt: 'Yellow gemstone set in a gold pendant',
    planet: 'Jupiter (Guru)',
    color: '#D4AF37',
    benefit: 'Traditionally linked with Jupiter',
    description:
      'In Vedic astrology, yellow sapphire (Pukhraj) is linked with Jupiter. A reading can explain how this association is understood in a particular birth chart.',
    applications: ['Jupiter', 'Learning', 'Growth', 'Chart review'],
  },
  {
    sanskrit: 'Neelam (Blue Sapphire)',
    image: '/gem-neelam.jpg',
    imageAlt: 'Faceted blue sapphire gemstone',
    planet: 'Saturn (Shani)',
    color: '#2A52BE',
    benefit: 'Traditionally linked with Saturn',
    description:
      'Blue sapphire (Neelam) is linked with Saturn in Vedic astrology. Traditions differ on how it should be used, so ask for a clear explanation before choosing a stone.',
    applications: ['Saturn', 'Patience', 'Discipline', 'Chart review'],
  },
  {
    sanskrit: 'Panna (Emerald)',
    image: '/gem-panna.jpg',
    imageAlt: 'Natural green emerald crystal',
    planet: 'Mercury (Budh)',
    color: '#138808',
    benefit: 'Traditionally linked with Mercury',
    description:
      'Emerald (Panna) is linked with Mercury in Vedic astrology. An astrologer can discuss what that connection means in the wider context of your chart.',
    applications: ['Mercury', 'Communication', 'Study', 'Chart review'],
  },
  {
    sanskrit: 'Manikya (Ruby)',
    image: '/gem-manikya.jpg',
    imageAlt: 'Red ruby-colored mineral crystals',
    planet: 'Sun (Surya)',
    color: '#C71585',
    benefit: 'Traditionally linked with the Sun',
    description:
      'Ruby (Manikya) is linked with the Sun in Vedic astrology. Ask how this traditional meaning relates to your chart before deciding whether to wear it.',
    applications: ['Sun', 'Leadership', 'Self-expression', 'Chart review'],
  },
  {
    sanskrit: 'Moti (Natural Pearl)',
    image: '/gem-moti.jpg',
    imageAlt: 'Close-up of round white pearls',
    planet: 'Moon (Chandra)',
    color: '#4682B4',
    benefit: 'Traditionally linked with the Moon',
    description:
      'Pearl (Moti) is linked with the Moon in Vedic astrology. This is a traditional association, not medical advice or a promise of a particular result.',
    applications: ['Moon', 'Reflection', 'Tradition', 'Chart review'],
  },
  {
    sanskrit: 'Nepali Rudraksha (1 to 14 Mukhi)',
    image: '/gem-rudraksha.jpg',
    imageAlt: 'Traditional rudraksha prayer beads',
    planet: 'Prayer tradition',
    color: '#8B4513',
    benefit: 'Sacred beads used in prayer',
    description:
      'Rudraksha beads are used in several Hindu prayer and meditation traditions. Ask about the bead type, source, and care before buying.',
    applications: ['Prayer', 'Meditation', 'Traditional use', 'Care guide'],
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
            Understand each stone before you choose
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
            Different stones have different meanings in Vedic astrology. We explain how each one is traditionally used and what questions to ask before buying or wearing one.
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
              <div className="relative -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl" style={{ aspectRatio: '3 / 2', background: '#F5F0E6' }}>
                <Image src={gem.image} alt={gem.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
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

                <CTAButton label="Ask about this stone" variant="ghost" size="sm" className="w-full justify-center" />
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
                  Traditional prayer, if requested
                </p>
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.75rem', color: '#6B5B47' }}>
                  Ask whether a prayer ritual is available and what it involves.
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
