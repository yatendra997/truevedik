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
    </main>
  )
}
