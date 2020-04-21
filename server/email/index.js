const nodemailer = require('nodemailer');
const config = require('config');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.get('email'),
      pass: config.get('password')
    }
  });

const createConfirmationMail = (email, urlAdress) => { return {
    from: config.get('email'),
    to: email,
    subject: `Dziękuję za rejestrację w aplikacji PixelArt`,
    text: `Aby potwierdzić adress email kliknij w poniższy link //n ${urlAdress}`
}};

module.exports = {
    transporter,
    createConfirmationMail
}