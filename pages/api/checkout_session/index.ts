import { NextApiRequest, NextApiResponse } from 'next';
import { stripeSecretKey } from '@constants/keys';
import Order from '@models/order';
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

  const { newOrder, email } = JSON.parse(body);
  const checkoutSession = async () => {
    const saveOrderInDB = async () => await Order.create(newOrder);
    console.log('emaillll', email, typeof email);
    try {
      let session;
      // Can I avoid DRY? I Can't pass a null to "customer_email" to do "email ? email : null"
      if (email) {
        session = await stripe.checkout.sessions.create({
          customer_email: email,
          line_items: [
            {
              price_data: {
                unit_amount: calculateOrderAmount(newOrder.items),
                currency: 'eur',
                product_data: {
                  name: 'Pedido',
                },
              },
              quantity: 1,
            },
          ],
          metadata: { orderId: newOrder.id },
          mode: 'payment',
          success_url: `${req.headers.origin}/ordersuccess/id=${newOrder.id}`,
          cancel_url: req.headers.origin,
        });
      } else {
        session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price_data: {
                unit_amount: calculateOrderAmount(newOrder.items),
                currency: 'eur',
                product_data: {
                  name: 'Pedido',
                },
              },
              quantity: 1,
            },
          ],
          metadata: { orderId: newOrder.id },
          mode: 'payment',
          success_url: `${req.headers.origin}/ordersuccess/id=${newOrder.id}`,
          cancel_url: req.headers.origin,
        });
      }

      saveOrderInDB();

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
