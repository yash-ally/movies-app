import React, {useState} from 'react';

import {Redirect} from 'react-router-dom';

import PropTypes from "prop-types";

const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [navigateUser, setnavigateUser] = useState(false);
    //utils
    const user = { name: "yash", pass: "1234" };

    //functions
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, pass } = user;
        if (username.toLowerCase() === name && password === pass) {
        setnavigateUser(true);
        }
    };

    return ( 
        <>
        {navigateUser && <Redirect to="/products" />}
        <h1>Sign In</h1>
        <form onSubmit={()=>handleSubmit}>
            <label>User Name</label>
            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <br/>
            <label>Password</label>
            <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <br/>

            <input type="submit"/>

        </form>
        </>
     );
}
 
export default SignIn;