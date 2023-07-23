import { SyntheticEvent } from 'react';
import { useIntl } from 'react-intl';

import { Button } from '@packages/button';

import { Section } from './components';

export const ContactSection = () => {
  const { formatMessage } = useIntl();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const inputStyle =
    'mb-2 w-full rounded-md border-2 border-transparent bg-[rgba(255,255,255,0.2)] py-2 pl-2 placeholder:text-slate-300 placeholder:tracking-wider focus:border-white focus:outline-none';
  return (
    <Section id="contact" title="Contact" bgImage="contact.jpg" overlay>
      <p className="z-10 w-full pb-12 text-5xl text-center text-white font-dinBold">CONTACTANOS</p>
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-xl px-4 overflow-hidden text-white">
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder={formatMessage({ id: 'NAME' })} className={inputStyle} />
          <input name="email" placeholder={formatMessage({ id: 'EMAIL' })} className={inputStyle} />
          <input
            name="subject"
            placeholder={formatMessage({ id: 'SUBJECT' })}
            className={inputStyle}
          />
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
    </Section>
  );
};
