const nodemailer = require("nodemailer");

module.exports = (sendto, templateName, name, link) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.node_mailer_user,
      pass: process.env.node_mailer_password,
    },
  });

  const mailOptions = {
    from: process.env.node_mailer_user,
    to: sendto,
    subject: "Message from e-Shop",
    html: templateName(name, link),
  };

  transporter.sendMail(mailOptions);
};
