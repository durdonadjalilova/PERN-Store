import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const Home = () => {
  const [images, setImages] = useState([]);

  const fetchImage = async () => {
    try {
        console.log(API)
      const res = await axios.get(`${API}/shoes`);
      setImages(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <h2 className=" text-md-center mt-5 text-secondary ">
        Welcome To PERN Famous Footwear!
      </h2>
      {images.map((image) => {
        const { image_url, id } = image;
        return (
          <span id="main" key={id} >
            <img src={image_url} alt="shoes" id="shoes" className="img-fluid " />
          </span>
        );
      })}
    </div>
  );
};

export default Home;
