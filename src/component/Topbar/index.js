import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { addToCart, getProducts } from "../../redux/actions";

const Topbar = ( {cart, user} ) => {
  const path = process.env.PUBLIC_URL
    return ( 
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Ally.io, Welcome {user.userName}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={`${path}/`} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={`${path}/products`} className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                  <Link to={`${path}/about`} className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to={`${path}/contact`} className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link to={`${path}/cart`} className="nav-link">Cart <sup>{cart.length}</sup></Link>
                </li>
                <li className="nav-item">
                  <Link to={`${path}/movies`} className="nav-link">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link to={`${path}/signin`} className="nav-link">SignIn</Link>
                </li>
                <li className="nav-item">
                  <Link to={`${path}/signup`} className="nav-link">SignUp</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
     );
  }
  const mapStateToProps = (store) => ({
    cart: store.prodReducer.cart,
    user: store.userReducer
  });
  
  
  export default connect(mapStateToProps, null)(Topbar);
