import { MapPin, Mail, Clock, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Address() {
  return (
    <div className='space-y-4'>
      <Card className='bg-white border border-gray-200 shadow-md'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>Get In Touch</CardTitle>
          <p>We&rsquo;re here to help with your construction needs.</p>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='flex items-start'>
            <MapPin className='h-6 w-6 text-blue-500 mt-1 mr-4 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Office Address</h3>
              <p className='text-gray-600'>
                472 Rooibos Street
                <br />
                Centurion, 0158
                <br />
                Pretoria, Gauteng
              </p>
            </div>
          </div>

          <div className='flex flex-start'>
            <Mail className='h-6 w-6 text-blue-500 mt-1 mr-4 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Email</h3>
              <p className='text-gray-600'>stopper@dideeholdings.co.za</p>
            </div>
          </div>

          <div className='flex flex-start'>
            <Phone className='h-6 w-6 text-blue-500 mt-1 mr-4 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Phone</h3>
              <p className='text-gray-600'>061 426 2909</p>
            </div>
          </div>

          <div className='flex flex-start'>
            <Clock className='h-6 w-6 text-blue-500 mt-1 mr-4 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Business Hours</h3>
              <p className='text-gray-600'>
                Monday - Friday: 8:00 AM - 5:00 PM
                <br />
                Saturday: 8:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
