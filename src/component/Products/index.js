// import axios from "axios";
// import React, { useState, useEffect } from "react";
// // import "../../App.css";
// import { Link } from "react-router-dom";
// //Redux
// import { connect } from "react-redux";
// import { getProducts, addToCart } from "../../redux/actions";

// const Products = ({ products, sendProducts, updateCart }) => {
//   useEffect(() => {
//     axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
//       .then((res) => {
//         sendProducts(res.data);
//       })
//       .catch((err) => alert(err));
//   }, []); //componentDidmount

//   useEffect(() => {
//     console.log("Hello Products Changes");
//   }, [products]);

//   return (
//     <div className={"d-flex flex-wrap justify-content-center"}>
//       {products.length &&
//         products.map((item) => {
//           const { name, preview, id, description } = item;
//           return (
//             <div class="card m-2" style={{ width: "18rem" }} key={id}>
//               <Link
//                 to={{
//                   pathname: `/products/${id}`,
//                   preview,
//                   name,
//                   descriptionName: description, // use props.location
//                 }}
//               >
//                 <img class="card-img-top" src={preview} alt="Card image cap" />
//               </Link>
//               <div class="card-body">
//                 <Link
//                   to={{
//                     pathname: `/products/${id}`,
//                     preview,
//                     name,
//                     descriptionName: description, // use props.location
//                   }}
//                 >
//                   <h5 class="card-title">{name}</h5>
//                   <p class="card-text card-para">{description}</p>
//                 </Link>
//                 <a
//                   href="#"
//                   class="btn btn-primary mt-3"
//                   onClick={()=> props.addProduct(item)}>Add to Cart

//                 </a>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// const mapStateToProps = (store) => ({
//   products: store.products,
// });

// const mapDispatchToProps = (dispatch) => ({
//   sendProducts: (payload) => dispatch(getProducts(payload)),
//   addProduct: (payload) => dispatch(addToCart(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Products);




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
