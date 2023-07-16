import useEncryption from '@hooks/useEncryption';
import PasswordRecovery from '@models/passwordRecovery';
import User from '@models/user';
import dbConnect from '@utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';

const UpdatePassword = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, oldPassword, newPassword } = body;

  const { compareHashedPassword } = useEncryption();

  await dbConnect();

  const updateUserPassword = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        if (oldPassword) {
          const isPasswordOK = await compareHashedPassword(oldPassword, userRecord.password);

          if (isPasswordOK) {
            await User.findOneAndUpdate({ email }, { password: newPassword });
          } else {
            return res.status(401).json({ success: false, message: "Passwords don't match" });
          }
        } else {
          const { confirmed } = await User.findOneAndUpdate({ email }, { password: newPassword });

          confirmed && (await PasswordRecovery.findOneAndDelete({ email }));
        }
        return res.status(200).json({
          success: true,
          message: 'Data modified succesfully',
        });
      } else {
        return res.status(404).json({ success: false, message: 'User not found' });
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

export default UpdatePassword;
