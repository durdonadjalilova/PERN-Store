import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import ShoeDetails from "./ShoeDetails";

function ShoeCart({ cart, removeShoes }) {
  // const [cart, setCart] = useState([]);
  // // const [shoes, setShoes] = useState({})
  // let { id } = useParams();
  // let history = useHistory();
  // const addToCart = (shoes) =>{
  //     setCart([...cart, shoes])
  // }

  return (
    <div>
      <h1 id="cart" className="text-secondary mt-5">Shopping Cart</h1>
      <ul className="d-flex justify-content-left mb-2 flex-column">
        {cart.map((shoes, i) => {
          return (
            <li key={shoes.id} className="shoppingCart text-secondary">
              {shoes.brand}
              {shoes.name}
              {shoes.price}
              <button onClick={() => removeShoes} className="ml-3 bg-dark text-white">Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoeCart;
