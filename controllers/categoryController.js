const Category = require("../Model/Category");
const serverError = require("../utils/serverError");

const createCategory = (req, res) => {
  const { name } = req.body;
  const tagsObj = { name };
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
