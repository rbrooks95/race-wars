const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(logger("dev"));

// do we have to use this still since it comes out the box still?
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
  console.log(`App listening on port: ${PORT}`);
});
