import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const {user,loginUser,signinWithGoogle,isLoading,error} = useAuth();
    const { register, handleSubmit, } = useForm();
    
      const location = useLocation();
      const history = useHistory();

    const onSubmit = (data) => {

      loginUser(data.email, data.password,location,history);
        // console.log(data);
    };
    const handleGoogleSignIn =()=>{
      signinWithGoogle(location,history);
    }
    return (
        <div style={{backgroundColor: 'hsla(89, 43%, 51%, 0.3)',marginBottom:'20px'}}>
            <h2>Please Login</h2>
            { !isLoading && <form onSubmit={handleSubmit(onSubmit)}>
        
        <input
          className="input-field mb-3"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field mb-3"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Login"
        />
      </form>}
      {isLoading && <Spinner animation="border" variant="danger" />}
      {user?.email && <Alert
      variant="success">Create user successfully</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <p>Are You New User?<Link to='/register'>Please Register</Link></p>


      <div>---------------------------------------</div>
      <button onClick={handleGoogleSignIn} className="btn btn-warning mb-3">Google SignIn</button>

        </div>
    );
};

export default Login;