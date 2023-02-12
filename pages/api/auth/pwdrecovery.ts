import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import User from '@models/user';
import PasswordRecovery from '@models/passwordRecovery';
import { lang } from '@constants/lang';
import dbConnect from '@utils/dbConnect';
import { passwordRecoveryToHTML } from '@utils/htmlEmailParsers';
import { sendEmailToUser } from '@utils/nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email } = body;

  const token = uuidv4();

  const mailOption = {
    from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
    to: email,
    subject: `Modificación de contraseña en Charge UP BCN`,
    html: passwordRecoveryToHTML(email, token),
  };

  await dbConnect();

  const createSessionForPassRecovery = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        try {
          await PasswordRecovery.create({ email, token });
          await sendEmailToUser(mailOption);
          return res.status(200).json({ success: true });
        } catch (e) {
          return res.status(409).json({
            success: false,
            message: e.message,
          });
        }
      } else {
        return res.status(404).json({ success: false, message: lang.en.USER_NOT_FOUND });
      }
    } catch (e) {
      return res.status(409).json({
        success: false,
        message: lang.en.INVALID_TOKEN,
      });
    }
  };

  switch (method) {
    case 'POST':
      return createSessionForPassRecovery();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
