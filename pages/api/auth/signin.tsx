import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import useEncryption from '@hooks/useEncryption';

import User from '@models/user';
import dbConnect from '@utils/dbConnect';
import { lang } from '@constants';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, password } = body;

  const { compareHashedPassword } = useEncryption();

  await dbConnect();

  const login = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        const token = uuidv4();
        const isPasswordOK = compareHashedPassword(password, userRecord.password);

        return isPasswordOK
          ? res
              .status(201)
              .json({ success: true, message: lang.en.USER_LOGIN_SUCCESS, email, token })
          : res.status(401).json({ success: false, message: lang.en.INVALID_CREDENTIALS });
      } else {
        return res.status(401).json({ success: false, message: lang.en.INVALID_CREDENTIALS });
      }
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  switch (method) {
    case 'POST':
      return login();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
