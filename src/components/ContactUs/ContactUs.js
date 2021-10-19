import React from 'react';
import { Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className="bg-secondary text-white">
            <h2>Please Contact us to know more deatils our services</h2>
            <h3>
                Contact Info
            </h3>
            <h5>Eye Care Center</h5>
            <p>Address:1 Dimashk St.
         Maadi
        Dhaka
        Egypt
        Saturday to Thursday 9:00am - 10:00pm</p>
        <p>Website:http://www.eyecare-center.com</p>
        <p>Telephone: 2010-0001-5004</p>
        <form>
            <input className="mb-2" type="text" placeholder="your name"/>
            <br />
            <input className="mb-2"  type="text" placeholder="your name"/>
            <br />
            <input className="mb-2"  type="text" placeholder="your name"/>
            <br />
            <textarea name="" id="" cols="20" rows="5"></textarea>
            <br />
            <Button variant="primary"> Send</Button>
        </form>


            
        </div>
    );
};

export default ContactUs;