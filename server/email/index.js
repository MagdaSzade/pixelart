const nodemailer = require('nodemailer');
const config = require('config');
const { sign, verify } = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: config.get('email'),
    pass: config.get('password')
  }
});

const createToken = (user) => {
  return sign({
    data: user._id, 
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
  }, 'secret');
};

const createConfirmationMail = (user) => {
  console.log(creteToken);
  transporter.sendMail({
    from: config.get('email'),
    to: user.email,
    subject: `Dziękuję za rejestrację w aplikacji PixelArt`,
    html: `Aby potwierdzić adress email kliknij w poniższy link <a href="#">POTWIERDŹ MNIE!!!</a>`
  })
};

module.exports = {
    transporter,
    createConfirmationMail,
    createToken,
}