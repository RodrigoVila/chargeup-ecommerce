import { NextApiRequest, NextApiResponse } from 'next'

import { User, PasswordRecovery } from '@packages/models'
import { dbConnect } from '~utils/dbConnect'
import { compareHashedPassword } from '~utils/encrypt'

const UpdatePassword = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { email, oldPassword, newPassword } = body

  await dbConnect()

  const updateUserPassword = async () => {
    try {
      const userRecord = await User.findOne({ email })
      if (userRecord) {
        if (oldPassword) {
          const isPasswordOK = await compareHashedPassword(oldPassword, userRecord.password)

          if (isPasswordOK) {
            await User.findOneAndUpdate({ email }, { password: newPassword })
          } else {
            return res.status(401).json({ success: false, message: "Passwords don't match" })
          }
        } else {
          const { confirmed } = await User.findOneAndUpdate({ email }, { password: newPassword })

          confirmed && (await PasswordRecovery.findOneAndDelete({ email }))
        }
        return res.status(200).json({
          success: true,
          message: 'Data modified succesfully',
        })
      } else {
        return res.status(404).json({ success: false, message: 'User not found' })
      }
    } catch (e: any) {
      return res.status(404).json({ success: false, message: e.message })
    }
  }

  switch (method) {
    case 'PUT':
      return updateUserPassword()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default UpdatePassword
