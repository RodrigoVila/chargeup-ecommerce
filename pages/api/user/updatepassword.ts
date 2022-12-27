import { NextApiRequest, NextApiResponse } from 'next';
import User from '@models/user';
import dbConnect from '@utils/dbConnect';
import Id from '../order/[id]';
import useEncryption from '@hooks/useEncryption';
import { lang } from '@constants/lang';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, oldPassword, password } = body;

  const { compareHashedPassword } = useEncryption();

  await dbConnect();

  const updateUserPassword = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        const isPasswordOK = await compareHashedPassword(oldPassword, userRecord.password);

        if (isPasswordOK) {
          await User.findOneAndUpdate({ email }, { password });

          return res.status(200).json({
            success: true,
            message: lang.en.CHANGE_USER_DATA_SUCCESS,
          });
        } else {
          return res.status(401).json({ success: false, message: lang.en.INVALID_CREDENTIALS });
        }
      } else {
        return res.status(404).json({ success: false, message: lang.en.USER_NOT_FOUND });
      }
    } catch (e) {
      return res.status(404).json({ success: false, message: e.message });
    }
  };

  switch (method) {
    case 'PUT':
      return updateUserPassword();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
