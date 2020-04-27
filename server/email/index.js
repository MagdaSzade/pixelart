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
    html: `Aby potwierdzić adress email kliknij w poniższy link <a href="${urlAdress}">POTWIERDŹ MNIE!!!</a>`
}};

module.exports = {
    transporter,
    createConfirmationMail
}