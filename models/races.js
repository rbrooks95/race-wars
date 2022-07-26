const { Schema } = require("mongoose");

const Races = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Races;
