const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./db");
const cors = require("cors");
const logger = require("morgan");

app.use(cors());
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const { Race } = require("./models");

//get request
app.get("/races", async (req, res) => {
  let races = await Race.find({});
  console.log(races);
  res.json(races);
});

// get with params
app.get("/races/:id", async (req, res) => {
  let race = await Race.findById(req.params.id);
  console.log(race);
  res.json(race);
});
//post request
app.post("/newracer", async (req, res) => {
  let raceSend = await Race.create({
    name: "Roshawn",
    location: "Track 3",
    trackPhoto: "333",
    raceType: "Drift",
  });
  console.log(raceSend);
  res.json(raceSend);
});

//put request
app.put("/change/:id", async (req, res) => {
  let race = await Race.findByIdAndUpdate({ _id: req.params.id });
  let racerChanged = await Race.updateOne({
    msg: "info changed",
  });
  res.json(race);
});

//delete request
app.delete("/delete/:id", async (req, res) => {
  let deleted = await Race.deleteOne(req.params.id);
  console.log(deleted);
  res.json(deleted);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
