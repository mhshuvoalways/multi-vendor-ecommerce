const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const billingSchema = new Schema(
  {
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    firstName: {
      type: String,
      min: 3,
      required: true,
    },
    lastName: {
      type: String,
      min: 3,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      min: 4,
      max: 20,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    additionalInfo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("billingaddress", billingSchema);
