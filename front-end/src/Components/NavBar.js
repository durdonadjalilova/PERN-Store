import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around navbar navbar-expand-xl navbar-dark bg-dark h1 ">
      <NavLink to="/" className="ms-auto text-white ">Pern Famous Footwear</NavLink>
      <NavLink to="/shoes"  className="ms-auto text-white"> Shoes</NavLink>
    </nav>
  );
};

export default NavBar;
