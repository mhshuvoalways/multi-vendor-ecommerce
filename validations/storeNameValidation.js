const storeNameValidation = (value) => {
  const error = {};
  if (!value.storeName) {
    error.storeName = "Please provide your store name";
  } else if (value.storeName.length < 3) {
    error.storeName = "Please provide minimum 3 characters of store name";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = storeNameValidation;
