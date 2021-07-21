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

const createShoe = async (newShoe) => {
  const { brand, name, image_url, price, size, gender } = newShoe;
  try {
    const shoe = await db.one(
      "INSERT INTO shoes(brand, name, image_url, price, size, gender) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [brand, name, image_url, price, size, gender]
    );
    return { success: true, payload: shoe };
  } catch (err) {
    console.log(err);
    return { success: false, payload: err };
  }
};

const getShoe = async (id) => {
  try {
    const shoe = await db.one("SELECT * FROM shoes WHERE id = $1", id);
    return { success: true, payload: shoe };
  } catch (err) {
    console.log(err);
  }
};

const deleteShoe = async (id) => {
  try {
    const query = "DELETE FROM shoes WHERE id = $1 RETURNING *";
    const deletedShoe = await db.one(query, id);
    return { success: true, payload: deletedShoe };
  } catch (err) {
    return err;
  }
};

const updateShoe = async (id, shoe) => {
  try {
    const { brand, name, image_url, price, size, gender } = shoe;
    const query =
      "UPDATE shoes SET brand=$1, name=$2, image_url=$3, price=$4, size=$5, gender=$6 WHERE id=$7 RETURNING *";
    const updatedShoe = await db.one(query, [
      brand,
      name,
      image_url,
      price,
      size,
      gender,
      id,
    ]);
    return { success: true, payload: updatedShoe };
  } catch (err) {
    return err;
  }
};

module.exports = {
  fetchAllShoes,
  createShoe,
  getShoe,
  updateShoe,
  deleteShoe,
};
