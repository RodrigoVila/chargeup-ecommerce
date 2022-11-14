import { NextApiRequest, NextApiResponse } from "next";
import Order from "@models/order";
import dbConnect from "@utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  const sendNewOrder = async () => {
    try {
      const order = await Order.create(body);
      return res.status(201).json(order);
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  switch (method) {
    case "POST":
      return sendNewOrder();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
