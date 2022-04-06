const Category = require("../Model/Category");
const serverError = require("../utils/serverError");
const cloudinary = require("cloudinary");

const createCategory = (req, res) => {
  cloudinary.v2.uploader.upload(
    req.file.path,
    {
      public_id: "ecommerce-app/category-icon/" + req.file.filename,
    },
    function (err, result) {
      if (err) {
        serverError(res);
      } else if (result) {
        const tagsObj = {
          name: req.body.name,
          icon: {
            url: result.url,
            public_id: result.public_id,
          },
        };
        new Category(tagsObj)
          .save()
          .then((response) => {
            res.status(200).json({
              message: "Category create successful",
              response,
            });
          })
          .catch(() => {
            serverError(res);
          });
      }
    }
  );
};

const getCategory = (req, res) => {
  Category.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteCategory = (req, res) => {
  const id = req.params.id;
  Category.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  createCategory,
  getCategory,
  deleteCategory,
};
