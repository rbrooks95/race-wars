const db = require("../db");
const { Tracks } = require("../models");
db.on("error", console.error.bind(console, "mongodb connection error"));

const main = async () => {
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
