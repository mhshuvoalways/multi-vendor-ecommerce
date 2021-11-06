const UserAddress = require("../Model/UserAddress");
const serverError = require("../utils/serverError");

const addAddress = (req, res) => {
  const { city, state, country, zipCode, streetAddress } =
    req.body;
  const address = {
    authorId: req.user._id,
    city,
    state,
    country,
    zipCode,
    streetAddress
  };
  UserAddress.findOne({ authorId: req.user._id })
    .then((response) => {
      if (response) {
        UserAddress.findOneAndUpdate({ authorId: req.user._id }, address, {
          new: true,
        })
          .then((response) => {
            res.status(200).json(response);
          })
          .catch((err) => {
            serverError(err);
          });
      } else {
        new UserAddress(address)
          .save()
          .then((response) => {
            res.status(200).json(response);
          })
          .catch((err) => {
            serverError(err);
          });
      }
    })
    .catch((err) => {
      serverError(err);
    });
};

const getAddress = (req, res) => {
  UserAddress.findOne({ authorId: req.user._id })
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
};
