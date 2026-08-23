'use client'

import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/constants/social'

const NAV_LINKS = [
  { label: 'Kundali Reading', href: '/diagnostics' },
  { label: 'Puja & Remedies', href: '/pacification' },
  { label: 'Sacred Gems', href: '/installations' },
  { label: 'Vastu Shastra', href: '/spatial-harmonic' },
  { label: 'Book Consultation', href: '/consultation' },
]

function FooterSocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
      style={{ background: 'rgba(184,134,11,0.1)', color: '#B8860B' }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(184,134,11,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(184,134,11,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {children}
    </a>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" style={{ background: '#F5F0E6', borderTop: '1px solid rgba(184,134,11,0.2)' }}>
      {/* Gold gradient top line */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #B8860B, #C4600A, #B8860B)' }} aria-hidden="true" />

      <div className="mx-auto" style={{ maxWidth: '1400px', padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(2rem, 3vw, 2.5rem)' }}>

        {/* Top: Brand + Nav + Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 pb-10"
          style={{ borderBottom: '1px solid rgba(30,18,8,0.08)' }}>

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" style={{ textDecoration: 'none' }}>
              <svg width="32" height="32" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                <circle cx="15" cy="19" r="12" stroke="#B8860B" strokeWidth="1" fill="none" />
                <circle cx="23" cy="19" r="12" stroke="rgba(184,134,11,0.4)" strokeWidth="1" fill="none" />
                <circle cx="15" cy="19" r="2" fill="#C4600A" />
              </svg>
              <div>
                <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem', fontWeight: 500, color: '#1E1208', display: 'block', lineHeight: 1 }}>TrueVedic</span>
                <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.42rem', letterSpacing: '0.28em', color: '#B8860B', textTransform: 'uppercase', display: 'block', marginTop: '2px' }}>KĀLA · KARMA · SAMYOGA</span>
              </div>
            </Link>
            <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.8rem', lineHeight: 1.75, color: '#6B5B47', marginBottom: '1.25rem' }}>
              Trusted Vedic guidance for life&apos;s most important decisions — serving families, professionals and seekers worldwide.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              <FooterSocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </FooterSocialIcon>
              <FooterSocialIcon href={SOCIAL_LINKS.facebook} label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </FooterSocialIcon>
              <FooterSocialIcon href={SOCIAL_LINKS.youtube} label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#F5F0E6" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </FooterSocialIcon>
              <FooterSocialIcon href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </FooterSocialIcon>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', fontWeight: 600, marginBottom: '1rem' }}>Our Services</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.82rem', color: '#6B5B47', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#B8860B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B5B47')}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', fontWeight: 600, marginBottom: '1rem' }}>Legal</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.82rem', color: '#6B5B47', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#B8860B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B5B47')}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', fontWeight: 600, marginBottom: '1rem' }}>Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.82rem', color: '#25D366', textDecoration: 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
              <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.75rem', color: '#9A8C7E', lineHeight: 1.6 }}>
                India · UAE · USA · UK<br/>Canada · Australia<br/>New Zealand · Europe
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.72rem', color: '#9A8C7E' }}>
            © {year} TrueVedic. All rights reserved. · 100% Confidential &amp; Private.
          </p>
          <p style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Ancient Wisdom. Modern Guidance.
          </p>
        </div>
      </div>
    </footer>
  )
}
