const User = require("../Model/User");
const VendorInfor = require("../Model/VendorInfor");
const serverError = require("../utils/serverError");
const cloudinary = require("cloudinary");
const storeNameValidations = require("../validations/storeNameValidation");

const updateVendor = (req, res) => {
  const { storeName, imageUrl } = req.body;
  const validations = storeNameValidations({ storeName });
  if (validations.isValid) {
    if (req.file) {
      VendorInfor.findOne({ author: req.user._id })
        .populate("author")
        .then((vendor) => {
          cloudinary.v2.uploader.destroy(vendor.image.public_id);
          cloudinary.v2.uploader.upload(
            req.file.path,
            {
              public_id: "ecommerce-app/venodr-images/" + req.file.filename,
            },
            function (err, result) {
              if (err) {
                serverError(res);
              } else if (result) {
                const obj = {
                  image: {
                    url: result.url,
                    public_id: result.public_id,
                  },
                };
                VendorInfor.findOneAndUpdate({ author: req.user._id }, obj, {
                  new: true,
                })
                  .then(() => {
                    const update = {
                      storeName,
                    };
                    User.findOneAndUpdate({ _id: req.user._id }, update, {
                      new: true,
                    })
                      .then(() => {
                        VendorInfor.findOne({ author: req.user._id })
                          .populate("author")
                          .then((response) => {
                            res.status(200).json({
                              message: "Upload successful",
                              response,
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
            }
          );
        })
        .catch(() => {
          serverError(res);
        });
    } else if (imageUrl === "null") {
      VendorInfor.findOne({ author: req.user._id })
        .populate("author")
        .then((vendor) => {
          cloudinary.v2.uploader.destroy(vendor.image.public_id);
          const obj = {
            image: {
              url: "",
              public_id: "",
            },
          };
          VendorInfor.findOneAndUpdate({ author: req.user._id }, obj, {
            new: true,
          })
            .then(() => {
              const update = {
                storeName,
              };
              User.findOneAndUpdate({ _id: req.user._id }, update, {
                new: true,
              })
                .then(() => {
                  VendorInfor.findOne({ author: req.user._id })
                    .populate("author")
                    .then((response) => {
                      res.status(200).json({
                        message: "Upload successful",
                        response,
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
      const update = {
        storeName,
      };
      User.findOneAndUpdate({ _id: req.user._id }, update, {
        new: true,
      })
        .then(() => {
          VendorInfor.findOne({ author: req.user._id })
            .populate("author")
            .then((response) => {
              res.status(200).json({
                message: "Upload successful",
                response,
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
  } else {
    res.status(400).json(validations.error);
  }
};

const getMyVendor = (req, res) => {
  VendorInfor.findOne({ author: req.user._id })
    .populate("author")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getVendor = (req, res) => {
  const authorId = req.params.authorId;
  VendorInfor.findOne({ author: authorId })
    .populate("author")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const vendorFollow = (req, res) => {
  const vendorId = req.params.vendorId;
  VendorInfor.findOne({ author: vendorId })
    .then((response) => {
      const findUser = response.followers.find((el) => {
        return el.toString() === req.user._id;
      });
      if (findUser) {
        const removeUser = response.followers.filter(
          (el) => el.toString() !== req.user._id
        );
        VendorInfor.findOneAndUpdate(
          { author: vendorId },
          { followers: removeUser },
          { new: true }
        )
          .populate("author")
          .then((response) => {
            res.status(200).json(response);
          })
          .catch(() => {
            serverError(res);
          });
      } else {
        response.followers.push(req.user._id);
        VendorInfor.findOneAndUpdate(
          { author: vendorId },
          { followers: response.followers },
          { new: true }
        )
          .populate("author")
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

module.exports = {
  updateVendor,
  getMyVendor,
  getVendor,
  vendorFollow,
};
