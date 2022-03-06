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
        let quantity = 0;
        let subTotal = 0;
        cartResponse.map((product) => {
          productId.push(product.productId.toString());
          quantity += product.quantity;
          subTotal += product.subTotal;
        });
        BillingAddress.findOne({ authorId: req.user._id })
          .then((billFindRes) => {
            if (!billFindRes) {
              new BillingAddress(billing)
                .save()
                .then((billResponse) => {
                  const order = {
                    authorId: req.user._id,
                    productId,
                    billingaddressId: billResponse._id,
                    quantity,
                    subTotal: process.env.DISCOUNT_COUPON
                      ? subTotal - (subTotal * process.env.DISCOUNT_COUPON) / 100
                      : subTotal,
                  };
                  new Order(order)
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
                  const order = {
                    authorId: req.user._id,
                    productId,
                    billingaddressId: billingUpdate._id,
                    quantity,
                    subTotal: process.env.DISCOUNT_COUPON
                      ? subTotal - (subTotal * process.env.DISCOUNT_COUPON) / 100
                      : subTotal,
                  };
                  new Order(order)
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

const getOderDetails = (req, res) => {
  Order.find({ authorId: req.user._id })
    .then((orderResponse) => {
      res.status(200).json(orderResponse);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  orderPlace,
  getOderDetails,
};
