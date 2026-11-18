import type { Metadata } from 'next'
import { absoluteSiteUrl } from '@/lib/constants/site'
import { Hero } from '@/components/sections/home/Hero'
import { HomepageExperience } from '@/components/sections/home/HomepageExperience'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { FinalCTA } from '@/components/sections/home/FinalCTA'
import { BlogHighlights } from '@/components/sections/home/BlogHighlights'
import { YouTubeSection } from '@/components/sections/home/YouTubeSection'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Online Vedic Astrology Consultation | Acharya Ved Prakash',
  description: 'Speak with Acharya Ved Prakash about Kundali, relationships, career, Vastu, or traditional practices. Clear one-to-one online consultations, without promises of a fixed outcome.',
  alternates: { canonical: absoluteSiteUrl('/') },
  openGraph: {
    type: 'website',
    title: 'Online Vedic Astrology Consultation | TrueVedik',
    description: 'Thoughtful Vedic astrology consultations with Acharya Ved Prakash. Explore your questions in a calm, personal conversation.',
    url: absoluteSiteUrl('/'),
    images: [{ url: absoluteSiteUrl('/acharya-ved-prakash-study.webp'), alt: 'Acharya Ved Prakash in his study' }],
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HomepageExperience />
      <BlogHighlights />
      <YouTubeSection />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
