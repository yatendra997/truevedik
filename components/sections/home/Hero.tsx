'use client'

import Image from 'next/image'
import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FFFDF8' }}>
      {/* Hero image — full width */}
      <div className="relative w-full" style={{ height: 'min(92vh, 780px)', minHeight: '560px' }}>
        <Image
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1600&q=80"
          alt="Spiritual cosmic sky — TrueVedic Vedic astrology guidance"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(30,18,8,0.75) 0%, rgba(30,18,8,0.4) 50%, rgba(30,18,8,0.6) 100%)' }}
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, #FFFDF8, transparent)' }} aria-hidden="true" />

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full" style={{ maxWidth: '1400px', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
            <div style={{ maxWidth: '680px' }}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5"
                style={{ background: 'rgba(184,134,11,0.2)', border: '1px solid rgba(184,134,11,0.4)', borderRadius: '20px' }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37' }}>
                  Ancient Vedic Wisdom for Modern Life
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
                  fontWeight: 400, lineHeight: 1.1,
                  color: '#FFFFFF', marginBottom: '1.25rem',
                }}
              >
                Get Clarity for Life&apos;s<br />
                <em style={{ fontStyle: 'italic', color: '#D4AF37' }}>Most Important</em><br />
                Decisions
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{
                  fontFamily: 'var(--font-geist), system-ui, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                  lineHeight: 1.8, color: 'rgba(255,255,255,0.85)',
                  marginBottom: '2rem', maxWidth: '520px',
                }}
              >
                Whether it&apos;s career, marriage, business or family — Jyotish Ranjit Kumar
                guides you with precise Vedic insights trusted by thousands of clients
                across India, UAE, USA, UK, Canada and beyond.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <CTAButton label="Book a Consultation" size="lg" />
                <CTAButton label="Chat on WhatsApp" size="lg" variant="whatsapp" href={SOCIAL_LINKS.whatsapp} />
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-5 mt-6"
              >
                {[
                  { value: '20+', label: 'Years Experience' },
                  { value: '10,000+', label: 'Happy Clients' },
                  { value: '15+', label: 'Countries Served' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: '#D4AF37' }}>{stat.value}</span>
                    <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick navigation cards below hero */}
      <div className="mx-auto" style={{ maxWidth: '1400px', padding: '0 clamp(1.5rem, 4vw, 3rem)', marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Kundali Reading', icon: '🔭', href: '/diagnostics', desc: 'Birth chart analysis' },
            { label: 'Puja & Remedies', icon: '🪔', href: '/pacification', desc: 'Vedic rituals & healing' },
            { label: 'Sacred Gems', icon: '💎', href: '/installations', desc: 'Prescribed gemstones' },
            { label: 'Vastu Shastra', icon: '🏛️', href: '/spatial-harmonic', desc: 'Home & office alignment' },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="card-hover block p-4 text-center"
              style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.15)', borderRadius: '8px', boxShadow: '0 2px 12px rgba(30,18,8,0.06)', textDecoration: 'none' }}
            >
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.4rem' }} aria-hidden="true">{card.icon}</span>
              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#1E1208', letterSpacing: '0.02em', marginBottom: '0.2rem' }}>{card.label}</p>
              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', color: '#9A8C7E' }}>{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
