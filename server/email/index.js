const nodemailer = require('nodemailer');
const config = require('config');
const url = require('url');

const { createToken } = require('../auth/token');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: config.get('email'),
    pass: config.get('password')
  }
});

const createURL = (user) => {
  return `${config.get("webAdress")}/api/users/confirm/${createToken(user)}`;
}

const createConfirmationMail = async (user) => {
  return await transporter.sendMail({
    from: config.get('email'),
    to: user.email,
    subject: `Dziękuję za rejestrację w aplikacji PixelArt`,
    html: `<p>Aby potwierdzić adress email kliknij w poniższy link<p> 
    <a href="${createURL(user)}">POTWIERDŹ MNIE!!!</a>`
  });
};

module.exports = {
    transporter,
    createConfirmationMail,
    createURL,
}