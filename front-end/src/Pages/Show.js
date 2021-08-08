import ShoeDetails from "../Components/ShoeDetails";

function Show({addToCart, deleteShoe}) {
  return (
    <div>
      <ShoeDetails addToCart={addToCart} deleteShoe={deleteShoe}  />
    </div>
  );
}

export default Show;
