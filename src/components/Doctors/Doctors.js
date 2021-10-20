import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from './Doctor';
import './doctor.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    }, []);
    return (
        <div>
            <div className="doctor-bg">
               <h1 className="doctor-h1 text-center">Our Top Doctors</h1> 
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