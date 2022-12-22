import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Readable } from 'node:stream';

import getRawBody from 'raw-body';

import { stripeSecretKey, stripeWebhookKey } from '@constants';

const stripe = require('stripe')(stripeSecretKey);

//  Disabling the automatic bodyParsing to allow to verify the raw body of a webhook request.
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, headers } = req;

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
        console.log("DATAOBJ!!!!!!!!", data.object)
        res.status(200).send({ success: true, payload: data.object });
      }
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  };

  switch (method) {
    case 'POST':
      return webHook();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
