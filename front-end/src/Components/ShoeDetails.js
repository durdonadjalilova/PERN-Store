import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import stockImage from "../photos/IMG_5270.png";


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

  return (
    <div>

      <div className="d-flex align-items-center justify-content-center bd-highlight flex-column mb-2 ">
        <p>Brand: {brand} </p>
        <p>Name: {name}</p>
        <img src={image_url ? image_url : stockImage} alt="shoe" />
        <p>Price: {price}</p>
        <p>Size: {size}</p>
        <p>Gender: {gender}</p>
        <br />
        <img src={image_url} alt="shoe" className="img-fluid" id="shoeDetail" />
      </div>
      <div
        className="d-flex align-items-end bd-highlight flex-column"
        id="details"
      >
        <h1 className="ml-5 text-white text-start">Brand: {brand} </h1>
        <h4 className="mt-3 text-white">Name: {name}</h4>
        <h5 className="mt-2 text-white">Price: ${price}</h5>
        <h5 className="mt-2 text-white">Size: {size}</h5>
        <h5 className="mt-2 text-white">Gender: {gender}</h5>
      </div>
      <div
        className="d-flex justify-content-end bd-highlight flex-row mb-2"
        id="buttons"
      >
        <Link to={"/shoes"}>
          <button className="mx-1 bg-dark text-white">BACK</button>
        </Link>
        <button onClick={handleDelete} className="mx-1 bg-dark text-white">
          DELETE
        </button>
        <Link to={`/shoes/${id}/edit`}>
          <button className="mx-1 bg-dark text-white">EDIT</button>
        </Link>
      </div>
    </div>
  );
}

export default ShoeDetails;
