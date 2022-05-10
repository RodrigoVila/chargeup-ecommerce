import { NextApiRequest, NextApiResponse } from "next";
import User from "@models/user";
import dbConnect from "@utils/dbConnect";
import jwt from "jsonwebtoken";
import Bcrypt from "bcryptjs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { email, password } = body;

  await dbConnect();

  const signIn = async () => {
    try {
      const userRecord = await User.findOne({ email });
      if (userRecord) {
        if (Bcrypt.compareSync(password, userRecord.password)) {
          const token = jwt.sign(
            {
              id: userRecord.id,
              email: userRecord.email,
            },
            process.env.API_KEY,
            { expiresIn: process.env.TOKEN_EXPIRES_IN }
          );
          return res.end(201).json({ token });
        }
      } else {
        return res
          .status(401)
          .json({ status: 401, message: "Invalid credentials" });
      }
    } catch (e) {
      return res.status(400).json({
        success: false,
      });
    }
  };

  switch (method) {
    case "POST":
      return signIn();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
