import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import ShowCart from "./Pages/ShowCart";
import "./App.css";
import axios from "axios";
import { apiURL } from "./util/apiURL";

const API = apiURL();

function App() {
  let history = useHistory();

  const [cart, setCart] = useState([]);
  const addToCart = (shoes) => {
    setCart([...cart, shoes]);
    history.push(`/shoes/cart`);
  };

  const deleteShoe = async (id) => {
    try {
      await axios.delete(`${API}/shoes/${id}`);
      const filterArr = cart.filter((item) => item.id !== Number(id));
      setCart(filterArr);
      console.log(filterArr);
    } catch (err) {
      console.log(err);
    }
  };

  const removeShoes = (shoes) => {
    const filterArr = cart.filter((item) => item.id !== shoes.id);
    setCart(filterArr);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shoes">
            <Index />
          </Route>
          <Route path="/shoes/new">
            <New />
          </Route>
          <Route exact path="/shoes/cart">
            <ShowCart cart={cart} removeShoes={removeShoes} />
          </Route>
          <Route exact path="/shoes/:id">
            <Show cart={cart} addToCart={addToCart} deleteShoe={deleteShoe} />
          </Route>
          <Route path="/shoes/:id/edit">
            <Edit />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
