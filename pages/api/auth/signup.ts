import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import User from '@models/user';
import { lang } from '@constants/lang';
import dbConnect from '@utils/dbConnect';
import {  emailVerificationToHTML } from '@utils/htmlEmailParsers';

const transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PWD,
  },
});

const sendEmailVerificationToUser = async (name: string, email: string, pid: string) => {
  try {
    const mailOption = {
      from: `Charge UP Barcelona<${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: `Nueva cuenta en Charge UP BCN`,
      html: emailVerificationToHTML(name, pid),
    };

    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log('err email', err);
      } else {
        console.log('email ok', data);
      }
    });
  } catch (err) {
    console.log('err email', err);
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const { name, lastName, email, password, pid } = body;

  await dbConnect();

  const register = async () => {
    try {
      await User.create({ name, lastName, email, password, pid });

      await sendEmailVerificationToUser(name, email, pid);
      return res.status(201).json({ success: true, message: lang.en.USER_REGISTER_SUCCESS });
    } catch (e) {
      return res.status(409).json({
        success: false,
        message: lang.en.USER_EXIST,
      });
    }
  };

  switch (method) {
    case 'POST':
      return register();
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};
