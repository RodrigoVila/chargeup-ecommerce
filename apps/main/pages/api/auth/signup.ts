import { NextApiRequest, NextApiResponse } from 'next'

import { User } from '~models'
import { dbConnect } from '~utils/dbConnect'
import { emailVerificationToHTML } from '~utils/htmlEmailParsers'
import { sendEmail } from '~utils/nodemailer'

const SignUp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { name, lastName, email, password, pid } = body

  const mailOption = {
    from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
    to: email,
    subject: `Nueva cuenta en Charge UP BCN`,
    html: emailVerificationToHTML(name, pid),
  }

  await dbConnect()

  const register = async () => {
    try {
      await User.create({ name, lastName, email, password, pid })
      await sendEmail(mailOption)
      return res.status(201).json({ success: true, message: 'User registered Successfully' })
    } catch (e: any) {
      return res.status(409).json({
        success: false,
        message: 'User Exists',
        err: e,
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

export default SignUp
