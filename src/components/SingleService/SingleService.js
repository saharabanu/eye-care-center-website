import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleService = () => {
    const {serviceId} = useParams();
    const [serviceDetails,setServiceDetils]= useState([]);
    const [singleService,setSingleService] = useState({})
    useEffect(()=>{
        fetch('/eyeCareServices.json')
        .then(res=>res.json())
        .then(data=>setServiceDetils(data))
    },[])
    useEffect(()=>{
        const foundSingleService= serviceDetails.find(service=>service.id == serviceId)
        setSingleService(foundSingleService)
    },[serviceDetails])
    

    return (
        <div>
            <Container>
            <Row>
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src={singleService?.img} />
                    </Card>
                </Col>
                <Col md={5}>
                <Card style={{ width: '18rem'}}>
        
            <Card.Body>
            <Card.Title>{singleService?.title}</Card.Title>
            <Card.Text>
         {singleService?.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
                </Col>
            </Row>
            </Container>
        </div>
       
    );
};

export default SingleService;