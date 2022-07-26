const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const cors = require("cors");
const logger = require("morgan");

app.use(cors());
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//post request
app.post(
  "/races",
  (request, response, next) => {
    console.log("it was sent");
    next();
  },
  (req, res) => {
    res.send({
      msg: " you've entered the race",
    });
  }
);

//get request
app.get(
  "/info",
  (request, response, next) => {
    console.log("it was shown");
    next();
  },
  (req, res) => {
    res.send({
      msg: "racers ready ",
    });
  }
);

//put request
app.put(
  "/change",
  (request, response, next) => {
    console.log("it was changed");
    next();
  },
  (req, res) => {
    res.send({
      msg: "info changed",
    });
  }
);

//delete request
app.delete(
  "/delete",
  (request, response, next) => {
    console.log("it was deleted");
    next();
  },
  (req, res) => {
    res.send({
      msg: " you will no longer be in the race",
    });
  }
);

app.get(
  "/middleware",
  (request, response, next) => {
    console.log("it was sent");
    next();
  },
  (req, res) => {
    res.send({
      msg: "this is middleware",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
