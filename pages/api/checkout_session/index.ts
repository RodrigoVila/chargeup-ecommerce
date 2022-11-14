import { NextApiRequest, NextApiResponse } from 'next';
const isDevEnv = process.env.NODE_ENV === 'development';
const secretKey = isDevEnv ? process.env.STRIPE_SECRET_DEV_KEY : process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(secretKey);

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
  const lineItems = JSON.parse(body).items;

  // line_items: [
  //   {
  //     Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //     price: 'price_1M33HOBIc3UrM0KomsKJXf9A',
  //     quantity: 1,
  //   },
  // ],

  const checkoutSession = async () => {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
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
