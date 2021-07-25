import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Cart from "./Pages/Cart"
import "./App.css";

function App() {

  const [cart, setCart] = useState([]);
  const addToCart = (shoes) =>{
      setCart([...cart, shoes])
  }

  const removeShoes = (shoes) => {
    const filterArr = cart.filter((el) => el.id !==shoes.id)
    this.setCart({cart: filterArr})
}

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
            <Cart cart={cart} removeShoes={removeShoes}/>
          </Route>
          <Route exact path="/shoes/:id">
            <Show addToCart={addToCart} />
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
