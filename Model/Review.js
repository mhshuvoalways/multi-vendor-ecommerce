const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    storeId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
    storeUsername: String,
    rating: {
      type: Number,
      default: 5,
    },
    comments: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("review", reviewSchema);
