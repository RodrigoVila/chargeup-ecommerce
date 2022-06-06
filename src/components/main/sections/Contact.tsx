import { useState, ChangeEvent, FC } from 'react'

import BackgroundOverlay from '@main/BackgroundOverlay'
import Button from '@main/Button'
import { colors } from '@utils/constants'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  html?: string
}

const ContactSection: FC = () => {
  const [data, setData] = useState<ContactForm>({
    name: '', // Change to your recipient
    email: '', // Change to your verified sender
    subject: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = () => {}

  const inputStyle =
    'mb-2 w-full rounded-md border-2 border-transparent bg-[rgba(255,255,255,0.2)] py-2 pl-2 placeholder:text-slate-300 placeholder:tracking-wider focus:border-white focus:outline-none'
  return (
    <div id="contact" className="relative m-auto flex h-screen w-full flex-col items-center justify-center bg-[url('/contact.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <BackgroundOverlay color={colors.overlay} />
      <p className="z-10 w-full px-2 pb-12 text-center font-dinBold text-6xl text-white">
        CONTACTANOS
      </p>
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
