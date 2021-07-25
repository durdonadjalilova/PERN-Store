import React from "react";

function ShoppingCart({ cart, removeShoes }) {

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((shoes) => {
          return (
            <li key={shoes.id}>
              {shoes.brand}
              {shoes.name}
              {shoes.price}
              <button onClick={()=>removeShoes(shoes)}>Remove shoes</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingCart;
