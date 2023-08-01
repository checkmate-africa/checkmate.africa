interface FormField {
  name: string
  type: string
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
  const skillsCategories = ['Frontend Development', 'Backend Development']
  const expereinceLevels = ['Less than a year', 'One - Two Years']

  const formFields = {
    name: {
      name: 'name',
      type: 'text',
      placeholder: 'Johnny Bravo',
      label: 'Name/Nickname',
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
    skill: {
      name: 'skill-category',
      type: 'select',
      placeholder: 'Select',
      label: 'Skill category',
      options: skillsCategories.map((item) => ({
        label: item,
        value: item,
      })),
      value: '',
      error: '',
    },
    experience: {
      name: 'experience',
      type: 'select',
      placeholder: 'Select',
      label: 'Years Of Expereince',
      options: expereinceLevels.map((item) => ({
        label: item,
        value: item,
      })),
      value: '',
      error: '',
    },
  }

  const updateField = (e: Event, field: FormField) => {
    field.value = (e.target as HTMLInputElement).value
  }

  return { updateField, fields: reactive<FormFields>(formFields) }
}
