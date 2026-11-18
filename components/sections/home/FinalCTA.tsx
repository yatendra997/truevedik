import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'
import { SOCIAL_LINKS } from '@/lib/constants/social'

export function FinalCTA() {
  return (
    <section aria-labelledby="final-consultation-heading" style={{ background: '#221334', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
        <p className="text-xs font-semibold uppercase tracking-[.18em]" style={{ color: '#E2C47F' }}>A personal conversation</p>
        <h2 id="final-consultation-heading" className="mt-4" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 500, color: '#FFF9ED', lineHeight: 1.12 }}>
          Your journey towards clarity starts here
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7" style={{ color: '#E8E0ED' }}>
          Share what you would like to discuss. The team will confirm availability, consultation mode, duration, and any price before you decide.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CTAButton label="Book your consultation" size="lg" />
          {SOCIAL_LINKS.whatsapp !== '/consultation' && <CTAButton label="Chat on WhatsApp" size="lg" variant="whatsapp" href={SOCIAL_LINKS.whatsapp} />}
          <Link href="/tools" className="inline-flex items-center justify-center rounded border px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: '#F1D597', borderColor: 'rgba(241,213,151,.6)', textDecoration: 'none' }}>Explore free tools</Link>
        </div>
        <p className="mt-6 text-xs" style={{ color: '#D9C9E3' }}>Astrology is a traditional belief practice and cannot guarantee a specific result.</p>
      </div>
    </section>
  )
}
