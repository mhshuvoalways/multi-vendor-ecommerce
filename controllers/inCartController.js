const InCart = require("../Model/InCart");
const Product = require("../Model/Product");
const serverError = require("../utils/serverError");

const addCart = (req, res) => {
  const { quantity } = req.body;
  Product.findOne({ _id: req.params.id })
    .then((proRes) => {
      InCart.find({ productId: req.params.id })
        .then((cartRes) => {
          if (cartRes.length) {
            cartRes.map((el) => {
              if (!(el.authorId.toString() === req.user._id.toString())) {
                const subTotal = quantity * proRes.salePrice;
                const product = {
                  authorId: req.user._id,
                  productId: proRes._id,
                  name: proRes.name,
                  image: proRes.image[0].url,
                  regularPrice: proRes.regularPrice,
                  salePrice: proRes.salePrice,
                  subTotal: subTotal || proRes.salePrice,
                  quantity: quantity,
                };
                new InCart(product)
                  .save()
                  .then((response) => {
                    res.status(200).json(response);
                  })
                  .catch(() => {
                    serverError(res);
                  });
              }
            });
          } else {
            const subTotal = quantity * proRes.salePrice;
            const product = {
              authorId: req.user._id,
              productId: proRes._id,
              name: proRes.name,
              image: proRes.image[0].url,
              regularPrice: proRes.regularPrice,
              salePrice: proRes.salePrice,
              subTotal: subTotal || proRes.salePrice,
              quantity: quantity,
            };
            new InCart(product)
              .save()
              .then((response) => {
                res.status(200).json(response);
              })
              .catch(() => {
                serverError(res);
              });
          }
        })
        .catch(() => {
          serverError(res);
        });
    })
    .catch(() => {
      serverError(res);
    });
};

const getCartItem = (req, res) => {
  InCart.find({ authorId: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const increment = (req, res) => {
  InCart.findOne({ _id: req.params.id })
    .then((response) => {
      const updateCart = {
        quantity: response.quantity + 1,
        subTotal: response.salePrice * (response.quantity + 1),
      };
      InCart.findByIdAndUpdate({ _id: req.params.id }, updateCart, {
        new: true,
      })
        .then((response) => {
          res.status(200).json(response);
        })
        .catch(() => {
          serverError(res);
        });
    })
    .catch(() => {
      serverError(res);
    });
};

const decrement = (req, res) => {
  InCart.findOne({ _id: req.params.id })
    .then((response) => {
      const updateCart = {
        quantity: response.quantity - 1,
        subTotal: response.salePrice * (response.quantity - 1),
      };
      InCart.findByIdAndUpdate({ _id: req.params.id }, updateCart, {
        new: true,
      })
        .then((response) => {
          res.status(200).json(response);
        })
        .catch(() => {
          serverError(res);
        });
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteCartItem = (req, res) => {
  InCart.findOneAndRemove({ _id: req.params.id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const clearCart = (req, res) => {
  InCart.deleteMany({ authorId: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updateCartItem = (req, res) => {
  const { name, regularPrice, salePrice, subTotal, quantity } = req.body;
  const product = {
    name,
    regularPrice,
    salePrice,
    subTotal,
    quantity,
  };

  InCart.findOneAndUpdate({ productId: req.params.id }, product, { new: true })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  addCart,
  getCartItem,
  clearCart,
  increment,
  decrement,
  deleteCartItem,
  updateCartItem,
};
