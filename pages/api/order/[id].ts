import { NextApiRequest, NextApiResponse } from "next";
import Order from "@models/order";
import dbConnect from "@utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  await dbConnect();

  const getOrder = async () => {
    try {
      const order = await Order.findById(id);

      return res.status(200).json(order);
    } catch (e) {
      return res.status(404).json({
        success: false,
      });
    }
  };

  const updateOrder = async () => {
    try {
      const order = await Order.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });

      return res.status(200).json(order);
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };
  const deleteOrder = async () => {
    try {
      await Order.deleteOne({ _id: id });

      return res.status(200).json({message: `Order ${id} deleted successfully`});
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  switch (method) {
    case "GET":
      return getOrder();
    case "PUT":
      return updateOrder();
    case "DELETE":
      return deleteOrder();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
