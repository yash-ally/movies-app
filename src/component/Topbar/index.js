import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const path = process.env.PUBLIC_URL
    return ( 
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Ally.io</a>
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
                  <Link to={`${path}/cart`} className="nav-link">Cart</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
     );
  }
  export default Topbar;