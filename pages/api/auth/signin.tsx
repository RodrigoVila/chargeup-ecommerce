import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

import useEncryption from '@hooks/useEncryption';
import User from '@models/user';
import dbConnect from '@utils/dbConnect';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, password, token } = body;


  //Aca deberia llegar el password sin proteger. No deberiamos enviarlo asi a la API
  const { compareHashedPassword } = useEncryption();
  await dbConnect();

  const signIn = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        const isPasswordOK = compareHashedPassword(password, userRecord.password);

        const userResponse = {
          email,
          token: token,
        };

        isPasswordOK
          ? res.status(201).json({ success: true, message: 'Login exitoso', user: userResponse })
          : res.status(401).json({ success: false, message: 'Credenciales invalidas' });
      } else {
        return res.status(401).json({ success: false, message: 'Credenciales invalidas' });
      }
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  switch (method) {
    case 'POST':
      return signIn();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
