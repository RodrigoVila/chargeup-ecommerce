import { NextApiRequest, NextApiResponse } from 'next'

import { User } from '@packages/models'
import { dbConnect } from '~utils'

const UsersAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  await dbConnect()

  const getUsers = async () => {
    try {
      const userList = await User.find({})
      return res.status(200).json(userList)
    } catch (e: any) {
      return res.status(400).json({
        success: false,
      })
    }
  }

  switch (method) {
    case 'GET':
      return getUsers()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default UsersAPI
