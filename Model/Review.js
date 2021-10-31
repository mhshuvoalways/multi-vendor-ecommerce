const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  author: {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  product: {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    name: {
      type: String,
      required: true,
    },
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  comments: [
    {
      type: String,
    },
  ],
});

module.exports = model("review", reviewSchema);
