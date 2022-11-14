import { NextApiRequest, NextApiResponse } from 'next';

import User from '@models/user';
import dbConnect from '@utils/dbConnect';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { pid } = body;

  await dbConnect();

  const validateEmail = async () => {
    try {
      const userRecord = await User.findOneAndUpdate({ pid }, { confirmed: true });
      userRecord
        ? res.status(200).json({ success: true })
        : res.status(404).json({ success: false });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  };

  switch (method) {
    case 'POST':
      return validateEmail();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};