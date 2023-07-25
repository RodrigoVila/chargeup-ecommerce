import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { User } from '~models';

import { dbConnect } from '~utils/dbConnect';
import { compareHashedPassword } from '~utils/encrypt';

const SignIn = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, password } = body;

  await dbConnect();

  const login = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        const token = uuidv4();

        const userHasRegisteredWithGoogleAccount = userRecord.googleAccount;
        const userHasAPassword = !!userRecord.password;

        if (userHasRegisteredWithGoogleAccount && !userHasAPassword) {
          return res.status(409).json({
            success: false,
            message: 'Email registered with google',
          });
        }

        const hasUserValidatedAccount = userRecord.confirmed

        if (!hasUserValidatedAccount) {
          return res.status(401).json({
            success: false,
            message: 'Need to validate account',
          });
        }

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
    } catch (e: any) {
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
