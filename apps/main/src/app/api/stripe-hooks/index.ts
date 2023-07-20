import { NextApiRequest, NextApiResponse } from 'next'
import getRawBody from 'raw-body'
import Stripe from 'stripe'

import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_KEY } from '~constants/keys'
import { Order, User } from '~models'
import { dbConnect, newOrderToHTML, sendEmailToUser } from '~utils'

const stripe = require('stripe')(STRIPE_SECRET_KEY)

//  Disabling the automatic bodyParsing to allow to verify the raw body of a webhook request.
export const config = {
  api: {
    bodyParser: false,
  },
}

const StripHooksAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, headers } = req
  await dbConnect()

  // Updates order status and buyer email in DB
  const fullfillOrder = async (session: any) => {
    const {
      amount_total,
      payment_status: status,
      customer_details: { email, phone, name: stripeName },
      metadata: { orderId },
    } = session

    const paidAmount = amount_total / 100

    try {
      const order = await Order.findOneAndUpdate(
        { id: orderId },
        { status, paidAmount, email, phone, name: stripeName },
        { returnDocument: 'after' }, // Returns document after its updated
      ).lean()

      const user = await User.findOneAndUpdate({ email }, { $push: { orders: order } })

      const newOrder = {
        ...order,
        name: user ? user.name : stripeName,
      }

      const userMail = {
        from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
        to: email,
        subject: `Tu pedido de ChargeUP BCN [#${orderId.toString().substring(0, 8)}]`,
        html: newOrderToHTML(newOrder),
      }

      const adminMail = {
        from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
        to: 'style.alhwin@gmail.com',
        subject: `Nuevo pedido en ChargeUP BCN [#${orderId.toString().substring(0, 8)}]`,
        html: newOrderToHTML(newOrder, { isForAdmin: true, userRegistered: !!user }),
      }

      await sendEmailToUser(userMail)
      await sendEmailToUser(adminMail)

      return res.status(201).json({ success: true, message: 'Order saved succesfully' })
    } catch (e:any) {
      const errorMail = {
        from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
        to: 'rodrigo.s.vila@gmail.com',
        subject: `Error al procesar orden [#${orderId}]`,
        html: '<div>Hubo un error al procesar la orden. Verificar en el admin panel y con el cliente.</div>',
      }

      await sendEmailToUser(errorMail)

      console.log(`❌ Error message2: ${e.message}`)

      return res.status(400).json({
        success: false,
        message: 'Stripe Hooks: Order error',
      })
    }
  }
  const webHook = async () => {
    const rawBody = await getRawBody(req)
    const sig = headers['stripe-signature']
    try {
      if (!sig || !STRIPE_WEBHOOK_KEY) return
      const { type, data }: Stripe.Event = await stripe.webhooks.constructEvent(
        rawBody,
        sig,
        STRIPE_WEBHOOK_KEY,
      )
      if (type === 'checkout.session.completed') {
        const session = data.object
        fullfillOrder(session)
      }
    } catch (e:any) {
      console.log(`❌ Error message: ${e.message}`)
      return res.status(200).send(`Webhook Error: ${e.message}`)
    }
  }

  switch (method) {
    case 'POST':
      return webHook()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default StripHooksAPI
