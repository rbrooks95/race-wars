const { Schema } = require("mongoose");

const Race = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    trackPhoto: { type: String, required: true },
    raceType: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Race;
