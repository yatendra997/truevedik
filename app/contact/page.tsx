import type { Metadata } from 'next'
import Link from 'next/link'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'Contact TrueVedik',
  description: 'Contact TrueVedik about a consultation with Acharya Ved Prakash.',
  alternates: { canonical: absoluteSiteUrl('/contact') },
}

export default function ContactPage() {
  return (
    <main className="min-h-[60vh] px-6 py-20" style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.18em]" style={{ color: '#75530F' }}>Contact</p>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.4rem, 5vw, 3.7rem)', lineHeight: 1.1 }}>Talk with us about a consultation</h1>
        <p className="mt-5 max-w-2xl" style={{ color: '#514536', lineHeight: 1.8 }}>Use the booking form to share how you would like us to reach you and the questions you want to discuss. Please share only the birth details needed for your request.</p>
        <Link href="/consultation" className="mt-8 inline-flex rounded-md px-6 py-3 text-sm font-medium text-white" style={{ background: '#8A6415', textDecoration: 'none' }}>Open the consultation form</Link>
      </div>
    </main>
  )
}
