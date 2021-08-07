import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import stockImage from "../photos/IMG_5270.png";

const API = apiURL();

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  const fetchAllShoes = async () => {
    try {
      let res = await axios.get(`${API}/shoes`);
      setShoes(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllShoes();
  }, []);

  const handleChange = (type) => {
    const newShoes = [...shoes];
    const sortTypes = {
      brand: "brand",
      name: "name",
      price: "price",
      size: "size",
      gender: "gender",
    };

    const sortProperty = sortTypes[type];

    const sorted = newShoes.sort((a, b) => {
      if (
        sortProperty === "brand" ||
        sortProperty === "name" ||
        sortProperty === "gender"
      ) {
        return a[sortProperty].localeCompare(b[sortProperty]);
      } else if (sortProperty === "size" || sortProperty === "price") {
        return a[sortProperty] - b[sortProperty];
      } else {
        return null
      }
    });
    setShoes(sorted);
  };

  return (
    <div>
      <div className="text-secondary" id="sortBy">
        Sort by{" "}
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="" defaultValue></option>
          <option name="brand" value="brand">
            brand
          </option>
          <option name="name" value="name">
            name
          </option>
          <option name="price" value="price">
            price
          </option>
          <option name="size" value="size">
            size
          </option>
          <option name="gender" value="gender">
            gender
          </option>
        </select>
      </div>
      <ul  id="ul">
        {shoes.map((shoe) => {
          const { brand, name, image_url, price, size, gender, id } = shoe;
          return (
            <li key={id} className="list-group">
              <Link to={`/shoes/${id}`}>
              <h5 className="mt-3 text-secondary"> {brand}</h5>
              <h5 className="mr-3 ml-3 text-secondary"> {name}</h5>
              <br />
              <img
                src={image_url ? image_url : stockImage}
                alt="shoes"
                className="img-fluid img-thumbnail"
              />
              <br />
              <h6 className="mt-2 text-secondary">${price}</h6>
              <h6 className="text-secondary">Size: {size}</h6>
              <h6 className="text-secondary">Gender: {gender}</h6>
                {/* <button className="bg-dark text-white">Details</button> */}
              </Link>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shoes;
