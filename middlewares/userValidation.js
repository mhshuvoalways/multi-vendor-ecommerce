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
  registerValidation,
  loginValidation,
};
