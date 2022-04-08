const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const vendorSchema = new Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    image: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    followers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("vendor", vendorSchema);
