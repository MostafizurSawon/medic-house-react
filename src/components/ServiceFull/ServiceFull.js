import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import View from './View';

const ServiceFull = () => {
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
            <h2>Here is our services</h2>
        </div>
        <Row xs={1} md={3} className="g-4 my-4 mx-5">
            {
                services.map(service => <View key={service.key} service={service}></View>)
            }
        </Row>
        </>
    );
};
export default ServiceFull;