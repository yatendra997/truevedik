import { Hero } from '@/components/sections/home/Hero'
import { AudienceIndex } from '@/components/sections/home/AudienceIndex'
import { ArchitectureOfAlignment } from '@/components/sections/home/ArchitectureOfAlignment'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { FinalCTA } from '@/components/sections/home/FinalCTA'
import { BlogHighlights } from '@/components/sections/home/BlogHighlights'
import { YouTubeSection } from '@/components/sections/home/YouTubeSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AudienceIndex />
      <ArchitectureOfAlignment />
      <BlogHighlights />
      <YouTubeSection />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
