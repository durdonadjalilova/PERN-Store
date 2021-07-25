import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";
// import stockImage from "../photos/IMG_5270.png";
// import "../App.css"

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
    // axios.get(`${API}/shoes/${id}`).then(
    //   (response) => setShoe(response.data.payload),
    //   (error) => history.push(`/404`)
    // );
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateShoe(shoe, id);
  };

  const { brand, name, image_url, price, size, gender } = shoe;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center text-center mb-2 flex-column "
        id="editForm"
      >
        <div className="form-column">
          <div className="form-group col-md-5">
            <label htmlFor="brand" className="text-secondary">
              Brand:
            </label>
            <input
              value={brand}
              type="text"
              className="form-control"
              onChange={handleChange}
              id="brand"
              placeholder="Enter a brand..."
              required
            />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="name" className="text-secondary">
              Name:
            </label>
            <input
              className="form-control text-dark"
              id="name"
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="What's the style?"
              required
            />
          </div>
        </div>
        <div className="form-column form-group col-md-5">
          <label htmlFor="image_url" className="text-secondary">
            Image:
          </label>
          <input
            id="image_url"
            type="text"
            value={image_url}
            onChange={handleChange}
            placeholder="Enter a URL"
            className="form-control text-dark"
          ></input>
        </div>
        <div className="form-group col-md-2" id="editForm2">
          <label htmlFor="size" className="text-secondary">
            Size:
          </label>
          <input
            className="form-control text-dark"
            id="size"
            type="number"
            value={size}
            min="6"
            max="13"
            onChange={handleChange}
            required
          />
          <label htmlFor="price" className="text-secondary">
            Price:
          </label>
          <input
            className="form-control"
            id="price"
            type="number"
            value={price}
            min="1"
            onChange={handleChange}
            required
          />
          <label htmlFor="gender text-white" className="text-secondary">
            Gender:
          </label>
          <input
            className="form-control"
            id="gender"
            type="text"
            value={gender}
            placeholder="M, W or UNI"
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-center bd-highlight flex-row mb-2">
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
