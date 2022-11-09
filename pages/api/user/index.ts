import { NextApiRequest, NextApiResponse } from 'next';
import User from '@models/user';
import dbConnect from '@utils/dbConnect';
import Id from '../order/[id]';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, token, id } = body;
  await dbConnect();

  const getUser = async () => {
    try {
      const userRecord = await User.findOne({ email });
      const user: UserDetailsType = {
        id: userRecord.id,
        name: userRecord.name,
        lastName: userRecord.lastName,
        location: userRecord.location,
        mobileNo: userRecord.mobileNo,
        prefixNo: userRecord.prefixNo,
        prefContact: userRecord.prefContact,
        email,
        token,
      };
      userRecord && userRecord.token === token
        ? res.status(200).json({ success: true, user })
        : res.status(404).json({ success: false });
    } catch (e) {
      return res.status(404).json({ success: false });
    }
  };

  const updateUser = async () => {
    try {
      await User.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });

      return res.status(200).json({ success: true });
    } catch (e) {
      return res.status(400).json({ success: false, message: e.message });
    }
  };
  const deleteUser = async () => {
    try {
      await User.deleteOne({ email });

      return res.status(200).json({ success: true });
    } catch (e) {
      return res.status(400).json({ success: false });
    }
  };

  switch (method) {
    case 'POST':
      return getUser();
    case 'PUT':
      return updateUser();
    case 'DELETE':
      return deleteUser();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
