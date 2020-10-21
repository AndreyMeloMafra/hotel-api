const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.conheçapiranhas.com.br",
  port: 25,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "no-reply@conheçapiranhas.com",
    pass: "777666",
  },
  tls: { rejectUnauthorized: false },
});

module.exports = {
  send: (req, res) => {
    const { name, email } = req.body;

    const mailOptions = {
      from: "no-reply@conheçapiranhas.com",
      to: email,
      subject: "E-mail enviado usando Node!",
      text: `Parabéns ${name}, sua reserva foi concluida!`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });

    return res.status(200).json({ message: "Email enviado com sucesso!" });
  },
};
