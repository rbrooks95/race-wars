const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://roshawnbrooks:${process.env.DB_PASSWORD}@cluster1.t0yca.mongodb.net/test`
  )
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
