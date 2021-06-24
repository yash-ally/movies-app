import axios from "axios";
import React, { useState, useEffect } from "react";

import "./index.css"

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [showChild, setShowChild] = useState(true);
    // const [count, updateCount] = useState(0);
    // const [name, setName] = useState("Sachin");
  
    useEffect(() => {
      axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then((res) => {
          setTimeout(() => {
            setProducts(res.data);
          }, 5000);
        })
        .catch((err) => alert(err));
    //   console.log("componentDidmount");
    }, []); //componentDidmount


    return (
        <>
          <hr />
          
          <div class="d-flex flex-wrap">
                {products.length && products.map((item) => (
                    <div class="card">
                    <img src={item.preview} class="card-img-top" alt="..."/>

                    <div class="card-body">
                            <h2 class="card-title">{item.name}</h2>
                            <h4 class="card-text">{item.brand}</h4>
                            <p class="card-para">{item.description}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            <button onClick={() => setCart([...cart, item])}>Add TO Cart</button>
                    </div>
                    </div>
                ))}
                
          </div>


            
        </>
      );

}  
export default Products;