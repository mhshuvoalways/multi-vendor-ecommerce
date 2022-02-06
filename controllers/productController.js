const Product = require("../Model/Product");
const InCart = require("../Model/InCart");
const User = require("../Model/User");
const cloudinary = require("cloudinary");
const serverError = require("../utils/serverError");

const addProduct = (req, res) => {
  const { name, category, regularPrice, salePrice, description, tags } =
    req.body;
  const { email } = req.user;
  User.findOne({ email })
    .then((response) => {
      if (response.role === "admin" || response.role === "vendor") {
        cloudinary.v2.uploader.upload(
          req.file.path,
          { public_id: "ecommerce-app/products/" + req.file.filename },
          function (err, result) {
            if (err) {
              serverError(res);
            } else {
              const product = {
                author: {
                  authorId: response._id,
                  storeName: response.storeName,
                },
                name,
                category,
                regularPrice,
                salePrice,
                description,
                tags: JSON.parse(tags),
                image: [
                  {
                    url: result.url,
                    public_id: result.public_id,
                  },
                ],
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
      }
    })
    .catch(() => {
      serverError(res);
    });
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

const filterProduct = (req, res) => {
  const { search, categories, tags, logHighValue } = req.body;
  const category = Object.values(categories);
  const categoryFinal = category.filter((el) => el !== "");
  const tag = Object.values(tags);
  const tagFinal = tag.filter((el) => el !== "");
  if (categoryFinal.length && tagFinal.length) {
    Product.find({
      $or: [{ category: categoryFinal }, { "tags.name": tagFinal }],
    })
      .then((resCetTag) => {
        const temp = resCetTag.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        );
        if (logHighValue === "hightolow") {
          temp.sort((a, b) => {
            if (a.salePrice > b.salePrice) {
              return 1;
            } else if (a.salePrice < b.salePrice) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (logHighValue === "lowtohigh") {
          temp.sort((a, b) => {
            if (a.salePrice < b.salePrice) {
              return 1;
            } else if (a.salePrice > b.salePrice) {
              return -1;
            } else {
              return 0;
            }
          });
        } else {
          return res.status(200).json(temp);
        }
        res.status(200).json(temp);
      })
      .catch(() => {
        serverError(res);
      });
  } else if (categoryFinal.length) {
    Product.find({ category: categoryFinal })
      .then((resCetTag) => {
        const temp = resCetTag.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        );
        if (logHighValue === "hightolow") {
          temp.sort((a, b) => {
            if (a.salePrice > b.salePrice) {
              return 1;
            } else if (a.salePrice < b.salePrice) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (logHighValue === "lowtohigh") {
          temp.sort((a, b) => {
            if (a.salePrice < b.salePrice) {
              return 1;
            } else if (a.salePrice > b.salePrice) {
              return -1;
            } else {
              return 0;
            }
          });
        } else {
          return res.status(200).json(temp);
        }
        res.status(200).json(temp);
      })
      .catch(() => {
        serverError(res);
      });
  } else if (tagFinal.length) {
    Product.find({ "tags.name": tagFinal })
      .then((resCetTag) => {
        const temp = resCetTag.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        );
        if (logHighValue === "hightolow") {
          temp.sort((a, b) => {
            if (a.salePrice > b.salePrice) {
              return 1;
            } else if (a.salePrice < b.salePrice) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (logHighValue === "lowtohigh") {
          temp.sort((a, b) => {
            if (a.salePrice < b.salePrice) {
              return 1;
            } else if (a.salePrice > b.salePrice) {
              return -1;
            } else {
              return 0;
            }
          });
        } else {
          return res.status(200).json(temp);
        }
        res.status(200).json(temp);
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    Product.find()
      .then((resCetTag) => {
        const temp = resCetTag.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        );
        if (logHighValue === "hightolow") {
          temp.sort((a, b) => {
            if (a.salePrice > b.salePrice) {
              return 1;
            } else if (a.salePrice < b.salePrice) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (logHighValue === "lowtohigh") {
          temp.sort((a, b) => {
            if (a.salePrice < b.salePrice) {
              return 1;
            } else if (a.salePrice > b.salePrice) {
              return -1;
            } else {
              return 0;
            }
          });
        } else {
          return res.status(200).json(temp);
        }
        res.status(200).json(temp);
      })
      .catch(() => {
        serverError(res);
      });
  }
};

const getMyproducts = (req, res) => {
  Product.find({ "author.authorId": req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, regularPrice, salePrice, description, inCart, inWish } =
    req.body;
  const updateProduct = {
    name,
    regularPrice,
    salePrice,
    description,
    inCart,
    inWish,
  };
  Product.findOneAndUpdate({ _id: id }, updateProduct, { new: true })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  const { email } = req.user;
  User.findOne({ email })
    .then((userResponse) => {
      if (userResponse.role === "admin" || userResponse.role === "vendor") {
        Product.findOneAndRemove({ _id: id })
          .then((proResponse) => {
            InCart.deleteMany({ productId: id })
              .then(() => {
                cloudinary.v2.uploader.destroy(
                  proResponse.image[0].public_id,
                  function (err, result) {
                    if (err) {
                      serverError(res);
                    } else if (result) {
                      res.status(200).json(proResponse);
                    }
                  }
                );
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
};

module.exports = {
  addProduct,
  getProduct,
  filterProduct,
  getMyproducts,
  updateProduct,
  deleteProduct,
};
