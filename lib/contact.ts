export const PROJECT_TYPES = [
  { value: 'commercial', label: 'Commercial Construction' },
  { value: 'residential', label: 'Residential Construction' },
  { value: 'industrial', label: 'Industrial Construction' },
  { value: 'renovation', label: 'Renovation & Refurbishment' },
  { value: 'consulting', label: 'Construction Consulting' },
  { value: 'other', label: 'Other' },
]

export type ContactValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  projectType: string
  message: string
}

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<keyof ContactValues, string>>
  // Returned on failure so the form can restore what the visitor typed.
  values: ContactValues
}

export const EMPTY_CONTACT_VALUES: ContactValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}
