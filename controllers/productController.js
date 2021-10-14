const Product = require("../Model/Product");
const User = require("../Model/User");
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

  const { email } = req.user;
  User.findOne({ email })
    .then((response) => {
      cloudinary.v2.uploader.upload(
        req.file.path,
        { public_id: "ecommerce-app/products/" + req.file.filename },
        function (err, result) {
          if (err) {
            res.status(500).json({
              message: "Server error occurred",
            });
          } else {
            const product = {
              author: {
                authorId: response._id,
                email: response.email,
              },
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
                res.status(500).json({
                  message: "Server error occurred",
                });
              });
          }
        }
      );
    })
    .catch(() => {
      res.status(500).json({
        message: "Server error occurred",
      });
    });
};

const getProduct = (req, res) => {
  Product.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({
        message: "Server error occurred",
      });
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
      res.status(500).json({
        message: "Server error occurred",
      });
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({
        message: "Server error occurred",
      });
    });
};

module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
