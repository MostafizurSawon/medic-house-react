import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Row className="ps-5 footer pt-5">
            <Col sm={4}>
            <h1 className="d-flex align-items-center text-light">
            <i className="fas fa-heartbeat me-2"></i>Medic House</h1>
            <p>In our Medical Myths series, we approach medical misinformation head on. Using expert insight and peer reviewed research to wrestle fact from fiction, MNT brings clarity to the myth riddled world of health journalism.
                </p><p>
                Psoriasis is a relatively common immune-mediated skin condition. It causes crusty, flaky patches to appear on the skin, commonly on the knees, scalp, elbows, and back. These patches present as red on light skin and may appear violet or purple on dark skin.

             </p>
            </Col>
            <Col sm={4}>
                <h2>Recent Posts</h2>
                <Row className="d-flex align-items-center">
                    
                    <Col sm={5}>
                        <img src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <h6 className="text-muted">October 18, 2021</h6>
                        <a href="http://www.google.com">Group of new Generation</a>
                    </Col>
                    
                </Row>
                <Row className="d-flex align-items-center my-4">
                    
                    <Col sm={5}>
                        <img src="https://image.freepik.com/free-photo/woman-with-plaster-shoulder-sitting-chair-after-vaccination_1303-28448.jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <h6 className="text-muted">October 15, 2021</h6>
                        <a href="http://www.google.com">Vaccine for everyone</a>
                    </Col>
                    
                </Row>
            </Col>
            <Col sm={4}>
                <h2>Top Services</h2>
                <Row className="d-flex align-items-center">
                    
                    <Col sm={5}>
                        <img src="https://image.freepik.com/free-photo/little-girl-checking-up-her-sight-ophthalmology-center_1303-27499.jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <a href="http://www.google.com">Children Care</a>
                        <h6 className="text-muted">$ 50</h6>
                    </Col>
                    
                </Row>
                <Row className="d-flex align-items-center my-4">
                    
                    <Col sm={5}>
                        <img src="https://img.freepik.com/free-photo/female-ophtalmologist-demonstrating-spectacles-optician-shop_1303-27515.jpg?size=338&ext=jpg" alt="" className="image-fluid w-100" />
                    </Col>
                    <Col sm={7}>
                        <a href="http://www.google.com">Eye Care</a>
                        <h6 className="text-muted">$ 89</h6>
                    </Col>
                    
                </Row>
            </Col>
            <div className="bg-dark py-3 d-flex justify-content-around align-items-center">
                <h6>© Copyright by Medic House 2021</h6>
                <div className="">
                    <i className="fab fa-facebook me-3 icon"></i>
                    <i className="fab fa-instagram me-3"></i>
                    <i className="fab fa-tiktok me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-pinterest-square"></i>
                </div>
            </div>
           
        </Row>
    );
};

export default Footer;