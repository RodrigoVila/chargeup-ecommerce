import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import User from '@models/user';
import dbConnect from '@utils/dbConnect';
import { lang } from '@constants';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { name, lastName, email, password } = body;

  await dbConnect();

  const register = async () => {
    try {
      const token = uuidv4();
      await User.create({ name, lastName, email, password, token });

      return res.status(201).json({ success: true, message: lang.en.USER_REGISTER_SUCCESS, token });
    } catch (e) {
      return res.status(409).json({
        success: false,
        message: lang.en.USER_EXIST,
      });
    }
  };

  switch (method) {
    case 'POST':
      return register();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
