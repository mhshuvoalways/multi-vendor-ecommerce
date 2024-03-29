const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const inWishListSchema = new Schema({
  authorId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  regularPrice: {
    type: Number,
    trim: true,
  },
  salePrice: {
    type: Number,
    required: true,
  }
});

module.exports = model("inwishtlist", inWishListSchema);
