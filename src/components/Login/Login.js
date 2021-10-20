import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/Firebase.init';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
initializeAuthentication();

const Login = () => {
    
    const auth = getAuth();
    
    const {user,signInUsingGoogle}= useAuth();
    // const [loggedInUser, setLoggedInUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
    

    const handleEmailChange=e=>{
        
       setEmail(e.target.value);
    }
    const handlePasswordChange=e=>{
       
            setPassword(e.target.value);
          
        
    }
    const handleLogIn=(e)=>{
        console.log(email,password);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user= result.user;
          console.log(user);
          setError("");
          
          
        })
        .catch((error) => {
          setError(error.message);
        });
        



    }
    
    return (
        <div className="login-form">
             {/* <h2>{loggedInUser.email}</h2> */}
            <div>
            <h2>Please Login</h2>
            <form onSubmit={handleLogIn}>
            <input onChange={handleEmailChange} type="text" placeholder="Your Email"required/>
            <br /><br />
            <input  onChange={handlePasswordChange}type="password" placeholder="Your password"required/>
            <br /><br />
            <input type="submit" value="Submit"/>
            </form>
            <p className="text-danger">{error}</p>
            
            <br />
            <p >Are You new to Our Site? Please Regiter<Link to='/register'>Create Account</Link></p>
            <br /> <br />
            <div>
                <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
            </div>
            </div>
        </div>
    );
};

export default Login;