import { NextApiRequest, NextApiResponse } from 'next';

import User from '@models/user';
import dbConnect from '@utils/dbConnect';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, token } = body;

  await dbConnect();

  const getUserDetails = async () => {
    try {
      const userRecord = await User.findOne({ email });
      const user: UserDetailsType = {
        email,
        name: userRecord.name,
        lastName: userRecord.lastName,
        location: userRecord.location,
        mobileNo: userRecord.mobileNo,
        prefixNo: userRecord.prefixNo,
        prefContact: userRecord.prefContact,
      };
      userRecord && userRecord.token === token
        ? res.status(200).json({ success: true, user })
        : res.status(404).json({ success: false });
    } catch (e) {
      return res.status(404).json({
        success: false,
      });
    }
  };

  switch (method) {
    case 'POST':
      return getUserDetails();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
