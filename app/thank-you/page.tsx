import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Request sent',
  description: 'Your consultation request has been sent to TrueVedik.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-[60vh] px-6 py-20 text-center" style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <p className="mb-3 text-xs uppercase tracking-[0.18em]" style={{ color: '#75530F' }}>Request sent</p>
      <h1 className="mx-auto max-w-2xl" style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(2.4rem, 5vw, 3.7rem)', lineHeight: 1.1 }}>Thank you for getting in touch</h1>
      <p className="mx-auto mt-5 max-w-xl" style={{ color: '#514536', lineHeight: 1.8 }}>Your consultation request has been sent. The team will use the contact details you provided to discuss a time. Your appointment is confirmed only after you agree on a slot.</p>
      <Link href="/" className="mt-8 inline-flex rounded-md px-6 py-3 text-sm font-medium text-white" style={{ background: '#8A6415', textDecoration: 'none' }}>Return to the home page</Link>
    </main>
  )
}
