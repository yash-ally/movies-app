import React, {useState, useEffect} from 'react';

import axios from 'axios';

import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { addToCart, getProducts } from "../../redux/actions";

const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id }= useParams();

    const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";

    useEffect(() => {
        axios(`${url}${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => alert(err));
    }, []);

    return ( 
        <>
            <h1>Product Id: {id}</h1>
            <hr/>
            <div className="row m-2">
                <div className="col-6 p-4">
                    <img src={product.preview} style={{width: "80%"}}/>
                </div>
                <div className="col-6 p-4">
                    <h1 className="title">{product.name}</h1>
                    <h3 className="brand">{product.brand}</h3>
                    
                    <h3>Description:</h3>
                    <p className="description">{product.description}</p>
                    <h4 className="price">Price: Rs {product.price}</h4>

                    <h5>Preview Images:</h5>
                    

                    <button onClick={()=> props.addProduct(product)}>Add to Cart</button>
                </div>
            </div>
            
        </>
     );
}

const mapStateToProps = (store) => ({
    cart: store.cart,
  });

  const mapDispatchToProps = (dispatch) => ({
    sendProducts: (payload) => dispatch(getProducts(payload)),
    addProduct: (payload) => dispatch(addToCart(payload)),
  });
 
export default connect(mapStateToProps, mapDispatchToProps)(Details);