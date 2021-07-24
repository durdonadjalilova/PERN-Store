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
      <ul id="ul">
        {shoes.map((shoe) => {
          const { brand, name, image_url, price, size, gender, id } = shoe;
          return (
            <li key={id} className="list-group">
              <h5 className="mt-3 text-white">{brand}</h5>
              <h5 className="mr-3 ml-3 text-white"> {name}</h5>
              <br />
              <img
                src={image_url}
                alt="shoes"
                className="img-fluid img-thumbnail"
              />
              <br />
              <h6 className="text-white">${price}</h6>
              <h6 className="text-white">Size: {size}</h6>
              <h6 className="text-white">Gender: {gender}</h6>
              <Link to={`/shoes/${id}`}>
                <button className="bg-dark text-white">Details</button>
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
