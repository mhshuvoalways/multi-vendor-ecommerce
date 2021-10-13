const adminRegisterValidation = (value) => {
  const error = {};
  if (!value.name) {
    error.name = "Please provide your name in env";
  }
  if (!value.email) {
    error.email = "Please provide your email in env";
  }
  if (!value.phone) {
    error.phone = "Please provide your phone in env";
  }
  if (!value.password) {
    error.password = "Please provide your password in env";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

const registerValidation = (value) => {
  const error = {};
  if (!value.name) {
    error.name = "Please provide your name";
  }
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.phone) {
    error.phone = "Please provide your phone";
  }
  if (!value.password) {
    error.password = "Please provide your password";
  }
  // if (!value.recaptch) {
  //   error.recaptch = "Please fill up recaptch";
  // }
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
};
