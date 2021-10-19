import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Feature from '../Feature/Feature';

const SubHome = () => {
    const [features,setFeatures]=useState([]);
    useEffect(()=>{
        fetch('./home.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    },[])
    return (
        <Container>
             <h1 className="text-center mt-5 text-danger">Services We’re Offering
            To Our Clients</h1>
             <Row xs={1} md={3} className="g-4 mt-3 pb-5">
                {
                    features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
                }
            </Row>
        </Container>
    );
};

export default SubHome;