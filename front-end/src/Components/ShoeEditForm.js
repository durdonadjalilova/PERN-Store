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
    const fetchShoe = async () => {
      try {
        const res = await axios.get(`${API}/shoes/${id}`);
        setShoe(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShoe();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateShoe(shoe, id);
  };

  let { brand, name, image_url, price, size, gender } = shoe;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-center text-center mb-2 flex-column "
        id="editForm"
      >
        <label htmlFor="brand" className="text-secondary">
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
        />
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
          <Link to={`/shoes/${id}`}>
            <button className="bg-dark text-white">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
