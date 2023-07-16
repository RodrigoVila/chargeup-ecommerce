import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import useEncryption from '@hooks/useEncryption';

import User from '@models/user';
import dbConnect from '@utils/dbConnect';

const SignIn = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, password } = body;

  const { compareHashedPassword } = useEncryption();

  await dbConnect();

  const login = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        const token = uuidv4();

        const isPasswordOK = await compareHashedPassword(password, userRecord.password);

        if (isPasswordOK) {
          await User.findOneAndUpdate({ email }, { token });

          return res.status(201).json({
            success: true,
            message: 'Login Success',
            user: {
              email,
              token,
              name: userRecord.name,
            },
          });
        } else {
          return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
      } else {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: e.message,
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

export default SignIn;
