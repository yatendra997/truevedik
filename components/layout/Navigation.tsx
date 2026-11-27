'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useModal } from '@/components/modal/ModalProvider'
import { SOCIAL_LINKS } from '@/lib/constants/social'
import { HINDI_NAV_LABELS } from '@/lib/i18n/hindi-navigation'
import { isHindiPath, languageSwitchPath, localizePath } from '@/lib/i18n/routes'

const NAV_LINKS = [
  { label: 'About Acharya', href: '/about' },
  { label: 'Blog', href: '/blog' },
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
      className="flex items-center justify-center w-8 h-8 transition-colors duration-150"
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
function TrueVedikLogo({ hindi }: { hindi: boolean }) {
  return (
    <Link href={hindi ? '/hi' : '/'} aria-label={hindi ? 'TrueVedik — मुख्य पृष्ठ' : 'TrueVedik — Home'} className="flex items-center gap-2.5 group">
      <Image src="/truevedik-golden-lotus-logo.webp" alt="TrueVedik" width={142} height={64} priority className="h-12 w-auto" />
    </Link>
  )
}

/* ─── Nav Link ─────────────────────────────────────────────── */
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className="rounded-full transition-colors duration-200 hover:bg-[#F5F0E6] hover:text-[#805B0A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B]"
      style={{
        fontFamily: 'var(--font-body), system-ui, sans-serif',
        fontSize: '0.79rem', letterSpacing: '0.01em',
        color: active ? '#805B0A' : '#493A2B',
        fontWeight: active ? 700 : 600,
        textDecoration: 'none',
        background: active ? '#F5F0E6' : 'transparent',
        border: active ? '1px solid rgba(184,134,11,0.22)' : '1px solid transparent',
        padding: '0.55rem 0.7rem',
      }}
    >
      {label}
    </Link>
  )
}

