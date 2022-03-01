const recoverPass = (name, link) => {
  const frontend_url =
    process.env.NODE_ENV === "production"
      ? process.env.frontend_url_production
      : process.env.frontend_url;
  return `<div style="background-color: #efefef; padding: 20px">
    <h2>Hello ${name},</h2>
    <p>
      Forgot your password? Don't worry. Click the link below and recover your
      password.
    </p>
    <a href=${frontend_url}/recoverpassword/${link}>${frontend_url}/recoverpassword/${link}</a>
</div>`;
};

module.exports = {
  recoverPass,
};
