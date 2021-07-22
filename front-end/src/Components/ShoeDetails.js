import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import apiURL from "../util/apiURL";
import { Link } from "react-router-dom";

const API = apiURL();

function ShoeDetails() {
  let [selectedShoe, setSelectedShoe] = useState();
  let { id } = useParams();
  let history = useHistory();

  const fetchShoe = async () => {
    try {
      let res = await axios.get(`${API}/shoes`);
      console.log(res.data);
      setSelectedShoe(res.data);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const deleteShoe = async (id) => {
    try {
      let res = await axios.delete(`${API}/songs/${id}`);
      setSelectedShoe(res.data);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const handleDelete = () => {
    deleteShoe(id);
    history.push("/shoes");
  };

  useEffect(() => {
    fetchShoe();
  }, [id]);

  const { brand, name, image, price, size, gender } = shoe;

  return <div>
      <Link to={"/shoes"}>
          <button>BACK</button>
      </Link>
      <button onClick={handleDelete}>DELETE</button>
      <br></br>
      <p>{brand}</p>
      <p>{name}</p>
      <p>{image}</p>
      <p>{price}</p>
      <p>{size}</p>
      <p>{gender}</p>
  </div>;
}

export default ShoeDetails;
