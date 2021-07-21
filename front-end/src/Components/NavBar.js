import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around navbar navbar-expand-xl navbar-dark bg-dark">
      <NavLink to="/" className="ms-auto bd-highlight d-inline-block">Pern Famous Footwear</NavLink>
      <NavLink to="/shoes"  className="ms-auto bd-highlight d-inline-block"> Shoes</NavLink>
    </nav>
  );
};

export default NavBar;
