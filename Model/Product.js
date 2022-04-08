const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 20,
    },
    category: {
      type: String,
      required: true,
    },
    image: [
      {
        url: {
          type: String,
          required: true,
        },
        public_id: {
          type: String,
          required: true,
        },
      },
    ],
    regularPrice: {
      type: Number,
      trim: true,
    },
    salePrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      min: 10,
    },
    attributes: {
      sizes: String,
      colors: String,
    },
    tags: [
      {
        _id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    stockStatus: {
      type: Boolean,
      default: true,
    },
    orderAppeared: {
      type: Number,
      default: 0,
    },
    reviewAppeared: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("product", productSchema);

module.exports = Product;
