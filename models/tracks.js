const { Schema } = require("mongoose");

const Tracks = new Schema(
  {
    trackName: { type: String, required: true },

    publisher_id: { type: Schema.Types.ObjectId, ref: "track_id" },
  },
  { timestamps: true }
);

module.exports = Tracks;
