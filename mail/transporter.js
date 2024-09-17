const { Resend } = require("resend");

module.exports = (sendto, templateName, name, link) => {
  const resend = new Resend(process.env.RESEND_KEY);

  resend.emails
    .send({
      from: "Portfolio <noreply@mhshuvo.com>",
      to: sendto,
      subject: `A message from my portfolio!`,
      html: templateName(name, link),
    })
    .then(() => {
      res.send("Message sent to admin email");
    })
    .catch(() => {
      res.send("Something is wrong");
    });
};
