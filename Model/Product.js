const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    author: {
      authorId: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      email: String,
    },
    name: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    regularPrice: {
      type: Number,
      trim: true,
    },
    salePrice: {
      type: Number,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    stockStatus: {
      type: Boolean,
      default: true,
    },
    inCart: {
      type: Boolean,
      default: false,
    },
    inWish: {
      type: Boolean,
      default: false,
    },
    attributes: {
      sizes: String,
      colors: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("product", productSchema);

module.exports = Product;
