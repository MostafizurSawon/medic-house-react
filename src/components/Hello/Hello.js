import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const Hello = () => {
    const { serviceId } = useParams();

    // const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MostafizurSawon/59-ema-john-authenticaiton/main/src/fakeData/products.JSON')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });
    }, []);
    return (
        <div>hi
            hello {serviceId}
        </div>
    );
};

export default Hello;