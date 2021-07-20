const express = require("express");
const shoes = express.Router();

const { getAllShoes} = require ("../queries/shoes")

shoes.get('/')

module.exports = shoes