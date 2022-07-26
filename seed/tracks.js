const db = require("../db");
const { Tracks, Race } = require("../models");
db.on("error", console.error.bind(console, "mongodb connection error"));

const main = async () => {
  const coralTrack = await Race.find({ name: "Coral Springs" });
  const coralTrack = await Race.find({ name: "MONZA" });
  const coralTrack = await Race.find({ name: "LAGUNA SECA" });
  const coralTrack = await Race.find({ name: "MOUNT PANORAMA" });
  const coralTrack = await Race.find({ name: "CIRCUIT DE MONACO" });

  const trackNames = [
    {
      trackName: "Coral Springs",
    },
    {
      trackName: "MONZA",
    },
    {
      trackName: "LAGUNA SECA",
    },
    {
      trackName: "MOUNT PANORAMA",
    },
    {
      trackName: "CIRCUIT DE MONACO",
    },
  ];
  await Race.insertMany(trackNames);
  console.log("created track names");
};

const run = async () => {
  await main();
  db.close();
};

run();
