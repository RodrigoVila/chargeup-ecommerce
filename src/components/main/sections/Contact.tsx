import { useEffect, useState, ChangeEvent } from 'react'
import sgMail from '@sendgrid/mail'

import BackgroundOverlay from '@main/BackgroundOverlay'
import Button from '@main/Button'
import { colors } from '@utils/constants'

interface ContactForm {
  to: string
  from: string
  subject: string
  text: string
  html?: string
}

const ContactSection = () => {
  const [offsetY, setOffsetY] = useState(0)
  const [data, setData] = useState<ContactForm>({
    to: 'style.alhwin@gmail.com', // Change to your recipient
    from: 'style.alhwin@gmail.com', // Change to your verified sender
    subject: '',
    text: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.send(data)
  }

  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    console.log('data', data)
  }, [data])

  const inputStyle =
    'mb-2 w-full rounded-md border-2 border-transparent bg-[rgba(255,255,255,0.2)] py-2 pl-2 placeholder:text-slate-300 focus:border-white focus:outline-none'
  return (
    <div
      style={{ transform: `translateY${offsetY * 0.5}px` }}
      className="relative m-auto flex h-screen w-full flex-col items-center justify-center bg-[url('/contact.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <BackgroundOverlay color="Black" />
      <p className="z-10 mb-6 text-5xl font-semibold text-white">Contactanos</p>
      <div className="font- z-10 flex w-full max-w-xl flex-col items-center justify-center overflow-hidden px-4 text-white">
        <input
          name="name"
          placeholder="Nombre"
          className={inputStyle}
          value={data.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className={inputStyle}
          value={data.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Escribenos un mensaje!"
          rows={5}
          maxLength={250}
          className={`${inputStyle} resize-none`}
          value={data.message}
          onChange={handleChange}
          multiple={true}
        />
        <Button title="Enviar" color={colors.purple} onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default ContactSection
