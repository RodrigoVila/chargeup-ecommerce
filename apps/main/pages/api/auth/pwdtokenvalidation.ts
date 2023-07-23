import { NextApiRequest, NextApiResponse } from 'next'

import { PasswordRecovery } from '~models'
import { dbConnect } from '~utils/dbConnect'

const PasswordTokenValidation = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { email, token } = body

  await dbConnect()

  const validateToken = async () => {
    try {
      const userRecord = await PasswordRecovery.findOne({ email })
      userRecord && userRecord.token === token
        ? res.status(200).json({ success: true })
        : res.status(404).json({ success: false })
    } catch (e:any) {
      return res.status(404).json({
        success: false,
      })
    }
  }

  switch (method) {
    case 'POST':
      return validateToken()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default PasswordTokenValidation
