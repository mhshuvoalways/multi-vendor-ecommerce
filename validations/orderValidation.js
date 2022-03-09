const orderValidation = (value) => {
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
  if (!value.phone) {
    error.phone = "Please provide your phone number";
  }
  if (!value.zipCode) {
    error.zipCode = "Please provide your zip code";
  }
  if (!value.city) {
    error.city = "Please provide your city name";
  }
  if (!value.state) {
    error.state = "Please provide your state name";
  }
  if (!value.country) {
    error.country = "Please provide your country name";
  }
  if (!value.streetAddress) {
    error.streetAddress = "Please provide your street address name";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = orderValidation;
