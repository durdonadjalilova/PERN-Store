import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function ShoeNewForm() {
  const [shoe, setShoe] = useState({
    brand: "",
    name: "",
    image: "",
    price: 0,
    size: 0,
    gender: "",
  });

  let history = useHistory();

  const createShoe = async (newShoe) => {
    try {
      await axios.post(`${API}/shoes`, newShoe);
      // setShoe([...shoe, result.data]);
      // console.log(result);
      // console.log(setShoe);
      history.push("/shoes");
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleChange = (e) => {
    setShoe({ ...shoe, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createShoe(shoe);
    // debugger
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={shoe.brand}
          onChange={handleChange}
          placeholder="Enter a brand..."
          required
        ></input>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={shoe.name}
          onChange={handleChange}
          placeholder="What's the style?"
          required
        ></input>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          value={shoe.image}
          onChange={handleChange}
          placeholder="Enter a URL"
          required
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={shoe.price}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="size">Size:</label>
        <input
          id="size"
          type="number"
          value={shoe.size}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="gender">Gender:</label>
        <input
          id="gender"
          type="text"
          value={shoe.gender}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
