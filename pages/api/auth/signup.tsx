import { NextApiRequest, NextApiResponse } from 'next'

import User from '@models/user'
import dbConnect from '@utils/dbConnect'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { email, password, name, lastName } = body

  await dbConnect()

  const register = async () => {
    try {
      const user = await User.create({ email, password, name, lastName })
      return res.status(201).json({ success: true, message: "User created" })
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: `This email already exists in our database.`,
      })
    }
  }

  switch (method) {
    case 'POST':
      return register()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}
