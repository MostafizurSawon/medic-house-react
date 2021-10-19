import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

const Doctor = (props) => {
    const {name, experience, img} = props.doctor;
    return (
        <Col>
        <Card className="custom-card border-0 ">

        <Row>
            <Col sm={7} className="d-flex justify-content-center align-items-center">
            <Image className="p-3" src={img} fluid />
                {/* <img src={img} alt="" className="img-fluid" /> */}
            </Col>
            <Col className="my-3 d-flex align-items-center" sm={5}>
                <div className="">
                    <h6>Name :</h6>
                <h4 className="text-dark">
                    {name}</h4>
                    <h6 className="mt-3">Experience :</h6>
                <h5>{experience}</h5>
                </div>
            </Col>
        </Row>
        {/* <Card.Img className="custom-img mx-auto p-3" variant="top" fluid src={img} />
        <Card.Body className='mx-auto'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {experiences}
            </Card.Text>
        </Card.Body> */}
        </Card>
        </Col>
    );
};

export default Doctor;