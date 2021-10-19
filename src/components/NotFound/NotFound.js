import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container-fluid my-3">
            <div>
                <img className="w-100" src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/47ae8417ee638d039a4b7300439ea061.gif" alt="" />
            </div>
            

            <div className="d-grid mt-2 w-50 mx-auto">
            <Button variant="success" size="lg">
                <Link to="/home">  
                <i className="fas fa-home"></i>   Back to Home           
                </Link>
            </Button>
            </div>
        </div>
    );
};

export default NotFound;