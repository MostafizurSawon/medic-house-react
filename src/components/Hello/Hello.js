import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Hello = () => {
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
        <div>
            hello {serviceId}
            <h2>Name : {singleData?.name}</h2>
        </div>
    );
};

export default Hello;