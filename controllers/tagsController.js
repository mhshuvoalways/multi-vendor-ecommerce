const Tags = require("../Model/Tags");
const serverError = require("../utils/serverError");

const createTags = (req, res) => {
  const { name } = req.body;
  const tagsObj = { name };
  new Tags(tagsObj)
    .save()
    .then((response) => {
      res.status(200).json({
        message: "Tag create successful",
        response,
      });
    })
    .catch(() => {
      serverError(res);
    });
};

const getTags = (req, res) => {
  Tags.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteTags = (req, res) => {
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
  createTags,
  getTags,
  deleteTags,
};
