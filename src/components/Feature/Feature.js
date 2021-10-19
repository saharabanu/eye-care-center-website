import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Feature.css';

const Feature = ({feature}) => {
    const {img,title,description}=feature;
    return (
        <div className="feature">
            <Col >
        <Card className="feature-card">
        <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Title >{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Feature;