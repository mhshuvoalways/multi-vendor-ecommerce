const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    productId: [
      {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
    ],
    billingaddressId: {
      type: mongoose.Types.ObjectId,
      ref: "billingaddress",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("order", orderSchema);
