const Product = require("../Model/Product");
const serverError = require("../utils/ServerError");
const cloudinary = require("cloudinary");

const addProduct = (req, res) => {
  const {
    name,
    category,
    regularPrice,
    salePrice,
    description,
    inCart,
    inWish,
  } = req.body;
  cloudinary.v2.uploader.upload(
    req.file.path,
    { public_id: "ecommerce-app/products/" + req.file.filename },
    function (err, result) {
      if (err) {
        serverError(res);
      } else {
        const product = {
          name,
          category,
          regularPrice,
          salePrice,
          description,
          inCart,
          inWish,
          image: result.url,
        };
        new Product(product)
          .save()
          .then((response) => {
            res.status(200).json(response);
          })
          .catch(() => {
            serverError(res);
          });
      }
    }
  );
};

const getProduct = (req, res) => {
  Product.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const {
    name,
    category,
    regularPrice,
    salePrice,
    description,
    inCart,
    inWish,
  } = req.body;

  const updateProduct = {
    name,
    category,
    regularPrice,
    salePrice,
    description,
    inCart,
    inWish,
  };

  Product.findOneAndUpdate({ _id: id, updateProduct })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
