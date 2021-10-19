import React from 'react';

const Footer = () => {
    const handleEmail=()=>{

    }
    return (
        <div className="text-center bg-dark text-white">
            <div className="d-flex justify-content-center align-items-center bg-primary text-white mt-5">
            <div>
                <h2>Subscribe To NewsLetter</h2>
                <p>Get healthy news and solutions to your problems from our experts!</p>
            </div>
            <div>
                <input onChange={handleEmail}type="email" placeholder="Your Email"/>
                <input type="submit" value="Subscribe"/>
            </div>
            <div>
            <h3>Services</h3>
            <ul>
                <li>Eye Care</li>
                <li>Eye Scan</li>
                <li>Eye Care Optics</li>
            </ul>
            </div>
            </div>
            <div>
                <h3>Contact Information</h3>
                <p>
                1 Dimashk St., Maadi - Dhaka
                Sat.-Thu. 9:00am - 10:00pm
                </p>
                <br />
                <p>Mobile: 01000015004 - 01000020211</p>
            </div>
            <span>Eye Care Center © 2021 | All Rights Reserved</span>
        </div>
    );
};

export default Footer;