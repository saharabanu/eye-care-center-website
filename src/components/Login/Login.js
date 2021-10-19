import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    
    const {signInUsingGoogle}= useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange=e=>{
        
       setEmail(e.target.value);
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value);
    }
    const handleLogIn=(e)=>{
        console.log(email,password,'e.target.value');
        e.preventDefault();

    }
    
    return (
        <div className="login-form">
            <div>
            <h2>Please Login</h2>
            <form onSubmit={handleLogIn}>
            <input onChange={handleEmailChange} type="text" placeholder="Your Email"required/>
            <br /><br />
            <input  onChange={handlePasswordChange}type="password" placeholder="Your password"requred/>
            <br /><br />
            <input type="submit" value="Submit"/>
            </form>
            <br />
            <p>new to Our Site<Link to='/register'>Create Account</Link></p>
            <br /> <br />
            <div>
                <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
            </div>
            </div>
        </div>
    );
};

export default Login;