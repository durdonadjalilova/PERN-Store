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
          const { brand, name, image_url, price, size, gender, id } = shoe;
          return (
            <li key={id} className="list-group">
              <h3>{brand}</h3>
              <h3>{name}</h3>
              <br />
              <img
                src={image_url}
                alt="shoes"
                className="img-fluid img-thumbnail"
              />
              <br />
              <h4>${price}</h4>
              <h4>Size: {size}</h4>
              <h4>Gender: {gender}</h4>
              <Link to={`/shoes/${id}`}>
                <button>Details</button>
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
