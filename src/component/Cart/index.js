import React from 'react';
import { connect} from "react-redux";
import { Redirect } from "react-router-dom"
import { clearCart } from '../../redux/actions';

const Cart = ({cart, clearCartProds, redirectHome}) => {

    const getTotal = () => {
        return cart.reduce((acc, item)=>acc + Number(item.price)*Number(item.quantity), 0)
    }

    const placeOrder = () => {
        //clear the cart to place order
        clearCartProds();
    }

    const path = process.env.PUBLIC_URL;

    return ( 
        <>
        {redirectHome && <Redirect to={`${path}/`}></Redirect>}
        <h1>Your Cart has {cart.length} items</h1>
        {cart.length && cart.map((item)=>{          //{name, preview, description, quantity, price}
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {item.preview} {item.name} Rs {item.price} X {item.quantity} ={" "}
                {Number(item.price) * Number(item.quantity)}
              </h5>
            </div>
          </div>

        }
        )}
        <h1>Total = {getTotal()}</h1>
        <button className={"btn btn-success"} onClick={placeOrder}>
            Place Order
        </button>
        </>
     );
}

const mapStateToProps = (store) => ({
    cart: store.prodReducer.cart,
    redirectHome: store.prodReducer.redirectHome
});

const mapDispatchToProps = (dispatch) => ({
    clearCartProds: () => dispatch(clearCart())
})
  
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);