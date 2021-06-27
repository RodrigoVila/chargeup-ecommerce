import { NextApiRequest, NextApiResponse } from "next";
import User from "@models/user";
import dbConnect from "@utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  const createUser = async () => {
    try {
      const user = await User.create(body);
      return res.status(201).json(user);
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  const getUsers = async () => {
    try {
      const userList = await User.find({});
      return res.status(200).json(userList);
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  switch (method) {
    case "POST":
      return createUser();
    case "GET":
      return getUsers();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
