import React from "react";

function ShoppingCart({ cart, removeShoes }) {
  return (
    <div>
      <h3 id="cart" className="text-secondary mt-5">
        Shopping Cart
      </h3>
      <ul className="d-flex justify-content-center align-items-center mb-2 flex-column">
        {cart.map((shoes) => {
          return (
            <li key={shoes.id} className="mt-5 shoppingCart text-secondary">
              <img src={shoes.image_url} alt="shoes" />
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
    </div>
  );
}

export default ShoppingCart;
