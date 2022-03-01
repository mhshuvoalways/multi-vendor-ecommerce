const nodemailer = require("nodemailer");

module.exports = (sendto, templateName, name, link) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.node_mailer_user,
      pass: process.env.node_mailer_password,
    },
  });

  var mailOptions = {
    from: process.env.node_mailer_user,
    to: sendto,
    subject: "Password Recovery",
    html: templateName(name, link),
  };

  transporter.sendMail(mailOptions);
};
