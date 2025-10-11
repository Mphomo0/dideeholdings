import CTA from '@/components/global/CTA'
import PageHeader from '@/components/global/PageHeader'
import OurStory from '@/components/sections/about/OurStory'
import OurValues from '@/components/sections/about/OurValues'

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="About"
        subtitle="Getting to know us"
        image="https://ik.imagekit.io/e2pess7p4/Didee/contact.jpg?updatedAt=1760181727028?tr=w-1920,h-600,fo-auto"
      />
      <div>
        <OurStory />
        <OurValues />
        <CTA />
      </div>
    </div>
  )
}
