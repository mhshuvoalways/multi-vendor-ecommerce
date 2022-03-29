const axios = require("axios");

const adminRegisterValidation = (value) => {
  const error = {};
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.password) {
    error.password = "Please provide your password";
  } else if (value.password.length < 6) {
    error.password = "Please provide minimum 6 character";
  } else if (value.password.length > 20) {
    error.password = "Please provide maximum 20 character";
  }
  if (!value.recaptch) {
    error.recaptch = "Please fill up recaptch";
  } else {
    axios
      .get(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${value.recaptch}`
      )
      .then((response) => {
        if (response.data.success) {
          error.recaptch = null;
        } else {
          error.recaptch = "Invalid recaptcha";
        }
      })
      .catch(() => {
        error.recaptch = "Invalid recaptcha";
      });
  }
  if (!value.agree) {
    error.agree = "Please checked agree button";
  }

  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

const registerValidation = (value) => {
  const error = {};
  if (value.role === "vendor") {
    if (!value.storeName) {
      error.storeName = "Please provide your store name";
    }
  }
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.password) {
    error.password = "Please provide your password";
  } else if (value.password.length < 6) {
    error.password = "Please provide minimum 6 character";
  } else if (value.password.length > 20) {
    error.password = "Please provide maximum 20 character";
  }
  if (!value.recaptch) {
    error.recaptch = "Please fill up recaptch";
  } else {
    axios
      .get(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${value.recaptch}`
      )
      .then((response) => {
        if (response.data.success) {
          error.recaptch = null;
        } else {
          error.recaptch = "Invalid recaptcha";
        }
      })
      .catch(() => {
        error.recaptch = "Invalid recaptcha";
      });
  }
  if (!value.agree) {
    error.agree = "Please checked agree button";
  }

  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

const loginValidation = (value) => {
  const error = {};
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.password) {
    error.password = "Please provide your password";
  } else if (value.password.length < 6) {
    error.password = "Please provide minimum 6 character";
  } else if (value.password.length > 20) {
    error.password = "Please provide maximum 20 character";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

const findMailValidation = (value) => {
  const error = {};
  if (!value) {
    error.email = "Please provide your email";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

const recoverPassValidation = (value) => {
  const error = {};
  if (!value) {
    error.password = "Please provide your password";
  } else if (value.length < 6) {
    error.password = "Please provide minimum 6 character";
  } else if (value.length > 20) {
    error.password = "Please provide maximum 20 character";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

const updatePassValidation = (value) => {
  const error = {};
  if (!value.currentPassword) {
    error.currentPassword = "Please provide your current password";
  } else if (value.currentPassword.length < 6) {
    error.currentPassword =
      "Please provide minimum 6 character of current password";
  } else if (value.currentPassword.length > 20) {
    error.currentPassword =
      "Please provide maximum 20 character of current password";
  }
  if (!value.newPassword) {
    error.newPassword = "Please provide your new password";
  } else if (value.newPassword.length < 6) {
    error.newPassword = "Please provide minimum 6 character of new password";
  } else if (value.newPassword.length > 20) {
    error.newPassword = "Please provide maximum 20 character of new password";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = {
  adminRegisterValidation,
  registerValidation,
  loginValidation,
  findMailValidation,
  recoverPassValidation,
  updatePassValidation,
};
