const e = require("cors");
const InCart = require("../Model/InCart");
const Product = require("../Model/Product");
const serverError = require("../utils/serverError");

const addCart = (req, res) => {
  const { quantity } = req.body;
  InCart.findOne({ productId: req.params.id })
    .then((response) => {
      if (!response) {
        Product.findOne({ _id: req.params.id })
          .then((response) => {
            const product = {
              authorId: [{ _id: req.user._id }],
              productId: response._id,
              name: response.name,
              image: response.image[0].url,
              regularPrice: response.regularPrice,
              salePrice: response.salePrice,
              subTotal: response.salePrice,
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
          })
          .catch(() => {
            serverError(res);
          });
      } else {
        const authorId = response.authorId;
        authorId.push(req.user._id);
        const updateItem = {
          authorId,
          quantity,
        };
        InCart.findOneAndUpdate({ productId: req.params.id }, updateItem, {
          new: true,
        })
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
};

const getCartItem = (req, res) => {
  InCart.find({ authorId: req.params.id })
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

module.exports = {
  addCart,
  getCartItem,
  increment,
  decrement,
  deleteCartItem,
};
