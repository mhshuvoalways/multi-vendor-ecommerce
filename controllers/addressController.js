const Address = require("../Model/Address");
const serverError = require("../utils/serverError");

const addAddress = (req, res) => {
  const { city, state, country, zipCode, streetAddress, additionalInfo } =
    req.body;
  const address = {
    authorId: req.user._id,
    city,
    state,
    country,
    zipCode,
    streetAddress,
    additionalInfo,
  };
  new Address(address)
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      serverError(err);
    });
};

const getAddress = (req, res) => {
  Address.findOne({ authorId: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      serverError(err);
    });
};

const updateAddress = (req, res) => {
  const { city, state, country, zipCode, streetAddress, additionalInfo } =
    req.body;
  const address = {
    city,
    state,
    country,
    zipCode,
    streetAddress,
    additionalInfo,
  };
  Address.findOneAndUpdate({ authorId: req.user._id }, address, { new: true })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      serverError(err);
    });
};

module.exports = {
  addAddress,
  getAddress,
  updateAddress,
};
