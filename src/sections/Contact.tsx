import { SyntheticEvent, useRef } from 'react';

import BackgroundOverlay from '@main/BackgroundOverlay';
import Button from '@shared/Buttons/CustomButton';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const form = useRef();

  const { t } = useTranslation();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const inputStyle =
    'mb-2 w-full rounded-md border-2 border-transparent bg-[rgba(255,255,255,0.2)] py-2 pl-2 placeholder:text-slate-300 placeholder:tracking-wider focus:border-white focus:outline-none';
  return (
    <div
      id="contact"
      className="relative m-auto flex h-screen w-full flex-col items-center justify-center bg-[url('/contact.jpg')] bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <BackgroundOverlay />
      <p className="z-10 w-full pb-12 text-5xl text-center text-white font-dinBold">CONTACTANOS</p>
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-xl px-4 overflow-hidden text-white">
        <form ref={form} onSubmit={handleSubmit}>
          <input name="name" placeholder={t('NAME')} className={inputStyle} />
          <input name="email" placeholder={t('EMAIL')} className={inputStyle} />
          <input name="subject" placeholder={t('SUBJECT')} className={inputStyle} />
          <textarea
            name="message"
            placeholder="Escribenos un mensaje!"
            rows={5}
            maxLength={250}
            className={`${inputStyle} resize-none`}
          />
          <Button onClick={handleSubmit}>Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
