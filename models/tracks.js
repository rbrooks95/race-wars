const { Schema } = require("mongoose");

const Tracks = new Schema(
  {
    laps: { type: String, required: true },

    //track_id: { type: Schema.Types.ObjectId, ref: "race_id" },
  },
  { timestamps: true }
);

module.exports = Tracks;
