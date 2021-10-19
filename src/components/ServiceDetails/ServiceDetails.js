import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    // const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log("Error Reading data " + err);
          });
    }, [])
    return (
        <Container>
            <p>Lorem {serviceId}</p>
        </Container>
    );
};

export default ServiceDetails;