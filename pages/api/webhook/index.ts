import { NextApiRequest, NextApiResponse } from 'next';
import { stripeSecretKey } from '@constants';

const stripe = require('stripe')(stripeSecretKey);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, headers } = req;

  const webHook = async () => {
    const sig = headers['stripe-signature'];

    try {
      const { type, data } = await stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);

      if (type === 'payment_intent.succeeded') {
        res.status(200).send({ success: true, payload: data.object });
      } else {
        console.log(`Unhandled event type ${type}`);
      }
    } catch (e) {
      console.error('webhook error', e.message);
      return res.status(400).send({ message: `Webhook error: ${e.message}` });
    }
  };

  switch (method) {
    case 'POST':
      return webHook();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
