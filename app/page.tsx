import { Hero } from '@/components/sections/home/Hero'
import { DailyHoroscope } from '@/components/sections/home/DailyHoroscope'
import { AudienceIndex } from '@/components/sections/home/AudienceIndex'
import { ArchitectureOfAlignment } from '@/components/sections/home/ArchitectureOfAlignment'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { FinalCTA } from '@/components/sections/home/FinalCTA'
import { BlogHighlights } from '@/components/sections/home/BlogHighlights'
import { YouTubeSection } from '@/components/sections/home/YouTubeSection'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const now = new Date()
  const dateLabel = new Intl.DateTimeFormat('en-IN', { dateStyle: 'long', timeZone: 'Asia/Kolkata' }).format(now)

  return (
    <main>
      <Hero />
      <DailyHoroscope dateLabel={dateLabel} />
      <AudienceIndex />
      <ArchitectureOfAlignment />
      <BlogHighlights />
      <YouTubeSection />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
