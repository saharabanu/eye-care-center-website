import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
    const [doctors,setDoctors]= useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <h2><span className="text-warning">Professionals</span>  Our Doctors</h2>
            <div>
            <Row xs={1} md={3} className="g-4">
                {
                    doctors.map(doctor=><Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>)
                }
                </Row>
            </div>
             
            
        </div>
    );
};

export default Doctors;