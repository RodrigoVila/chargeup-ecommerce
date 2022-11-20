import { NextApiRequest, NextApiResponse } from 'next';
import Product from '@models/product';
import dbConnect from '@utils/dbConnect';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  const createProduct = async () => {
    try {
      const product = await Product.create(body);
      return res.status(201).json({ success: true });
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  const getProducts = async () => {
    try {
      const products = await Product.find({});
      return res.status(200).json({ success: true, products });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  };

  switch (method) {
    case 'POST':
      return createProduct();
    case 'GET':
      return getProducts();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
