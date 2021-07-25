import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import ShoeDetails from "./ShoeDetails";

function Cart() {
    const [cart, setCart] = useState([]);
    // const [shoes, setShoes] = useState({})
    let { id } = useParams();
    let history = useHistory();

    const addToCart = (shoes) =>{
        setCart([...cart, shoes])
    }

    const removeShoes = (shoes) => {
        const filterArr = cart.filter((el) => el.id !==shoes.id)
        this.setCart({cart: filterArr})
    }

    return (
        <div>
         <h1>Shopping Cart</h1>
         <Route>
<ShoeDetails addToCart={addToCart} />
</Route>
         <ul>
    {cart.map((shoes,i)=>{
        return <li key={shoes.id}>
            {shoes.brand}
            {shoes.name}
            {shoes.price}
        <button onClick={removeShoes}>Remove shoes</button>
        </li>
    })}
</ul>
        </div>
    )
}

export default Cart;
