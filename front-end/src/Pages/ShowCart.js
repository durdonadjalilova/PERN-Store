import ShoppingCart from "../Components/ShoppingCart";

function ShowCart({cart, removeShoes}) {
  return (
    <div>
      <ShoppingCart cart={cart} removeShoes={removeShoes}/>
    </div>
  );
}

export default ShowCart;
