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

  const handleSubmit = (e) => {
    e.preventDefault();
    createShoe(shoe);
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
            onChange={handleChange}
          />
          <label htmlFor="price" className="text-secondary">
            Price:
          </label>
          <input
            className="form-control"
            id="price"
            type="number"
            value={price}
            onChange={handleChange}
          />
          <label htmlFor="gender text-white" className="text-secondary">
            Gender:
          </label>
          <input
            className="form-control"
            id="gender"
            type="text"
            value={gender}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="bg-dark text-white" id="newFormButton"> 
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
