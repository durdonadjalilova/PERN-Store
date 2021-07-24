import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function ShoeNewForm() {
  const [shoe, setShoe] = useState({
    brand: "",
    name: "",
    image_url: "",
    price: 0,
    size: 0,
    gender: "",
  });

  let history = useHistory();

  const createShoe = async (newShoe) => {
    try {
      await axios.post(`${API}/shoes`, newShoe);
      history.push("/shoes");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setShoe({ ...shoe, [e.target.id]: e.target.value });
  };

  // const handleImage = (e) => {
  //   if (e.target.value === "") {
  //     setShoe({ ...shoe, [e.target.id]: shoeImage });
  //   } else {
  //     setShoe({ ...shoe, [e.target.id]: e.target.value });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    createShoe(shoe);
  };

  const { brand, name, image_url, price, size, gender } = shoe;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex align-items-center justify-content-center bd-highlight flex-column text-center mb-2"
      >
        <label htmlFor="brand" className="text-white mt-4">
          Brand:
        </label>
        <input
          id="brand"
          type="text"
          value={brand}
          onChange={handleChange}
          placeholder="Enter a brand..."
          required
        ></input>
        <label htmlFor="name" className="text-white mt-2">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="What's the style?"
          required
        ></input>
        <label htmlFor="image_url" className="text-white mt-2">
          Image:
        </label>
        <input
          id="image_url"
          type="text"
          value={image_url}
          // {<img src={stockImage}/>}
          // value={image_url ? image_url : stockImage}
          onChange={handleChange}
          placeholder="Enter a URL"
        ></input>
        <label htmlFor="price" className="text-white mt-2">
          Price:
        </label>
        <input
          id="price"
          type="number"
          value={price}
          min="1"
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="size" className="text-white mt-2">
          Size:
        </label>
        <input
          id="size"
          type="number"
          value={size}
          min="6"
          max="13"
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="gender" className="text-white mt-2">
          Gender:
        </label>
        <input
          id="gender"
          type="text"
          value={gender}
          placeholder="M, W or UNI"
          onChange={handleChange}
        ></input>
        <button type="submit" className="bg-dark text-white mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
