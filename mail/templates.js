const frontend_url =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL_PRODUCTION
    : process.env.FRONTEND_URL_DEV;

const recoverPass = (name, link) => {
  return `<div style="background-color: #efefef; padding: 30px">
  <h2>Hello ${name}</h2>
  <p>
    Forgot your password? Don't worry. Click the link below and recover your
    password.
  </p>
  <button style="background-color: green; padding:10px; border:none; margin-top:10px;">
      <a style="color: white; text-decoration: none" href=${frontend_url}/recoverpassword/${link} >Recover password</a>
  </button>
</div>`;
};

const activeAccount = (name, link) => {
  return `<div style="background-color: #efefef; padding: 30px">
    <h2>Hello ${name},</h2>
    <p>
     Please click the link below and active your account.
    </p>
    <button style="background-color: green; padding:10px; border:none; margin-top:10px;">
    <a style="color: white; text-decoration: none" href=${frontend_url}/active/${link} >Active account</a>
    </button>
  </div>`;
};

const contactMessage = (details, message) => {
  return `<div style="background-color: #efefef; padding: 30px">
    <p>
    First Name: ${details.firstName}
    </p>
    <p>
    Last Name: ${details.lastName}
    </p>
    <p>
    Email: ${details.email}
    </p>
    <p>
    Message: ${message}
    </p>
  </div>`;
};

module.exports = {
  recoverPass,
  activeAccount,
  contactMessage,
};
