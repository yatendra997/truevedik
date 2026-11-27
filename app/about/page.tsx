import type { Metadata } from 'next'
import { ArchitectureOfAlignment } from '@/components/sections/home/ArchitectureOfAlignment'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'About Acharya Ved Prakash',
  description: 'Meet Acharya Ved Prakash, founder of TrueVedik, and learn about his Vedic astrology and Vastu consultations.',
  alternates: { canonical: absoluteSiteUrl('/about') },
}

export default function AboutPage() {
  return (
    <main>
      <ArchitectureOfAlignment />
      <section aria-label="Horoscope content source" className="mx-auto max-w-6xl px-6 pb-12 sm:px-10">
        <p className="text-xs" style={{ color: '#665B4E' }}>
          Daily horoscope content source:{' '}
          <a href="https://freehoroscopeapi.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">Powered by FreeHoroscopeAPI</a>.
        </p>
      </section>
    </main>
  )
}
