import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function ShoeNewForm() {
  const [newShoe, setNewShoe] = useState({
    brand: "",
    name: "",
    image_url: "",
    price: 0,
    size: 0,
    gender: ""
  });

  let history = useHistory();

  const createShoe = async (shoe) => {
    try {
      await axios.post(`${API}/shoes`, shoe);
      // setShoe([...shoe, result.data]);
      // console.log(result);
      // console.log(setShoe);
      history.push("/shoes");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setNewShoe({ ...newShoe, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createShoe(newShoe);
    // debugger
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex align-items-center justify-content-center bd-highlight flex-column text-center mb-2"
      >
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={newShoe.brand}
          onChange={handleChange}
          placeholder="Enter a brand..."
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={newShoe.name}
          onChange={handleChange}
          placeholder="What's the style?"
          required
        />
        <label htmlFor="image_url">Image:</label>
        <input type="text" id="image_url " alt="Login" placeholder="Image Link"/>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={newShoe.price}
          onChange={handleChange}
          required
        />
        <label htmlFor="size">Size:</label>
        <input
          id="size"
          type="number"
          value={newShoe.size}
          onChange={handleChange}
          required
        />
        <label htmlFor="gender">Gender:</label>
        <input
          id="gender"
          type="text"
          value={newShoe.gender}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
