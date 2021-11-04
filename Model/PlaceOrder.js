const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const placeOrderSchema = new Schema({
  authorId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  quantity: {
    type: String,
    required: true,
  },
  billingAddressId: {
    type: Schema.Types.ObjectId,
    ref: "address",
  }
});

module.exports = model("placeorder", placeOrderSchema);
