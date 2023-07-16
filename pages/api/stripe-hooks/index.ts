import { NextApiRequest, NextApiResponse } from 'next';
import getRawBody from 'raw-body';
import Stripe from 'stripe';

import { stripeSecretKey, stripeWebhookKey } from '@constants/keys';

import Order from '@models/order';
import User from '@models/user';
import dbConnect from '@utils/dbConnect';
import { newOrderToHTML } from '@utils/htmlEmailParsers';
import { sendEmailToUser } from '@utils/nodemailer';

const stripe = require('stripe')(stripeSecretKey);

//  Disabling the automatic bodyParsing to allow to verify the raw body of a webhook request.
export const config = {
  api: {
    bodyParser: false,
  },
};

const StripHooksAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, headers } = req;
  await dbConnect();

  // Updates order status and buyer email in DB
  const fullfillOrder = async (session) => {
    const {
      amount_total,
      payment_status: status,
      customer_details: { email, phone, name: stripeName },
      metadata: { orderId },
    } = session;

    const paidAmount = amount_total / 100;

    try {
      const order = await Order.findOneAndUpdate(
        { id: orderId },
        { status, paidAmount, email, phone, name: stripeName },
        { returnDocument: 'after' } // Returns document after its updated
      ).lean();

      const user = await User.findOneAndUpdate({ email }, { $push: { orders: order } });

      const newOrder = {
        ...order,
        name: user ? user.name : stripeName,
      };

      const userMail = {
        from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
        to: email,
        subject: `Tu pedido de ChargeUP BCN [#${orderId.toString().substring(0, 8)}]`,
        html: newOrderToHTML(newOrder),
      };

      const adminMail = {
        from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
        to: 'style.alhwin@gmail.com',
        subject: `Nuevo pedido en ChargeUP BCN [#${orderId.toString().substring(0, 8)}]`,
        html: newOrderToHTML(newOrder, { isForAdmin: true, userRegistered: !!user }),
      };

      await sendEmailToUser(userMail);
      await sendEmailToUser(adminMail);

      return res.status(201).json({ success: true, message: 'Order saved succesfully' });
    } catch (err) {
      const errorMail = {
        from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
        to: 'rodrigo.s.vila@gmail.com',
        subject: `Error al procesar orden [#${orderId}]`,
        html: '<div>Hubo un error al procesar la orden. Verificar en el admin panel y con el cliente.</div>',
      };

      await sendEmailToUser(errorMail);

      console.log(`❌ Error message2: ${err.message}`);

      return res.status(400).json({
        success: false,
        message: 'Stripe Hooks: Order error',
      });
    }
  };
  const webHook = async () => {
    const rawBody = await getRawBody(req);
    const sig = headers['stripe-signature'];
    try {
      if (!sig || !stripeWebhookKey) return;
      const { type, data }: Stripe.Event = await stripe.webhooks.constructEvent(
        rawBody,
        sig,
        stripeWebhookKey
      );
      if (type === 'checkout.session.completed') {
        const session = data.object;
        fullfillOrder(session);
      }
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      return res.status(200).send(`Webhook Error: ${err.message}`);
    }
  };

  switch (method) {
    case 'POST':
      return webHook();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default StripHooksAPI;
