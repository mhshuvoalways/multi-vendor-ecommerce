const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  author: {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    firstName: String,
    lastName: String,
    image: String,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  rating: {
    type: Number,
    default: 5,
  },
  comments: {
    type: String,
  },
});

module.exports = model("review", reviewSchema);
