const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const paymentSchema = new Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    amount: {
      type: Number,
      default: 0,
    },
    typeofAmount: {
      type: String,
      default: "USD",
    },
    details: {
      orderId: String,
      paymentId: String,
      signature: String,
      payerID: String,
    },
    method: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("payment", paymentSchema);
