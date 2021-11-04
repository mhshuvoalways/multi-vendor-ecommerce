const InWishList = require("../Model/InWishList");
const Product = require("../Model/Product");
const serverError = require("../utils/serverError");

const addWishList = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((proRes) => {
      InWishList.find({ productId: req.params.id })
        .then((cartRes) => {
          if (cartRes.length) {
            cartRes.map((el) => {
              if (!(el.authorId.toString() === req.user._id.toString())) {
                const product = {
                  authorId: req.user._id,
                  productId: proRes._id,
                  name: proRes.name,
                  image: proRes.image[0].url,
                  regularPrice: proRes.regularPrice,
                  salePrice: proRes.salePrice,
                };
                new InWishList(product)
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
            const product = {
              authorId: req.user._id,
              productId: proRes._id,
              name: proRes.name,
              image: proRes.image[0].url,
              regularPrice: proRes.regularPrice,
              salePrice: proRes.salePrice,
            };
            new InWishList(product)
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

const getWishItem = (req, res) => {
  InWishList.find({ authorId: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteWishListItem = (req, res) => {
  InWishList.findOneAndRemove({ _id: req.params.id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const clearWishList = (req, res) => {
  InWishList.deleteMany({ authorId: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  addWishList,
  getWishItem,
  clearWishList,
  deleteWishListItem,
};
