import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  
  const history = useHistory();
    
    const { register, handleSubmit, reset } = useForm();
    const {user,registerUser,isLoading,error} = useAuth();

    
    
    const onSubmit = (data) => {

      if(data.password !== data.password2){
        alert('Your password does not match')
        return
      }
      registerUser(data.email,data.password,data.name,history);
      reset()
       
        
        // console.log(data);
      };
    return (
        <div style={{backgroundColor: 'hsla(89, 43%, 51%, 0.3)',marginBottom:'20px'}}>
            <h2>Please Register</h2>
            {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field mb-3"
          name="namet"
          placeholder="Your Name"
          type="text"
          
          {...register("name", { required: true })}
        />
        <br />
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
          className="input-field mb-3"
          name="password2"
          type="password"
          placeholder="Re-enter Password"
          
          {...register("password2", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>}
      {isLoading && <Spinner animation="border" variant="danger" />}
      {user?.email && <Alert variant="success">Create user successfully</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <p>Already Have an Account?<Link to='/login'>Please Login</Link></p>

        </div>
    );
};

export default Register;