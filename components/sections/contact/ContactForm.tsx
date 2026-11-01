'use client'

import { useActionState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { submitContactForm } from '@/app/contact/actions'
import {
  EMPTY_CONTACT_VALUES,
  PROJECT_TYPES,
  type ContactFormState,
  type ContactValues,
} from '@/lib/contact'

const initialState: ContactFormState = {
  status: 'idle',
  values: EMPTY_CONTACT_VALUES,
}

function FieldError({
  state,
  name,
}: {
  state: ContactFormState
  name: keyof ContactValues
}) {
  const error = state.errors?.[name]
  if (!error) return null
  return (
    <p id={`${name}-error`} className='text-sm text-red-600'>
      {error}
    </p>
  )
}

function fieldProps(state: ContactFormState, name: keyof ContactValues) {
  const hasError = Boolean(state.errors?.[name])
  return {
    id: name,
    name,
    defaultValue: state.values[name],
    'aria-invalid': hasError || undefined,
    'aria-describedby': hasError ? `${name}-error` : undefined,
  }
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  )

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
          <form action={formAction} className='space-y-6'>
            {/* Honeypot: hidden from people, filled in by spam bots */}
            <div className='hidden' aria-hidden='true'>
              <label htmlFor='website'>Website</label>
              <input
                id='website'
                name='website'
                type='text'
                tabIndex={-1}
                autoComplete='off'
              />
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                  {...fieldProps(state, 'firstName')}
                  required
                  maxLength={100}
                  autoComplete='given-name'
                  placeholder='Your first name'
                  className='p-2 border border-gray-300'
                />
                <FieldError state={state} name='firstName' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  {...fieldProps(state, 'lastName')}
                  required
                  maxLength={100}
                  autoComplete='family-name'
                  placeholder='Your last name'
                  className='p-2 border border-gray-300'
                />
                <FieldError state={state} name='lastName' />
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                {...fieldProps(state, 'email')}
                type='email'
                required
                maxLength={254}
                autoComplete='email'
                placeholder='your.email@example.com'
                className='p-2 border border-gray-300'
              />
              <FieldError state={state} name='email' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input
                {...fieldProps(state, 'phone')}
                type='tel'
                autoComplete='tel'
                placeholder='+27 XX XXX XXXX'
                className='p-2 border border-gray-300'
              />
              <FieldError state={state} name='phone' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='projectType'>Project Type</Label>
              {/* Remount so the select picks up the restored value after a form reset */}
              <select
                key={state.values.projectType}
                {...fieldProps(state, 'projectType')}
                className='w-full p-2 border border-gray-300 rounded-md'
              >
                <option value=''>Select project type</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <FieldError state={state} name='projectType' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='message'>Project Details</Label>
              <Textarea
                {...fieldProps(state, 'message')}
                required
                minLength={10}
                maxLength={5000}
                rows={8}
                placeholder='Tell us about your project requirements, timeline, and any specific needs...'
                className='border border-gray-300'
              />
              <FieldError state={state} name='message' />
            </div>

            {state.message && (
              <p
                role={state.status === 'error' ? 'alert' : 'status'}
                className={`rounded-md p-3 text-sm font-medium ${
                  state.status === 'error'
                    ? 'bg-red-50 text-red-700'
                    : 'bg-green-50 text-green-700'
                }`}
              >
                {state.message}
              </p>
            )}

            <Button
              type='submit'
              size='lg'
              disabled={isPending}
              className='w-full bg-blue-700 hover:bg-blue-500 font-bold text-white'
            >
              {isPending ? 'SENDING...' : 'SEND MESSAGE'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
