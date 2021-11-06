const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userAddressSchema = new Schema(
  {
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
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
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("useraddress", userAddressSchema);
