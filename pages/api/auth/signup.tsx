import { NextApiRequest, NextApiResponse } from "next";
import User from "@models/user";
import dbConnect from "@utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  const register = async () => {
    try {
      console.log("!body", body)
      const user = await User.create(body);
      console.log("!user", user)
      return res.status(201).json(user);
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  switch (method) {
    case "POST":
      return register();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};