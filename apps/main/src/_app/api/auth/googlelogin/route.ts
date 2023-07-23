import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

import { User } from '~models'
import { dbConnect } from '~utils/dbConnect'

const GoogleLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { email, name, lastName } = body

  await dbConnect()

  const signInOrSignUp = async () => {
    const token = uuidv4()
    try {
      const userRecord = await User.findOne({ email })
      if (userRecord) {
        await User.findOneAndUpdate({ email }, { token })

        return res.status(200).json({
          success: true,
          message: 'User Login OK',
          user: {
            email,
            token,
            //If there is a registered or modified name, bring that one.
            name: userRecord.name,
          },
        })
      } else {
        await User.create({ name, lastName, email, token, googleAcount: true, confirmed: true })
        return res.status(201).json({
          success: true,
          message: "User registered OK",
          user: {
            email,
            token,
            //If creating account, then assign the one that google provides.
            name,
          },
        })
      }
    } catch (e: any) {
      return res.status(400).json({
        success: false,
        error: e.message,
      })
    }
  }

  switch (method) {
    case 'POST':
      return signInOrSignUp()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default GoogleLogin
