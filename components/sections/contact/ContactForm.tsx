import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  return (
    <div className='space-y-4'>
      <Card className='bg-white border border-gray-200 shadow-md'>
        <CardHeader>
          <CardTitle className='text-2xl'>Send Us a Message</CardTitle>
          <p className='text-gray-600'>
            Fill out the form below and we&lsquo;ll get back to you within 24
            hours.
          </p>
        </CardHeader>
        <CardContent>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                  id='firstName'
                  placeholder='Your first name'
                  className='p-2 border border-gray-300'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  id='lastName'
                  placeholder='Your last name'
                  className='p-2 border border-gray-300'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='your.email@example.com'
                className='p-2 border border-gray-300'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input
                id='phone'
                type='tel'
                placeholder='+27 XX XXX XXXX'
                className='p-2 border border-gray-300'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='projectType'>Project Type</Label>
              <select
                id='projectType'
                className='w-full p-2 border border-gray-300 rounded-md'
              >
                <option value=''>Select project type</option>
                <option value='commercial'>Commercial Construction</option>
                <option value='residential'>Residential Construction</option>
                <option value='industrial'>Industrial Construction</option>
                <option value='renovation'>Renovation & Refurbishment</option>
                <option value='consulting'>Construction Consulting</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='message'>Project Details</Label>
              <Textarea
                id='message'
                rows={8}
                placeholder='Tell us about your project requirements, timeline, and any specific needs...'
                className='border border-gray-300'
              />
            </div>

            <Button
              type='submit'
              size='lg'
              className='w-full bg-blue-700 hover:bg-blue-500 font-bold text-white'
            >
              SEND MESSAGE
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
