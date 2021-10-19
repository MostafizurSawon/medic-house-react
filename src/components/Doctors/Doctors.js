import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    }, []);
    return (
        <div>
            <div className="bg-dark m-5 p-5">
               <h1 className="text-light text-center">Our Top Doctors</h1> 
            </div>

            <Row xs={1} md={3} className="g-4 my-4 mx-5">
            {
                doctors.map(doctor => <Doctor key={doctor.key} doctor={doctor}></Doctor>)
            }
        </Row>
            
        </div>
    );
};

export default Doctors;