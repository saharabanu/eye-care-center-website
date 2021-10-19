import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle}= useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <div>
                <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;