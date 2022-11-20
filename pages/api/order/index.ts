import { NextApiRequest, NextApiResponse } from 'next';
import Order from '@models/order';
import dbConnect from '@utils/dbConnect';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  const createNewOrder = async () => {
    try {
      const order = await Order.create(JSON.parse(body));
      return res.status(201).json({ success: true, order });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  };

  switch (method) {
    case 'POST':
      return createNewOrder();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
