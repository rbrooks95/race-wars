const { Schema } = require("mongoose");

const Race = new Schema(
  {
    name: { type: String, required: true },
    car: { type: String, required: true },
    model: { type: String, required: true },
    trackPhoto: { type: String, required: true },
    raceType: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Race;
