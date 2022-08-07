const mongoose = require("mongoose");
const RaceSchema = require("./races");
const TracksSchema = require("./tracks");

const Race = mongoose.model("Race", RaceSchema);
const Tracks = mongoose.model("Tracks", TracksSchema);

module.exports = {
  Race,
  Tracks,
};
