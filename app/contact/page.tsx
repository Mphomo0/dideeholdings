import PageHeader from '@/components/global/PageHeader'
import Address from '@/components/sections/contact/Address'
import ContactForm from '@/components/sections/contact/ContactForm'

export default function Contact() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <PageHeader
        title='Contact'
        subtitle='Get in touch with us'
        image='/images/contact.jpg'
      />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12 md:my-24'>
          <Address />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
