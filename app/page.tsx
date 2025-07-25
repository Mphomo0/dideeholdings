import Hero from '@/components/sections/home/Hero'
import AboutSection from '@/components/sections/home/AboutSection'
import ServicesHome from '@/components/sections/home/ServicesHome'
import ProjectsHome from '@/components/sections/home/ProjectsHome'
import CTA from '@/components/global/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesHome />
      <ProjectsHome />
      <CTA />
    </div>
  )
}
