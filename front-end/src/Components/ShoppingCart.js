import React from "react";
import stockImage from "../photos/IMG_5270.png";

function ShoppingCart({ cart, removeShoes, inCart }) {
  let text;
  if (inCart) {
    text = (
      <ul className="d-flex justify-content-center align-items-center mb-2 flex-column">
        {cart.map((shoes) => {
          return (
            <li key={shoes.id} className="mt-5 shoppingCart text-secondary">
              <img
                src={shoes.image_url ? shoes.image_url : stockImage}
                alt="shoes"
              />
              {shoes.brand}
              &nbsp; &nbsp;
              {shoes.name}
              &nbsp; &nbsp; ${shoes.price}
              <button
                onClick={() => removeShoes(shoes)}
                className="ml-3 bg-dark text-white"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    );
  } else {
    text = (
      <p id="emptyCart" className="mt-2 text-secondary text-align-center">
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
