const productValidation = (value) => {
  const error = {};
  if (!value.image || value.image === "null") {
    error.image = "Please provide a product an image";
  }
  if (!value.name) {
    error.name = "Please provide product name";
  } else if (value.name.length < 10) {
    error.name = "Please provide minimum 10 characters of name";
  } else if (value.name.length > 25) {
    error.name = "Please provide maximum 25 characters of name";
  }
  if (!value.regularPrice) {
    error.regularPrice = "Please provide product regular price";
  }
  if (!value.salePrice) {
    error.salePrice = "Please provide product sale price";
  }
  if (!value.category) {
    error.category = "Please provide a product category";
  }
  if (!value.tags.length) {
    error.tags = "Please provide product minimum 1 tag";
  }
  if (!value.description) {
    error.description = "Please provide product description";
  } else if (value.description.length < 100) {
    error.description = "Please provide minimum 100 characters of description";
  } else if (value.description.length > 1000) {
    error.description = "Please provide maximum 1000 characters of description";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = {
  productValidation,
};
