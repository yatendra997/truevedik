'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection, AnimatedGroup, fadeUpItem } from '@/components/ui/AnimatedSection'
import { SectionLabel, GoldRule } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'
import { Flame, Gem, House, Telescope } from 'lucide-react'

const SERVICES = [
  {
    icon: Telescope,
    label: 'Kundali Reading',
    title: 'Make sense of your birth chart',
    description: 'Talk through questions about work, relationships, or the choices ahead. We explain the reading in clear language and make room for your own judgment.',
    href: '/kundali-reading',
    image: '/service-kundali.jpg',
    imageAlt: 'Astrology chart and notes arranged on a desk',
  },
  {
    icon: Flame,
    label: 'Puja & Remedies',
    title: 'Explore traditional puja and remedies',
    description: 'If a Vedic ritual is meaningful to you, learn what the options involve and how they are traditionally practiced. We will explain them clearly, without promises.',
    href: '/puja-remedies',
    image: '/service-puja.jpg',
    imageAlt: 'Traditional Hindu havan ritual around a sacred fire',
  },
  {
    icon: Gem,
    label: 'Sacred Gems',
    title: 'Learn about gemstones for your chart',
    description: 'Gemstones are not one-size-fits-all. Understand which stones are traditionally linked to your chart before deciding whether one is right for you.',
    href: '/gemstones',
    image: '/service-gems.jpg',
    imageAlt: 'Colorful gemstone pendants arranged on a light surface',
  },
  {
    icon: House,
    label: 'Vastu Shastra',
    title: 'Bring more balance to your space',
    description: 'Review your home or office layout, natural light, and how each room is used. Explore practical Vastu ideas that fit your space and daily life.',
    href: '/vastu-consultation',
    image: '/vastu-home.jpg',
    imageAlt: 'Modern home exterior surrounded by greenery',
  },
] as const

export function AudienceIndex() {
  return (
    <section style={{ background: '#FFFDF8', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)', paddingTop: '4rem' }}>
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <SectionLabel>Choose a service</SectionLabel>
          <GoldRule className="mt-3 mb-5 mx-auto" />
          <h2 style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 400, color: '#1E1208', lineHeight: 1.2,
          }}>
            Find guidance for what is on your mind
          </h2>
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: '#6B5B47', maxWidth: '520px', margin: '1rem auto 0' }}>
            Start with the question you have. We will help you understand the options in clear, simple language.
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
                    <service.icon size={18} strokeWidth={1.6} color="#D4AF37" aria-hidden="true" />
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
