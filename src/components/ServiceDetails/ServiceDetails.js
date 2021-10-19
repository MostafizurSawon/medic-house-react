import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <Container>
            <p>Lorem {serviceId}</p>
        </Container>
    );
};

export default ServiceDetails;