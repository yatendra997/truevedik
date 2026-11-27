import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'
import { HeroBackgroundSlideshow } from '@/components/sections/home/HeroBackgroundSlideshow'

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FFFDF8' }}>
      <div className="relative w-full h-[min(88svh,760px)] min-h-[560px] max-[640px]:min-h-[620px]">
        <HeroBackgroundSlideshow />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(24,17,13,0.9) 0%, rgba(24,17,13,0.68) 48%, rgba(24,17,13,0.38) 100%), linear-gradient(0deg, rgba(24,17,13,0.25), transparent 35%, rgba(24,17,13,0.12))' }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 z-10 flex items-center pb-16 sm:pb-0">
          <div className="mx-auto w-full" style={{ maxWidth: '1400px', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
            <div style={{ maxWidth: '690px' }}>
              <div
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5"
                style={{ background: 'rgba(184,134,11,0.18)', border: '1px solid rgba(212,175,55,0.42)', borderRadius: '20px' }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F0D779' }}>
                  Personal Vedic guidance for everyday decisions
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
                  fontWeight: 400, lineHeight: 1.1,
                  color: '#FFFFFF', marginBottom: '1.25rem',
                }}
              >
                Understand your chart and the choices ahead
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                  lineHeight: 1.8, color: 'rgba(255,255,255,0.85)',
                  marginBottom: '2rem', maxWidth: '520px',
                }}
              >
                Speak with Acharya Ved Prakash about work, relationships, family, or what comes next.
                Get a thoughtful reading explained in simple, everyday language.
              </p>

              <div
                className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <CTAButton label="Book a Consultation" size="lg" className="w-full justify-center sm:w-auto" />
                {SOCIAL_LINKS.whatsapp === '/consultation'
                  ? <CTAButton label="Ask a Question" size="lg" variant="ghost" className="w-full justify-center sm:w-auto" />
                  : <CTAButton label="Chat on WhatsApp" size="lg" variant="whatsapp" href={SOCIAL_LINKS.whatsapp} className="w-full justify-center sm:w-auto" />}
              </div>

              <div
                className="flex flex-wrap gap-5 mt-6"
              >
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: '#D4AF37' }}>12+</span>
                  <span style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.82)', letterSpacing: '0.05em' }}>Years of experience</span>
                </div>
                <span style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.82)', letterSpacing: '0.05em', alignSelf: 'center' }}>Private one-to-one consultations</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
