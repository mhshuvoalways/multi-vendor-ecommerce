const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      
    },
    category: {
      type: String,
    
    },
    image: {
      type: String,
    
    },
    regularPrice: {
      type: Number,
    
    },
    salePrice: {
      type: Number,
    
    },
    description: {
      type: String,
    
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
  },
  {
    timestamps: true,
  }
);

const Product = model("product", productSchema);

module.exports = Product;
