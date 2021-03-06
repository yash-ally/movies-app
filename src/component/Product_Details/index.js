import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { addToCart, getProducts } from "../../redux/actions";

import "./index.css";

const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [isActive, setisActive] = useState(0);

    const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";

    useEffect(() => {
        axios(`${url}${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => alert(err));
    }, []);

    const toggleClass = (index) => {
        setisActive(index);
    };

    // const changeClass = () =>{
    //     className = "image_list active"
    // }

    return (
            <>
                <h1>Product Id: {id}</h1>
                <hr />
                <div className="row m-2">
                    <div className="col-4 p-4">
                    {product.photos !== undefined && product.photos.length && product.photos.slice(0, 1).map((item, index) =>
                                <img src={product.photos[isActive]} width={100} />
                            )}

                        {/* <img src={product.photos[isActive]} style={{ width: "80%" }} /> */}
                    </div>
                    <div className="col-6 p-4">
                        <h1 className="title">{product.name}</h1>
                        <h3 className="brand">{product.brand}</h3>

                        <h3>Description:</h3>
                        <p className="description">{product.description}</p>
                        <h4 className="price">Price: Rs <span id="price-tag">{product.price}</span></h4>

                        <h5>Preview Images:</h5>
                        <div className="images">
                            {product.photos !== undefined && product.photos.length && product.photos.slice(0, product.photos.length).map((item, index) =>
                                <img className={isActive === index ? "active_image" : "image_list"} onClick={() => toggleClass(index)} src={item} width={100}
                                // onClick={className = "active"}
                                // className={isActive? "col-4 p-4 active_image" : "image_list"} onClick={toggleClass}
                                />
                            )}
                        </div>

                        {/* <button
                        onClick={() => {
                            props.history.push("/contact");
                        }}
                        >
                        CLick to Redirect to back
                        </button> */}

                        <button onClick={() => props.addProduct(product)}>Add to Cart</button>
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