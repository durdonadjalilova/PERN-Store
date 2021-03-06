const express = require("express");
const shoes = express.Router();

const {
  fetchAllShoes,
  createShoe,
  getShoe,
  updateShoe,
  deleteShoe,
} = require("../queries/shoes");

shoes.get("/", async (req, res) => {
  const shoes = await fetchAllShoes();
  res.json(shoes);
});

shoes.post("/", async (req, res) => {
  const newShoe = req.body;
  const result = await createShoe(newShoe);
  res.json(result);
});

shoes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const shoe = await getShoe(id);
  res.json(shoe);
});

shoes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { brand, name, image_url, price, size, gender } = req.body;
  if (!brand || !name || !price || !size || !gender) {
    res.status(422).json({
      error: true,
      success: false,
      message: "complete all fields",
    });
  } else {
    const updatedShoe = await updateShoe(id, req.body);
    res.json(updatedShoe);
  }
});

shoes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedShoe = await deleteShoe(id);
  res.json(deletedShoe);
});

module.exports = shoes;
