import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './service.css'
import { Link } from 'react-router-dom';

const ServiceHome = (props) => {
    const {name, description, price, img, key} = props.service;
    return (
        <Col>
        <Card className="custom-card border-0 ">
        <Card.Img className="custom-img mx-auto p-3" variant="top" fluid src={img} />
        <Card.Body className='mx-auto'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Card.Text>
            <b>Charge: $ {price}</b> 
            </Card.Text>
        </Card.Body>
        <Link to={`/services/${key}`}>
            <button  className="m-2 custom-btnn">  Details <i className="fas fa-chevron-circle-right ms-3"></i></button>
        </Link>
        </Card>
        </Col>
    );
};

export default ServiceHome;