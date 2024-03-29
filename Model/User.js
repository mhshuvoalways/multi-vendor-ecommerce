const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      max: 20,
    },
    username: {
      type: String,
    },
    firstName: {
      type: String,
      min: 3,
    },
    lastName: {
      type: String,
      min: 3,
    },
    phone: {
      type: String,
      min: 4,
      max: 20,
    },
    storeName: {
      type: String,
      min: 2,
      max: 50,
    },
    role: {
      type: String,
      default: "customer",
    },
    avatar: {
      public_id: String,
      url: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    strategy: {
      type: String,
      default: "email",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
