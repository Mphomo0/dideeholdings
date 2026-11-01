'use server'

import nodemailer from 'nodemailer'
import {
  EMPTY_CONTACT_VALUES,
  PROJECT_TYPES,
  type ContactFormState,
  type ContactValues,
} from '@/lib/contact'

const CONTACT_RECIPIENT = 'stopper@dideeholdings.co.za'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,19}$/

function getText(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

function validate(values: ContactValues) {
  const errors: ContactFormState['errors'] = {}

  if (!values.firstName || values.firstName.length > 100) {
    errors.firstName = 'Please enter your first name.'
  }
  if (!values.lastName || values.lastName.length > 100) {
    errors.lastName = 'Please enter your last name.'
  }
  if (values.email.length > 254 || !EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (
    values.projectType &&
    !PROJECT_TYPES.some((type) => type.value === values.projectType)
  ) {
    errors.projectType = 'Please select a project type from the list.'
  }
  if (values.message.length < 10 || values.message.length > 5000) {
    errors.message = 'Please tell us about your project (10 to 5000 characters).'
  }

  return errors
}

async function sendEnquiry(values: ContactValues) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP_HOST, SMTP_USER and SMTP_PASS must be set')
  }

  const port = Number(SMTP_PORT) || 587
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  })

  const name = `${values.firstName} ${values.lastName}`.replace(/\s+/g, ' ')
  const projectType =
    PROJECT_TYPES.find((type) => type.value === values.projectType)?.label ??
    'Not specified'

  await transporter.sendMail({
    from: { name: 'Didee Holdings Website', address: SMTP_FROM || SMTP_USER },
    to: CONTACT_RECIPIENT,
    replyTo: { name, address: values.email },
    subject: `New website enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || 'Not provided'}`,
      `Project type: ${projectType}`,
      '',
      'Project details:',
      values.message,
    ].join('\n'),
  })
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const successState: ContactFormState = {
    status: 'success',
    message: 'Thank you! Your message has been sent. We’ll be in touch soon.',
    values: EMPTY_CONTACT_VALUES,
  }

  // Hidden from people, so only bots fill it in. Pretend it worked so they move on.
  if (getText(formData, 'website')) {
    return successState
  }

  const values: ContactValues = {
    firstName: getText(formData, 'firstName'),
    lastName: getText(formData, 'lastName'),
    email: getText(formData, 'email'),
    phone: getText(formData, 'phone'),
    projectType: getText(formData, 'projectType'),
    message: getText(formData, 'message'),
  }

  const errors = validate(values)
  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please check the highlighted fields and try again.',
      errors,
      values,
    }
  }

  try {
    await sendEnquiry(values)
    return successState
  } catch (error) {
    console.error('Contact form email failed to send:', error)
    return {
      status: 'error',
      message: `We couldn’t send your message. Please try again, or email us at ${CONTACT_RECIPIENT} or call 061 426 2909.`,
      values,
    }
  }
}
