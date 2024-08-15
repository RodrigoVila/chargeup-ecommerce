import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

import { User, PasswordRecovery } from '@packages/models'
import { dbConnect } from '~utils/dbConnect'
import { sendEmail } from '~utils/nodemailer'
import { passwordRecoveryToHTML } from '~utils/htmlEmailParsers'

const PasswordRecoveryAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { email } = body

  const token = uuidv4()

  const mailOption = {
    from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
    to: email,
    subject: `Modificación de contraseña en Charge UP BCN`,
    html: passwordRecoveryToHTML(email, token),
  }

  await dbConnect()

  const createSessionForPassRecovery = async () => {
    try {
      const userRecord = await User.findOne({ email })
      if (userRecord) {
        try {
          await PasswordRecovery.create({ email, token, created: new Date() })
          await sendEmail(mailOption)
          return res.status(200).json({ success: true })
        } catch (e: any) {
          return res.status(409).json({
            success: false,
            message: e.message,
          })
        }
      } else {
        return res.status(404).json({ success: false, message: 'User Not Found' })
      }
    } catch (e: any) {
      return res.status(409).json({
        success: false,
        message: 'Invalid Token',
      })
    }
  }

  switch (method) {
    case 'POST':
      return createSessionForPassRecovery()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default PasswordRecoveryAPI
