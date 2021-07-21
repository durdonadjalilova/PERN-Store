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

const getShoe = async (id) => {
    try {
      const shoe = await db.one("SELECT * FROM test WHERE id = $1", id);
      return shoe;
    } catch (err) {
      console.log(error);
    }
  };

  const deleteShoe = async (id) => {
    try {
      const query = "DELETE FROM test WHERE id = $1 RETURNING *";
      const deletedShoe = await db.one(query, id);
      return deletedShoe;
    } catch (err) {
      return err;
    }
  };
  
  const updateShoe = async (id, shoe) => {
    try {
      const { brand, name, url, reviews, type, category, size, price } = shoe;
      const query =
        "UPDATE test SET brand=$1, name=$2, url=$3, reviews=$4, type=$5, category=$6, size=$7, price=$8 WHERE id=$9 RETURNING *";
      const updatedShoe = await db.one(query, [brand, name, url, reviews, type, category, size, price, id]);
      return updatedShoe;
    } catch (err) {
      return err;
    }
  };

module.exports = {
      fetchAllShoes,
  createShoe, getShoe, updateShoe, deleteShoe
}
