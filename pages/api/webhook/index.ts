import { NextApiRequest, NextApiResponse } from 'next';
import { stripeSecretKey } from '@constants';

const stripe = require('stripe')(stripeSecretKey);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, headers } = req;

  const endpointSecret = 'whsec_104a977b04be5650a1d79027db684194f87ed3232c51214b51fb87dbb5e393da';

  const webHook = async () => {
    const sig = headers['stripe-signature'];

    try {
      const { type, data } = await stripe.webhooks.constructEvent(body, sig, endpointSecret);

      if (type === 'payment_intent.succeeded') {
        console.log('payment_intent.succeeasdaseeesaded', data.object);
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
