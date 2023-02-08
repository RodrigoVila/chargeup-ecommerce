import { NextApiRequest, NextApiResponse } from 'next';

import User from '@models/user';
import { lang } from '@constants/lang';
import dbConnect from '@utils/dbConnect';
import { passwordRecoveryToHTML } from '@utils/htmlEmailParsers';
import { sendEmailToUser } from '@utils/nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { name, lastName, email, password, pid } = body;

  const mailOption = {
    from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
    to: email,
    subject: `Modificación de contraseña en Charge UP BCN`,
    // html: passwordRecoveryToHTML(email), Arreglar esto
  };

  await dbConnect();

  const passRecovery = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        await sendEmailToUser(mailOption);
        return res.status(200).json({ success: true });
      } else {
        return res.status(404).json({ success: false, message: lang.en.USER_NOT_FOUND });
      }
    } catch (e) {
      return res.status(409).json({
        success: false,
        message: lang.en.USER_EXIST,
        err: e,
      });
    }
  };

  switch (method) {
    case 'POST':
      return passRecovery();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
