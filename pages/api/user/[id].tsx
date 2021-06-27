import { NextApiRequest, NextApiResponse } from "next";
import User from "@models/user";
import dbConnect from "@utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  await dbConnect();

  const getUser = async () => {
    try {
      const user = await User.findById(id);

      return res.status(200).json(user);
    } catch (e) {
      return res.status(404).json({
        success: false,
      });
    }
  };

  const updateUser = async () => {
    try {
      const user = await User.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });

      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };
  const deleteUser = async () => {
    try {
      await User.deleteOne({ _id: id });

      return res
        .status(200)
        .json({ message: `User ${id} deleted successfully` });
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  switch (method) {
    case "GET":
      return getUser();
    case "PUT":
      return updateUser();
    case "DELETE":
      return deleteUser();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
