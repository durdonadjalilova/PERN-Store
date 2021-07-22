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
      return { success: false, payload: err };
    }
  };

  const deleteShoe = async () => {
      try {

      }catch (err) {
          console.log(err);
          return { success: true, payload: err}
      }
  }

  return <div>
      
  </div>;
}

export default ShoeDetails;
