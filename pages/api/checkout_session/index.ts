import { NextApiRequest, NextApiResponse } from 'next';
import { stripeSecretKey } from '@constants';
const stripe = require('stripe')(stripeSecretKey);

const calculateOrderAmount = (items: CartProductType[]): number => {
  let orderAmount = 0;
  items.map((item) => {
    orderAmount = orderAmount += item.total;
  });
  return orderAmount * 100;

};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  const items = JSON.parse(body)

  const checkoutSession = async () => {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              unit_amount: calculateOrderAmount(items),
              currency: 'eur',
              product_data: {
                name: 'Pedido',
              },
            },
            quantity: 1
          },
        ],
        mode: 'payment',
        success_url: req.headers.origin,
        cancel_url: req.headers.origin,
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
