'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useCallback, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '@/components/modal/ModalProvider'
import { SOCIAL_LINKS } from '@/lib/constants/social'

const NAV_LINKS = [
  { label: 'About Acharya', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Free Tools', href: '/tools' },
  { label: 'Kundali Reading', href: '/kundali-reading' },
  { label: 'Puja & Remedies', href: '/puja-remedies' },
  { label: 'Sacred Gems', href: '/gemstones' },
  { label: 'Vastu Shastra', href: '/vastu-consultation' },
  { label: 'Contact', href: '/contact' },
] as const

/* ─── Social Icons ─────────────────────────────────────────── */
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-8 h-8 transition-all duration-200"
      style={{ color: '#9A8C7E', borderRadius: '50%' }}
      onMouseEnter={(e) => { e.currentTarget.style.color = '#B8860B' }}
      onMouseLeave={(e) => { e.currentTarget.style.color = '#9A8C7E' }}
    >
      {children}
    </a>
  )
}

function SocialBar() {
  return (
    <div className="flex items-center gap-1">
      {SOCIAL_LINKS.instagram && <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </SocialIcon>}
      {SOCIAL_LINKS.facebook && <SocialIcon href={SOCIAL_LINKS.facebook} label="Facebook">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </SocialIcon>}
      {SOCIAL_LINKS.youtube && <SocialIcon href={SOCIAL_LINKS.youtube} label="YouTube">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon fill="#FFFDF8" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      </SocialIcon>}
      {SOCIAL_LINKS.whatsapp !== '/consultation' && <SocialIcon href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </SocialIcon>}
    </div>
  )
}

/* ─── Logo ─────────────────────────────────────────────────── */
function TrueVedikLogo() {
  return (
    <Link href="/" aria-label="TrueVedik — Home" className="flex items-center gap-2.5 group">
      <Image src="/truevedik-golden-lotus-logo.webp" alt="TrueVedik" width={142} height={64} priority className="h-12 w-auto" />
    </Link>
  )
}

/* ─── Nav Link ─────────────────────────────────────────────── */
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="relative group"
      style={{
        fontFamily: 'var(--font-geist), system-ui, sans-serif',
        fontSize: '0.72rem', letterSpacing: '0.08em',
        color: active ? '#B8860B' : '#5A4A36',
        fontWeight: active ? 500 : 400,
        textDecoration: 'none', transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = '#B8860B' }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = '#5A4A36' }}
    >
      {label}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
          style={{ background: 'linear-gradient(90deg, #B8860B, #C4600A)' }} />
      )}
    </Link>
  )
}

/* ─── Navigation ───────────────────────────────────────────── */
export function Navigation() {
  const pathname = usePathname()
  const { openModal } = useModal()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.classList.add('modal-open')
    else document.body.classList.remove('modal-open')
    return () => document.body.classList.remove('modal-open')
  }, [menuOpen])

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), [])

  return (
    <>
      {/* Top social bar — desktop only */}
      <div
        className="hidden xl:flex items-center justify-between px-8"
        style={{
          background: '#F5F0E6',
          height: '36px',
          borderBottom: '1px solid rgba(30,18,8,0.06)',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-geist), system-ui, sans-serif',
          fontSize: '0.65rem', color: '#9A8C7E', letterSpacing: '0.05em',
        }}>
          Serving clients in India · UAE · USA · UK · Canada · Australia · New Zealand · Europe
        </p>
        <SocialBar />
      </div>

      <header
        role="banner"
        className="sticky top-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(255,253,248,0.97)' : '#FFFDF8',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid rgba(30,18,8,0.08)',
          boxShadow: scrolled ? '0 2px 20px rgba(30,18,8,0.06)' : 'none',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: '1400px', padding: '0 clamp(1.25rem, 3vw, 2.5rem)', height: '68px' }}
        >
          <TrueVedikLogo />

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} active={pathname === link.href} />
            ))}
            <Link href={pathname.startsWith('/hi') ? '/' : '/hi'} lang={pathname.startsWith('/hi') ? 'en' : 'hi'} aria-label={pathname.startsWith('/hi') ? 'Switch to English' : 'हिंदी में देखें'} style={{ color: '#62470B', fontSize: '.76rem', fontWeight: 600 }}> {pathname.startsWith('/hi') ? 'EN' : 'हिंदी'}</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
            {SOCIAL_LINKS.whatsapp !== '/consultation' && <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-80"
              style={{
                fontFamily: 'var(--font-geist), system-ui, sans-serif',
                fontSize: '0.68rem', letterSpacing: '0.05em',
                color: '#25D366', textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>}
            <button
              onClick={openModal}
              className="cursor-pointer transition-all duration-200"
              style={{
                fontFamily: 'var(--font-geist), system-ui, sans-serif',
                fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#FFFFFF',
                background: 'linear-gradient(135deg, #C4600A, #D4750C)',
                border: 'none', padding: '0.55rem 1.25rem',
                borderRadius: '4px',
                boxShadow: '0 3px 12px rgba(196,96,10,0.3)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 5px 16px rgba(196,96,10,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 3px 12px rgba(196,96,10,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{ background: 'transparent', border: 'none' }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-0.5 rounded-full"
                style={{ background: '#1E1208', transformOrigin: 'center' }}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 7, width: 24 }
                    : i === 1 ? { opacity: 0, width: 0 }
                    : { rotate: -45, y: -7, width: 24 }
                    : { rotate: 0, y: 0, opacity: 1, width: i === 1 ? 18 : 24 }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[68px] z-40 max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain shadow-xl xl:hidden"
            style={{ background: '#FFFDF8', borderBottom: '1px solid rgba(30,18,8,0.08)' }}
          >
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem clamp(1.25rem, 4vw, 2.5rem) 2rem' }}>
              {/* Mobile links */}
              <nav className="flex flex-col gap-0 mb-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-3.5"
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '1.35rem', fontWeight: 400,
                        color: pathname === link.href ? '#B8860B' : '#1E1208',
                        borderBottom: '1px solid rgba(30,18,8,0.06)',
                        textDecoration: 'none',
                      }}
                    >
                      {link.label}
                      <span style={{ color: '#B8860B', fontSize: '0.9rem' }}>→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link href={pathname.startsWith('/hi') ? '/' : '/hi'} onClick={() => setMenuOpen(false)} lang={pathname.startsWith('/hi') ? 'en' : 'hi'} className="mb-4 inline-flex py-2" style={{ color: '#62470B', fontWeight: 600 }}>{pathname.startsWith('/hi') ? 'English' : 'हिंदी में देखें'}</Link>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => { setMenuOpen(false); openModal() }}
                  className="w-full py-3.5 cursor-pointer"
                  style={{
                    fontFamily: 'var(--font-geist), system-ui, sans-serif',
                    fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: 'linear-gradient(135deg, #C4600A, #D4750C)',
                    border: 'none', borderRadius: '4px',
                  }}
                >
                  Book Consultation
                </button>
                {SOCIAL_LINKS.whatsapp !== '/consultation' && <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full py-3 flex items-center justify-center gap-2"
                  style={{
                    fontFamily: 'var(--font-geist), system-ui, sans-serif',
                    fontSize: '0.75rem', letterSpacing: '0.08em',
                    color: '#25D366', border: '1.5px solid rgba(37,211,102,0.4)',
                    borderRadius: '4px', textDecoration: 'none',
                  }}
                >
                  Chat on WhatsApp
                </a>}
              </div>

              {/* Mobile social */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-4" style={{ borderTop: '1px solid rgba(30,18,8,0.06)' }}>
                <SocialBar />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
