import { NextApiRequest, NextApiResponse } from 'next'
import getRawBody from 'raw-body'
import Stripe from 'stripe'

import { Order, User } from '@packages/models'
import { dbConnect } from '~utils/dbConnect'
import { sendEmail } from '~utils/nodemailer'
import { newOrderToHTML } from '~utils/htmlEmailParsers'

//  Disabling the automatic bodyParsing to allow to verify the raw body of a webhook request.
export const config = {
  api: {
    bodyParser: false,
  },
}

const updateOrderWithBuyersData = async (
  orderId: string,
  name: string,
  email: string,
  phone: string,
  status: string,
  paidAmount: number,
) => {
  try {
    const order = await Order.findOneAndUpdate(
      { id: orderId },
      { name, email, phone, status, paidAmount },
      { returnDocument: 'after' }, // Returns document after its updated
    ).lean()

    return order
  } catch (e: any) {
    sendErrorEmailToAdmin(orderId, email, e.message)
  }
}

const associateOrderWithRegisteredUser = async (email: string, order: any) => {
  return await User.findOneAndUpdate({ email }, { $push: { orders: order } })
}

const sendEmailToUser = async (orderId: string, email: string, emailOrder: any) => {
  try {
    const userMail = {
      from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: `Tu pedido de ChargeUP BCN [#${orderId.toString().substring(0, 8)}]`,
      html: newOrderToHTML(emailOrder),
    }

    await sendEmail(userMail)
  } catch (e: any) {
    sendErrorEmailToAdmin(orderId, email, e.message)
  }
}

const sendEmailToAdmin = async (
  orderId: string,
  email: string,
  emailOrder: any,
  userRegistered: boolean,
) => {
  try {
    const adminMail = {
      from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
      to: `${process.env.NODEMAILER_ADMIN_EMAIL}`,
      subject: `Nuevo pedido en ChargeUP BCN [#${orderId.toString().substring(0, 8)}]`,
      html: newOrderToHTML(emailOrder, { isForAdmin: true, userRegistered }),
    }

    await sendEmail(adminMail)
  } catch (e) {
    if (e instanceof Error) {
      // TODO: If mail to admin fails, then send mail to admin??. Fix this.
      sendErrorEmailToAdmin(orderId, email, e.message)
    }
  }
}

const sendErrorEmailToAdmin = async (orderId: string, email: string, error: string) => {
  const adminMail = {
    from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
    to: `${process.env.NODEMAILER_ADMIN_EMAIL}`,
    subject: `Hubo un error al procesar la solicitud [#${orderId.toString().substring(0, 8)}]`,
    html: `<div>Hubo un error al procesar la orden de ${email}. Verificar el admin panel para mas informacion. Error: ${error}</div>`,
  }

  await sendEmail(adminMail)
}

const StripHooksAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, headers } = req
  await dbConnect()

  const fullfillOrder = async (session: any) => {
    const {
      amount_total,
      payment_status: status,
      customer_details: { email, phone, name: stripeName },
      metadata: { orderId },
    } = session

    const paidAmount = amount_total / 100

    try {
      const order = await updateOrderWithBuyersData(
        orderId,
        stripeName,
        email,
        phone,
        status,
        paidAmount,
      )
      const user = await associateOrderWithRegisteredUser(email, order)

      const name = user ? user.name : order?.name ?? stripeName

      const emailOrder = { ...order, name }

      await sendEmailToUser(orderId, email, emailOrder)
      await sendEmailToAdmin(orderId, email, emailOrder, !!user)

      return res.status(201).json({ success: true, message: 'Order saved succesfully' })
    } catch (e: any) {
      await sendErrorEmailToAdmin(orderId, email, e.message)

      console.log(`❌ Error message2: ${e.message}`)

      return res.status(400).json({
        success: false,
        message: 'Stripe Hooks: Order error',
      })
    }
  }

  const webHook = async () => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const webHookKey = process.env.STRIPE_WEBHOOK_SECRET_KEY
    const rawBody = await getRawBody(req)
    const sig = headers['stripe-signature']

    try {
      if (!sig || !webHookKey) return
      const { type, data }: Stripe.Event = await stripe.webhooks.constructEvent(
        rawBody,
        sig,
        webHookKey,
      )
      if (type === 'checkout.session.completed') {
        const session = data.object
        await fullfillOrder(session)
      }
    } catch (e: any) {
      // Error cases have been fulfilled within the fullfillOrder func
      console.log(`❌ Error message: ${e.message}`)
      return res.status(200).send(`Webhook Error: ${e.message}`)
    }
  }

  switch (method) {
    case 'POST':
      return await webHook()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default StripHooksAPI
