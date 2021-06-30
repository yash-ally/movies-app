import axios from "axios";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { addToCart, getProducts } from "../../redux/actions";

import { Link } from 'react-router-dom'

import "./index.css"

const Products = (props) => {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  // const [showChild, setShowChild] = useState(true);
  // const [count, updateCount] = useState(0);
  // const [name, setName] = useState("Sachin");

  useEffect(() => {
    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        setTimeout(() => {
          props.sendProducts(res.data);
          // setProducts(res.data);
        }, 5000);
      })
      .catch((err) => alert(err));
    //   console.log("componentDidmount");
  }, []); //componentDidmount
  const path = process.env.PUBLIC_URL

  return (
    <>
      <hr />
      <h2>Clothing for Men and Women:</h2>

      <div class="d-flex flex-wrap">
        {props.products.length && props.products.map((item) => {
          const { name, preview, brand, id, description, price, isAccessory } = item;
          // let { name, preview, id, description } = item;
          if (isAccessory == false) {
            return (
              // <div className="prod_row">
              <>
                <div class="card">

                  <Link to={{
                    pathname: `${path}/products/${id}`,
                    preview,
                    name,
                    descriptionName: description, // use props.location
                  }}
                  >

                    <img src={item.preview} class="card-img-top" alt="..." />
                  </Link>

                  <div class="card-body" >

                    <Link to={{
                      pathname: `${path}/products/${id}`,
                      preview,
                      name,
                      descriptionName: description, // use props.location
                    }}
                    >

                      <h2 class="card-title">{name}</h2>
                    </Link>
                    <h4 class="card-text">{brand}</h4>
                    <p class="card-para">{description}</p>
                    <p class="card-para">{price}</p>
                    <a href="#" class="btn btn-primary" onClick={() => props.addProduct(item)}>Add to Cart</a>
                    {/* <button onClick={() => setCart([...cart, item])}>Add TO Cart</button> */}

                  </div>
                </div>
              </>
            );
          }

        })}

      </div>

      <h2>Accessories for Men and Women:</h2>

      <div class="d-flex flex-wrap">
        {props.products.length && props.products.map((item) => {
          const { name, preview, brand, id, description, price, isAccessory } = item;
          // let { name, preview, id, description } = item;
          if (isAccessory == true) {
            return (
              // <div className="prod_row">
              <>
                <div class="card">

                  <Link to={{
                    pathname: `${path}/products/${id}`,
                    preview,
                    name,
                    descriptionName: description, // use props.location
                  }}
                  >

                    <img src={item.preview} class="card-img-top" alt="..." />
                  </Link>

                  <div class="card-body" >

                    <Link to={{
                      pathname: `${path}/products/${id}`,
                      preview,
                      name,
                      descriptionName: description, // use props.location
                    }}
                    >

                      <h2 class="card-title">{name}</h2>
                    </Link>
                    <h4 class="card-text">{brand}</h4>
                    <p class="card-para">{description}</p>
                    <p class="card-para">{price}</p>
                    <a href="#" class="btn btn-primary" onClick={() => props.addProduct(item)}>Add to Cart</a>
                    {/* <button onClick={() => setCart([...cart, item])}>Add TO Cart</button> */}

                  </div>
                </div>
              </>
            );
          }

        })}

      </div>

    </>
  );

};
const mapStateToProps = (store) => ({
  products: store.prodReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (payload) => dispatch(getProducts(payload)),
  addProduct: (payload) => dispatch(addToCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
