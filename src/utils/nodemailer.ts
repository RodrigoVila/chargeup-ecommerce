import nodemailer from 'nodemailer';

type MailOption = {
  from: string;
  to: string;
  subject: string;
  html: any;
};

const transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PWD,
  },
});

export const sendEmailToUser = async (mailOption: MailOption) => {
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.error('mail error', err);
        reject(err);
      } else {
        console.log('mail ok', data);
        resolve(data);
      }
    });
  });
};