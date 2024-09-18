const { Resend } = require("resend");

module.exports = async (sendto, templateName, name, link) => {
  const resend = new Resend(process.env.RESEND_KEY);

  await resend.emails.send({
    from: "Portfolio <noreply@mhshuvo.com>",
    to: sendto,
    subject: `e-Shop`,
    html: templateName(name, link),
  });
};
