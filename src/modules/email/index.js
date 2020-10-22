const nodemailer = require("nodemailer");
const SMTP_CONFIGS = require('../../config/smtp');

let transporter = nodemailer.createTransport({
    host: SMTP_CONFIGS.host,
    port: SMTP_CONFIGS.port,
    secure: false, 
    auth: {
      user: SMTP_CONFIGS.user,
      pass: SMTP_CONFIGS.pass, 
    },
    tls: {
      rejectedUnauthorized: false
    }
  });

module.exports = {
  send: async (req, res) => {
    const { name, email } = req.body;

    const mailSent = await transporter.sendMail({
        from: 'Conheça piranhas <no-reply@conheçapiranhas.com>', 
        to: [email], 
        subject: "Reserva na pousada lua rosa",
        text: `Parabéns ${name} Sua reserva na pousada lua rosa foi feita com sucesso!!`, 
      });

      console.log(mailSent);

    return res.status(200).json({ message: "Email enviado com sucesso!" });
  },
};
