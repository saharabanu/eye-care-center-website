import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {name,img}=doctor;
    return (
        <div className="feature">
        <Col >
    <Card className="feature-card h-100">
    <Card.Img className="w-100" variant="top" src={img}/>
      <Card.Body>
        <Card.Title >{name}</Card.Title>
        
      </Card.Body>
    </Card>
  </Col>
            
        </div>
    );
};

export default Doctor;