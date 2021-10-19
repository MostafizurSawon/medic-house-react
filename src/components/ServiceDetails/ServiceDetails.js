import React, { useEffect, useState } from 'react';
import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [details, setDetails] = useState([]);
    const [singleData, setSingleData] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MostafizurSawon/59-ema-john-authenticaiton/main/public/servicesDetails.json')
        .then(res=>res.json())
        .then(data=>setDetails(data.details))
        .catch(err => {
            console.log("Error Reading data " + err);
        });
    }, []);

    useEffect(() => {
       const showDetails = details.find(detail => detail.key === serviceId)
       setSingleData(showDetails)
    }, [details]);
    return (
        <Col>
        <Card className="custom-card border-0 ">

        <Row>
            <Col sm={7} className="d-flex justify-content-center align-items-center">
            <Image className="p-3" src={singleData?.img} fluid />
            </Col>
            <Col className="my-3 d-flex align-items-center" sm={5}>
                <div>
                <h4 className="text-dark mb-5">
                   Name : {singleData?.name}</h4>
                <h4 className="text-dark mb-5">
                   Country : {singleData?.country}</h4>
                    
                <h5 className="mb-5">Experience : {singleData?.experience}</h5>
                <Link to="/home">
                <button  className=" custom-btnn"> <i className="fas fa-chevron-circle-left"></i> Home</button>
                </Link>
                </div>
                
            </Col>
        </Row>
        </Card>
        </Col>

    );
};

export default ServiceDetails;