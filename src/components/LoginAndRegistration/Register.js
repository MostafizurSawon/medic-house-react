import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from './../../Firebase/firebase.init';
import useAuth from './../../hooks/useAuth';
import { Button, Row, Col } from 'react-bootstrap';
import swal from '@sweetalert/with-react';
import './Register.css';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const after = () =>{
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
    }

const {signInUsingGoogle} = useAuth();
const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/'
console.log('came from', location.state?.from);

const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then(result =>{
        history.push(redirect_uri)
    });
}

  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .then(result =>{
        history.push(redirect_uri)
       })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }

  return (
      <Row>
            <Col sm={7}>
            <div className="d-flex justify-content-center align-items-center my-3 ">
              <div className=" py-4 px-4 rounded shadow">
            <form onSubmit={handleRegistration} className="mx-auto ">
              <h3 className="text-primary mb-4 text-center">Please {isLogin ? 'Login' : 'Register'}</h3>
              {!isLogin && <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-3 col-form-label">Name</label>
                <div className="col-sm-9">
                  <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                </div>
              </div>}
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                  <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="example@email.com"required />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                  <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Your Password" required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-9 offset-sm-2">
                  <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Already Registered?
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-3 text-danger">{error}</div>
              <div className="mx-auto d-flex justify-content-around">
              <button type="submit" className="btn btn-primary">
                {isLogin ? 'Login' : 'Register and Login'}
              </button>
              <button type="button" onClick={handleResetPassword} className="btn btn-danger btn-sm ms-3">Forget Password?</button>
              </div>

            </form>
            <hr />
            <div className="d-grid px-4 mx-auto my-2">
                  <Button onClick={handleGoogleLogin} className="d-flex justify-content-around align-items-center" variant="success" size="lg">
                  <i className="fab fa-google loginIcon"></i> <span className="loginText">Login using Google</span>
                  </Button>
            </div>
            </div>
    </div>
            </Col>
            <Col sm={5}>
                <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid" alt="" />
            </Col>
    </Row>

    
  );
}

export default Register;