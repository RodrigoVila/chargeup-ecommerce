import { stripeSecretKey } from '@constants/keys';
import Order from '@models/order';
import { NextApiRequest, NextApiResponse } from 'next';
import { CartProductType, OrderType } from 'types';
const stripe = require('stripe')(stripeSecretKey);

const calculateOrderAmount = (items: CartProductType[]): number => {
  let orderAmount = 0;
  items.map((item) => {
    orderAmount = orderAmount += item.total;
  });
  return orderAmount * 100;
};

const saveOrderInDB = async (newOrder: OrderType) => await Order.create(newOrder);

const CheckoutSession = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  const newOrder: OrderType = JSON.parse(body);
  const checkoutSession = async () => {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              unit_amount: calculateOrderAmount(newOrder.items),
              currency: 'eur',
              product_data: {
                name: 'Tu pedido en Charge UP Barcelona',
              },
            },
            quantity: 1,
          },
        ],
        customer_email: newOrder.email,
        phone_number_collection: {
          enabled: true,
        },
        metadata: { orderId: newOrder.id },
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `${req.headers.origin}/ordersuccess/id=${newOrder.id}`,
        cancel_url: req.headers.origin,
      });

      saveOrderInDB(newOrder);

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
};

export default CheckoutSession;
