import React from 'react';
import { connect} from "react-redux";
import { Redirect, Link } from "react-router-dom"


const orderPlaced = ({redirectHome}) => {

    const path = process.env.PUBLIC_URL;    

    return ( 
    <>
        {redirectHome && <Redirect to={`${path}/`}></Redirect>}
        <h2>Your Order has been Placed...</h2>
        <br/>
        <hr/>
        <Link to={`${path}/`} className="nav-link" style={{color: "grey"}}> <span style ={{color: "blue"}}>Click Here</span> to go back to Home</Link>
    </>
     );
}
 
export default orderPlaced;