const express = require("express");
const shoes = express.Router();

const { fetchAllShoes, createShoe } = require("../queries/shoes");

shoes.get("/", async (req, res) => {
  const shoes = await fetchAllShoes();
  res.json(shoes);
});

shoes.post("/", async (req, res) => {
  const newShoe = req.body;
  const result = await createShoe(newShoe);
  res.json(result);
});

module.exports = shoes;
