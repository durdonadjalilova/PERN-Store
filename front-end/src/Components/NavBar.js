import { NavLink } from "react-router-dom"; 

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around navbar navbar-expand-xl navbar-dark bg-dark">
      <NavLink to="/" className="text-white navbar-brand " >
        <h1 id="h1">PERN Famous Footwear</h1>
      </NavLink>
      <div>
      <NavLink to="/shoes" className="text-white navbar-brand">
        <h4>Shoes</h4>
      </NavLink>
      <NavLink to="/shoes/new" className="text-white navbar-brand">
        <h4>Add New Product</h4>
      </NavLink>
      <NavLink to="/shoes/cart" className="text-white navbar-brand">
        <h4>Shopping Cart</h4>
      </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
