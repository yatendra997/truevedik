import type { Metadata } from 'next'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Refund and Cancellation Policy',
  description: 'How to cancel or ask about a refund for a TrueVedik consultation.',
  alternates: { canonical: absoluteSiteUrl('/refund-cancellation') },
}

export default function RefundCancellationPage() {
  return (
    <main className="px-6 py-16" style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.18em]" style={{ color: '#75530F' }}>Policies</p>
        <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(2.3rem, 5vw, 3.5rem)' }}>Refunds and cancellations</h1>
        <p className="mt-6" style={{ color: '#514536', lineHeight: 1.85 }}>A booking request is not a confirmed appointment, and this website does not take payment. If a consultation is later confirmed with a payment, ask for the session price, cancellation deadline, and refund terms in writing before paying. If you need to cancel or have already paid, contact TrueVedik using the consultation page so the team can review the terms shared with your booking.</p>
        <p className="mt-5" style={{ color: '#514536', lineHeight: 1.85 }}>No additional ritual, gemstone, or service should be purchased under pressure. Any optional service and its price should be explained separately before you decide.</p>
      </article>
    </main>
  )
}
