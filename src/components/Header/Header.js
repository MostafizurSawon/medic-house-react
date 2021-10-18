import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link className="custom-logo" as={Link} to="/"> Safe Life </Nav.Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Nav.Link as={Link} to="/home"><span className="custom-login">Home</span> </Nav.Link> */}
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
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/login">
                                  Login / Register
                        </NavLink>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;