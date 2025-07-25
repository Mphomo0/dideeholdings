import CTA from '@/components/global/CTA'
import PageHeader from '@/components/global/PageHeader'
import OurStory from '@/components/sections/about/OurStory'
import OurValues from '@/components/sections/about/OurValues'

export default function About() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <PageHeader
        title='About'
        subtitle='Get in touch with us'
        image='/images/contact.jpg'
      />
      <div>
        <OurStory />
        <OurValues />
        <CTA />
      </div>
    </div>
  )
}
