import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

import User from "@models/user";
import dbConnect from "@utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, password } = body;

  await dbConnect();

  const register = async () => {
    const token = jwt.sign({ email, password }, process.env.API_KEY, {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    });
    try {
      const user = await User.create({ ...body, token });
      return res
        .status(201)
        .json({ user: user.email, name: user.name, token: user.token });
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
