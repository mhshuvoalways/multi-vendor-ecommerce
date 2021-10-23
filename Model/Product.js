const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    author: {
      authorId: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      storeName: {
        type: String,
        required: true,
      },
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
    reviews: {
      type: Schema.Types.ObjectId,
      ref: "review",
    },
    stockStatus: {
      type: Boolean,
      default: true,
    },
    inCart: {
      cartId: {
        type: Schema.Types.ObjectId,
        ref: "incart",
      },
      type: Boolean,
      default: false,
    },
    inWish: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("product", productSchema);

module.exports = Product;
