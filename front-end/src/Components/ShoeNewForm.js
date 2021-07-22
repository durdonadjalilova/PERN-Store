import { useState } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

const API = apiURL();

export default function ShoeNewForm() {
    const [shoe, setShoe] = useState({})

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input id="brand" type="text" value={} onChange={handleChange}></input>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={} onChange={handleChange}></input>
        <label htmlFor="image">Image:</label>
        <input id="image" type="text" value={} onChange={handleChange}></input>
        <label htmlFor="price">Price:</label>
        <input id="price" type="number" value={} onChange={handleChange}></input>
        <label htmlFor="size">Size:</label>
        <input id="size" type="number" value={} onChange={handleChange}></input>
        <label htmlFor="gender">Gender:</label>
        <input id="gender" type="radio" value={} onChange={handleChange}></input>
      </form>
    </div>
  );
}
