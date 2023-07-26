import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '~models';
import { dbConnect } from '~utils/dbConnect';
import { UserDetailsType } from '~types';
import { sendEmail } from '~utils/nodemailer';

const ContactFormAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  const sendContactEmail = async () => {
    const { contactForm } = JSON.parse(body);
    const { name, email, subject, message } = contactForm;

    const mailOption = {
      from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
      to: `${process.env.NODEMAILER_ADMIN_EMAIL}`,
      subject: `Nuevo contacto desde la web. Asunto: ${subject}`,
      html: `<div>Hola Daniela, recibiste un nuevo contacto desde el formulario web.<br/><br/>De: ${name}<br/><br/> Email: ${email}<br/><br/>Mensaje: ${message}</div>`,
    };

    try {
      await sendEmail(mailOption);
      return res.status(200).json({ success: true });
    } catch (e: any) {
      console.log(e);
      return res.status(400).json({ success: false });
    }
  };

  switch (method) {
    case 'POST':
      return sendContactEmail();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default ContactFormAPI;
