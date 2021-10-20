import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,title,img,description}=service;
    return (
        <Col>
        <Card className="pb-2 h-100 feature-card">
        <Card.Img className="service-images" variant="top" src={img}/>
          <Card.Body>
            <Card.Title >{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <Link to={`/service/${id}`}><button className="btn btn-warning px-5">Details</button></Link>
        </Card>
      </Col>
      
    );
};

export default Service;