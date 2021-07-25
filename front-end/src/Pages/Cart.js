import ShoeCart from "../Components/ShoeCart";

function Cart({cart, removeShoes}) {
  return (
    <div>
      <ShoeCart cart={cart} removeShoes={removeShoes}/>
    </div>
  );
}

export default Cart;
