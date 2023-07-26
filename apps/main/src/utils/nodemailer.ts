import nodemailer from 'nodemailer'

type MailOption = {
  from: string
  to: string
  subject: string
  html: any
}

const transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PWD,
  },
})

export const sendEmail = async (mailOption: MailOption) => {
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve(success)
      }
    })
  })

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOption, (error, data) => {
      if (error) {
        console.error('mail error', error)
        reject(error)
      } else {
        console.log('mail ok', data)
        resolve(data)
      }
    })
  })
}
