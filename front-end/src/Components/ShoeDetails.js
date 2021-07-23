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

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center bd-highlight flex-column mb-2">
        <h5 className="mt-5 text-white">Brand: {brand} </h5>
        <h5 className="text-white">Name: {name}</h5>
        <img
          src={image_url}
          alt="shoe"
          className="img-fluid img-thumbnail mt-2"
        />
        <h6 className="mt-3 text-white">Price: {price}</h6>
        <h6 className="mt-1 text-white">Size: {size}</h6>
        <h6 className="mt-1 text-white">Gender: {gender}</h6>
        <br />
      </div>
      <div className="d-flex align-items-center justify-content-center bd-highlight flex-row mb-2">
        <Link to={"/shoes"}>
          <button className="mx-1 bg-dark text-white">
            BACK
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="mx-1 bg-dark text-white"
        >
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