/* ─── Navigation ───────────────────────────────────────────── */
export function Navigation() {
  const pathname = usePathname()
  const hindi = isHindiPath(pathname)
  const { openModal } = useModal()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  useEffect(() => {
    document.documentElement.lang = hindi ? 'hi' : 'en'
  }, [hindi, pathname])

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

  const toggleMenu = () => setMenuOpen((value) => !value)

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
          fontFamily: 'var(--font-body), system-ui, sans-serif',
          fontSize: '0.65rem', color: '#9A8C7E', letterSpacing: '0.05em',
        }}>
          {hindi ? 'भारत · UAE · USA · UK · कनाडा · ऑस्ट्रेलिया · न्यूज़ीलैंड · यूरोप में सेवाएँ' : 'Serving clients in India · UAE · USA · UK · Canada · Australia · New Zealand · Europe'}
        </p>
        <SocialBar />
      </div>

      <header
        role="banner"
        className="sticky top-0 z-50 transition-shadow duration-150"
        style={{
          background: '#FFFDF8',
          borderBottom: '1px solid rgba(30,18,8,0.08)',
          boxShadow: scrolled ? '0 2px 20px rgba(30,18,8,0.06)' : 'none',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: '1400px', padding: '0 clamp(1rem, 2vw, 2rem)', height: '74px' }}
        >
          <TrueVedikLogo hindi={hindi} />

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={localizePath(link.href, hindi)}
                label={hindi ? HINDI_NAV_LABELS[link.href] : link.label}
                active={pathname === localizePath(link.href, hindi) || pathname.startsWith(`${localizePath(link.href, hindi)}/`)}
              />
            ))}
            <Link
              href={languageSwitchPath(pathname)}
              lang={hindi ? 'en' : 'hi'}
              aria-label={hindi ? 'Switch to English' : 'हिंदी में देखें'}
              className="ml-1 rounded-full border border-[#B8860B]/25 bg-[#FFF9EB] px-3 py-2 text-[0.78rem] font-semibold text-[#62470B] transition-colors hover:bg-[#F5EBD2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B]"
            >
              {hindi ? 'English' : 'हिंदी'}
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-2">
            {SOCIAL_LINKS.whatsapp !== '/consultation' && <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#176B45]/20 bg-[#F1F7F2] px-3 py-2 font-semibold transition-colors hover:bg-[#E6F1E9]"
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '0.76rem', letterSpacing: '0.01em',
                color: '#176B45', textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {hindi ? 'WhatsApp पर बात करें' : 'WhatsApp'}
            </a>}
            <button
              onClick={openModal}
              className="cursor-pointer transition-shadow duration-150"
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '0.74rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 700,
                color: '#FFFFFF',
                background: 'linear-gradient(135deg, #C4600A, #D4750C)',
                border: 'none', padding: '0.68rem 1.1rem',
                borderRadius: '999px', whiteSpace: 'nowrap',
                boxShadow: '0 3px 12px rgba(196,96,10,0.3)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 5px 16px rgba(196,96,10,0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 3px 12px rgba(196,96,10,0.3)' }}
            >
              {hindi ? 'परामर्श बुक करें' : 'Book Consultation'}
            </button>
          </div>

          {/* Mobile WhatsApp and menu */}
          <div className="xl:hidden flex items-center gap-1">
            {SOCIAL_LINKS.whatsapp !== '/consultation' && <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={hindi ? 'WhatsApp पर संदेश भेजें' : 'Chat with us on WhatsApp'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#176B45]/15 bg-[#F1F7F2] text-[#176B45] transition-colors hover:bg-[#E6F1E9]"
              style={{ color: '#176B45' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694-.248-1.289-.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>}
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#B8860B]/15 p-2 cursor-pointer transition-colors hover:bg-[#F5F0E6]"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{ background: '#FFF9EB', borderColor: 'rgba(184,134,11,0.15)' }}
            >
              {menuOpen ? <X size={22} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.8} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
          <div
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 top-[74px] z-40 max-h-[calc(100dvh-4.625rem)] overflow-y-auto overscroll-contain shadow-xl xl:hidden"
            style={{ background: '#FFFDF8', borderBottom: '1px solid rgba(30,18,8,0.08)' }}
          >
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem clamp(1.25rem, 4vw, 2.5rem) 2rem' }}>
              {/* Mobile links */}
              <nav className="flex flex-col gap-0 mb-6">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={localizePath(link.href, hindi)}
                      onClick={() => setMenuOpen(false)}
                      aria-current={pathname === localizePath(link.href, hindi) || pathname.startsWith(`${localizePath(link.href, hindi)}/`) ? 'page' : undefined}
                      className="mb-1 flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors hover:bg-[#F5F0E6]"
                      style={{
                        fontFamily: 'var(--font-display), Georgia, serif',
                        fontSize: '1.2rem', fontWeight: pathname === localizePath(link.href, hindi) || pathname.startsWith(`${localizePath(link.href, hindi)}/`) ? 600 : 500,
                        color: pathname === localizePath(link.href, hindi) || pathname.startsWith(`${localizePath(link.href, hindi)}/`) ? '#805B0A' : '#1E1208',
                        background: pathname === localizePath(link.href, hindi) || pathname.startsWith(`${localizePath(link.href, hindi)}/`) ? '#F5F0E6' : 'transparent',
                        border: pathname === localizePath(link.href, hindi) || pathname.startsWith(`${localizePath(link.href, hindi)}/`) ? '1px solid rgba(184,134,11,0.22)' : '1px solid transparent',
                        textDecoration: 'none',
                      }}
                    >
                      {hindi ? HINDI_NAV_LABELS[link.href] : link.label}
                      <span aria-hidden="true" style={{ color: '#B8860B', fontSize: '1rem' }}>→</span>
                    </Link>
                  </div>
                ))}
              </nav>
              <Link href={languageSwitchPath(pathname)} onClick={() => setMenuOpen(false)} lang={hindi ? 'en' : 'hi'} className="mb-4 inline-flex rounded-full border border-[#B8860B]/25 bg-[#FFF9EB] px-3 py-2 text-sm font-semibold text-[#62470B]">{hindi ? 'English' : 'हिंदी में देखें'}</Link>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => { setMenuOpen(false); openModal() }}
                  className="w-full rounded-xl py-3.5 cursor-pointer"
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '0.75rem', letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: 700,
                    color: '#FFFFFF',
                    background: 'linear-gradient(135deg, #C4600A, #D4750C)',
                    border: 'none', borderRadius: '12px',
                  }}
                >
                  {hindi ? 'परामर्श बुक करें' : 'Book Consultation'}
                </button>
                {SOCIAL_LINKS.whatsapp !== '/consultation' && <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full rounded-xl py-3 flex items-center justify-center gap-2 transition-colors hover:bg-[#E6F1E9]"
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '0.75rem', letterSpacing: '0.08em',
                    color: '#176B45', border: '1.5px solid rgba(23,107,69,0.4)',
                    borderRadius: '12px', textDecoration: 'none', fontWeight: 600,
                  }}
                >
                  {hindi ? 'WhatsApp पर संदेश भेजें' : 'Chat on WhatsApp'}
                </a>}
              </div>

              {/* Mobile social */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-4" style={{ borderTop: '1px solid rgba(30,18,8,0.06)' }}>
                <SocialBar />
              </div>
            </div>
          </div>
        )}
    </>
  )
}
