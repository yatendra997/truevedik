import type { Metadata } from 'next'
import { ArchitectureOfAlignment } from '@/components/sections/home/ArchitectureOfAlignment'

export const metadata: Metadata = {
  title: 'About Acharya Ved Prakash',
  description: 'Meet Acharya Ved Prakash, founder of TrueVedic, and learn about his Vedic astrology and Vastu consultations.',
  alternates: { canonical: 'https://truevedic.com/about' },
}

export default function AboutPage() {
  return (
    <main>
      <ArchitectureOfAlignment />
    </main>
  )
}
