import { Hero } from '@/components/sections/home/Hero'
import { AudienceIndex } from '@/components/sections/home/AudienceIndex'
import { ArchitectureOfAlignment } from '@/components/sections/home/ArchitectureOfAlignment'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { FinalCTA } from '@/components/sections/home/FinalCTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AudienceIndex />
      <ArchitectureOfAlignment />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
