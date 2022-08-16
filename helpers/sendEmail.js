const nodemailer = require('nodemailer');
require('dotenv').config();

const {META_PASSWORD} = process.env

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'drummberg@meta.ua',
    pass: META_PASSWORD
  },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: 'drummberg@meta.ua',
  to: 'drummberg@gmail.com',
  subject: 'Nodemailer test',
  text: 'Привет. Мы тестируем отправку писем!',
};

transporter
  .sendMail(emailOptions)
  .then(info => console.log(info))
  .catch(err => console.log(err));