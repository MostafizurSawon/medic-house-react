import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceHome from './ServiceHome';
import '../Banner/Banner.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, []);
    return (
        <>
        <div className="text-center ">
            <h1 className="custom-middle banner-h1">Why Chose us?</h1>
            <Container className="my-5">
            <Row>
                <Col sm={4} className="d-flex justify-content-center align-items-center">
                    <Col sm={2} >
                    <img className="w-100" src="https://image.flaticon.com/icons/png/512/756/756748.png" alt="" />
                    </Col>
                    <Col sm={10} className="ms-2">
                        <h2>Helping Hand</h2>
                        <h6>Trust us with our service</h6>
                    </Col>
                </Col>
                <Col sm={4} className="d-flex justify-content-center align-items-center">
                    <Col sm={2} >
                    <img className="w-100" src="https://image.flaticon.com/icons/png/128/1248/1248847.png" alt="" />
                    </Col>
                    <Col sm={10} className="ms-2">
                        <h2>Stay Updated</h2>
                        <h6>We send monthly updates to your email</h6>
                    </Col>
                </Col>
                <Col sm={4} className="d-flex justify-content-center align-items-center">
                    <Col sm={2} >
                    <img className="w-100" src="https://image.flaticon.com/icons/png/512/17/17538.png" alt="" />
                    </Col>
                    <Col sm={10} className="ms-2">
                        <h2>Support</h2>
                        <h6>We are with you 24 hours a day!!</h6>
                    </Col>
                </Col>
                
            </Row>
            </Container>
            <h2>Here is Some of our top services</h2>
        </div>
        <Row xs={1} md={3} className="g-4 my-4 mx-5">
            {
                services.slice(0, 6).map(service => <ServiceHome key={service.key} service={service}></ServiceHome>)
            }
        </Row>
        </>
    );
};

export default Services;