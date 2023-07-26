import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { Button } from '@packages/button'

import { Section } from './components'
import { Input } from '@packages/input'
import { useAppActions, useAppSelector } from '~hooks'

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const ContactSection = () => {
  const [contactForm, setContactForm] = useState(INITIAL_STATE)
  const { formatMessage } = useIntl()
  const { isContactFormLoading } = useAppSelector()
  const { sendContactForm, displayInfoMessage } = useAppActions()

  const isContactFormCompleted = Object.values(contactForm).every((value) => value !== '')
  // TODO: WHY LOADING BUTTON KEEPS LOADING FOREVER EVEN AFTER SUCCESS
  const clearForm = () => setContactForm(INITIAL_STATE)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (!isContactFormCompleted) {
      displayInfoMessage(formatMessage({ id: 'ALL_INPUTS_REQUIRED' }))
      return
    }
    sendContactForm(contactForm)
  }

  useEffect(() => {
    !isContactFormLoading && isContactFormCompleted && clearForm()
  }, [isContactFormLoading])

  const inputStyle =
    'mb-2 w-full rounded-md text-sm border-2 border-transparent bg-[rgba(255,255,255,0.2)] py-2 pl-2 placeholder:text-slate-300 placeholder:tracking-wider focus:border-white focus:outline-none'
  return (
    <Section
      id='contact'
      title={formatMessage({ id: 'CONTACT' })}
      bgImage='peanut-butter.jpg'
      overlay
      bodyClassName='w-full !max-w-xl'
    >
      <div className='z-10 flex w-full flex-col items-center justify-center overflow-hidden px-4 text-white'>
        <Input
          name='name'
          placeholder={formatMessage({ id: 'NAME' })}
          className={inputStyle}
          value={contactForm.name}
          onChange={handleChange}
        />
        <Input
          name='email'
          placeholder={formatMessage({ id: 'EMAIL' })}
          className={inputStyle}
          value={contactForm.email}
          onChange={handleChange}
        />
        <Input
          name='subject'
          placeholder={formatMessage({ id: 'SUBJECT' })}
          className={inputStyle}
          value={contactForm.subject}
          onChange={handleChange}
        />
        <textarea
          name='message'
          placeholder={formatMessage({ id: 'WRITE_A_MESSAGE' })}
          rows={5}
          maxLength={250}
          className={`${inputStyle} resize-none`}
          value={contactForm.message}
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          className='mt-4'
          labelClassName='text-sm'
          loading={isContactFormLoading}
        >
          Enviar
        </Button>
      </div>
    </Section>
  )
}
