import React from "react";
import stockImage from "../photos/IMG_5270.png";

function ShoppingCart({ cart, removeShoes, inCart }) {
  let text;
  if (inCart) {
    text = (
      <ul >
        {cart.map((shoes) => {
          return (
            <li key={shoes.id} className="d-flex ml-5 flex-column flex-wrap-wrap justify-content-around align-items-start mb-2" >
              <img
              id="cartShoeImage"
                src={shoes.image_url ? shoes.image_url : stockImage}
                alt="shoes"
              />
             <h6 className="mt-3">Brand: {shoes.brand}</h6>
              &nbsp; &nbsp;
              <h6> Name: {shoes.name}</h6>
              &nbsp; &nbsp; 
              <h6>Price: ${shoes.price}</h6>
              &nbsp; &nbsp;
              <button
                onClick={() => removeShoes(shoes)}
                className="mb-5 bg-dark text-white"
              >
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    );
  } else {
    text = (
      <p id="emptyCart" className="mt-5 text-secondary text-center">
        Your Cart Is Empty
      </p>
    );
  }
  return (
    <div>
      <h2 id="cart" className="text-secondary mt-5">
        Shopping Cart
      </h2>
      {text}
    </div>
  );
}

export default ShoppingCart;
