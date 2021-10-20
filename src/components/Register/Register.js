
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/Firebase.init';
import useAuth from "../../Hooks/useAuth";
initializeAuthentication();


const Register = () => {
  const {signInUsingGoogle} =useAuth();
  const auth = getAuth();
  const [name,setName]=useState();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
  const handleNameChange=e=>{
        setName(e.target.value);
  }
  const handleEmailChange = e =>{
    setEmail(e.target.value)
  }
  const handlePasswordChange = e =>{
    if(e.target.value.length<6){
      setError('password will be at least 6 character')

    }
    else{
      setPassword(e.target.value)
    }
  }
  const handleRegister= (e) =>{
    e.preventDefault();
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      setError('');
      
      
    })
    .catch(error=>{
      setError(error.message)
    })
    
  }
  
    return (
      <div className="login-form">
        
        <div>
          <h2>Please Register</h2>
          <form onSubmit={handleRegister}>
            <input onChange={handleNameChange} type="text" placeholder="Your name"required/>
            <br /><br />
            <input onChange={handleEmailChange} type="text" placeholder="Your email"required/>
            <br /><br />
            <input onChange={handlePasswordChange} type="password" placeholder="Your password"/>
            <br /><br />
            <input type="submit" value="Register"/>
          </form>
          <p>{error}</p>
          <p >Already have an account? <Link to='/login'> Login</Link></p>
        <br />
       <br />

          <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>

        </div>
           
        </div>
    );
};

export default Register;