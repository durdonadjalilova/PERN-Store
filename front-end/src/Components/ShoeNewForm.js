import axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function ShoeNewForm() {
  const [shoe, setShoe] = useState({
    brand: "",
    name: "",
    image_url: "",
    price: 0,
    size: 0,
    gender: ""
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

  const handleSubmit = (e) => {
    e.preventDefault();
    createShoe(shoe);
  };

  const { brand, name, image_url, price, size, gender } = shoe;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-center text-center mb-2 flex-column "
        id="new-form"
      >
        <label htmlFor="brand" className="mt-5 text-secondary">
          Brand:
        </label>
        <input
          value={brand}
          type="text"
          onChange={handleChange}
          id="brand"
          placeholder="Enter a brand..."
          required
        />
        <label htmlFor="name" className="text-secondary">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="What's the style?"
          required
        />
        <label htmlFor="image_url" className="text-secondary">
          Image:
        </label>
        <input
          id="image_url"
          type="text"
          value={image_url}
          onChange={handleChange}
          placeholder="Enter a URL"
        ></input>
        <label htmlFor="size" className="text-secondary">
          Size:
        </label>
        <input
          id="size"
          type="number"
          value={size}
          step="0.5"
          min="6"
          onChange={handleChange}
          required
        />
        <label htmlFor="price" className="text-secondary">
          Price:
        </label>
        <input
          id="price"
          type="number"
          value={price}
          step="0.01"
          min="1"
          onChange={handleChange}
          required
        />
        <label htmlFor="gender text-white" className="text-secondary">
          Gender:
        </label>
        <input
          id="gender"
          type="text"
          value={gender}
          placeholder="M, W or UNI"
          onChange={handleChange}
          required
        />
        <div className="mr-4 mt-3 d-flex justify-content-center mb-2 flex-row">
          <button type="submit" className="mx-4 bg-dark text-white">
            Submit
          </button>
          <Link to={`/shoes`}>
            <button className="bg-dark text-white">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
