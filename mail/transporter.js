const { Resend } = require("resend");

module.exports = (sendto, templateName, name, link) => {
  const resend = new Resend(process.env.RESEND_KEY);

  resend.emails
    .send({
      from: "Portfolio <noreply@mhshuvo.com>",
      to: sendto,
      subject: `e-Shop`,
      html: templateName(name, link),
    })
    .then(() => {})
    .catch(() => {});
};
