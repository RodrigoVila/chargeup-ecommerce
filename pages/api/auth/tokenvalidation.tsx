import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import useEncryption from '@hooks/useEncryption';

import User from '@models/user';
import dbConnect from '@utils/dbConnect';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, token } = body;

  await dbConnect();

  const validateToken = async () => {
    try {
      const userRecord = await User.findOne({ email });
      userRecord && userRecord.token === token
        ? res.status(200).json({ success: true })
        : res.status(404).json({ success: false });
    } catch (e) {
      return res.status(404).json({
        success: false,
      });
    }
  };

  switch (method) {
    case 'POST':
      return validateToken();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
