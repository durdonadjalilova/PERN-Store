import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();


function ShoeDetails() {
  let [selectedShoe, setSelectedShoe] = useState({});
  let { id } = useParams();
  let history = useHistory();



  const deleteShoe = async (id) => {
    try {
      let res = await axios.delete(`${API}/shoes/${id}`);
      setSelectedShoe(res.data.payload);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const handleDelete = async () => {
    await deleteShoe(id);
    history.push("/shoes");
  };

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        let res = await axios.get(`${API}/shoes/${id}`);
        console.log(res.data.payload);
        setSelectedShoe(res.data.payload);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    fetchShoe();
  }, [id]);

  const { brand, name, image_url, price, size, gender } = selectedShoe;

  return <div>
      <Link to={"/shoes"}>
          <button>BACK</button>
      </Link>
      <button onClick={handleDelete}>DELETE</button>
      <br></br>
      <p>Brand: {brand} </p>
      <p>Name: {name}</p>
      <img src={image_url} alt="shoe" />
      <p>Price: {price}</p>
      <p>Size: {size}</p>
      <p>Gender: {gender}</p>
  </div>;
}

export default ShoeDetails;