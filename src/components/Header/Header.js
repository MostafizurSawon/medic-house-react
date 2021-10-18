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
                        
                        <span className="logo-text-first"><i class="fas fa-house-damage"></i> Medic</span> <span className="logo-text">House</span>
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
                        <NavLink className="custom-logout" activeClassName="activeStyle" to="/register" onClick={logOut}>log out
                        </NavLink>
                        </Nav.Link>
                        :
                        <Nav.Link>
                        <NavLink className="custom d-flex align-items-center " activeClassName="activeStyle" to="/register">
                        <i class="fas fa-user-plus me-2"></i> Register 
                        </NavLink>
                        </Nav.Link>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;