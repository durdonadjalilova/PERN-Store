import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function ShoeEditForm() {
  let { id } = useParams();
  let history = useHistory();

  const [shoe, setShoe] = useState({
    brand: "",
    name: "",
    image_url: "",
    price: 0,
    size: 0,
    gender: "",
  });

  const updateShoe = async (updatedShoe) => {
    try {
      await axios.put(`${API}/shoes/${id}`, updatedShoe);
      history.push(`/shoes/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setShoe({ ...shoe, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/shoes/${id}`).then(
      (response) => setShoe(response.data.payload),
      (error) => history.push(`/not-found`)
    );
  }, [id, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateShoe(shoe, id);
  };

  const { brand, name, image_url, price, size, gender } = shoe;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={brand}
          onChange={handleChange}
          placeholder="Enter a brand..."
        ></input>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="What's the style?"
        ></input>
        <label htmlFor="image_url">Image:</label>
        <input
          id="image_url"
          type="text"
          value={image_url}
          onChange={handleChange}
          placeholder="Enter a URL"
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={handleChange}
        ></input>
        <label htmlFor="size">Size:</label>
        <input
          id="size"
          type="number"
          value={size}
          onChange={handleChange}
        ></input>
        <label htmlFor="gender">Gender:</label>
        <input
          id="gender"
          type="text"
          value={gender}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
        <Link to={`/shoes/${id}`}>
          <button>Nevermind!</button>
        </Link>
      </form>
    </div>
  );
}
