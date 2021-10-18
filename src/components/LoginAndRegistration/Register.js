import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Register = () => {
    const {signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, error} = useAuth();
    // const {signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, error, handleResetPassword} = useAuth();
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

    
    return (
        <div>

        <form onSubmit={handleGoogleLogin} className="w-50 mx-auto">
        <h3 className="text-primary">Please Register
         </h3>
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>
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
          Register
        </button> 
        {/* <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm ms-2">Reset Password</button> */}

      </form>

            <div className="d-grid w-50 mx-auto">

            <p>Already Registered? <Link to="/login">Login</Link></p>
            <Button onClick={handleGoogleLogin} variant="success" size="lg">
                Login using Google
            </Button>
            </div>
        </div>
    );
};

export default Register;