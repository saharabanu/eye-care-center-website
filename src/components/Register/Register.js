import {
  createUserWithEmailAndPassword, getAuth
} from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/Firebase.init';
import useAuth from '../../Hooks/useAuth';
initializeAuthentication();

const Register = () => {
  const {signInUsingGoogle}= useAuth();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogIn =e=>{
    setIsLogin(e.target.checked)
  }
  const handleEmailChange=e=>{
      
     setEmail(e.target.value);
  }
  const handlePasswordChange=e=>{
      setPassword(e.target.value);
  }
  
    const handleRegister=(e)=>{
      e.preventDefault();
        console.log(email,password);
        if (password.length < 6) {
          setError("password must need to be at least 6 characters");
          return;
        } ;
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
          const user= result.user;
          console.log(user)
          setError('');
        })
        .catch(error=>{
          setError(error.message)
        })
        
    }
    return (
        <div className="mx-3">
            <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
            <form onSubmit={handleRegister}>
    <div className="row mb-3">
    <label htmlFor="inputEmail3"  className="col-sm-2               col-form-label">Email</       label>
    <div className="col-sm-10">
      <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onChange={handlePasswordChange} type="password" className="form-control" id="inputPassword3"required/>
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggleLogIn}className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Already Registered?
        </label>
      </div>
    </div>
  </div>
  <div className="row mb-3">{error}</div>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'} </button>
</form>
  <p>Already have an account? <Link to='/login'> Login</Link></p>
  <br />
  <br />

  <button className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Register;