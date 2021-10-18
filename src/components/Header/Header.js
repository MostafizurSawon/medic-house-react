import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import './Header.css';
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link> 
                        <NavLink className="customLogo" activeClassName="activeStyleLogo" exact="true" to="/">
                        <span className="logo-text-first">Safe</span> <span className="logo-text">Life</span>
                              </NavLink>
                        </Nav.Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/home">
                                  Home
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/services">
                                  Services Detail
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/doctors">
                                  Our Doctors
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/about">
                                  About us
                        </NavLink>
                        </Nav.Link>

                        {user.email && <span style={{ color: 'green' }}>Hello {user.displayName} </span>}
                        {
                            user.email ?
                            <Nav.Link>
                        <NavLink className="custom-logout" activeClassName="activeStyle" to="/login" onClick={logOut}>log out
                        </NavLink>
                        </Nav.Link>
                        :
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/login">
                                  Login 
                        </NavLink>
                        <NavLink className="custom" activeClassName="activeStyle" to="/register">
                                  Register 
                        </NavLink>
                        </Nav.Link>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;