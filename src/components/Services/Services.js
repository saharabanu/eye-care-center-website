import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./eyeCareServices.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div className="container">
           <h2 className="text-center mt-5 mb-5 text-success">Services We’re Offering
            To Our Clients</h2>
           <div>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </Row>
       </div>
       </div>
    );
};

export default Services;