'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle, Sparkles } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants/social'

/* ─── Context ─────────────────────────────────────────────── */

interface ModalContextValue {
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}

/* ─── Modal Panel ─────────────────────────────────────────── */

function ConsultationModal({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dob: '',
    tob: '',
    pob: '',
    service: 'Kundali Reading & Life Consultation',
    message: '',
  })

  /* Focus trap */
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl"
        style={{
          background: '#FFFDF8',
          border: '1px solid rgba(184,134,11,0.25)',
          boxShadow: '0 20px 60px rgba(30,18,8,0.2)',
        }}
      >
        {/* Top Gold Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
          style={{ background: 'linear-gradient(90deg, #B8860B, #C4600A, #B8860B)' }}
        />

        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer"
          style={{ color: '#9A8C7E', background: 'rgba(30,18,8,0.04)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1E1208'
            e.currentTarget.style.background = 'rgba(30,18,8,0.08)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9A8C7E'
            e.currentTarget.style.background = 'rgba(30,18,8,0.04)'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="px-6 py-8 sm:px-8 sm:py-10">
          {submitted ? (
            <div className="text-center py-8">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(184,134,11,0.1)', color: '#B8860B' }}
              >
                <CheckCircle size={36} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '2rem',
                  color: '#1E1208',
                  marginBottom: '0.5rem',
                }}
              >
                Consultation Request Received
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-geist), system-ui, sans-serif',
                  fontSize: '0.9rem',
                  color: '#5A4A36',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}
              >
                Thank you, {formData.fullName || 'Seeker'}. Jyotish Ranjith Kumar&apos;s team will contact you within 24 hours on WhatsApp/Email to schedule your direct consultation call.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-2"
                  style={{ background: '#25D366', textDecoration: 'none' }}
                >
                  Message Directly on WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg text-xs font-semibold"
                  style={{
                    background: '#F5F0E6',
                    color: '#1E1208',
                    border: '1px solid rgba(30,18,8,0.1)',
                  }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3" style={{ background: 'rgba(184,134,11,0.1)', color: '#B8860B' }}>
                  <Sparkles size={12} />
                  <span style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Personal Consultation Booking
                  </span>
                </div>
                <h2
                  id="modal-title"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(1.75rem, 3vw, 2.2rem)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: '#1E1208',
                    marginBottom: '0.5rem',
                  }}
                >
                  Consult with Astrologer Ranjith Kumar
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-geist), system-ui, sans-serif',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    color: '#6B5B47',
                  }}
                >
                  20+ Years Experience · Clear &amp; Compassionate Guidance · 100% Confidential
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1"
                      style={{ color: '#1E1208', fontFamily: 'var(--font-geist)' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg text-sm transition-all"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(30,18,8,0.15)',
                        color: '#1E1208',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-1"
                      style={{ color: '#1E1208', fontFamily: 'var(--font-geist)' }}
                    >
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 / +1 / +971..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg text-sm transition-all"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(30,18,8,0.15)',
                        color: '#1E1208',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1"
                      style={{ color: '#1E1208', fontFamily: 'var(--font-geist)' }}
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-xs"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(30,18,8,0.15)',
                        color: '#1E1208',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-1"
                      style={{ color: '#1E1208', fontFamily: 'var(--font-geist)' }}
                    >
                      Time of Birth (if known)
                    </label>
                    <input
                      type="time"
                      value={formData.tob}
                      onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-xs"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(30,18,8,0.15)',
                        color: '#1E1208',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-1"
                      style={{ color: '#1E1208', fontFamily: 'var(--font-geist)' }}
                    >
                      Place of Birth
                    </label>
                    <input
                      type="text"
                      placeholder="City, Country"
                      value={formData.pob}
                      onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-xs"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(30,18,8,0.15)',
                        color: '#1E1208',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: '#1E1208', fontFamily: 'var(--font-geist)' }}
                  >
                    Consultation Type
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg text-sm"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(30,18,8,0.15)',
                      color: '#1E1208',
                      outline: 'none',
                    }}
                  >
                    <option value="Kundali Reading & Life Consultation">Full Kundali Reading &amp; Life Guidance</option>
                    <option value="Marriage & Compatibility Consultation">Marriage Compatibility &amp; Relationship</option>
                    <option value="Career & Business Consultation">Career, Job &amp; Business Guidance</option>
                    <option value="Puja, Ritual & Vedic Remedies">Vedic Puja &amp; Astrological Remedies</option>
                    <option value="Gemstone & Rudraksha Recommendation">Sacred Gemstones &amp; Rudraksha Recommendation</option>
                    <option value="Vastu Shastra Consultation">Vastu Consultation for Home / Office</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1"
                    style={{ color: '#1E1208', fontFamily: 'var(--font-geist)' }}
                  >
                    What questions would you like answered?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your key questions or situation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(30,18,8,0.15)',
                      color: '#1E1208',
                      outline: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #C4600A, #D4750C)',
                    boxShadow: '0 4px 16px rgba(196,96,10,0.3)',
                    border: 'none',
                  }}
                >
                  Submit &amp; Request Consultation Call
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.68rem', color: '#9A8C7E' }}>
                  🔒 100% Private &amp; Confidential
                </p>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium flex items-center gap-1"
                  style={{ color: '#25D366', textDecoration: 'none' }}
                >
                  Need instant booking? WhatsApp &rarr;
                </a>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Provider ────────────────────────────────────────────── */

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
    document.body.classList.add('modal-open')
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    document.body.classList.remove('modal-open')
  }, [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && <ConsultationModal onClose={closeModal} />}
      </AnimatePresence>
    </ModalContext.Provider>
  )
}
