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
    status: {
      type: String,
      default: "Pending",
    },
    quantity: String,
    subTotal: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("order", orderSchema);
