import React from 'react';
import './Footer.css';

const Footer = () => {
   
    return (
        <div className="bg-dark ">
            
            <div className="d-flex justify-content-around footer text-white p-2 footer container">
            <div>
            <h2>Our address:Eye Care  Center</h2>
            <p>24/7,RayerBazar,Dhaka,Rubel Cortez,2nd Floor</p>
            <p>Email:llc@gmail.com</p>
        </div>
        <div>
        <h2>Services</h2>
        <ul>
                <li className="item">Eye Care</li>
                <li  className="item">Eye Scan</li>
                <li  className="item">Eye Care Optics</li>
            </ul> 
          
    </div>
       </div>
            <span className="text-white">Eye Care Center © 2021 | All Rights Reserved</span>
        </div>
    );
};

export default Footer;