const db = require("../db");
const { Race } = require("../models");
db.on("error", console.error.bind(console, "mongodb connection error"));

const main = async () => {
  const races = [
    {
      name: "Coral Springs",
      location: "Track 1",
      trackPhoto:
        "https://maxvelocity.events/wp-content/uploads/2019/04/Estoril-Portugal.jpg",
      raceType: "Drag",
    },
    {
      name: "MONZA",
      location: "Track 2",
      trackPhoto:
        "https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg",
      raceType: "Sprint",
    },
    {
      name: "LAGUNA SECA",
      location: "Track 3",
      trackPhoto:
        "https://www.co.monterey.ca.us/home/showpublishedimage/25376/637123523806970000",
      raceType: "Drift",
    },
    {
      name: "MOUNT PANORAMA",
      location: "Track 4",
      trackPhoto:
        "https://www.thedrive.com/content/2020/02/DSC01209.jpg?quality=85",
      raceType: "Circuit",
    },
    {
      name: "CIRCUIT DE MONACO",
      location: "Track 5",
      trackPhoto:
        "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbeyondtheflag.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F04%2F690124314-f1-grand-prix-of-monaco.jpg.jpg",
      raceType: "Time Attack",
    },
  ];
  await Race.insertMany(races);
  console.log("created races");
};

const run = async () => {
  await main();
  db.close();
};

run();
