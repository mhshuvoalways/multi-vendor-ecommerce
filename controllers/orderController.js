const Order = require("../Model/Order");
const BillingAddress = require("../Model/BillingAddress");
const InCart = require("../Model/InCart");
const serverError = require("../utils/serverError");

const orderPlace = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    state,
    country,
    zipCode,
    streetAddress,
  } = req.body;

  InCart.find({ authorId: req.user._id })
    .then((cartResponse) => {
      if (cartResponse) {
        const billing = {
          authorId: req.user._id,
          firstName,
          lastName,
          email,
          phone,
          city,
          state,
          country,
          zipCode,
          streetAddress,
        };
        const productId = [];
        cartResponse.map((product) => {
          productId.push(product.productId.toString());
        });
        BillingAddress.findOne({ authorId: req.user._id })
          .then((billFindRes) => {
            if (!billFindRes) {
              new BillingAddress(billing)
                .save()
                .then((billResponse) => {
                  const billing = {
                    authorId: req.user._id,
                    productId,
                    billingaddressId: billResponse._id,
                  };
                  new Order(billing)
                    .save()
                    .then((orderResponse) => {
                      InCart.deleteMany({ authorId: req.user._id })
                        .then(() => {
                          res.status(200).json(orderResponse);
                        })
                        .catch(() => {
                          serverError(res);
                        });
                    })
                    .catch(() => {
                      serverError(res);
                    });
                })
                .catch(() => {
                  serverError(res);
                });
            } else {
              BillingAddress.findOneAndUpdate(
                { authorId: req.user._id },
                billing,
                { new: true }
              )
                .then((billingUpdate) => {
                  const billing = {
                    authorId: req.user._id,
                    productId,
                    billingaddressId: billingUpdate._id,
                  };
                  new Order(billing)
                    .save()
                    .then((orderResponse) => {
                      InCart.deleteMany({ authorId: req.user._id })
                        .then(() => {
                          res.status(200).json(orderResponse);
                        })
                        .catch(() => {
                          serverError(res);
                        });
                    })
                    .catch(() => {
                      serverError(res);
                    });
                })
                .catch(() => {
                  serverError(res);
                });
            }
          })
          .catch(() => {
            serverError(res);
          });
      }
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  orderPlace,
};
