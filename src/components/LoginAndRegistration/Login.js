import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Login = () => {
    const {signInUsingGoogle, handleLogin, handleEmailChange, handlePasswordChange, error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    const handleEmailLogin = () => {
        handleLogin()
        .then(result =>{
            history.push(redirect_uri)
        })
    }


    return (
        <div className="login">

        <form onSubmit={handleEmailLogin} className="w-50 mx-auto">
        <h3 className="text-primary">Please Login</h3>
        
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
         Login
        </button>
        {/* <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm ms-3">Reset Password</button> */}

      </form>

            <div className="d-grid mx-auto w-50">

            <p>New to the site? <Link to="/register">Register</Link></p>
            <Button onClick={handleGoogleLogin} variant="success" size="lg">
                Login using Google
            </Button>
            </div>
        </div>
    );
};

export default Login;