const Order = require("../Model/Order");
const Product = require("../Model/Product");
const BillingAddress = require("../Model/BillingAddress");
const InCart = require("../Model/InCart");
const serverError = require("../utils/serverError");
const orderValidation = require("../validations/orderValidation");

const checkValidationOrder = (req, res) => {
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
    discount,
  } = req.body;

  const validation = orderValidation({
    firstName,
    lastName,
    email,
    phone,
    city,
    state,
    country,
    zipCode,
    streetAddress,
    discount,
  });
  if (validation.isValid) {
    res.status(200).json({
      message: "Validation successful",
    });
  } else {
    res.status(400).json(validation.error);
  }
};

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
    discount,
  } = req.body;

  const validation = orderValidation({
    firstName,
    lastName,
    email,
    phone,
    city,
    state,
    country,
    zipCode,
    streetAddress,
    discount,
  });
  if (validation.isValid) {
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
                      subTotal: discount
                        ? subTotal - (subTotal * discount) / 100
                        : subTotal,
                    };
                    new Order(order)
                      .save()
                      .then((orderResponse) => {
                        InCart.deleteMany({ authorId: req.user._id })
                          .then(() => {
                            orderResponse.productId.forEach((pro) => {
                              Product.findOne({ _id: pro })
                                .then((productResponse) => {
                                  Product.findOneAndUpdate(
                                    { _id: pro },
                                    {
                                      orderAppeared:
                                        productResponse.orderAppeared + 1,
                                    }
                                  )
                                    .then(() => {})
                                    .catch(() => {
                                      serverError(res);
                                    });
                                })
                                .catch(() => {
                                  serverError(res);
                                });
                            });
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
                      subTotal: discount
                        ? subTotal - (subTotal * discount) / 100
                        : subTotal,
                    };
                    new Order(order)
                      .save()
                      .then((orderResponse) => {
                        InCart.deleteMany({ authorId: req.user._id })
                          .then(() => {
                            orderResponse.productId.forEach((pro) => {
                              Product.findOne({ _id: pro })
                                .then((productResponse) => {
                                  Product.findOneAndUpdate(
                                    { _id: pro },
                                    {
                                      orderAppeared:
                                        productResponse.orderAppeared + 1,
                                    }
                                  )
                                    .then(() => {})
                                    .catch(() => {
                                      serverError(res);
                                    });
                                })
                                .catch(() => {
                                  serverError(res);
                                });
                            });
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
  } else {
    res.status(400).json(validation.error);
  }
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

const getVenodrDetails = (req, res) => {
  Order.find()
    .populate("authorId")
    .populate("productId")
    .then((orderResponse) => {
      const vendorProducts = orderResponse.filter((el) =>
        el.productId.find((auth) => auth.author.toString() === req.params.id)
      );
      res.status(200).json(vendorProducts);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  orderPlace,
  getOderDetails,
  checkValidationOrder,
  getVenodrDetails,
};
