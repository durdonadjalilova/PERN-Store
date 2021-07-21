const db = require("../db/dbConfig.js");

const fetchAllShoes = async () => {
  try {
    const shoes = await db.any("SELECT * FROM shoes");
    return { success: true, payload: shoes };
  } catch (err) {
    console.log(err);
    return { success: false, payload: err };
  }
};

const createShoe = async () => {
  const { name } = newShoe;
  try {
    const shoe = await db.one(
      "INSERT INTO shoes(name) VALUES($1) RETURNING *",
      [name]
    );
    return { success: true, payload: shoe };
  } catch (err) {
    console.log(err);
    return { success: false, payload: err };
  }
};

module.exports = {
  fetchAllShoes,
  createShoe
};
