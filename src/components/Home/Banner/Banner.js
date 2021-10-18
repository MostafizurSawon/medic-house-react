import React from 'react';
import './Banner.css';
import swal from '@sweetalert/with-react';
import { Row, Col, Accordion, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
   const after = () =>{
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
    }
    return (
        <>
        <Row className="custom-banner">
            <Col sm={5}>
            </Col>
            <Col sm={7} className=" banner-container d-flex align-items-center">
                <div>
                    <h4>You Have To Care For Your Body</h4>
                    <h1 className="banner-h1 my-3"><span className="custom-middle">Trust the specialist, </span> <br /> We are Medic House </h1>
                    <h4 className="mb-4"> You trust us and we take care of your body, <br />
                    Healthy body will bring you much more happiness </h4>
                    <Button className="custom-btn"variant="outline-success">Documents</Button>
                </div>
               
               
            </Col>
        </Row>
        <Row>
        <Col sm={6}>
                {/* <img src="https://image.freepik.com/free-vector/detailed-doctors-nurses_52683-60321.jpg" className="img-fluid" alt="" /> */}
                <img src="https://image.freepik.com/free-vector/medical-service-logos-vector-set_53876-62796.jpg" className="img-fluid" alt="" />

            </Col>
            <Col sm={6} className="d-flex align-items-center">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </Col>
            
        </Row>
        </>
    );
};

export default Banner;