import { NextApiRequest, NextApiResponse } from 'next'

import { User } from '@packages/models'
import { dbConnect } from '~/utils/dbConnect'
import { UserDetailsType } from '@packages/types'

const UsersAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { email, token, id } = body

  await dbConnect()

  const getUsers = async () => {
    try {
      const users = await User.find({})
      return res.status(200).json({ success: true, users })
    } catch (e: any) {
      return res.status(400).json({
        success: false,
        message: e.message,
      })
    }
  }

  const createUser = async () => {
    try {
      const user = await User.create(body)
      return res.status(201).json(user)
    } catch (e: any) {
      return res.status(400).json({
        success: false,
      })
    }
  }

  switch (method) {
    case 'GET':
      return getUsers()
    case 'POST':
      return createUser()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default UsersAPI
