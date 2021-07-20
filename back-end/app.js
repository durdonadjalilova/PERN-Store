const cors = require("cors");
const express = require("express");

const app = express();
const shoesController = require("./controllers/shoesController");

app.use(cors());
app.use(express.json());

app.use("/shoes", shoesController);
app.get("/", (req, res) => {
  res.send("Welcome to our PERN Shoe Store");
});

module.exports = app;
