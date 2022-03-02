const recoverPass = (name, link) => {
  const frontend_url =
    process.env.NODE_ENV === "production"
      ? process.env.frontend_url_production
      : process.env.frontend_url;
  return `<div style="background-color: #efefef; padding: 30px">
    <h2>Hello ${name},</h2>
    <p>
      Forgot your password? Don't worry. Click the link below and recover your
      password.
    </p>
    <a href=${frontend_url}/recoverpassword/${link}>${frontend_url}/recoverpassword/${link}</a>
</div>`;
};

const activeAccount = (name, link) => {
  const frontend_url =
    process.env.NODE_ENV === "production"
      ? process.env.frontend_url_production
      : process.env.frontend_url;
  return `<div style="background-color: #efefef; padding: 30px">
    <h2>Hello ${name},</h2>
    <p>
     Please click the link below and active your account.
    </p>
    <a href=${frontend_url}/active/${link}>${frontend_url}/active/${link}</a>
</div>`;
};

module.exports = {
  recoverPass,
  activeAccount,
};
