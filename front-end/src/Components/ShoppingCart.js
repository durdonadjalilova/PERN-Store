import React from "react";

function ShoppingCart({ cart, removeShoes }) {

  return (
    <div>
      <h1 id="cart" className="text-secondary mt-5">Shopping Cart</h1>
      <ul className="d-flex justify-content-left mb-2 flex-column">
        {cart.map((shoes) => {
          return (
            <li key={shoes.id} className="shoppingCart text-secondary">
              {shoes.brand}
              {shoes.name}
              {shoes.price}
              <button onClick={()=>removeShoes(shoes)} className="ml-3 bg-dark text-white">Remove shoes</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingCart;
