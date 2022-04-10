const Product = require("../Model/Product");
const Order = require("../Model/Order");
const Review = require("../Model/Review");
const serverError = require("../utils/serverError");

const addReview = (req, res) => {
  const { rating, comments } = req.body;
  Order.findOne({ productId: req.params.id, authorId: req.user._id })
    .then((orderRes) => {
      if (orderRes) {
        Review.find({ productId: req.params.id, authorId: req.user._id })
          .then((reviewFind) => {
            if (!reviewFind.length) {
              Product.findOne({ _id: req.params.id })
                .then((product) => {
                  const review = {
                    authorId: req.user._id,
                    productId: product._id,
                    rating,
                    comments,
                    storeId: product.author,
                  };
                  Product.findOneAndUpdate(
                    { _id: req.params.id },
                    { reviewAppeared: product.reviewAppeared + 1 }
                  )
                    .then(() => {
                      new Review(review)
                        .save()
                        .then(() => {
                          Review.find({ productId: req.params.id })
                            .populate("productId")
                            .populate("authorId")
                            .then((reviewRes) => {
                              let rating = 0;
                              reviewRes.forEach((el) => {
                                rating += el.rating;
                              });
                              const review = rating / reviewRes.length;
                              Product.findOneAndUpdate(
                                { _id: req.params.id },
                                { rating: review }
                              )
                                .then(() => {
                                  res.status(200).json(reviewRes);
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
                    })
                    .catch(() => {
                      serverError(res);
                    });
                })
                .catch(() => {
                  serverError(res);
                });
            } else {
              res
                .status(400)
                .json({ message: "You have already given a review" });
            }
          })
          .catch(() => {
            serverError(res);
          });
      } else {
        res
          .status(400)
          .json({ message: "Please purchase this product before review" });
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const getReview = (req, res) => {
  Review.find({ productId: req.params.id })
    .populate("productId")
    .populate("authorId")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getAllReviews = (req, res) => {
  Review.find()
    .populate("authorId")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getVendorReview = (req, res) => {
  Review.find({ storeId: req.params.storeauthorid })
    .populate("productId")
    .populate("authorId")
    .populate("storeId")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  addReview,
  getReview,
  getAllReviews,
  getVendorReview,
};
