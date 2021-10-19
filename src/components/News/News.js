import React from 'react';
import { Button } from 'react-bootstrap';
import Rewards from '../Rewards/Rewards';

const News = () => {
    return (
        <div>
            
            <Rewards></Rewards>
            <h3 className="text-primary">We offer you a reservation service through the application</h3>
            <div className="p-3">
                <div>
                    <h5 className="mb-3">To download the Eye Care mobile application.</h5>
                    <br />
                    <Button variant="warning">Download</Button>
                </div>
                <div className="m-2">
                    <h5>To make an appointment</h5>
                    <Button variant="dark ">Click Now</Button>
                </div>
            </div>
            
        </div>
    );
};

export default News;