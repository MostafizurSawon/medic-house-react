import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Image } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='mx-auto'>
            <img src="https://image.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1923.jpg" alt="" />
                {/* <Image src="https://cdn.dribbble.com/users/722246/screenshots/3066818/media/0f1c45dcf80e887f41b3c0080660fd37.gif" className="image-custom" fluid/> */}
                <br />
                <Button variant="outline-secondary"><Link to="/home"><span>Back to Home</span></Link></Button>
        </div>
    );
};

export default NotFound;