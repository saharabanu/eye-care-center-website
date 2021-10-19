import React from 'react';
import { Link } from 'react-router-dom';
import CenterDetails from '../CenterDetails/CenterDetails';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="container">
            <div className="row justify-content-md-center ">
            <div className="col-md-4 col-12 info">
                <h3>About Eye Care</h3>
                <p>Eye Care Center is one of Cairo’s most advanced one- day full service facilities providing comprehensive diagnostic and surgical ophthalmology procedures.
            Whether performing complex surgical procedures or a routine eye exam,We are thoroughly committed to deliver the utmost eye care.</p>
            <Link to="/about"><button>Read More</button></Link>
            </div>
            <div className="col-md-4 col-12 info-2">
                <h3>Our Service</h3>
                <p>The Eye Care
        (Clinics, LASIK & Surgeries)
        <br />

        The Eye Scan
        ( Eye investigations )
    <br/>

    The Eye Care Optics
    (All types of contact lenses & glasses)</p>
            </div>

            <div className="col-md-4 col-12 info-3">
                <h3>Opening Hours</h3>
                <p>Eye Care 
                    <br />
                    From Sat Thu (9.00 - 22.00)
                    <br />
                    Eye Scan
                    <br />
                    From Sat Thu (9.00 - 21.00)
                    <br />
                    Mobile: +834555664
                    Mobile: +4567845556
                </p>

            </div>

            </div>
            </div>
            <Services></Services>
            <CenterDetails></CenterDetails>
            
            <Doctors></Doctors>
            
        </div>
    );
};

export default Home;