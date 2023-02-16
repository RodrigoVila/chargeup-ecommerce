import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import getRawBody from 'raw-body';

import Order from '@models/order';
import { stripeSecretKey, stripeWebhookKey } from '@constants/keys';
import { lang } from '@constants/lang';
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, headers } = req;
  await dbConnect();

  // Updates order status and buyer email in DB
  const fullfillOrder = async (session) => {
    const {
      amount_total,
      payment_status: status,
      customer_details: { email },
      metadata: { orderId },
    } = session;
    const paidAmount = amount_total / 100;

    try {
      await Order.findOneAndUpdate({ id: orderId }, { status, paidAmount, buyerEmail: email });

      const order = await Order.findOne({ id: orderId });

      const mailOption = {
        from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
        to: email,
        subject: `Tu pedido de ChargeUP BCN [#${orderId.substring(orderId.length - 5)}]`,
        html: newOrderToHTML(order),
      };

      await sendEmailToUser(mailOption);

      return res.status(201).json({ success: true, message: lang.en.ORDER_SUCCESS });
    } catch (err) {
      console.log(`❌ Error message2: ${err.message}`);
      return res.status(400).json({
        success: false,
        message: lang.en.ORDER_ERROR,
      });
    }
  };
  // Order.findOneAndUpdate({ id: orderId }, { emailSent: false });
  // Send email to user
  // send user to success screen

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
        console.log("oaaaaaaaa",process.env.HOLA)
        console.log("El que deberia ser para este env",process.env.STRIPE_WEBHOOK_SECRET_KEY)
        console.log("ENV",process.env.NODE_ENV)
        console.log("el que realmente es",stripeWebhookKey)
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
