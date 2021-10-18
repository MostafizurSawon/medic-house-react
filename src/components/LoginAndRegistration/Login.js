import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle} = useAuth();
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
        <div className="login">
            <div className="d-grid w-50 mx-auto">
            <Button onClick={handleGoogleLogin} variant="success" size="lg">
                Login using Google
            </Button>
            </div>
        </div>
    );
};

export default Login;