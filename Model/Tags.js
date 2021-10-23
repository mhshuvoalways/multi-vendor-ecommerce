const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tagsSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tags = model("tag", tagsSchema);

module.exports = Tags;

