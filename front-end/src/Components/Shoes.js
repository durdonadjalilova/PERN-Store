import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";

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
  return (
    <div>
      <ul>
        {shoes.map((shoe) => {
          const { brand, name, image_url, price, size, gender,id } = shoe;
          return (
            <li key={id}>
            <Link to={`/shoes/${id}`}>
              <h2>{brand}</h2>
              <h3>{name}</h3>
              <img src={image_url} alt="shoes" />
                </Link>
              <h4>${price}</h4>
              <h4>Size: {size}</h4>
              <h4>Gender: {gender}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shoes;
