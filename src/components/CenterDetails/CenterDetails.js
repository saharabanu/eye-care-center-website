import React from 'react';
import './CenterDetails.css';

const CenterDetails = () => {
    return (
        <div  style={{ backgroundColor: '#fefbd8',marginBottom:'100px'}}>
        <div className="container mt-5 ">
            <div className="row justify-content-center ">
                <div className="col-12 col-md-3  mt-5">
                   
                <h3>Scan Services</h3>
                <p>
                Latest technologies and innovations in eye investigations are integrated in this unit, The investigation procedures at Eye Scan take a deeper look into every part of the eye
                </p>
                </div>
                <div className="col-12 col-md-3  mt-5 ">
                    <h3>
                    Medical
                    <br /> professionals
                    </h3>
                    <p>We bring together the highest levels of integrity and professionalism with state-of-the-art eye surgery techniques and top-notch sanitary measures to guarantee your wellbeing.</p>
                </div>
                <div className="col-12 col-md-3 mt-5 ">
                <h3>Emergency Help</h3>
                <p>
                The Eye Care Center is well prepared and equipped to deal very well with emergency eye situations as the Eye Care team is well trained and the facility is well equipped and prepared to deal with eye emergencies, with consultants in all ophthalmic fields and anesthesia consultants to deal with any an injury.
                </p>
                </div>
                <div className="col-12 col-md-3 mt-5 ">
                <h3>
                Qualified Doctors
                </h3>
                <p>We strive to consistently meet and exceed the service and patient-care expectations of our clients. We do so by working with the finest calibers of doctors who are part of our team.</p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default CenterDetails;