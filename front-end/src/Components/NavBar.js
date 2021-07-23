import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around navbar navbar-expand-xl navbar-dark bg-dark">
      <NavLink to="/" className="text-white navbar-brand ">PERN Famous Footwear</NavLink>
      <NavLink to="/shoes"  className="text-white navbar-brand"> Shoes</NavLink>
      <NavLink to="/shoes/new"  className="text-white navbar-brand">Add New Product</NavLink>
    </nav>
  );
};

export default NavBar;
