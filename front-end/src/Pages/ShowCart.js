import ShoppingCart from "../Components/ShoppingCart";

function ShowCart({cart, removeShoes, inCart}) {
  return (
    <div>
      <ShoppingCart cart={cart} removeShoes={removeShoes} inCart={inCart} />
    </div>
  );
}

export default ShowCart;
