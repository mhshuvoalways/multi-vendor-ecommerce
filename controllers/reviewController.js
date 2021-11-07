const Product = require("../Model/Product");
const User = require("../Model/User");
const Review = require("../Model/Review");
const serverError = require("../utils/serverError");

const addReview = (req, res) => {
  const { rating, comments } = req.body;
  Review.find({ productId: req.params.id, "author.authorId": req.user._id })
    .then((reviewFind) => {
      if (!reviewFind.length) {
        User.findOne({ _id: req.user._id })
          .then((userRes) => {
            Product.findOne({ _id: req.params.id })
              .then((product) => {
                const review = {
                  author: {
                    authorId: req.user._id,
                    firstName: userRes.firstName,
                    lastName: userRes.lastName,
                    image: userRes.avatar.url,
                  },
                  productId: product._id,
                  rating,
                  comments,
                };
                new Review(review)
                  .save()
                  .then((newReview) => {
                    Review.find({ productId: req.params.id })
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
                            res.status(200).json(newReview);
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
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const getReview = (req, res) => {
  Review.find({ productId: req.params.id })
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
};
