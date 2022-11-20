import { NextApiRequest, NextApiResponse } from 'next';
import { stripeSecretKey } from '@constants';
const stripe = require('stripe')(stripeSecretKey);

const calculateOrderAmount = (items: CheckoutItem[]) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  // let orderAmount = 0;
  // items.map((item) => {
  //   let itemAmount = item.quantity * item.price;
  //   orderAmount = orderAmount += itemAmount;
  // });
  // return orderAmount;
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  const checkoutSession = async () => {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: JSON.parse(body),
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?success=false`,
      });
      return res.status(200).json({
        success: true,
        url: session.url,
      });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  };

  switch (method) {
    case 'POST':
      return checkoutSession();
    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
