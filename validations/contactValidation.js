const contactValidation = (value) => {
  const error = {};
  if (!value.firstName) {
    error.firstName = "Please provide your first name";
  }
  if (!value.lastName) {
    error.lastName = "Please provide your last name";
  }
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.message) {
    error.message = "Please provide your message";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = contactValidation;
