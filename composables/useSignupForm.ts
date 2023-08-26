interface FormField {
  name: string
  type: 'email' | 'text' | 'textarea'
  placeholder: string
  label: string
  value: string
  error: string
  options?: {
    label: string
    value: string
  }[]
}

type FormFields = {
  [key: string]: FormField
}

export const useSignupForm = () => {
  const formFields: { [x: string]: FormField } = {
    name: {
      name: 'name',
      type: 'text',
      placeholder: 'Michelle Doe',
      label: 'Your Name',
      value: '',
      error: '',
    },
    email: {
      name: 'email',
      type: 'email',
      placeholder: 'example@checkmate.africa',
      label: 'Email Address',
      value: '',
      error: '',
    },
    slackUsername: {
      name: 'slack-username',
      type: 'text',
      placeholder: '@yourslackid',
      label: 'Slack Username',
      value: '',
      error: '',
    },
    complaint: {
      name: 'complaint',
      type: 'textarea',
      placeholder: 'Describe your issue in details.',
      label: 'Your Complaint',
      value: '',
      error: '',
    },
  }

  const updateField = (e: Event, field: FormField) => {
    field.value = (e.target as HTMLInputElement).value
  }

  return { updateField, fields: reactive<FormFields>(formFields) }
}
