import ShoeDetails from "../Components/ShoeDetails";

function Show({addToCart}) {
  return (
    <div>
      <ShoeDetails addToCart={addToCart} />
    </div>
  );
}

export default Show;
