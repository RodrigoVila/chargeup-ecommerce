import { NextApiRequest, NextApiResponse } from 'next';
import Order from '@models/order';
import dbConnect from '@utils/dbConnect';

const OrderAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  const getOrderByID = async () => {
    try {
    } catch (e) {}
  };

  switch (method) {
    case 'POST':
      return getOrderByID();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default OrderAPI